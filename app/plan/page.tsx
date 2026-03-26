import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft, FileEdit, MessageSquare, CheckSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Business Plan | Working Document',
  description: 'Collaborative business plan working document',
  robots: 'noindex, nofollow', // Keep this private from search engines
}

// Read the markdown file at build time
async function getDocument() {
  const filePath = path.join(process.cwd(), '.Documentation', 'BUSINESS_PLAN_WORKING.md')

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return content
  } catch {
    return '# Document not found\n\nThe working document could not be loaded.'
  }
}

// Simple markdown to HTML (basic conversion)
function parseMarkdown(markdown: string): string {
  let html = markdown
    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-foreground mt-6 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-foreground mt-8 mb-3 pb-2 border-b border-border">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-foreground mb-4">$1</h1>')
    // Bold and Italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-primary/50 pl-4 py-1 my-4 text-muted-foreground italic">$1</blockquote>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="my-8 border-border" />')
    // Code inline
    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">$1</code>')
    // Checkboxes
    .replace(/- \[x\] (.*$)/gim, '<div class="flex items-center gap-2 my-1"><span class="w-4 h-4 rounded border border-primary bg-primary/20 flex items-center justify-center text-xs text-primary">✓</span><span class="line-through text-muted-foreground">$1</span></div>')
    .replace(/- \[ \] (.*$)/gim, '<div class="flex items-center gap-2 my-1"><span class="w-4 h-4 rounded border border-border"></span><span>$1</span></div>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4 my-1">$1</li>')
    // Ordered lists (basic)
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 my-1 list-decimal">$1</li>')
    // Tables (basic support)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.every(c => /^[-:]+$/.test(c.trim()))) {
        return '' // Skip separator row
      }
      const cellHtml = cells.map(c => `<td class="border border-border px-3 py-2">${c.trim()}</td>`).join('')
      return `<tr>${cellHtml}</tr>`
    })
    // Paragraphs (lines with content)
    .replace(/^(?!<[hbl]|<tr|<div|<hr|<block)(.+)$/gim, '<p class="my-2 text-muted-foreground">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="my-2 text-muted-foreground"><\/p>/g, '')

  // Wrap consecutive table rows in table tags
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table class="w-full border-collapse my-4 text-sm">$&</table>')

  // Wrap consecutive list items in ul tags
  html = html.replace(/(<li class="ml-4 my-1">[\s\S]*?<\/li>)+/g, '<ul class="my-2">$&</ul>')

  return html
}

export default async function PlanPage() {
  const document = await getDocument()
  const htmlContent = parseMarkdown(document)

  // Get last modified time
  const filePath = path.join(process.cwd(), '.Documentation', 'BUSINESS_PLAN_WORKING.md')
  let lastModified = 'Unknown'
  try {
    const stats = fs.statSync(filePath)
    lastModified = stats.mtime.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    // Ignore
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Internal Working Document
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {lastModified}
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/flowency-live/opsstack-website/blob/main/.Documentation/BUSINESS_PLAN_WORKING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <FileEdit className="w-4 h-4" />
                  Edit on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Add Comment</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Edit the document and add your comments at the bottom
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-2 mb-2">
              <CheckSquare className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Agree Action</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Move items to "Agreed" section when both approve
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary text-lg">⚡</span>
              <span className="font-medium text-sm">Execute</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Claude reads agreed items and can implement changes
            </p>
          </div>
        </div>

        {/* Document Content */}
        <article
          className="prose prose-invert max-w-none bg-card border border-border rounded-lg p-6 md:p-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Footer */}
        <div className="mt-8 p-4 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">How this works:</strong> Edit the markdown file directly via GitHub or your IDE.
            Move agreed items to the "Agreed (Ready to Execute)" section.
            Claude will see these and can implement the changes on request.
          </p>
        </div>
      </div>
    </main>
  )
}
