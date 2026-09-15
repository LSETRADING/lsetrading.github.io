# LSESU Trading Society — website

The society's website. Plain HTML, CSS and JavaScript: no build step, no
dependencies, no framework. Open `index.html` in a browser and it runs.

This is deliberate. The committee turns over every year, and the next Head of
Digital Strategy should be able to edit this with nothing but a text editor.

## Layout

```
index.html      The site itself. One file, hash-routed, 11 pages.
committee.js    Everyone on the committee: names, roles, courses, bios.
photos/         Committee headshots, one per person, named <slug>.jpg
logos/          Firm logos for the placements columns, named <slug>.<ext>
banners/        Speaker event banners (empty for now)
```

## Editing the committee

Everything about a person lives in `committee.js`. Nothing is written into the
markup, so you never touch HTML to change the committee.

To add someone, append an object to `COMMITTEE` and drop their photo in
`photos/` named after their `slug`:

```js
{
  slug: 'jane-doe',                       // must match the photo filename
  name: 'Jane Doe',
  roles: ['Head of Equities'],            // an array: people can hold two posts
  group: 'divisions',                     // exec | divisions | ops
  divisions: ['equities'],                // which division pages list them
  course: 'BSc Economics',
  year: '29',
  photo: 'photos/jane-doe.jpg',
  focus: 40,                              // see "Photos" below
  bio: 'Jane reads Economics. Her focus is ...',
}
```

Anyone left in `VACANT` renders as a "To be announced" card, so the grid stays
even while seats are unfilled.

## Photos

Square is ideal, at least 600px. Anything rectangular is cropped to a square,
and `focus` controls which part survives:

- `focus: 50` centres the crop. Right for square sources.
- **Lower** numbers keep more of the **top**. Use for tall portraits where the
  face sits high.
- **Higher** numbers keep more of the **bottom**.

Two optional fields for awkward photos:

- `tune: 'brightness(1.16)'` lifts an underexposed shot.
- `crop: 'translate(33%, 2%) scale(1.9)'` zooms and pans, for a photo where the
  person is small or off to one side.

## House style for bios

Every bio follows the same four beats so the cards read as one voice and stay
the same length:

1. **Course** — "Jane reads Economics"
2. **Focus** — what they actually work on, translated just enough to be readable
3. **Best one or two placements** — never the full list; five reads like a CV
4. **Fun fact, as the closer** — always last, always dry

Roughly 55 to 70 words. Short is fine: if someone gives you three lines, write
two sentences and stop. Never pad and never invent.

Two hard rules:

- **No em dashes or en dashes anywhere.** Commas, colons and full stops only.
- Write "her focus is", never "works on". A spring week is "a spring internship
  at X", never "joins X in the spring".

## Firm logos

`logos/<slug>.<ext>`, matching the slugs in the placements arrays in
`index.html`. Most are dark marks on a transparent or white ground, so the CSS
renders them as a single cream silhouette. That is what lets logos of wildly
different colours and weights sit together without looking like a ransom note.

Three cases, handled by class:

| the source logo | treatment |
| --- | --- |
| dark mark, transparent ground | `brightness(0) invert(1)` |
| dark mark, white ground baked in | `invert(1)` plus `mix-blend-mode: screen` |
| light mark, dark ground baked in | `mix-blend-mode: screen` alone |

## Colours

| token | value | use |
| --- | --- | --- |
| `--bg` | `#0F1E15` | page ground |
| `--ink` | `#EADFC7` | body text, 13.1:1 |
| `--ink-2` | `#B8AC91` | secondary text, 7.7:1 |
| `--gold` | `#C9A75A` | accent, 7.5:1 |
| `--muted` | `#8A8268` | labels and metadata |

`--muted` was originally `#6E6851`, which failed WCAG AA at 3.09:1. Do not put
it back. Anything below 4.5:1 is unreadable for a chunk of your members.

## Typography

Newsreader for display, Inter for body, JetBrains Mono for data and labels.
All three from Google Fonts. Newsreader is a variable font: drive
`font-variation-settings: 'opsz' N` from the type size, larger for headlines.

## Division gutter engines

Every division page runs one or two live canvases in the gutters beside its
paragraph, never behind it. They are declared in the `artFor` map with the
`live(engine, side, css, w, h)` helper, which emits
`<canvas class="art-live" data-engine="...">`. The engine factories live in
`ENGINES`: each is called once per canvas and returns `draw(ctx, W, H, dt)`,
so state is per canvas.

| engine | page | what it is |
| --- | --- | --- |
| `candles` | Equities, Commodities, ATP Equities | OHLC bars, last one still forming |
| `curve` | Macro | a Nelson Siegel curve against yesterday's |
| `complex` | ATP FICC | SOFR, SONIA and ESTR overlaid |
| `smile` | Derivatives | implied vol by strike, six weeks and one year |
| `fxtape` / `cmdtape` | Macro, Commodities | prints running up the screen |
| `emblotter` | EM | resting quotes, flashing the line that moved |
| `ladder` | Credit | spreads by rating, wide names moving most |
| `book` | ATP Equities | resting depth either side of a one cent spread |
| `term` | Events | the term calendar filling in |

`tape` and `blotter` are factories of factories: call them with an instrument
list to get an engine. One `requestAnimationFrame` drives the whole set. A page
that is not routed to is `display: none`, so its canvases report zero width and
are skipped, and the whole layer is off below 1080px. Under
`prefers-reduced-motion` the models are settled into a still and then left.

To add one: write `ENGINES.name`, then reference it from `artFor`. Keep peak
alpha around 0.9, since `.art-live` is composited at 0.46.
