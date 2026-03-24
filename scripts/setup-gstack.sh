#!/usr/bin/env bash
# Setup script for gstack - enhanced development workflows for Claude Code
# Run this script to install gstack skills and build the browse binary

set -e

GSTACK_REPO="https://github.com/garrytan/gstack.git"
GSTACK_DIR="$HOME/.claude/skills/gstack"

echo "Setting up gstack for Claude Code..."

# Check if gstack is already installed
if [ -d "$GSTACK_DIR" ]; then
  echo "gstack already installed at $GSTACK_DIR"
  echo "Checking for updates..."
  cd "$GSTACK_DIR"
  git pull --rebase --quiet
  echo "Running setup to rebuild if needed..."
  ./setup
  echo "gstack is up to date!"
else
  echo "Cloning gstack repository..."
  git clone --depth 1 "$GSTACK_REPO" "$GSTACK_DIR"
  cd "$GSTACK_DIR"
  ./setup
fi

echo ""
echo "gstack setup complete!"
echo ""
echo "Available skills include:"
echo "  /browse              - Headless browser for QA testing"
echo "  /review              - Code review"
echo "  /qa                  - Quality assurance testing"
echo "  /ship                - Ship features"
echo "  /land-and-deploy     - Deploy and land changes"
echo "  /investigate         - Bug investigation"
echo "  /design-review       - Visual design audit"
echo "  /gstack-upgrade      - Upgrade gstack"
echo ""
echo "For a full list of skills, see CLAUDE.md or run: ls ~/.claude/skills/"
