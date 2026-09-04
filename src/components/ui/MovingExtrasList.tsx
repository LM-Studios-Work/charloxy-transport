import { movingExtras } from '@/data/movingExtras';

export default function MovingExtrasList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movingExtras.map((extra) => (
        <article key={extra.id} className="flex flex-col overflow-hidden rounded-[1.25rem] bg-background shadow-sm transition-transform hover:-translate-y-1">
          <div className="aspect-[4/3] w-full overflow-hidden bg-navy/5">
            <img 
              src={extra.image} 
              alt={extra.name} 
              className="size-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
          <div className="flex grow flex-col p-5 md:p-6">
            <h3 className="font-display text-lg uppercase text-navy">{extra.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{extra.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
