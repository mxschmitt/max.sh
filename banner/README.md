# LinkedIn Banner

A 1584×396 LinkedIn profile banner — "glass cards" glassmorphism style, matching the
max.sh palette (navy→black gradient, `#7aa2f7` accent).

- `banner.svg` — editable source
- `banner.png` — rendered export (1584×396)

## Render

Requires [`rsvg-convert`](https://gitlab.gnome.org/GNOME/librsvg) (`brew install librsvg`):

```sh
rsvg-convert -w 1584 -h 396 banner.svg -o banner.png
```

## Notes

- Fonts are system-only (`Helvetica Neue`, `SF Mono`) so it renders without webfonts.
- The bottom-left corner is kept clear for LinkedIn's circular profile photo overlay.
