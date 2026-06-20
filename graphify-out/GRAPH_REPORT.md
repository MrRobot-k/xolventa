# Graph Report - /home/esdras/Escritorio/landing-page/emprendimiento  (2026-06-19)

## Corpus Check
- Corpus is ~3,275 words - fits in a single context window. You may not need a graph.

## Summary
- 104 nodes · 125 edges · 16 communities (8 shown, 8 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Component Library|UI Component Library]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_shadcn Config|shadcn Config]]
- [[_COMMUNITY_Project Metadata|Project Metadata]]
- [[_COMMUNITY_Page Components|Page Components]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Tailwind Theme|Tailwind Theme]]
- [[_COMMUNITY_OpenCode Config|OpenCode Config]]
- [[_COMMUNITY_Astro Config Module|Astro Config Module]]
- [[_COMMUNITY_OpenCode JSON File|OpenCode JSON File]]
- [[_COMMUNITY_Package JSON File|Package JSON File]]
- [[_COMMUNITY_pnpm Workspace|pnpm Workspace]]
- [[_COMMUNITY_README File|README File]]
- [[_COMMUNITY_VS Code Extensions|VS Code Extensions]]
- [[_COMMUNITY_VS Code Launch Config|VS Code Launch Config]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 17 edges
2. `tailwind` - 6 edges
3. `aliases` - 6 edges
4. `scripts` - 5 edges
5. `compilerOptions` - 5 edges
6. `Button()` - 4 edges
7. `../components/Footer.astro` - 3 edges
8. `Input()` - 3 edges
9. `Label()` - 3 edges
10. `Textarea()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `TypeScript Config` --references--> `shadcn Components Config`  [INFERRED]
  tsconfig.json → components.json
- `Card()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardTitle()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardDescription()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Landing Page Section Flow** — pages_index, components_hero, components_services, components_about, components_contactform, components_footer, layouts_layout [INFERRED 0.95]

## Communities (16 total, 8 thin omitted)

### Community 0 - "UI Component Library"
Cohesion: 0.19
Nodes (16): shadcn Components Config, shadcn/base-nova Design System, cn(), TypeScript Config, Button(), buttonVariants, Card(), CardAction() (+8 more)

### Community 1 - "Package Dependencies"
Cohesion: 0.12
Nodes (17): dependencies, astro, @astrojs/react, @base-ui/react, class-variance-authority, clsx, @fontsource-variable/geist, lucide-react (+9 more)

### Community 2 - "shadcn Config"
Cohesion: 0.12
Nodes (15): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+7 more)

### Community 3 - "Project Metadata"
Cohesion: 0.18
Nodes (10): engines, node, name, scripts, astro, build, dev, preview (+2 more)

### Community 4 - "Page Components"
Cohesion: 0.27
Nodes (9): ../components/About.astro, ../components/Footer.astro, ../components/Hero.astro, ../components/Services.astro, AI Solutions Brand Identity, WhatsApp Contact Integration Pattern, ../components/ContactForm, ../styles/global.css (+1 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.20
Nodes (9): compilerOptions, baseUrl, jsx, jsxImportSource, paths, exclude, extends, include (+1 more)

### Community 6 - "Tailwind Theme"
Cohesion: 0.33
Nodes (6): tailwind, baseColor, config, css, cssVariables, prefix

## Knowledge Gaps
- **60 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Package Dependencies` to `Project Metadata`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `shadcn/base-nova Design System` (e.g. with `shadcn Components Config` and `button.tsx`) actually correct?**
  _`shadcn/base-nova Design System` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `shadcn Config` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._