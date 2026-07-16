# Lorespan v8.5.2

- First page now remains visible until the reader taps **Continue to Character Setup**.
- Removed automatic character-setup popups.
- Enlarged mobile character setup remains active.
- Every book cover now uses a unique v8.5.2 filename to prevent stale cover reuse.
- Selected book is hidden before the open spread appears, preventing the closed red book from lingering behind the pages.
- Book opening was refined: landing, cover opening, and zoom into the first page are separated and smoother.
- Fresh-book action label is **Begin Story**, not **Open Book**.
- Shelf and desk artwork use v8.5.2 filenames.
- Service-worker cache updated to `lorespan-v8.5.2`.

### v8.5.4 verification patch
- Replaced the embedded emergency shelf fallback with the same cleaned shelf artwork used by the webpage. This prevents the deleted extra action panel from reappearing if the normal shelf image fails to load.
- Rechecked all ten unique cover mappings in both opening and return routes.
- Revalidated each book's character setup copy and offline cache entry.
- Bumped runtime and service-worker cache to v8.5.4.
