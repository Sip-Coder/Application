#!/usr/bin/env bash
# Rebuild the same-origin Rose Quartz embed from the public source repo.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/embeds/rose-quartz"
BASE="/Application/embeds/rose-quartz/"
SRC_REPO="https://github.com/Sip-Coder/Rose-Quartz.git"
WORK="$(mktemp -d)"

cleanup() {
  rm -rf "$WORK"
}
trap cleanup EXIT

git clone --depth 1 "$SRC_REPO" "$WORK"
npm ci --prefix "$WORK"
(cd "$WORK" && npx vite build --base "$BASE")

rm -rf "$DEST"
mkdir -p "$DEST"
cp -a "$WORK/dist/." "$DEST/"

python3 - "$DEST" "$BASE" <<'PY'
from pathlib import Path
import sys

dest = Path(sys.argv[1])
base = sys.argv[2].rstrip("/")
index = dest / "index.html"
html = index.read_text()
old = 'data-panorama-src="/panoramas/'
new = f'data-panorama-src="{base}/panoramas/'
if old not in html:
    raise SystemExit("Could not rebase data-panorama-src for GitHub Pages")
index.write_text(html.replace(old, new, 1))
PY

cat > "$DEST/SOURCE.txt" <<EOF
Vendored from $SRC_REPO
Built with: vite build --base $BASE
Rebases data-panorama-src to $BASE so the 360 room preview loads on GitHub Pages.
Refresh: npm run vendor:rose-quartz
EOF

echo "Wrote Rose Quartz embed to $DEST"
