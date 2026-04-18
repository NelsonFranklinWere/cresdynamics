#!/usr/bin/env bash
# Deploy or update cresdynamics on a DigitalOcean Ubuntu host.
#
# Auth: default is normal `ssh` (keys/agent). For password auth via sshpass:
#   SSHPASS='your-temporary-password' ./scripts/deploy-digitalocean.sh
# Many clouds disable PasswordAuthentication; if login still fails, use an SSH key
# or enable passwords briefly in /etc/ssh/sshd_config (not recommended long-term).
#
# Use a specific private key (recommended for DO):
#   SSH_IDENTITY_FILE="$HOME/.ssh/cresdynamics_digitalocean_ed25519" ./scripts/deploy-digitalocean.sh
#
# Override: SSH_USER=ubuntu REMOTE_DIR=/srv/cresdynamics ./scripts/deploy-digitalocean.sh
#
# Prereqs on server: Node 20+, git, repo cloned at REMOTE_DIR, .env.production
# (or .env.local) with DATABASE_URL, secrets, etc. Optional: pm2 for process management.

set -euo pipefail

SSH_USER="${SSH_USER:-root}"
SSH_HOST="${SSH_HOST:-159.223.137.21}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/cresdynamics}"
GIT_BRANCH="${GIT_BRANCH:-main}"
PM2_APP="${PM2_APP:-cresdynamics}"
SSH_OPTS=(-o StrictHostKeyChecking=accept-new)

if [ -n "${SSH_IDENTITY_FILE:-}" ]; then
  SSH_OPTS+=(-o IdentitiesOnly=yes -i "${SSH_IDENTITY_FILE/#\~/$HOME}")
fi

if [ -n "${SSHPASS:-}" ]; then
  if ! command -v sshpass >/dev/null 2>&1; then
    echo "SSHPASS is set but sshpass is not installed (e.g. brew install sshpass)." >&2
    exit 1
  fi
  SSH_CMD=(sshpass -e ssh "${SSH_OPTS[@]}" -o PreferredAuthentications=password -o PubkeyAuthentication=no)
else
  SSH_CMD=(ssh "${SSH_OPTS[@]}")
fi

echo "==> Deploying to ${SSH_USER}@${SSH_HOST}:${REMOTE_DIR} (branch ${GIT_BRANCH})"

"${SSH_CMD[@]}" "${SSH_USER}@${SSH_HOST}" "REMOTE_DIR='${REMOTE_DIR}' GIT_BRANCH='${GIT_BRANCH}' PM2_APP='${PM2_APP}' bash -s" <<'REMOTE'
set -euo pipefail
cd "${REMOTE_DIR}"
if [ ! -d .git ]; then
  echo "Error: ${REMOTE_DIR} is not a git clone. On the server run:"
  echo "  sudo mkdir -p ${REMOTE_DIR} && sudo chown \$USER:\$USER ${REMOTE_DIR}"
  echo "  git clone <your-repo-url> ${REMOTE_DIR}"
  exit 1
fi
git fetch origin "${GIT_BRANCH}"
git checkout "${GIT_BRANCH}"
git pull --ff-only origin "${GIT_BRANCH}"
# Do not set NODE_ENV=production before npm ci — devDependencies (e.g. TypeScript)
# are required to load next.config.ts during next build.
npm ci
export NODE_ENV=production
NEXT_DISABLE_ESLINT=1 npm run build
if command -v pm2 >/dev/null 2>&1; then
  if pm2 describe "${PM2_APP}" >/dev/null 2>&1; then
    pm2 restart "${PM2_APP}" --update-env
  else
    pm2 start npm --name "${PM2_APP}" -- start
    pm2 save
  fi
else
  echo "pm2 not installed. Install: sudo npm install -g pm2"
  echo "Or run once: cd ${REMOTE_DIR} && PORT=3000 npm run start"
  exit 1
fi
echo "==> Remote deploy finished."
REMOTE
