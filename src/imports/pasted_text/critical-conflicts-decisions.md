CRITICAL CONFLICTS REQUIRING DECISIONS

# 1. BRAND NAME (HIGHEST PRIORITY)

Conflict:

wine-brand-brief-1.md: Brand is "The Wire Brand", descriptor is "Handcrafted Wines"
- No, "The Wire Brand" is the incorrect name and the correct brand name is "Handcrafted Wines". 


redesign-brief-1.md: Brand is "The Wire Brand Handcrafted Wines"
- The correct brand name is "Handcrafted Wines", any references to KWV should be removed

redesign-audit-report.md: Brand is "Handcrafted Wines", twb-* is just a token prefix
- The correct brand name is "Handcrafted Wines", I don't know what prefix to use, now that the prefix has been implemented we don't necessarily have the time to change it, unless you have a plan to add the styles and alias the "twb-*" related classes to the new classes.

Current repo/Guidelines.md: Uses "Handcrafted Wines" throughout
- This is correct.


## QUESTION 1: What is the ACTUAL brand name?

Option B: "Handcrafted Wines" (keep current implementation)

Impact: This affects:

All content/copy across the site
Logo component
SEO titles/meta
Wine Club naming ("The Wire Box" only makes sense if brand is "The Wire Brand")

- Call it "The Wine Box", which is simple and straight forward.

# 2. DEMO VS. REAL CONTENT
Conflict:

wine-brand-brief-1.md: "This is a DEMO, treat history/awards as INVENTED content"
- this is correct, any references to KWV should be removed

Current Guidelines.md: "Historic family farm established 1918" (treated as real)
- This is for demo purposes. 

farmStory.ts: Uses detailed history (1918 founding, specific people/events)
- Correct, but this is still demo content we created to help give the demo a personality.

## QUESTION 2: Is this a demo/prototype or a real brand?

Option A: DEMO - all history/awards are placeholder (update guidelines to clarify)
Option B: REAL - family farm with actual 1918 history (update briefs to remove "demo" framing)

Impact: Affects tone of all documentation and whether we use "placeholder" language

# 3. PRODUCT CATEGORIES
Conflict:

wine-brand-brief-1.md recommends: Wines, Wine Boxes, Experiences, Events, Gifts, Wine Club
- Correct

Current implementation has: Wines, Spirits, Cheese, Gifts, Wine Club
- needs to be expanded

Guidelines.md says: "What We Make: Boutique Wines, Craft Spirits, Artisan Cheese"
- Correct

## QUESTION 3: What products does the farm actually make/sell?

Option B: Wine + Spirits + Cheese (keep current "What We Make" positioning)

Impact: Affects:

Shop structure/navigation
Product categories
Content strategy
Brand positioning (boutique winery vs. farm estate)

# 4. EXPERIENCES VS. EVENTS
Conflict:

wine-brand-brief-1.md: Experiences AND Events as SEPARATE top-level categories
- Events are different to experiences, experiences are almost always available for booking, whereas events will be specific upcoming events like markets or concerts.

Current implementation: Combined under "Visit" section
- Events should be separate with a calendar
- Experiences require a ticket which can be purchased at the farm or online beforehand

## QUESTION 4: Should Experiences and Events be:

Option C: Experiences = bookable products, Events = calendar section

# 5. CSS/DARK MODE STRATEGY
Conflict:

redesign-audit-report.md: Use CSS variables ONLY, eliminate all dark: Tailwind utilities
- Yes

Current implementation: Mix of CSS variables + dark: utilities + .dark class
- Correct

Guidelines: Dark mode is mandatory
- Correct

## QUESTION 5: What is the FINAL dark mode strategy?

Option A: CSS variables ONLY (remove all dark: utilities)

Impact: Affects all component styling and theme switching reliability

# 6. DEMO PAGES PURPOSE
Conflict:

redesign-audit-report.md: Demo pages should be marketing showcases
- Yes, to show what is possile

Current docs: "Component Library" (developer-focused) + "Landing Page Demo"
- these are both dev-tools pages

## QUESTION 6: What is the purpose of /handdrawn-demo pages?

Option B: Developer library (component reference for implementation)
Option C: Split: /handdrawn-demo = marketing, /handdrawn-demo/library = dev reference

# 7. 3D SUBSCRIPTION BOX PRIORITY
Conflict:

wine-brand-brief-1.md: "Perfect signature visual moment" - HERO feature
- yes 

Report 07: HIGH priority (24 hours)
- yes

Current implementation: NOT implemented
- correct

Report 10 (implementation plan): Phase 3 (weeks 17-19)
- this is a priority, we need this implemented

## QUESTION 7: When should 3D subscription box be implemented?

Option A: HIGH priority (next 2-4 weeks) - matches brief intent

# 8. DATA-DRIVEN CONTENT STRICTNESS
Conflict:

redesign-audit-report.md: ALL content must be in src/data/* (strict enforcement)
- yes

Current implementation: Mix of data files + inline content in components
- yes, but we need to make it a priority to move entirely to data files. 

wine-brand-brief-1.md: Rich storytelling and content-led design
- yes

## QUESTION 8: How strict should data-driven content be?

Option A: STRICT - all copy in src/data/*, components are pure templates

Option C: PHASED - migrate critical pages first, then incrementally migrate all pages

# 9. WORDPRESS ALIGNMENT
Conflict:

redesign-brief-1.md: WordPress-aligned CSS architecture (BEM + wp-block-* classes)
- yes

Current implementation: React SPA with no WordPress integration
- correct

Guidelines: References WordPress blocks, templates, theme.json
- This is because we will convert this to wordpress at a later stage, but this is not a concern currently. 

## QUESTION 9: Is WordPress integration planned?

Option A: YES - this will become a WordPress theme (keep WP alignment)
Option B: NO - pure React SPA (remove WP references from briefs)
Option C: MAYBE - design system should be portable to WP later

# 10. CONTENT VOICE: CASUAL VS. PREMIUM
Conflict:

wine-brand-brief-1.md: "approachable and passionate, not formal"
- yes

redesign-brief-1.md: "premium but approachable"
- yes

farmStory.ts: Uses very formal heritage language ("meticulously tended", "time-honored")
- find a middle ground between to formal and casual.

## QUESTION 10: What is the ACTUAL voice/tone?

Option C: BALANCED - Premium but with warmth (middle ground)
