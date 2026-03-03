#!/usr/bin/env bash
set -euo pipefail

# リポジトリ外へのアクセスを防ぎつつ、特定キーワードを検索する。
readonly REPO_ROOT="$(git rev-parse --show-toplevel)"
readonly DEFAULT_PATTERN='DPUB|dpub|direct.*acade|directacad'
readonly DEFAULT_LIMIT=10

target_path="${1:-$REPO_ROOT}"
pattern="${2:-$DEFAULT_PATTERN}"
limit="${3:-$DEFAULT_LIMIT}"

target_real="$(cd "$target_path" && pwd -P)"
repo_real="$(cd "$REPO_ROOT" && pwd -P)"

case "$target_real" in
  "$repo_real"|"$repo_real"/*)
    ;;
  *)
    echo "Error: target path must be inside repository: $repo_real" >&2
    exit 1
    ;;
esac

if ! [[ "$limit" =~ ^[0-9]+$ ]]; then
  echo "Error: limit must be numeric: $limit" >&2
  exit 1
fi

echo "Scanning in: $target_real"
echo "Pattern: $pattern"
echo "Limit: $limit files"
echo ""

if command -v rg >/dev/null 2>&1; then
  rg -l -S --glob '*.env*' --glob '*.md' --glob '*.txt' "$pattern" "$target_real" | head -n "$limit"
else
  grep -r -E --include="*.env*" --include="*.md" --include="*.txt" -l "$pattern" "$target_real" | head -n "$limit"
fi
