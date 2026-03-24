# lynse-ai

Lynse AI 闪记卡 (MemoCard) - Smart Bluetooth recording device with AI transcription capabilities.

## Team Setup

### gstack (Required for Team)

This team uses [gstack](https://github.com/garrytan/gstack) for enhanced development workflows with Claude Code. It provides skills for code review, QA testing, deployment, and more.

**Setup:**
```bash
./scripts/setup-gstack.sh
```

**Important:** Always use `/browse` skill for web browsing tasks (not MCP Chrome tools).

**Key skills:**
- `/browse` - Headless browser for QA testing
- `/review` - Code review
- `/qa` - Quality assurance testing
- `/ship` - Ship features
- `/land-and-deploy` - Deploy changes
- `/gstack-upgrade` - Upgrade gstack

See `CLAUDE.md` for the full list of available skills.

## Project Overview

This is a bilingual (English/Chinese) marketing website for Lynse AI 闪记卡 (MemoCard). The site is built as a React SPA with client-side routing.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Documentation

- See `CLAUDE.md` for development guidelines and architecture details
- See `scripts/` for utility scripts
