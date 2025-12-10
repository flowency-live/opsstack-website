# Flowency Builder Backlog - Product Specification

**Product Name:** Flowency Builder Backlog
**Version:** 1.0.0 (MVP)
**Document Owner:** CTO
**Last Updated:** December 7, 2025
**Status:** Ready for Development

---

## Executive Summary

**Flowency Builder Backlog** is a white-label, multi-tenant product backlog management system designed for software consultancies and agencies. It provides clients with a professional, branded interface to collaborate on product roadmaps while engineers work natively in GitHub Issues.

**Core Value Proposition:**
- **For Clients:** Clean, branded backlog management without GitHub complexity
- **For Engineers:** Work in GitHub Issues (no context switching, native tools)
- **For Agencies:** Single source of truth, zero data duplication, multi-tenant scalability

**Target Market:** Software consultancies, development agencies, fractional CTOs, product teams building for external clients

**Business Model:** SaaS subscription ($29/client/month) or white-label license for agencies

---

## Product Vision

### Problem Statement

**Current Pain Points:**
1. **Client Collaboration is Broken:** Clients don't want GitHub access but need visibility into roadmap
2. **Tool Fragmentation:** Jira/Linear costs $8-15/seat, engineers hate context switching between tools
3. **Data Duplication:** Backlog lives in Notion/Asana, issues live in GitHub - constant sync overhead
4. **Poor Client UX:** Existing tools are built for developers, not business stakeholders

### Solution

A **client-facing backlog portal** backed by GitHub Issues API:
- Engineers work in GitHub Issues (native, fast, integrated with code)
- Clients see branded UI at `client.yourapp.com` or embedded in their admin dashboard
- GitHub is single source of truth (no sync, no duplication)
- Multi-tenant architecture supports unlimited clients from one deployment

### Success Metrics

**MVP Launch Criteria:**
- 5 clients onboarded (including Durdle)
- 90% client satisfaction score
- Zero GitHub-related support tickets from clients
- <200ms p95 API latency

**6-Month Targets:**
- 25 active clients
- 80% feature request conversion rate (client-requested features get built)
- $725/month MRR ($29 × 25 clients)
- 99.9% uptime

---

## User Personas

### Persona 1: The Engineer (Primary User)
**Name:** Alex, Full-Stack Developer
**Goals:**
- Work in GitHub Issues (native tools, keyboard shortcuts, integrations)
- Avoid context switching between tools
- Maintain single source of truth for backlog

**Pain Points:**
- Hate maintaining backlog in Jira AND GitHub
- Clients ask questions that interrupt coding flow
- Want clients to self-serve on roadmap questions

**How Flowency Helps:**
- Alex works ONLY in GitHub Issues
- Clients see backlog in portal, comment there instead of Slack DMs
- Zero workflow disruption

---

### Persona 2: The Client (Secondary User)
**Name:** Sarah, Business Owner
**Goals:**
- See product roadmap at a glance
- Request new features without learning technical tools
- Track progress on previously requested features

**Pain Points:**
- GitHub is overwhelming and technical
- Doesn't know how to create proper GitHub issues
- Wants simple "Request Feature" button

**How Flowency Helps:**
- Clean UI at `durdle.flowency.app`
- "Request Feature" form creates GitHub issue automatically
- Status updates synced from GitHub (no manual updates needed)

---

### Persona 3: The Agency CTO (Admin User)
**Name:** Marcus, Fractional CTO
**Goals:**
- Manage backlog for 10+ clients from one dashboard
- White-label portal with client branding
- Minimize tool costs

**Pain Points:**
- Paying $150/month for Jira across all clients
- Clients request access to backlog tool, expensive to add seats
- No good embedding option for client admin dashboards

**How Flowency Helps:**
- One deployment, unlimited clients
- $29/client vs $120/client for Jira
- Embeddable iframe for client dashboards

---

## Core Features (MVP)

### Feature 1: GitHub Integration

**Description:** Bidirectional sync between Flowency and GitHub Issues API

**Requirements:**
- Connect to any GitHub repository via OAuth or Personal Access Token
- Read issues with label `backlog` (configurable filter)
- Write new issues when client creates PBI via portal
- Sync issue comments bidirectionally
- Webhook listener for real-time updates (issue created/updated/closed)

**Technical Specifications:**
```typescript
// GitHub API Integration
interface GitHubConfig {
  repoOwner: string;      // e.g., "flowency-live"
  repoName: string;       // e.g., "Durdle"
  accessToken: string;    // GitHub PAT or OAuth token
  backlogLabel: string;   // Default: "backlog"
  priorityLabels: string[]; // ["P0-blocking", "P1-critical", "P2-high", "P3-medium", "P4-low"]
  effortLabels: string[]; // ["effort:XS", "effort:S", "effort:M", "effort:L", "effort:XL"]
}

// Sync Functions
async function syncIssuesFromGitHub(config: GitHubConfig): Promise<Issue[]>
async function createGitHubIssue(config: GitHubConfig, pbi: PBI): Promise<Issue>
async function addCommentToIssue(config: GitHubConfig, issueNumber: number, comment: string): Promise<void>
```

