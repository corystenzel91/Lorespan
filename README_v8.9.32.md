# Lorespan v8.9.32

GitHub Pages replacement package. Upload every file in this ZIP to the repository root, replacing older files.

## Library and book flow

- All ten shelf books retain individual covers, labels, descriptions, placements, and story routes.
- Selecting a book pulls that cover halfway forward with visible spine and page depth.
- Every selected book has a **Preview Book** control and an **Open Book/Open Preview** control.
- After a book has been opened once, its primary control becomes **Continue** and **Start Over** remains visible.
- New readers see the first story page before character creation.
- Back to Library runs the return transition without reopening the reader.
- Skip Animation uses the same completion handler for opening and returning.

## Animation

- The old MP4/movie path and dormant movie loader were removed.
- Opening and returning use the live DOM/CSS 3D book object.
- The transition background is `lorespan-desk-room-v8930.webp`.
- Cover, spine, page block, top page edge, side page edge, shadows, perspective, and curved flight path remain visible during movement.

## Validation

See `VALIDATION_v8.9.32.json`. JavaScript syntax, duplicate IDs, asset references, image decoding, all ten book mappings, preview controls, persistence controls, first-page flow, return handling, skip handling, and stale movie references were checked.

The execution environment blocked Chromium navigation by administrator policy, so a full automated browser launch could not be completed. This limitation is recorded rather than hidden.
