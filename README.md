# Canvasa — Coming Soon

A modern, responsive, production-ready static landing page for **Canvasa**, designed as a temporary brand launch site while the full website is under active development.

---

## 1. Project Overview

Canvasa Coming Soon is a temporary brand-launch landing page. It establishes the official digital presence and visual identity for Canvasa, communicating that the brand's next digital experience is currently taking shape.

---

## 2. Features

* **Brand Identity & Exact Color Palette:** Built directly from the authentic Canvasa logo, utilizing CSS custom properties for deep black (`#000000`), cyan blue (`#0797CF`), magenta pink (`#E80E4C`), golden yellow (`#FFC629`), white (`#FFFFFF`), and light neutral background (`#FAFAFA`).
* **Prominent Brand Mark:** High-resolution Canvasa logo lockup displayed prominently in the header and visual showcase with crisp anti-aliasing.
* **Safe Top Navigation:** Header logo anchors safely to `#top` with smooth scroll behavior, preventing accidental directory listing navigation or asset exposure.
* **Coming Soon Messaging:** Clear visual hierarchy featuring eyebrow text, bold headline (*"Something New Is Taking Shape."*), supporting narrative, prominent coming-soon badge with live pulse indicator, and development notice.
* **Architectural Geometric Composition:** Custom hero drafting canvas inspired by the logo's corner framing brackets (cyan, magenta, yellow, and black).
* **Mobile-First Responsive Design:** Fluid layout engineered and tested across 320px, 375px, 430px, 768px, 1024px, and 1440px+ viewports with zero horizontal overflow.
* **Lightweight & Fast:** Pure static implementation with zero build steps, zero external frameworks, and no external CDN dependencies.
* **Accessibility:** Respects `prefers-reduced-motion` settings, maintains high contrast ratios, and provides keyboard focus states.
* **GitHub Pages Ready:** Pure relative asset paths compatible with GitHub Pages project subpaths.

---

## 3. Technology Stack

* **HTML5:** Semantic document structure, Open Graph social metadata, responsive viewport configuration.
* **CSS3:** Modern CSS custom properties (variables), Flexbox, CSS Grid, fluid `clamp()` typography, and media queries.
* **Vanilla JavaScript:** Zero-dependency script for dynamic copyright year calculation and optional fine-pointer desktop tilt micro-interaction.

---

## 4. Project Structure

```text
Canvasa/
├── assets/
│   ├── canvasa-logo.png      # High-resolution Canvasa brand mark (PNG)
│   └── canvasa-logo.jpeg     # Original Canvasa brand mark source (JPEG)
├── .gitignore                # Git ignore rules for OS and editor artifacts
├── apple-touch-icon.png      # 180x180 Apple touch icon
├── favicon.png               # 32x32 brand favicon
├── index.html                # Main website entry point
├── README.md                 # Project documentation and deployment guide
├── script.js                 # Vanilla JavaScript (year calculation & top scroll)
└── style.css                 # Main stylesheet with brand design system
```

---

## 5. Run Locally

This is a pure static website requiring no installation, dependencies, or build tools.

### Option A: Direct File Preview
Open `index.html` directly in any web browser.

### Option B: Local HTTP Server (Python)
From the project root directory, run:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000/`

---

## 6. Deployment on GitHub Pages

This project is a static site with `index.html` located in the repository root. It deploys directly from the `main` branch without requiring a build step or GitHub Actions workflow.

### Step-by-Step Deployment Procedure:

1. Open your repository on GitHub: [https://github.com/arjun-sjadhav/Canvasa](https://github.com/arjun-sjadhav/Canvasa)
2. Click on **Settings** in the top navigation bar.
3. In the left-hand sidebar, under **Code and automation**, select **Pages**.
4. Under **Build and deployment**:
   * Set **Source** to `Deploy from a branch`.
   * Set **Branch** to `main` and select `/ (root)` as the folder.
5. Click **Save**.
6. GitHub Pages will build and deploy the site in approximately 1 to 2 minutes.
7. Once deployed, the published URL will appear at the top of the Pages settings page:
   ```text
   https://arjun-sjadhav.github.io/Canvasa/
   ```

---

## 7. Custom Domain Configuration (Optional)

A custom domain can be connected at any time:

1. In the GitHub repository, navigate to **Settings** &rarr; **Pages**.
2. Under **Custom domain**, enter your domain name and click **Save**.
3. At your DNS registrar, create the appropriate DNS records pointing to GitHub Pages:
   * **Apex domain** (e.g., `example.com`): Configure `A` records pointing to GitHub's official IP addresses.
   * **Subdomain** (e.g., `www.example.com`): Configure a `CNAME` record pointing to `arjun-sjadhav.github.io`.
4. Once DNS records propagate, return to **Settings** &rarr; **Pages** and check **Enforce HTTPS**.

---

## 8. Maintenance

To update the website in the future:

1. Make edits to the relevant files (`index.html`, `style.css`, etc.).
2. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Update site content"
   ```
3. Push the updates to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Pages will automatically rebuild and deploy the latest commit.

---

## License

&copy; 2026 Canvasa. All rights reserved.
