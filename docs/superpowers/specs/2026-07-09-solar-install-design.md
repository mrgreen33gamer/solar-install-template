# Solar Install Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `solar-install-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | SunPeak Solar |
| **Tagline** | Residential & Commercial Solar Installation |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2016 |
| **Owner** | Avery Quinn |
| **License** | NABCEP-Aligned Installers · Bonded & Insured |
| **Guarantee** | 25-Year Panel Performance Support + 10-Year Workmanship |
| **Social proof** | 4.9★, 500+ reviews, 1,200+ systems installed |
| **Accent hex** | `#eab308` (sun yellow/gold) — `$orange` token |
| **Phone** | (254) 810-1010 / `tel:+12548101010` |
| **Email** | hello@sunpeaksolar.com |
| **Domain** | sunpeaksolar.com |
| **Address** | 4100 S New Rd, Waco, TX 76706 |

## Services (6)

| Old HVAC | Slug | Title |
|----------|------|--------|
| ac-repair | `residential-solar` | Residential Solar |
| heating | `commercial-solar` | Commercial Solar |
| installation | `battery-storage` | Battery Storage |
| duct-cleaning | `ev-charger-solar` | EV Charger + Solar |
| indoor-air-quality | `system-monitoring` | System Monitoring |
| maintenance | `solar-maintenance` | Solar Maintenance |

## Industries (3)

| Old HVAC | Slug | Title |
|----------|------|--------|
| automotive | `homebuilders` | Homebuilders |
| manufacturing | `agriculture` | Agriculture & Ranches |
| oil-gas | `commercial-facilities` | Commercial Facilities |

## Blogs (3)

1. `solar-payback-central-texas`
2. `battery-backup-worth-it-texas`
3. `how-to-choose-solar-installer`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #eab308`, `$lightorange: #facc15`, `$darkorange: #a16207`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#eab308`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: SunPeak Solar throughout
