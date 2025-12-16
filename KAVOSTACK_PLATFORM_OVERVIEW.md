# KAVOStack Platform Overview

**Document Version:** 1.0
**Date:** 2025-12-10
**Author:** Kelvin (CTO)
**Status:** Active Development

---

## Executive Summary

KAVOStack is a suite of digital capability products designed to help SMEs build, automate, and amplify their operations. The platform consists of three codebases forming an integrated ecosystem:

| Product | Purpose | Status |
|---------|---------|--------|
| **KAVOStack Website** | Marketing & lead generation | Production Ready |
| **KAVOStack Backlog** | Client collaboration & project management | In Development (~70%) |
| **KAVOStack Builder** | AI-powered specification wizard | Production Ready (v0.3.1) |

---

## Codebase Registry

### 1. KAVOStack Website

**Purpose:** B2B marketing website positioning KAVOStack as "Your Internal CTO + Delivery Team"

| Attribute | Value |
|-----------|-------|
| **Local Path** | `C:\VSProjects\_Websites\KAVOStack--Website` |
| **Git Repository** | https://github.com/flowency-live/kavostack-website.git |
| **Branch** | `main` |
| **Deployment** | TBD (Vercel/Amplify) |
| **Domain** | TBD (kavostack.com / kavostack.co.uk) |

**Tech Stack:**
- Next.js 14 (App Router)
- React 18 + TypeScript 5
- Tailwind CSS 3.4
- Lucide Icons
- Calendly/Cal.com integration

**Key Features:**
- Landing page with 8 conversion-optimized sections
- Services page (Build, Automate, Amplify pillars)
- Contact/booking integration
- Digital business card with QR code
- GDPR-compliant cookie consent

**Branding Status:** REBRAND IN PROGRESS
- 12 files still contain "Flowency" references
- Emails: `hello@flowency.co.uk` (3 locations)
- URLs: `flowency.build` (3 locations)
- Logo: New `kavo-logo.webp` ready, old `flink-logo.png` still present

---

### 2. KAVOStack Backlog

**Purpose:** Multi-tenant product backlog collaboration tool for Flowency/KAVOStack clients

| Attribute | Value |
|-----------|-------|
| **Local Path** | `C:\VSProjects\_Websites\KAVOStack-Backlog` |
| **Git Repository** | https://github.com/flowency-live/kavostack-backlog.git |
| **Branch** | `main` |
| **Deployment** | Planned: AWS Amplify |
| **Domain** | Planned: `backlog.kavostack.com` |

**Tech Stack:**
- Next.js 14 (App Router)
- React 18 + TypeScript 5
- PostgreSQL + Prisma v6.19
- Auth.js v5 (Google OAuth + credentials)
- AWS S3 (attachments)
- AWS SES (invitations)
- @hello-pangea/dnd (drag-and-drop)
- Tailwind CSS + shadcn/ui

**Key Features:**
- Multi-tenant architecture (client isolation)
- Role-based access (flowency_admin, client_admin, client_member)
- Product Backlog Item (PBI) management
- Drag-and-drop prioritization
- Comments & file attachments
- PRD generation & markdown export
- Magic link invitations

**Development Status:**
- Phase 0-5: COMPLETE
- Phase 6 (Polish & Deploy): IN PROGRESS
- Phase 7 (First Client Onboarding): PENDING
- Estimated completion: ~70%

**Infrastructure Requirements:**
- AWS RDS PostgreSQL instance
- AWS S3 bucket: `flowency-backlog-attachments`
- AWS Amplify hosting
- AWS Cognito (planned) or Auth.js sessions

---

### 3. KAVOStack Builder (Spec Wizard)

**Purpose:** Conversational AI that creates build-ready product specifications (PRDs) through natural dialogue

| Attribute | Value |
|-----------|-------|
| **Local Path** | `C:\VSProjects\_Websites\KAVOStack-Builder\spec-wizard` |
| **Git Repository** | https://github.com/flowency-live/kavostack-builder.git |
| **Branch** | `main` |
| **Deployment** | AWS Amplify + CDK Infrastructure |
| **Domain** | Planned: `builder.kavostack.com` |

**Tech Stack:**
- Next.js 16.0.6 (App Router)
- React 19.2.0 + TypeScript 5
- Zustand (state management)
- AWS DynamoDB (sessions)
- AWS S3 (PDF exports)
- AWS SES (email/sharing)
- @sparticuz/chromium + puppeteer-core (serverless PDF)
- Anthropic SDK (Claude 3.5 Haiku)
- OpenAI SDK (GPT-4o-mini)

