 CRITICAL CONFLICTS REQUIRING DECISIONS
1. BRAND NAME (HIGHEST PRIORITY)
Conflict:

wine-brand-brief-1.md: Brand is "The Wire Brand", descriptor is "Handcrafted Wines"
redesign-brief-1.md: Brand is "The Wire Brand Handcrafted Wines"
redesign-audit-report.md: Brand is "Handcrafted Wines", twb-* is just a token prefix
Current repo/Guidelines.md: Uses "Handcrafted Wines" throughout
❓ QUESTION 1: What is the ACTUAL brand name?

Option A: "The Wire Brand" (with "Handcrafted Wines" as tagline)
Option B: "Handcrafted Wines" (keep current implementation)
Option C: "The Wire Brand Handcrafted Wines" (long form)
Impact: This affects:

All content/copy across the site
Logo component
SEO titles/meta
Wine Club naming ("The Wire Box" only makes sense if brand is "The Wire Brand")
2. DEMO VS. REAL CONTENT
Conflict:

wine-brand-brief-1.md: "This is a DEMO, treat history/awards as INVENTED content"
Current Guidelines.md: "Historic family farm established 1918" (treated as real)
farmStory.ts: Uses detailed history (1918 founding, specific people/events)
❓ QUESTION 2: Is this a demo/prototype or a real brand?

Option A: DEMO - all history/awards are placeholder (update guidelines to clarify)
Option B: REAL - family farm with actual 1918 history (update briefs to remove "demo" framing)
Impact: Affects tone of all documentation and whether we use "placeholder" language

3. PRODUCT CATEGORIES
Conflict:

wine-brand-brief-1.md recommends: Wines, Wine Boxes, Experiences, Events, Gifts, Wine Club
Current implementation has: Wines, Spirits, Cheese, Gifts, Wine Club
Guidelines.md says: "What We Make: Boutique Wines, Craft Spirits, Artisan Cheese"
❓ QUESTION 3: What products does the farm actually make/sell?

Option A: Wine-ONLY focus (remove Spirits + Cheese)
Option B: Wine + Spirits + Cheese (keep current "What We Make" positioning)
Impact: Affects:

Shop structure/navigation
Product categories
Content strategy
Brand positioning (boutique winery vs. farm estate)
4. EXPERIENCES VS. EVENTS
Conflict:

wine-brand-brief-1.md: Experiences AND Events as SEPARATE top-level categories
Current implementation: Combined under "Visit" section
❓ QUESTION 4: Should Experiences and Events be:

Option A: Separate top-level navigation items (Shop | Experiences | Events | Visit)
Option B: Combined under "Visit" (current implementation)
Option C: Experiences = bookable products, Events = calendar section
5. CSS/DARK MODE STRATEGY
Conflict:

redesign-audit-report.md: Use CSS variables ONLY, eliminate all dark: Tailwind utilities
Current implementation: Mix of CSS variables + dark: utilities + .dark class
Guidelines: Dark mode is mandatory
❓ QUESTION 5: What is the FINAL dark mode strategy?

Option A: CSS variables ONLY (remove all dark: utilities) - audit recommendation
Option B: Keep mix (CSS variables + dark: utilities where needed)
Impact: Affects all component styling and theme switching reliability

6. DEMO PAGES PURPOSE
Conflict:

redesign-audit-report.md: Demo pages should be marketing showcases
Current docs: "Component Library" (developer-focused) + "Landing Page Demo"
❓ QUESTION 6: What is the purpose of /handdrawn-demo pages?

Option A: Marketing showcase (show hand-drawn aesthetic to clients/stakeholders)
Option B: Developer library (component reference for implementation)
Option C: Split: /handdrawn-demo = marketing, /handdrawn-demo/library = dev reference
7. 3D SUBSCRIPTION BOX PRIORITY
Conflict:

wine-brand-brief-1.md: "Perfect signature visual moment" - HERO feature
Report 07: HIGH priority (24 hours)
Current implementation: NOT implemented
Report 10 (implementation plan): Phase 3 (weeks 17-19)
❓ QUESTION 7: When should 3D subscription box be implemented?

Option A: HIGH priority (next 2-4 weeks) - matches brief intent
Option B: Phase 3 (weeks 17-19) - matches implementation plan
Option C: Optional/deferred (not critical for MVP)
8. DATA-DRIVEN CONTENT STRICTNESS
Conflict:

redesign-audit-report.md: ALL content must be in src/data/* (strict enforcement)
Current implementation: Mix of data files + inline content in components
wine-brand-brief-1.md: Rich storytelling and content-led design
❓ QUESTION 8: How strict should data-driven content be?

Option A: STRICT - all copy in src/data/*, components are pure templates
Option B: FLEXIBLE - allow inline content for small/static sections
Option C: PHASED - migrate critical pages first, then incremental
9. WORDPRESS ALIGNMENT
Conflict:

redesign-brief-1.md: WordPress-aligned CSS architecture (BEM + wp-block-* classes)
Current implementation: React SPA with no WordPress integration
Guidelines: References WordPress blocks, templates, theme.json
❓ QUESTION 9: Is WordPress integration planned?

Option A: YES - this will become a WordPress theme (keep WP alignment)
Option B: NO - pure React SPA (remove WP references from briefs)
Option C: MAYBE - design system should be portable to WP later
10. CONTENT VOICE: CASUAL VS. PREMIUM
Conflict:

wine-brand-brief-1.md: "approachable and passionate, not formal"
redesign-brief-1.md: "premium but approachable"
farmStory.ts: Uses very formal heritage language ("meticulously tended", "time-honored")
❓ QUESTION 10: What is the ACTUAL voice/tone?

Option A: CASUAL - "We're obsessed with getting every detail just right" (brief suggests)
Option B: PREMIUM - Current farmStory.ts style (formal heritage)
Option C: BALANCED - Premium but with warmth (middle ground)
⚡ IMMEDIATE BLOCKER
I cannot proceed with updating the orchestrator/prompts until Question #1 (Brand Name) is resolved, because it affects:

All file naming conventions
Token prefix (twb- = The Wire Brand?)
Wine Club name ("The Wire Box")
Every piece of copy across the site
Please provide decisions for these 10 questions, and I'll update all prompts, guidelines, and orchestrator to align perfectly with your final direction.