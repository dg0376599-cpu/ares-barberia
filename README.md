# Ares Barbería

Landing page for a premium barbershop in Caracas, Venezuela.

> **Conceptual project.** Ares Barbería is a fictional brand created for this design
> exercise. No real business, client data or booking system is involved, and the phone
> number is deliberately non-existent.
>
> **The before/after photos are placeholders**, not work by this shop — it does not
> exist. They stand in for a real photo session and are not presented as, nor should
> they be taken for, this project's own work.

**Live demo:** https://ares-barberia.vercel.app

---

## The brief

A single-view landing page with a dark, restrained, distinctly masculine identity.
Black with an **aged gold** accent — closer to worked bronze than to bright gold.

The interesting part of the brief was the list of things to avoid:

- No scissor emojis used as icons
- No heavy gradients
- No exaggerated animation
- Nothing that reads as a generic template

That constraint drove every decision below.

---

## Design decisions

### One mode, not two

The page ships **dark only**, with no light/dark toggle.

Dark here is not a theme, it is the brand. Premium menswear brands — whisky,
watchmaking, tailoring — do not offer a theme switch; the sun/moon button reads as a
software product, not as a barbershop. Splitting the available design time across two
modes produces two mediocre results instead of one considered mode.

That choice has a cost, and the cost is paid explicitly:

- Contrast verified against WCAG AA (4.5:1 body, 3:1 large text)
- No thin grey text in long-form paragraphs
- Generous body sizes
- `prefers-reduced-motion` respected
- Tested on a real phone at low brightness, not only on a desktop display

### Aged gold, not bright gold

Bright saturated gold on black is what makes a page look cheap. The difference is
measurable, not a matter of taste:

|  | Reads cheap | Reads expensive |
|---|---|---|
| Hue | Saturated and luminous | Desaturated, toward bronze |
| Usage | Fills, backgrounds, large text | Hairlines, borders, small accents |
| Quantity | Everywhere | One element per viewport |

Two tones are used: a lighter one for text that has to clear contrast requirements,
and a deeper one for borders and detail work where legibility is not the job.

### Type-led hero

The hero carries the page on typography alone, since the brand has no photography yet.
It is built on a two-beat contrast: a small, muted line followed by a large one, with
the entrance animation landing in two steps rather than one.

The metal light-sweep effect is deliberately **not** used in the hero. It appears once,
further down the page, so the technique is not spent twice.

### Map without the tax

The location section renders a static map image and only loads the interactive embed
on click. Third-party scripts stay out of first paint, and no unnecessary cookies are
set before the visitor asks for them.

---

## Stack

| | |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion · GSAP ScrollTrigger · Lenis |
| Deploy | Vercel |

**Performance rules followed:** only `transform` and `opacity` are animated, 60fps is
the target, and heavy effects degrade on mobile. Most of the traffic for a business
like this is mobile, so mobile is the primary design — not a reduced version of the
desktop layout.

---

## Status

- [x] Brief and scope
- [x] Art direction — palette, typography, references
- [ ] Hero
- [ ] Services, barbers, gallery
- [ ] Booking, location, testimonials
- [ ] Technical SEO and structured data
- [ ] Accessibility and performance pass

---

## License

MIT