**GitHub Webhook Events:**
- `issues.opened` - New issue created
- `issues.edited` - Issue title/description updated
- `issues.closed` - Issue completed
- `issue_comment.created` - New comment added
- `label.added` - Priority/effort changed

---

### Feature 2: Multi-Tenant Client Portal

**Description:** Each client gets branded subdomain with their backlog

**Requirements:**
- Subdomain routing: `{client-slug}.flowency.app` or custom domain
- Client-specific branding: Logo, colors, company name
- Authentication: Email + password or SSO (Google OAuth)
- Role-based access: Admin (full access), Viewer (read-only)

**Pages:**
1. **Dashboard** (`/`) - Overview with KPIs
2. **Backlog** (`/backlog`) - Kanban or table view
3. **Request Feature** (`/request`) - PBI creation form
4. **Settings** (`/settings`) - Branding, team members, GitHub connection

**Branding Configuration:**
```typescript
interface ClientBranding {
  clientId: string;
  subdomain: string;        // "durdle"
  customDomain?: string;    // "backlog.durdletransfers.co.uk"
  logo: string;             // S3 URL
  primaryColor: string;     // "#3B82F6"
  companyName: string;      // "Dorset Transfer Company"
  githubRepo: string;       // "flowency-live/Durdle"
}
```

---

### Feature 3: Backlog Kanban Board

**Description:** Visual board showing issues by status (To Do → In Progress → Done)

**Requirements:**
- Columns: To Do, In Progress, Done (mapped from GitHub labels or Projects)
- Drag-and-drop to change status (updates GitHub label)
- Filter by priority (P0-P4) and effort (XS-XL)
- Search by keyword
- Sort by: Created date, priority, effort
- Click card to view details modal

**UI Components:**
```typescript
// Kanban Board Component
<KanbanBoard
  issues={issues}
  columns={["To Do", "In Progress", "Done"]}
  onCardMove={handleStatusChange}
  onCardClick={handleViewDetails}
  filters={{ priority: ["P0", "P1"], effort: ["M", "L"] }}
/>

// Issue Card Component
<IssueCard
  title="Admin Quote Management Dashboard"
  priority="P0"
  effort="M"
  assignee="Alex"
  comments={12}
  status="In Progress"
  createdAt="2025-12-01"
/>
```

---

### Feature 4: Request Feature Form

**Description:** Client-friendly form to create product backlog items

**Requirements:**
- Form fields:
  - Title (required, 100 char max)
  - Description (required, markdown supported, 2000 char max)
  - Priority (dropdown: P0-P4)
  - Effort estimate (optional, dropdown: XS-XL)
  - Attachments (optional, screenshots/files, 5MB max)
- Form validation with clear error messages
- Preview mode (show how it will appear in GitHub)
- Success confirmation with link to created issue

**Form Submission Flow:**
1. Client fills form → Validates input
2. Create GitHub issue with label `client-request` + `backlog`
3. Upload attachments to S3, embed URLs in issue description
4. Add comment to issue: "Requested by {client-name} via Flowency Portal"
5. Show success modal with issue number and link

**GitHub Issue Template:**
```markdown
## Feature Request

**Requested by:** Sarah (Client - Durdle)
**Submitted via:** Flowency Builder Backlog
**Priority:** P0 (BLOCKING)
**Effort:** M (Medium)

### Description
[Client's description here]

### Attachments
- ![Screenshot](https://s3.amazonaws.com/flowency/attachments/abc123.png)

---
*This issue was created automatically via Flowency Builder Backlog*
```

---

### Feature 5: Issue Detail View

**Description:** Modal or page showing full issue details with comments

**Requirements:**
- Display: Title, description (rendered markdown), priority, effort, status, created date, assignee
- Comments thread (chronological, newest first)
- Add comment form (posts to GitHub issue)
- Show GitHub activity timeline (label changes, status updates, code commits linked to issue)
- "View on GitHub" link (for admin users only)
- Edit button (admin only) - updates GitHub issue

**Comment Attribution:**
- GitHub comments by engineers show GitHub avatar + name
- Portal comments by clients show client avatar + name + "(via Portal)" badge
- System events show bot icon (e.g., "Status changed to In Progress")

---

### Feature 6: Roadmap Timeline View

**Description:** Gantt-chart style timeline showing issues by sprint/milestone

**Requirements:**
- Map GitHub Milestones to sprints (Sprint 1, Sprint 2, etc.)
- Horizontal timeline with swimlanes per priority
- Display issue as bar on timeline (start = milestone start, end = milestone due date)
- Hover to see issue details
- Filter by status, priority, effort
- Export to PNG/PDF

**Visual Layout:**
```
Sprint 1 (Dec 1-14)  |  Sprint 2 (Dec 15-28)  |  Sprint 3 (Jan 1-14)
─────────────────────────────────────────────────────────────────────
P0 |  [ADMIN-001: Quote Dashboard]      |  [INFRA-001: Prod Setup] |
P1 |                     [PAYMENT-001: Stripe Integration]          |
P2 |                                          [ANALYTICS-001: Dashboard]
```

---

### Feature 7: Analytics Dashboard

