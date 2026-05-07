# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static e-commerce showcase for **Pauli Encanto**, a Colombian macramé artisan business. No build tooling — pure HTML/CSS/JavaScript served as-is.

## Running Locally

```
python -m http.server 8000
```

Then open `http://localhost:8000`. No install, no build step.

## Architecture

Three files make up the entire site:

- **`index.html`** — Single-page layout in Spanish: fixed navbar → hero → "Nosotros" section → product catalog grid → footer. The catalog `<div id="catalogo">` is empty on load; JavaScript populates it.
- **`styles.css`** — All styles. Uses CSS custom properties for the earthy color palette (`#f5f0ea`, `#a67c52`, `#5c4a2a`). Responsive breakpoints at 768px and 480px. Three Google Fonts: Playfair Display (headings), Cormorant Garamond (editorial text), Lato (body).
- **`script.js`** — Product data array + rendering logic. Key functions:
  - `crearTarjetaProducto(producto)` — builds a product card DOM element
  - `renderizarCatalogo()` — iterates the data array and injects cards into `#catalogo`
  - `configurarLightbox()` — image zoom overlay with Escape key support
  - Navbar gets a CSS shadow class after 50px scroll

## Product Data

All product catalog data lives in the `productos` array at the top of `script.js`. Each product object has: `nombre`, `imagen` (filename in `images/`), `material`, `medidas`, `precio` (COP integer), and optional `nota`.

## External Dependencies (CDN only)

- Lucide Icons — `https://unpkg.com/lucide@latest`
- Google Fonts — Playfair Display, Cormorant Garamond, Lato

## WhatsApp Integration

The "Comprar" button on each product card and the navbar CTA open WhatsApp at `+573126068990` with a pre-filled message encoding the product name. The URL is built in `crearTarjetaProducto()` using `encodeURIComponent`.
