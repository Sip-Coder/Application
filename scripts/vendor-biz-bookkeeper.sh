#!/usr/bin/env bash
# Build a same-origin interactive preview of Biz Bookkeeper.
# mockup-sandbox has no mockup components; the ledger Vite app is the front-end surface.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/embeds/biz-bookkeeper"
BASE="/Application/embeds/biz-bookkeeper/"
SRC_REPO="https://github.com/Sip-Coder/Biz-Bookkeeper.git"
WORK="$(mktemp -d)"

cleanup() {
  rm -rf "$WORK"
}
trap cleanup EXIT

git clone --depth 1 "$SRC_REPO" "$WORK"

# Fail-fast queries so the static preview shows fallback dashboard data
# after the missing Replit API errors, instead of spinning forever.
python3 - "$WORK/artifacts/ledger/src/App.tsx" <<'PY'
from pathlib import Path
import sys

path = Path(sys.argv[1])
text = path.read_text()
old = """    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },"""
new = """    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      retry: false,
    },"""
if old not in text:
    raise SystemExit("Could not patch QueryClient defaults in ledger App.tsx")
path.write_text(text.replace(old, new, 1))
PY

(
  cd "$WORK"
  pnpm install --frozen-lockfile
  NODE_ENV=production BASE_PATH="$BASE" pnpm --filter @workspace/ledger run build
)

rm -rf "$DEST"
mkdir -p "$DEST"
cp -a "$WORK/artifacts/ledger/dist/public/." "$DEST/"

cat > "$DEST/SOURCE.txt" <<EOF
Vendored from $SRC_REPO (artifacts/ledger Vite app).
artifacts/mockup-sandbox has no mockup components, so this uses the LedgerAI
front-end instead. Built with: BASE_PATH=$BASE pnpm --filter @workspace/ledger run build
The live Replit API / PostgreSQL backend is not bundled. Pages render with the
app's built-in fallback figures and remain navigable; live writes and live
account data need the full Replit stack.
Refresh: npm run vendor:biz-bookkeeper
EOF

echo "Wrote Biz Bookkeeper embed to $DEST"
