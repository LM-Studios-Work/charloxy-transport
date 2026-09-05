// Source: Google Maps Platform Code Assist
'use client';

import { useState, useEffect, useRef } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import { MapPin, Loader2 } from 'lucide-react';

interface GoogleAddressInputProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
}

interface PlaceSuggestion {
  id: string;
  title: string;
  subtitle: string;
  place: any;
}

export default function GoogleAddressInput({
  id,
  name,
  placeholder,
  required = false,
  className = 'estimate-input',
  defaultValue = '',
}: GoogleAddressInputProps) {
  const [value, setValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const placesLibRef = useRef<any>(null);
  const sessionTokenRef = useRef<any>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || '';

  // Initialize Google Maps Places API (New) Library
  useEffect(() => {
    if (!apiKey) return;

    try {
      setOptions({
        key: apiKey,
        v: 'weekly',
        region: 'ZA',
        language: 'en',
      });

      importLibrary('places')
        .then((placesLib) => {
          placesLibRef.current = placesLib;
          if (placesLib && placesLib.AutocompleteSessionToken) {
            sessionTokenRef.current = new placesLib.AutocompleteSessionToken();
          }
        })
        .catch((err: unknown) => {
          console.error('Failed to load Google Maps Places Library:', err);
        });
    } catch (err) {
      console.error('Error configuring Google Maps API loader options:', err);
    }
  }, [apiKey]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);

    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

    if (!placesLibRef.current || text.trim().length < 3) {
      setSuggestions([]);
      setIsOpen(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    debounceTimerRef.current = setTimeout(async () => {
      try {
        const { AutocompleteSuggestion, AutocompleteSessionToken } = placesLibRef.current;

        if (!sessionTokenRef.current) {
          sessionTokenRef.current = new AutocompleteSessionToken();
        }

        const request = {
          input: text,
          sessionToken: sessionTokenRef.current,
          includedRegionCodes: ['za'],
        };

        const response = await AutocompleteSuggestion.fetchAutocompleteSuggestions(request);
        const fetchedSuggestions = response.suggestions || [];

        const items: PlaceSuggestion[] = fetchedSuggestions.map((item: any, idx: number) => {
          const pred = item.placePrediction;
          return {
            id: pred?.placeId || `${idx}`,
            title: pred?.mainText?.toString() || text,
            subtitle: pred?.secondaryText?.toString() || '',
            place: pred?.toPlace(),
          };
        });

        setSuggestions(items);
        setIsOpen(items.length > 0);
      } catch (err) {
        console.error('Error fetching Google Places suggestions:', err);
        setSuggestions([]);
        setIsOpen(false);
      } finally {
        setIsLoading(false);
      }
    }, 300);
  };

  const handleSelect = async (item: PlaceSuggestion) => {
    if (!item.place) {
      setValue(item.title);
      setIsOpen(false);
      return;
    }

    try {
      setIsLoading(true);
      await item.place.fetchFields({
        fields: ['formattedAddress', 'displayName'],
      });

      const fullAddress = item.place.formattedAddress || item.place.displayName || item.title;
      setValue(fullAddress);

      // Reset session token for the next query
      if (placesLibRef.current?.AutocompleteSessionToken) {
        sessionTokenRef.current = new placesLibRef.current.AutocompleteSessionToken();
      }
    } catch (err) {
      console.error('Error fetching place details:', err);
      setValue(item.subtitle ? `${item.title}, ${item.subtitle}` : item.title);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative flex items-center">
        <input
          required={required}
          id={id}
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          placeholder={placeholder}
          className={`${className} pr-9`}
          autoComplete="off"
        />
        {isLoading && (
          <div className="absolute right-3 pointer-events-none text-gold">
            <Loader2 className="size-4 animate-spin" />
          </div>
        )}
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-xl border border-[color-mix(in_srgb,var(--navy)_15%,transparent)] bg-white p-1.5 shadow-2xl">
          {suggestions.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className="flex w-full items-start gap-2.5 rounded-lg px-3 py-2 text-left transition-colors hover:bg-paper"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold leading-snug text-navy">{item.title}</p>
                  {item.subtitle && (
                    <p className="text-xs leading-normal text-ink-muted">{item.subtitle}</p>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
