#!/usr/bin/env bash
# Rebuild the same-origin Coffee Index embed from the public source repo.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/embeds/coffee-index"
BASE="/Application/embeds/coffee-index/"
SRC_REPO="https://github.com/Sip-Coder/Coffee-Index.git"
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
cp "$ROOT/scripts/embed-overflow-patch.css" "$DEST/embed-overflow-patch.css"

python3 - "$DEST/index.html" <<'PY'
from pathlib import Path
import sys

path = Path(sys.argv[1])
html = path.read_text()
tag = '    <link rel="stylesheet" href="embed-overflow-patch.css" />\n'
if "embed-overflow-patch.css" not in html:
    html = html.replace("</head>", f"{tag}  </head>", 1)
    path.write_text(html)
PY

cat > "$DEST/SOURCE.txt" <<EOF
Vendored from $SRC_REPO
Built with: vite build --base $BASE
Plus scripts/embed-overflow-patch.css so the 320px case-study iframe does not scroll sideways.
Refresh: npm run vendor:coffee-index
EOF

echo "Wrote Coffee Index embed to $DEST"
