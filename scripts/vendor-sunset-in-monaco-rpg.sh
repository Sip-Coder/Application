#!/usr/bin/env bash
# Copy the playable HTML/JS/CSS game into a same-origin embed.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/embeds/sunset-in-monaco-rpg"
SRC_REPO="https://github.com/Sip-Coder/sunset-in-monaco-rpg.git"
WORK="$(mktemp -d)"

cleanup() {
  rm -rf "$WORK"
}
trap cleanup EXIT

git clone --depth 1 "$SRC_REPO" "$WORK"

rm -rf "$DEST"
mkdir -p "$DEST"
cp -a "$WORK/index.html" "$WORK/style.css" "$WORK/game.js" "$WORK/data.js" "$DEST/"

cat > "$DEST/SOURCE.txt" <<EOF
Vendored from $SRC_REPO
Copied the playable HTML/JS/CSS sources as-is (relative asset paths).
Refresh: npm run vendor:sunset-rpg
EOF

echo "Wrote sunset-in-monaco-rpg embed to $DEST"
