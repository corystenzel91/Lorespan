# Changelog

## v8.9.30
- Preserved all ten book preview cards and Start Over confirmation controls.
- Preserved first-page reading before character creation for fresh starts.
- Hardened Back to Library and two-way Skip Animation handoffs.
- Replaced all twenty opening/return movies with per-book H.264/yuv420p sequences.
- Removed the floating purple background volume from the desk animation.
- Enlarged the selected book on the desk and added smoother page-opening presentation.
- Added upright, dimensional cover overlays on the shelf and removed sideways launch rotations.
- Replaced the placeholder Hero Academia cover with a detailed high-resolution cover.
- Advanced the manifest and service-worker cache to v8.9.30 and removed obsolete release-audit clutter.

## v8.9.29 — Replacement ZIP audit and release validation
- Rebuilt the GitHub-ready package from the complete v8.9.28 ZIP master.
- Revalidated HTML IDs, JavaScript syntax, local assets, movie metadata, PWA files, service-worker cache coverage, and release version consistency.
- Compared structural identifiers, route and choice tokens, save keys, callbacks, and function names against v8.9.28; no branches or choices were removed.
- Updated the app, manifest, service-worker cache, and registration query to v8.9.29.

# v8.9.26
- Rebuilt the flying book as a persistent 3D object with stronger spine, covers, page edges, and depth.
- Added a weighted desk landing before opening.
- Added a hinged cover opening to nearly 180 degrees.
- Added four independently animated turning sheets and layered page stacks.
- Added realistic reverse page settling and cover closing for return-to-shelf.
- Extended the animation watchdog for the longer physical sequence.

# Lorespan v8.9.24

- Restored a dedicated Continue Book control for the latest valid save.
- Book taps now select a title instead of immediately opening it.
- Restored Begin/Continue and Start Over controls on the selected-book card.
- Prevented stale overlays and opening-state flags from blocking other books.
- Strengthened spine, pages, thickness, title, shadows, and perspective during flight.
- Masks the selected shelf book during the cinematic overlay to prevent a duplicate background copy.
- Aligned page, manifest, and service-worker versions.

# Lorespan v8.9.23

- Removed the remaining duplicate cinematic animation runtime so only one authoritative shelf-flight engine remains.
- Unified opening, return, Skip Animation, cancellation, and cleanup state.
- Confirmed the return sequence no longer programmatically clicks a shelf book or reopens the reader.
- Renamed the Guild Bound registry-trial resolution node to `guildTrialResolution`, preventing it from overwriting Vantheir Academy's `trialResolution` node.
- Updated every related guild choice target, typed-response route, progress flag, optional event, and progression mapping.
- Updated the service-worker cache to `lorespan-v8.9.23`.
- Revalidated HTML IDs, JavaScript syntax, local assets, and ZIP integrity.

# Lorespan v8.9.20

- Replaced the shelf/desk transition with a movie-style full-screen overlay over still artwork.
- Only shelf books are interactive in the library.
- A single book tap selects and opens it.
- Desk, artwork, decorations, empty shelf space, and synopsis card are non-interactive.
- Skip Animation remains active for opening and return sequences.
- Updated service-worker cache version.

# Lorespan v8.9.18

- Polished Summer I and Year 2 Week 1.
- Removed location-inappropriate filler and clarified the return to Vantheir.
- Added 16 meaning-sensitive typed-response reaction nodes.
- Preserved original IDs, visible choices, routes, and save structures.
- Updated the service-worker cache to lorespan-v8.9.18.

# Lorespan v8.9.17

## Year 1 Week 24 — The Inheritance Assembly

- Polished Weeks 1–23 and completed the Year 1 finale.
- Clarified road closures, emergency exits, attendance, representation, and the assembly's consent safeguards.
- Reworked the Living Inheritance so truth, consent, shared authority, minority rights, local governance, review, appeal, and refusal remain distinct.
- Removed irrelevant library, classroom, furniture, and generic staging from the Grand Hall finale.
- Added 14 meaning-sensitive typed-response reaction nodes.
- Preserved all original HTML IDs, visible choice pairs, storage references, routes, and existing story nodes.
- Updated the service-worker cache to lorespan-v8.9.17.
- Completed a best-effort copyright-similarity review.

# Lorespan v8.9.16

## Year 1 Week 22 — The Convergence
- Reworked guest housing, hearing rooms, translation support, quiet areas, exits, and community welcome points.
- Clarified the limited roles of the Archive Court and First Sentinel.
- Preserved community authority and the right to decline Vantheir's processes.
- Added six meaning-sensitive typed-response reaction paths.
- Polished previous-week wording and maintained player-response-only highlighting.
- Completed a copyright-similarity editorial review.
- Updated the service-worker cache for GitHub Pages deployment.

## v8.9.20 — Cinematic book flight repair
- Initialized the animation epoch counter so the cinematic no longer cancels immediately.
- Connected shelf-book taps directly to the opening function instead of a synthetic preview-button click.
- Replaced the flat flying rectangle with a layered hardcover model: front cover, spine, page block, back cover, edge highlight, rounded geometry, perspective, and softer shadowing.
- Smoothed the flight curve and extended the full animation slightly for more natural movement.


## v8.9.26
- Full code and animation audit.
- Fixed animation watchdog firing before the cinematic runtime timeout.
- Hardened Skip Animation label and cleanup behavior.
- Ensured animation state, inert state, and overlay cleanup complete before screen handoff.
- Revalidated JavaScript, IDs, assets, service worker, and ZIP integrity.

## v8.9.27 — Full Code and Animation Bug Audit
- Fixed Start Over so confirmation reopens the selected book instead of only selecting it.
- Fixed generic library openings so the animation begins at the selected book instead of a fallback corner.
- Strengthened animation cancellation cleanup for overlays, shelf locking, masks, classes, and Skip state.
- Revalidated the 3D flight, cover hinge, page turns, return sequence, Continue Book, save state, assets, and cache alignment.

## v8.9.28 — Full movie-animation rebuild and end-to-end audit
- Added 20 real MP4 animation files: opening and return movies for all 10 shelf books.
- Each movie uses the selected book's own cover and shelf position.
- Movies show a dimensional hardcover with visible spine, page block, thickness, perspective, moving shadow, curved flight, desk landing, hinged opening, and page movement.
- The return movies reverse the complete opening sequence.
- Added a video-first runtime with Skip support and a procedural 3D fallback if movie playback fails.
- Fixed service-worker registration version mismatch.
- Extended the emergency handoff timeout so a fallback animation can fully clean up before the reader opens.
- Audited scripts, IDs, shelf controls, opening/return state, asset references, movie encoding, cache entries, manifest, and ZIP structure.