**Description:** Key metrics about backlog health and velocity

**Requirements:**
- KPI cards:
  - Total PBIs (count)
  - In Progress (count)
  - Completed this month (count)
  - Client-requested features (count)
- Charts:
  - Completion velocity (issues closed per week, last 12 weeks)
  - Priority distribution (pie chart: P0 vs P1 vs P2 vs P3 vs P4)
  - Effort distribution (bar chart: XS vs S vs M vs L vs XL)
  - Backlog growth rate (line chart: new issues vs closed issues per week)
- Client engagement metrics:
  - Feature requests submitted
  - Comments posted by client
  - Average response time to client requests

---

### Feature 8: Embeddable Widget

**Description:** Iframe or React component to embed backlog in client's admin dashboard

**Requirements:**
- Lightweight iframe: `<iframe src="https://durdle.flowency.app/embed" />`
- Configurable views: Kanban, List, Roadmap
- Responsive design (works in 400px width sidebar or full-page)
- Auto-height adjustment (iframe resizes to content)
- SSO passthrough (if client already logged in to their admin, auto-authenticate to Flowency)

**Embedding Code:**
```html
<!-- Embed in client's admin dashboard -->
<script src="https://cdn.flowency.app/embed.js"></script>
<div id="flowency-backlog"></div>
<script>
  FlowencyBacklog.init({
    container: '#flowency-backlog',
    clientId: 'durdle',
    apiKey: 'sk_live_abc123',
    view: 'kanban', // or 'list', 'roadmap'
    theme: 'light', // or 'dark'
    height: '600px'
  });
</script>
```

---

## Technical Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ Client Portal│  │ Embed Widget │  │ Admin Dashboard      │  │
│  │ (Next.js)    │  │ (iframe/SDK) │  │ (Agency CTO)         │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
└─────────┼──────────────────┼──────────────────────┼──────────────┘
          │                  │                      │
          │                  ▼                      │
          │         ┌────────────────┐              │
          └────────▶│  API Gateway   │◀─────────────┘
                    │  (Next.js API) │
                    └────────┬───────┘
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
    ┌──────────┐      ┌──────────┐      ┌──────────┐
    │ GitHub   │      │ Database │      │  Auth    │
    │ API      │      │ (Postgres│      │ (Clerk/  │
    │ Client   │      │ Supabase)│      │  Auth0)  │
    └──────────┘      └──────────┘      └──────────┘
          │
          ▼
    ┌──────────────────────────────────┐
    │  GitHub Issues (Source of Truth) │
    │  - Issues with label "backlog"   │
    │  - GitHub Projects (Kanban)      │
    │  - Milestones (Sprints)          │
    └──────────────────────────────────┘