**Architecture Highlights:**

**Two-LLM Design:**
| Component | Purpose | Context | Performance |
|-----------|---------|---------|-------------|
| Chat AI | Conversational UX | Last 10 messages + spec state | < 3 seconds |
| PRD Engine | Specification synthesis | Last 6 messages + current spec | 5-10 seconds (async) |

**Core Principles:**
1. Spec-First Architecture - Specification drives conversation
2. Incremental Refinement - Never regenerates from scratch
3. Gap-Driven Conversation - AI asks about missing sections only
4. Living PRD - Always exportable at any stage

**Key Features:**
- Natural language spec creation
- Real-time streaming responses
- PDF/Markdown export
- Email sharing via magic links
- Session persistence
- Automatic fallback (Anthropic -> OpenAI)

**Infrastructure (CDK-based):**
- DynamoDB: Session storage (on-demand billing)
- S3: Export storage + CloudFront CDN
- SES: Email delivery
- CloudWatch: Monitoring + alarms
- Secrets Manager: API key storage

**Version:** 0.3.1 (Production Ready)

---

## Repository Registry

| Local Directory | Git Remote | Status |
|-----------------|------------|--------|
| KAVOStack--Website | kavostack-website.git | Configured |
| KAVOStack-Backlog | kavostack-backlog.git | Configured |
| KAVOStack-Builder/spec-wizard | kavostack-builder.git | Configured |

**All repositories are now correctly aligned with consistent naming.**

---

## Deployment Matrix

| Product | Current State | Target Platform | Target Domain |
|---------|---------------|-----------------|---------------|
| Website | Not deployed | Vercel OR Amplify | kavostack.com |
| Backlog | Not deployed | AWS Amplify | backlog.kavostack.com |
| Builder | Not deployed | AWS Amplify | builder.kavostack.com OR spec.kavostack.com |

---

## Shared Infrastructure

### AWS Region
All services should deploy to: **eu-west-2 (London)**

### Naming Convention
- S3 Buckets: `kavostack-{product}-{purpose}-{env}`
- DynamoDB: `kavostack-{product}-{table}-{env}`
- Secrets: `kavostack/{product}/{secret-name}/{env}`

### Common Dependencies Across Products
- Next.js (14-16)
- React (18-19)
- TypeScript 5
- Tailwind CSS
- Lucide Icons
- AWS SDK v3

---

## Branding Migration Checklist

All three codebases contain "Flowency" branding that needs updating to "KAVOStack":

### Website
- [ ] Update email addresses: `hello@flowency.co.uk` -> `hello@kavostack.com`
- [ ] Update URLs: `flowency.build` -> `kavostack.com`
- [ ] Update CSS comments
- [ ] Update documentation files
- [ ] Remove old logo (`flink-logo.png`)

### Backlog
- [ ] Update package.json name: `flowency-backlog` -> `kavostack-backlog`
- [ ] Update app titles and meta
- [ ] Update role names if desired
- [ ] Update domain references

### Builder
- [ ] Update CLAUDE.md references
- [ ] Update SYSTEM_BIBLE.md
- [ ] Update documentation
- [ ] Update persona references (if applicable)

---

## Security Considerations

### API Keys & Secrets
- OpenAI API keys (Builder)
- Anthropic API keys (Builder)
- Google OAuth credentials (Backlog)
- AWS credentials (all products)

**Storage:** AWS Secrets Manager (Builder) / Environment variables (Website, Backlog)

### Authentication
- **Website:** None (public marketing site)
- **Backlog:** Auth.js v5 with Google OAuth + credentials
- **Builder:** Magic links via SES (planned)

### Data Protection
- All data encrypted at rest (DynamoDB, S3, RDS)
- HTTPS enforced on all domains
- GDPR cookie consent (Website)

---

## Next Steps (Recommended Priority)

1. **Complete Branding Migration** - Update all Flowency references to KAVOStack
2. **Standardize Repository Names** - Align git repos with local directory names
3. **Deploy Website** - Get marketing site live on kavostack.com
4. **Deploy Backlog** - Set up Amplify + RDS for backlog tool
5. **Deploy Builder** - Execute CDK deployment for spec wizard
6. **Domain Strategy** - Finalize domain structure (kavostack.com, *.kavostack.com)
7. **Monitoring Setup** - Configure CloudWatch dashboards across all products

---

## Contact

**Technical Questions:** Review individual CLAUDE.md files in each repository
**Architecture Decisions:** See SYSTEM_BIBLE.md in Builder repo
**Platform Strategy:** This document

---

*This document should be updated whenever significant changes are made to the platform architecture.*
