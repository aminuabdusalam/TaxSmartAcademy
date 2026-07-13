# TaxSmart Academy

A gamified, offline-capable Progressive Web App that teaches the US tax-advantaged account landscape (401(k), Roth, HSA, FSA, IRA, ESPP) and helps you optimize your paycheck. Built as a zero-dependency, single-page PWA.

**Live site:** https://aminuabdusalam.github.io/TaxSmartAcademy/

## Why

Every year, employees leave real money on the table because open-enrollment guides are dense, tax terminology is intimidating, and the tradeoffs between accounts are non-obvious. TaxSmart Academy compresses that into eight short, interactive chapters with quizzes, an XP progression, and a live paycheck calculator so people can see exactly how contributions affect take-home pay.

## Chapters

1. Tax-Advantaged Accounts 101
2. 401(k) & Roth 401(k)
3. Mega Backdoor Roth
4. HSA - Triple Tax Advantage
5. FSA - Flexible Spending
6. IRA & Roth IRA
7. Microsoft ESPP
8. The Paycheck Calculator

Each chapter has structured content, key-term callouts, and a quiz. Chapter 8 is an interactive paycheck simulator that shows the impact of pre-tax vs Roth contributions on your take-home pay.

## Tech

| Piece | What it does |
| --- | --- |
| Vanilla HTML/CSS/JS | Entire UI. No framework, no build step, no npm. |
| `data.js` | Static array of chapters + quiz questions + paycheck-calc logic. Swap-in-place content. |
| `manifest.json` | PWA manifest. Installable, standalone display, inline SVG icon. |
| `sw.js` | Service worker. Cache-first with `index.html` offline fallback. |
| `localStorage` | Persists XP, level, and chapter progress per browser. |

No backend, no accounts, no analytics. Progress lives in the user's browser via `localStorage`, so it survives refreshes but is per-device.

## Disclaimer

Educational content only, not tax or investment advice. Numbers reflect US federal tax rules as of the last content update; state-level treatment and IRS limits change yearly. Consult a CPA or CFP for personalized guidance.

## Run locally

Anything that serves the folder over HTTP works. Two easy options:

```bash
# Python
python -m http.server 5173

# Node (npx)
npx serve .
```

Then open http://localhost:5173. Opening `index.html` directly via `file://` will not work because service workers require an HTTP origin.

## Deploy

The site is hosted on GitHub Pages from the `main` branch. Any push to `main` republishes. Because Pages serves the app under the `/TaxSmartAcademy/` sub-path, all asset paths in `sw.js` and `manifest.json` are relative (`./`), not absolute (`/`).

## License

MIT. See [LICENSE](LICENSE).