```

---

### Tech Stack

**Frontend (Client Portal):**
- **Framework:** Next.js 14 (App Router)
- **UI Library:** Shadcn/ui + Tailwind CSS
- **State Management:** React Query (server state) + Zustand (client state)
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **Drag-and-Drop:** dnd-kit
- **Markdown:** react-markdown
- **Deployment:** Vercel

**Backend (API Layer):**
- **Runtime:** Next.js API Routes (serverless)
- **GitHub Integration:** Octokit (GitHub REST API client)
- **Webhooks:** Next.js API route `/api/webhooks/github`
- **Background Jobs:** Vercel Cron or Inngest

**Database:**
- **Primary:** PostgreSQL (Supabase or Neon)
- **Cache:** Redis (Upstash)
- **File Storage:** AWS S3 or Vercel Blob

**Authentication:**
- **Provider:** Clerk or Auth0
- **Method:** Email + password, Google OAuth, SSO (SAML for enterprise)
- **Session:** JWT tokens (httpOnly cookies)

**Infrastructure:**
- **Hosting:** Vercel (frontend + API)
- **Monitoring:** Vercel Analytics + Sentry
- **Logging:** Axiom or LogTail

---

### Database Schema

```sql
-- Clients (tenants)
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL, -- "durdle"
  company_name TEXT NOT NULL,
  custom_domain TEXT UNIQUE,
  logo_url TEXT,
  primary_color TEXT DEFAULT '#3B82F6',
  github_repo TEXT NOT NULL, -- "flowency-live/Durdle"
  github_access_token TEXT NOT NULL ENCRYPTED,
  backlog_label TEXT DEFAULT 'backlog',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users (client team members)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL CHECK (role IN ('admin', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

-- Issues (cached from GitHub)
CREATE TABLE issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  github_issue_number INTEGER NOT NULL,
  github_issue_id BIGINT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  body TEXT,
  status TEXT NOT NULL, -- "open", "in_progress", "done"
  priority TEXT, -- "P0", "P1", "P2", "P3", "P4"
  effort TEXT, -- "XS", "S", "M", "L", "XL"
  assignee TEXT,
  milestone TEXT,
  created_by TEXT, -- GitHub username or client user ID
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  closed_at TIMESTAMPTZ,
  github_url TEXT NOT NULL,
  UNIQUE(client_id, github_issue_number)
);

-- Comments (cached from GitHub)
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id UUID REFERENCES issues(id) ON DELETE CASCADE,
  github_comment_id BIGINT UNIQUE,
  author TEXT NOT NULL, -- GitHub username or client user ID
  author_type TEXT NOT NULL CHECK (author_type IN ('github', 'portal')),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

-- Webhook Events (audit log)
CREATE TABLE webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- "issues.opened", "issue_comment.created"
  payload JSONB NOT NULL,
  processed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_issues_client_id ON issues(client_id);
CREATE INDEX idx_issues_status ON issues(status);
CREATE INDEX idx_issues_priority ON issues(priority);
CREATE INDEX idx_comments_issue_id ON comments(issue_id);
CREATE INDEX idx_webhook_events_client_id ON webhook_events(client_id);
```

---

### API Endpoints

**Authentication:**
```
POST   /api/auth/login           # Email + password login
POST   /api/auth/logout          # Logout
GET    /api/auth/session         # Get current user session
```

**Clients:**
```
GET    /api/clients/:clientId    # Get client details
PATCH  /api/clients/:clientId    # Update client (branding, settings)
POST   /api/clients/:clientId/sync # Force sync from GitHub
```

**Issues:**
```
GET    /api/clients/:clientId/issues                 # List all issues
GET    /api/clients/:clientId/issues/:issueNumber    # Get issue details
POST   /api/clients/:clientId/issues                 # Create issue (via Request Feature)
PATCH  /api/clients/:clientId/issues/:issueNumber    # Update issue (status, priority)
DELETE /api/clients/:clientId/issues/:issueNumber    # Delete issue
```

**Comments:**
```
GET    /api/issues/:issueId/comments                 # List comments
POST   /api/issues/:issueId/comments                 # Add comment
```

**Analytics:**
```
GET    /api/clients/:clientId/analytics              # Get dashboard metrics
GET    /api/clients/:clientId/analytics/velocity     # Completion velocity chart
```

**Webhooks:**
```
POST   /api/webhooks/github                          # GitHub webhook receiver
```

**Embed:**
```
GET    /api/embed/token                              # Generate embed authentication token
```

---

### GitHub API Integration

**Authentication:**
- Use GitHub Personal Access Token (PAT) or OAuth App
- Store encrypted in database per client
- Required scopes: `repo` (full repo access) or `public_repo` (if public repo only)

**API Calls:**

**List Issues:**
```typescript
GET /repos/{owner}/{repo}/issues?labels=backlog&state=open

// Response
[
  {
    "number": 123,
    "id": 1234567890,
    "title": "Admin Quote Management Dashboard",
    "body": "As an admin, I need to see all quotes...",
    "state": "open",
    "labels": [
      { "name": "backlog" },
      { "name": "P0-blocking" },
      { "name": "effort:M" }
    ],
    "assignee": { "login": "alex-dev" },
    "milestone": { "title": "Sprint 1" },
    "created_at": "2025-12-01T10:00:00Z",
    "updated_at": "2025-12-07T15:30:00Z",
    "html_url": "https://github.com/flowency-live/Durdle/issues/123"
  }
]
```

**Create Issue:**
```typescript
POST /repos/{owner}/{repo}/issues

// Request Body
{
  "title": "Add driver GPS tracking",
  "body": "## Feature Request\n\n**Requested by:** Sarah (Client)\n\nCustomers want to see driver location...",
  "labels": ["backlog", "client-request", "P2-high", "effort:L"]
}

// Response
{
  "number": 124,
  "id": 1234567891,
  "html_url": "https://github.com/flowency-live/Durdle/issues/124"
}
```

**Add Comment:**
```typescript
POST /repos/{owner}/{repo}/issues/{issue_number}/comments

// Request Body
{
  "body": "This is a great idea! We'll prioritize this for Sprint 3.\n\n*(Posted by Sarah via Flowency Portal)*"
}
```

**Webhook Configuration:**
```typescript
// Register webhook (one-time setup per client)
POST /repos/{owner}/{repo}/hooks

{
  "config": {
    "url": "https://flowency.app/api/webhooks/github",
    "content_type": "json",
    "secret": "webhook_secret_abc123"
  },
  "events": ["issues", "issue_comment", "label"],
  "active": true
}
```

---

## User Flows

### Flow 1: Client Requests Feature

1. **Client logs in** → `durdle.flowency.app`
2. **Navigates to "Request Feature"** → `/request`
3. **Fills form:**
   - Title: "Add SMS booking confirmations"
   - Description: "Customers want text message confirmations after booking"
   - Priority: P1 (Critical)
   - Effort: (leaves blank, will be estimated by engineer)
   - Uploads screenshot of competitor feature
4. **Clicks "Submit Request"**
5. **System creates GitHub issue:**
   - POST to GitHub API with label `backlog` + `client-request` + `P1-critical`
   - Uploads screenshot to S3, embeds URL in issue description
   - Adds comment: "Requested by Sarah (Durdle) via Flowency Portal"
6. **Success modal shows:**
   - "Feature request submitted! Tracking ID: #124"
   - Link to view issue in portal
7. **Engineer Alex gets GitHub notification:**
   - New issue #124 in GitHub
   - Sees label `client-request`, knows to prioritize
   - Estimates effort, adds label `effort:S`
8. **Client Sarah sees update:**
   - Refreshes backlog page
   - Issue #124 now shows "Effort: S"
   - Status: To Do
   - Assignee: Alex

---

### Flow 2: Engineer Updates Issue in GitHub

1. **Alex works in GitHub:**
   - Moves issue #124 to "In Progress" in GitHub Project
   - Adds comment: "Started work on SMS integration, using AWS SNS"
   - Links pull request: `Closes #124`
2. **GitHub webhook fires:**
   - Sends `issues.labeled` event to Flowency
   - Flowency updates database: `status = "in_progress"`
3. **Client Sarah refreshes portal:**
   - Issue #124 now in "In Progress" column
   - Sees Alex's comment
   - No action required, just visibility

---

### Flow 3: Client Comments on Issue

1. **Sarah views issue #124 in portal**
2. **Scrolls to comments section**
3. **Types comment:**
   - "This is great! Can we also add email confirmations in the same feature?"
4. **Clicks "Post Comment"**
5. **System adds comment to GitHub:**
   - POST to GitHub API
   - Comment text includes attribution: "*(Posted by Sarah via Flowency Portal)*"
6. **Alex sees GitHub notification:**
   - New comment on issue #124
   - Replies in GitHub: "Good idea, I'll include email too. No extra effort."
7. **Sarah sees reply in portal:**
   - Alex's comment appears in thread
   - Shows GitHub avatar + "Posted via GitHub" badge

---

## UI/UX Design

### Design Principles

1. **Client-First UX:** Non-technical users should feel comfortable, avoid GitHub jargon
2. **Mobile-Responsive:** Works on tablet/phone (50% of clients check backlog on mobile)
3. **Fast Load Times:** <1s page load, skeleton loaders for data fetching
4. **Accessible:** WCAG 2.1 AA compliance (keyboard navigation, screen reader support)
5. **White-Label Ready:** Easy to customize with client branding

### Color System

```typescript
// Default Theme
const theme = {
  primary: '#3B82F6',      // Blue (buttons, links)
  secondary: '#8B5CF6',    // Purple (accents)
  success: '#10B981',      // Green (completed items)
  warning: '#F59E0B',      // Amber (in-progress)
  danger: '#EF4444',       // Red (blocked, P0)
  neutral: '#6B7280',      // Gray (text, borders)
  background: '#FFFFFF',   // White
  surface: '#F9FAFB',      // Light gray (cards)
  text: {
    primary: '#111827',    // Black
    secondary: '#6B7280',  // Gray
    muted: '#9CA3AF'       // Light gray
  }
};

// Priority Colors
const priorityColors = {
  'P0': '#EF4444',  // Red (blocking)
  'P1': '#F59E0B',  // Amber (critical)
  'P2': '#3B82F6',  // Blue (high)
  'P3': '#10B981',  // Green (medium)
  'P4': '#6B7280'   // Gray (low)
};

// Effort Colors
const effortColors = {
  'XS': '#D1FAE5',  // Light green
  'S':  '#A7F3D0',  // Green
  'M':  '#FEF3C7',  // Yellow
  'L':  '#FED7AA',  // Orange
  'XL': '#FECACA'   // Red
};
```

### Key Pages Wireframes

**Page 1: Dashboard**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Durdle Backlog                            [Avatar]  │
├─────────────────────────────────────────────────────────────┤
│  Dashboard  |  Backlog  |  Roadmap  |  Request Feature      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Total Items  │  │ In Progress  │  │ Completed    │       │
│  │     42       │  │      8       │  │     15       │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                               │
│  Completion Velocity (Last 12 Weeks)                         │
│  ┌───────────────────────────────────────────────────┐       │
│  │            ▂▄▆█▇▅▃▁▂▄▆█                          │       │
│  └───────────────────────────────────────────────────┘       │
│                                                               │
│  Recent Activity                                              │
│  ┌───────────────────────────────────────────────────┐       │
│  │ • ADMIN-001 moved to In Progress      2 hours ago │       │
│  │ • PAYMENT-001 comment added           5 hours ago │       │
│  │ • BOOKING-002 completed               1 day ago   │       │
│  └───────────────────────────────────────────────────┘       │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Page 2: Backlog (Kanban View)**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Durdle Backlog                            [Avatar]  │
├─────────────────────────────────────────────────────────────┤
│  Dashboard  |  [Backlog]  |  Roadmap  |  Request Feature    │
├─────────────────────────────────────────────────────────────┤
│  [Search]  [Filter: Priority ▼]  [Filter: Effort ▼]         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  To Do (12)         In Progress (8)       Done (15)          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ ADMIN-001    │  │ PAYMENT-001  │  │ BOOKING-002  │       │
│  │ Admin Quote  │  │ Stripe       │  │ View Booking │       │
│  │ Dashboard    │  │ Integration  │  │              │       │
│  │              │  │              │  │ ✓ Completed  │       │
│  │ [P0] [M]     │  │ [P1] [L]     │  │ [P1] [M]     │       │
│  │ Alex         │  │ Sarah        │  │ Alex         │       │
│  │ 💬 3         │  │ 💬 7         │  │ 💬 2         │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │ ADMIN-002    │  │ INFRA-001    │                         │
│  │ Quote        │  │ Production   │                         │
│  │ Analytics    │  │ Setup        │                         │
│  │              │  │              │                         │
│  │ [P0] [M]     │  │ [P0] [M]     │                         │
│  │ Unassigned   │  │ Marcus       │                         │
│  │ 💬 1         │  │ 💬 0         │                         │
│  └──────────────┘  └──────────────┘                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Page 3: Request Feature Form**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Durdle Backlog                            [Avatar]  │
├─────────────────────────────────────────────────────────────┤
│  Dashboard  |  Backlog  |  Roadmap  |  [Request Feature]    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Request a New Feature                                        │
│                                                               │
│  Feature Title *                                              │
│  ┌─────────────────────────────────────────────────┐         │
│  │ Add SMS booking confirmations                   │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  Description *                                                │
│  ┌─────────────────────────────────────────────────┐         │
│  │ Customers want to receive text message         │         │
│  │ confirmations after booking. This would improve │         │
│  │ customer experience and reduce "where is my     │         │
│  │ confirmation?" support tickets.                 │         │
│  │                                                 │         │
│  │ Competitor Example: UberTaxi sends SMS within  │         │
│  │ 30 seconds of booking.                          │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  Priority *                                                   │
│  ┌─────────────────────────────────────────────────┐         │
│  │ [P1 - Critical ▼]                               │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  Attachments (optional)                                       │
│  ┌─────────────────────────────────────────────────┐         │
│  │ [📎 Upload Screenshots]                         │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  [ Cancel ]              [ Submit Request ]                   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Security & Privacy

### Authentication

**User Authentication:**
- Email + password with bcrypt hashing (cost factor 12)
- Optional 2FA via TOTP (Google Authenticator)
- Google OAuth for quick sign-in
- Session timeout: 7 days (remember me) or 24 hours (default)

**API Authentication:**
- JWT tokens in httpOnly cookies
- CSRF protection with double-submit cookie pattern
- API rate limiting: 100 req/min per user, 1000 req/min per client

### Authorization

**Role-Based Access Control (RBAC):**
- **Admin:** Full access (view, create, edit, delete, manage team)
- **Viewer:** Read-only access (view backlog, comment on issues)

**Permissions Matrix:**
| Action | Admin | Viewer |
|--------|-------|--------|
| View backlog | ✅ | ✅ |
| Create issue | ✅ | ✅ |
| Comment on issue | ✅ | ✅ |
| Edit issue | ✅ | ❌ |
| Delete issue | ✅ | ❌ |
| Manage team members | ✅ | ❌ |
| Edit branding | ✅ | ❌ |
| View GitHub link | ✅ | ❌ |

### Data Encryption

**At Rest:**
- Database: PostgreSQL with AES-256 encryption
- GitHub access tokens: Encrypted with AES-256-GCM + unique salt per client
- File uploads: S3 server-side encryption (SSE-S3)

**In Transit:**
- HTTPS/TLS 1.3 for all connections
- HTTP Strict Transport Security (HSTS) header
- Certificate pinning for API requests

### GitHub Security

**Access Token Management:**
- Store GitHub PAT encrypted in database
- Use least-privilege scopes (only `repo` or `public_repo`)
- Rotate tokens every 90 days (automated reminder)
- Webhook secret verification (HMAC SHA-256)

**Webhook Security:**
```typescript
// Verify GitHub webhook signature
function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}
```

### Privacy Compliance

**GDPR:**
- Data export: Client can download all their data as JSON
- Data deletion: Account deletion removes all data within 30 days
- Cookie consent: Banner for analytics cookies
- Privacy policy: Clear explanation of data usage

**Data Retention:**
- Issues: Retained indefinitely (synced from GitHub)
- Comments: Retained indefinitely (synced from GitHub)
- Webhook events: Deleted after 90 days
- User sessions: Deleted after expiry

---

## Deployment & DevOps

### Infrastructure

**Hosting:**
- **Frontend + API:** Vercel (serverless, auto-scaling)
- **Database:** Supabase or Neon (managed PostgreSQL)
- **Cache:** Upstash Redis (serverless Redis)
- **File Storage:** AWS S3 or Vercel Blob
- **CDN:** Vercel Edge Network (automatic)

**Environments:**
- **Production:** `flowency.app` (main branch)
- **Staging:** `staging.flowency.app` (develop branch)
- **Development:** `localhost:3000` (local dev)

### CI/CD Pipeline

**GitHub Actions Workflow:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npx playwright test # E2E tests
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

**Deployment Checklist:**
- [ ] Run linter (ESLint)
- [ ] Run type checker (TypeScript)
- [ ] Run unit tests (Jest)
- [ ] Run E2E tests (Playwright)
- [ ] Build passes without warnings
- [ ] Database migrations applied
- [ ] Environment variables verified
- [ ] Lighthouse score >90
- [ ] Deploy to staging first
- [ ] Manual QA on staging
- [ ] Deploy to production
- [ ] Smoke test production

### Monitoring & Alerts

**Uptime Monitoring:**
- Vercel uptime monitoring (built-in)
- Pingdom or Better Uptime (external check every 1 min)
- Alert via email + Slack if downtime >1 min

**Performance Monitoring:**
- Vercel Analytics for Web Vitals (LCP, FID, CLS)
- Sentry for error tracking (frontend + backend)
- LogTail for centralized logs

**Alerts:**
- Error rate >1% → Slack #alerts channel
- API latency p95 >500ms → Email to on-call engineer
- Database CPU >80% → Scale up automatically
- GitHub webhook failures → Retry 3x, then alert

### Backup & Disaster Recovery

**Database Backups:**
- Automated daily backups (Supabase built-in)
- Point-in-time recovery (7-day retention)
- Manual backup before major migrations

**Disaster Recovery Plan:**
- RTO (Recovery Time Objective): 2 hours
- RPO (Recovery Point Objective): 1 hour
- Runbook for common incidents (database corruption, API outage, GitHub API rate limit)

---

## Pricing & Business Model

### Pricing Tiers

**Tier 1: Starter (MVP)**
- Price: $29/client/month
- Features:
  - 1 GitHub repository
  - Unlimited issues
  - Unlimited team members
  - Kanban + List views
  - Request Feature form
  - Email support
- Target: Small agencies (1-5 clients)

**Tier 2: Professional (Future)**
- Price: $79/client/month
- Features:
  - Everything in Starter
  - Roadmap Timeline view
  - Analytics dashboard
  - Custom domain (e.g., `backlog.durdletransfers.co.uk`)
  - Priority support (Slack channel)
- Target: Mid-size agencies (5-20 clients)

**Tier 3: Enterprise (Future)**
- Price: Custom ($200+/client/month)
- Features:
  - Everything in Professional
  - White-label (remove Flowency branding)
  - SSO (SAML, Okta, Azure AD)
  - Dedicated account manager
  - SLA (99.9% uptime guarantee)
- Target: Large agencies (20+ clients)

### Revenue Projections

**Year 1:**
- Month 1-3: Beta (5 clients × $0 = $0)
- Month 4-6: Early adopters (10 clients × $29 = $290/month)
- Month 7-12: Growth (25 clients × $29 = $725/month)
- Total Year 1 Revenue: ~$5,000

**Year 2:**
- 100 clients × $50 avg = $5,000/month = $60,000/year
- Introduce Professional tier ($79), 30% of clients upgrade

---

## MVP Scope & Roadmap

### MVP Features (Launch in 4-6 Weeks)

**MUST HAVE:**
1. GitHub Issues sync (bidirectional)
2. Client portal with authentication
3. Kanban board view
4. Request Feature form
5. Issue detail view with comments
6. Basic analytics dashboard
7. Multi-tenant subdomain routing

**NICE TO HAVE (post-MVP):**
- Roadmap timeline view
- Embeddable widget
- Custom domain support
- Advanced filtering (search by keyword, date range)
- Email notifications (daily digest of backlog changes)

### Development Roadmap

**Week 1-2: Foundation**
- Set up Next.js project
- Database schema + migrations
- Authentication (Clerk integration)
- Multi-tenant routing (subdomain detection)

**Week 3-4: GitHub Integration**
- Octokit client setup
- Sync issues from GitHub (initial load + incremental)
- Webhook receiver (issues, comments)
- Create issue API (Request Feature form)

**Week 5-6: UI & Polish**
- Kanban board component
- Issue detail modal
- Analytics dashboard
- Responsive design (mobile)
- Testing (E2E + unit tests)

**Week 7: Beta Launch**
- Deploy to production (Vercel)
- Onboard 5 beta clients (including Durdle)
- Collect feedback
- Bug fixes

**Week 8+: Iteration**
- Roadmap timeline view
- Embeddable widget
- Custom domains
- Advanced features based on feedback

---

## Success Metrics

### Technical Metrics

**Performance:**
- Page load time (p50): <800ms
- Page load time (p95): <1.5s
- API latency (p50): <100ms
- API latency (p95): <200ms
- Lighthouse score: >90 (all categories)

**Reliability:**
- Uptime: 99.9% (max 43 minutes downtime/month)
- Error rate: <0.1% (1 error per 1000 requests)
- GitHub sync lag: <30 seconds (webhook to database update)

### Product Metrics

**Adoption:**
- Active clients: 25 (by Month 6)
- Active users: 100 (avg 4 users per client)
- DAU/MAU ratio: >40% (users return frequently)

**Engagement:**
- Client-created issues: 50% of total issues
- Comments per issue: >3 (healthy discussion)
- Time to first comment: <24 hours

**Satisfaction:**
- Net Promoter Score (NPS): >50
- Client retention: >90% after 6 months
- Support tickets per client: <1/month

---

## Risks & Mitigations

### Risk 1: GitHub API Rate Limits

**Risk:** GitHub API has rate limit of 5,000 req/hour (authenticated)
**Impact:** Sync may fail for large backlogs or high-traffic clients
**Likelihood:** Medium
**Mitigation:**
- Cache issues in database (reduce API calls)
- Use conditional requests (`If-None-Match` header)
- Implement exponential backoff on rate limit errors
- Upgrade to GitHub Enterprise if needed (higher limits)

---

### Risk 2: Client Adoption (Chicken-Egg Problem)

**Risk:** Clients may not adopt if engineers don't use GitHub Issues
**Impact:** Product has no users
**Likelihood:** Low (targeting agencies already using GitHub)
**Mitigation:**
- Focus sales on agencies using GitHub for development
- Offer migration service from Jira/Linear to GitHub Issues
- Create GitHub Issues templates to make adoption easier

---

### Risk 3: Security Breach (GitHub Tokens Leaked)

**Risk:** Attacker gains access to encrypted GitHub tokens
**Impact:** Could read/write to client repositories
**Likelihood:** Very Low
**Mitigation:**
- Encrypt tokens with AES-256-GCM + unique salt per client
- Store encryption keys in separate secret manager (Vault)
- Implement token rotation every 90 days
- Monitor for unusual GitHub API activity
- Have incident response plan ready

---

### Risk 4: Competing Products (Linear, Jira)

**Risk:** Large players add GitHub-backed backlog features
**Impact:** Market becomes saturated
**Likelihood:** Low (Linear/Jira want to own the data)
**Mitigation:**
- Focus on niche: Consultancies with client-facing needs
- Faster iteration than enterprise competitors
- White-label option (not available in Linear/Jira)
- Lower price point ($29 vs $120+/month)

---

## Open Questions

**For Product:**
1. Should we support GitLab/Bitbucket or GitHub-only?
2. Do clients want mobile app or is responsive web enough?
3. Should we build in-app notifications or rely on email?

**For Engineering:**
1. PostgreSQL vs MongoDB for database? (Leaning PostgreSQL)
2. Clerk vs Auth0 vs Supabase Auth? (Leaning Clerk)
3. Real-time updates via WebSocket or polling?

**For Business:**
1. Should we offer annual discount (save 20%)?
2. Free trial length: 14 days or 30 days?
3. Freemium model (1 client free forever) or paid-only?

---

## Appendix

### A. GitHub Issue Templates

**Template: PBI (Product Backlog Item)**
```markdown
---
name: Product Backlog Item
about: Feature request or enhancement
title: '[PBI] '
labels: backlog
assignees: ''
---

## User Story
As a [persona], I need [goal] so that [benefit].

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Priority
<!-- Select one: P0 (Blocking), P1 (Critical), P2 (High), P3 (Medium), P4 (Low) -->
- [ ] P0 - Blocking
- [ ] P1 - Critical
- [ ] P2 - High
- [ ] P3 - Medium
- [ ] P4 - Low

## Effort
<!-- Select one: XS, S, M, L, XL (optional, can be estimated by engineer) -->
- [ ] XS (Extra Small)
- [ ] S (Small)
- [ ] M (Medium)
- [ ] L (Large)
- [ ] XL (Extra Large)

## Additional Context
<!-- Screenshots, mockups, links to related issues -->
```

---

### B. Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:pass@host:5432/flowency_backlog
DATABASE_DIRECT_URL=postgresql://user:pass@host:5432/flowency_backlog

# Redis Cache
REDIS_URL=redis://user:pass@host:6379

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx
CLERK_SECRET_KEY=sk_live_xxx

# GitHub
GITHUB_CLIENT_ID=Iv1.xxx
GITHUB_CLIENT_SECRET=xxx
GITHUB_WEBHOOK_SECRET=webhook_secret_xxx

# AWS S3 (File Uploads)
AWS_ACCESS_KEY_ID=AKIAXXXXX
AWS_SECRET_ACCESS_KEY=xxx
AWS_S3_BUCKET_NAME=flowency-backlog-uploads
AWS_REGION=eu-west-2

# Monitoring
SENTRY_DSN=https://xxx@sentry.io/xxx
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxx

# Encryption
ENCRYPTION_KEY=base64_encoded_32_byte_key
```

---

### C. API Response Format

**Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-123",
    "title": "Admin Quote Dashboard",
    "status": "in_progress",
    "priority": "P0",
    "effort": "M"
  },
  "meta": {
    "timestamp": "2025-12-07T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required",
    "details": [
      {
        "field": "title",
        "message": "Title must be at least 5 characters"
      }
    ]
  },
  "meta": {
    "timestamp": "2025-12-07T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

---

## Conclusion

**Flowency Builder Backlog** solves a real pain point for software consultancies: Client collaboration on product roadmaps without tool fragmentation.

**Key Differentiators:**
- GitHub as single source of truth (no sync overhead)
- Client-friendly UI (non-technical users comfortable)
- Multi-tenant SaaS (one deployment, unlimited clients)
- Embeddable (integrate into client admin dashboards)
- Affordable ($29/client vs $120+ for Jira)

**Next Steps:**
1. Review this spec with stakeholders
2. Set up Next.js project repository
3. Start Week 1-2 foundation work
4. Launch beta with 5 clients in 6 weeks

**Let's build this.**

---

**Document Version:** 1.0.0
**Last Updated:** December 7, 2025
**Prepared By:** CTO (Flowency)

---

*For questions or feedback on this spec, please comment in the GitHub discussion or reach out via Slack.*
