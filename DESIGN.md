# Charloxy Transport Design Direction

## Positioning
A confident, image-led moving company identity for residential, commercial, and long-distance transport. The interface should feel dependable, practical, and energetic rather than luxurious or overly corporate.

## Color palette
- **Charloxy Navy** `#102B3A`: primary text, navigation, dark sections, overlays.
- **Move Gold** `#F7BD32`: buttons, highlights, active states, estimate CTAs.
- **Cloud Blue** `#EAF3F7`: review panels and soft section backgrounds.
- **Paper White** `#FFFFFF`: page background, forms, cards.
- **Slate** `#5D6C72`: supporting copy and metadata.

Use navy and paper white as the structural colors. Gold is the single high-energy accent and should remain reserved for actions and emphasized words. Cloud blue is used for customer proof, not as a general page background.

## Typography
- **Display:** Oswald, uppercase, condensed, heavy-weight. Use for hero headlines, section titles, labels, and buttons where appropriate.
- **Body:** Inter, regular/medium weights. Use for descriptions, form labels, navigation, and supporting information.
- Keep display headings tight with approximately `0.92` line-height and slight negative tracking. Body copy should remain relaxed at `1.5` line-height.

## Layout
- Use a wide content canvas: maximum width around `1400px`, with responsive side gutters.
- Desktop navigation and all page sections align to the same wide container.
- Hero uses a panoramic image with a dark readability overlay and a floating estimate panel on the right.
- Use rounded image frames, generally `20px–28px`, with clipped imagery and strong crops.
- Prefer flexbox for alignment and CSS grid for service/review card layouts.
- Mobile stacks the hero form below the image content; no content is hidden if it is part of the conversion flow.

## Components
- **Estimate form:** white rounded panel, navy outline on the active field, pale gray outlined inputs, utility icon at the trailing edge, gold full-width submit button.
- **Review panel:** cloud blue rounded section, platform tabs with a gold active underline, three white review cards, simple arrow controls.
- **Service cards:** large photos with navy gradient overlays, condensed white titles, concise descriptions.
- **FAQ:** clean rows with subtle navy dividers and circular gold plus controls.
- **CTA strip:** gold horizontal band with repeated estimate language and directional arrows.

## Interaction
Buttons should use clear hover contrast: gold buttons deepen slightly while navy text remains readable; navy buttons shift to gold. Image cards may scale imagery subtly on hover. Forms must retain visible focus states and accessible labels.

## Content rule
Preserve the existing Charloxy Transport copy, service names, contact details, and quote submission behavior. The visual system changes hierarchy, spacing, color, and composition—not the business offering.

## Responsive breakpoints
- Mobile-first base layout.
- `md`: two-column content and larger type.
- `lg`: floating hero estimate card, full desktop nav, three-column card grids.
- Wide desktop: content expands toward the 1400px max width without becoming edge-to-edge.

## Avoid
Do not introduce additional accent colors, generic purple gradients, ornamental blobs, or unrelated stock-stat sections. Every image, badge, and CTA should support trust, services, or quote conversion.
