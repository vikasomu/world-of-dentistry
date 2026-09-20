#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-world-of-dentistry}"
GITHUB_USER="${GITHUB_USER:-vikasomu}"
BRANCH="${2:-vikasomu/premium-dental-website-5cb7}"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Error: GITHUB_TOKEN is required"
  exit 1
fi

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "Error: VERCEL_TOKEN is required"
  exit 1
fi

echo "==> Authenticating GitHub CLI"
echo "$GITHUB_TOKEN" | gh auth login --with-token

echo "==> Creating GitHub repository (if needed)"
if ! gh repo view "$GITHUB_USER/$REPO_NAME" >/dev/null 2>&1; then
  gh repo create "$GITHUB_USER/$REPO_NAME" --public --source=. --remote=origin --push=false
else
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
fi

echo "==> Pushing to GitHub"
git push -u origin "$BRANCH"
git push origin "$BRANCH:main" 2>/dev/null || git push -u origin "$BRANCH:main"

echo "==> Deploying to Vercel"
npx vercel@latest deploy --prod --yes --token "$VERCEL_TOKEN"

echo "==> Done"
