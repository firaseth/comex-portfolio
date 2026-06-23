<img width="300" height="150" alt="content_748d6f4a-bb4e-4803-a3fa-e5b29380b1ed-6" src="https://github.com/user-attachments/assets/7c21d169-2911-4251-9caf-ec1ed996f77e" />


Live SiteLicense: MITNo DependenciesZero Build Steps
A premium creative development studio portfolio — single-file, zero build steps, maximum impact.


Live Demo  ·  Report Bug  ·  Request Feature


Preview
Hero section with character animation and particle background

What Makes It Different
Most portfolio templates are cookie-cutter. This one is built to match the visual standard of Awwwards-level sites — with zero frameworks and a single HTML file.

Feature	Detail
Particle Mesh	Canvas-based system with 75 particles, mouse-repel physics, and proximity connection lines
3D Hero Card	Real-time perspective + rotateX/Y tilt tracking cursor position, with 6 parallax floating elements
Character Animation	Per-letter staggered entrance with rotateX flip, synced after splash screen dismiss
Infinite Marquee	Horizontal auto-scrolling services band that pauses on hover
Mouse-Following Glow	700px radial gradient that tracks cursor across the hero section
Custom Cursor	Dual-layer (outer ring + inner dot) with lerp smoothing and hover expansion
Magnetic Buttons	Every interactive element subtly shifts toward cursor position
Dark / Light Theme	Full theme system via CSS variables + data-theme attribute, persisted in localStorage
Scroll Progress	Glowing 2px accent bar at viewport top with box-shadow
Scroll Reveals	IntersectionObserver-driven staggered fade-up animations with cubic-bezier easing
Skill Rings	SVG stroke-dashoffset animation with synchronized percentage counter
Stats Counter	Eased count-up (cubic out) triggered on scroll into view
Project Filters	Category-based show/hide with scale pop-in transition
Testimonials Carousel	Auto-play (5s interval), dot navigation, arrow controls
Form Validation	Real-time inline errors + slide-in toast notification system
Noise Overlay	Inline SVG feTurbulence filter for analog texture depth
Giant X Watermark	Stroked decorative letter behind hero for visual identity
Pulsing Badge	"Available for projects" status with CSS keyframe pulse ring
Architecture
comex-portfolio/
├── .github/
│ ├── FUNDING.yml ← Sponsor button
│ └── workflows/
│ └── deploy.yml ← Auto-deploy to GitHub Pages
├── .gitignore ← OS & editor junk filter
├── LICENSE ← MIT
├── README.md ← This file
├── assets/
│ ├── banner.svg ← Repo social preview image
│ └── screenshot-hero.png ← Hero section screenshot
├── favicon.svg ← Browser tab icon (green dot on c)
├── humans.txt ← Team & tech credits
├── index.html ← The entire application (single file)
├── manifest.json ← PWA install support
└── package.json ← Project metadata & scripts
