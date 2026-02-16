import SectionReveal from "./SectionReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const challenges = [
  {
    trap: '"We need Salesforce"',
    reality: "Salesforce is built for enterprises with dedicated admins, six-figure budgets, and complex multi-division structures. You need a system that works for your business - not one that requires a consultant to configure.",
    slug: "salesforce",
  },
  {
    trap: '"We need HubSpot"',
    reality: "HubSpot is a marketing machine that happens to have a CRM bolted on. If you're not running content campaigns to thousands of leads, you're paying for an engine you'll never start.",
    slug: "hubspot",
  },
  {
    trap: '"We need Monday / Asana"',
    reality: "Project management tools are great at tracking tasks. But your business isn't a series of tasks - it's relationships, jobs, margins, and operational flow. A colourful Kanban board won't show you what's actually making money.",
    slug: "monday",
  },
  {
    trap: '"We need Jira & Confluence"',
    reality: "Atlassian tools are built for software teams shipping code. If your operation isn't sprints and user stories, you're forcing your business into a developer's workflow - and paying enterprise prices for it.",
    slug: "jira",
  },
  {
    trap: '"We need SharePoint"',
    reality: "SharePoint is where documents go to hide. It's a file system dressed up as collaboration. Your business needs workflows, not folder structures - and definitely not another Microsoft login.",
    slug: "sharepoint",
  },
];

const BigSaasChallenge = () => {
  return (
    <section className="relative py-20 lg:py-28 section-dark-enhanced section-grain">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-12">
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
                The enterprise software trap
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                You don&apos;t need{" "}
                <span className="text-primary">their software</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Enterprise tools are built for enterprises. They&apos;re designed for scale you don&apos;t have,
                complexity you don&apos;t need, and budgets you shouldn&apos;t spend. Here&apos;s the truth:
              </p>
            </div>

            {/* Challenge Cards */}
            <div className="space-y-4 mb-12">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="reveal-child group glass-card p-6 card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* The trap */}
                    <div className="flex-shrink-0 md:w-56">
                      <span className="text-lg font-semibold text-destructive/80 line-through decoration-2">
                        {challenge.trap}
                      </span>
                    </div>

                    {/* The reality */}
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge.reality}
                      </p>
                    </div>

                    {/* Learn more link */}
                    <div className="flex-shrink-0">
                      <Link
                        href={`/vs-${challenge.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Compare
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <div className="glass-card p-8 border-primary/20">
              <p className="text-xl font-semibold text-foreground mb-3">
                What you actually need:
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                A system built for your business. Your workflows, your language, your data -
                in one place. No enterprise bloat. No consultant required. No features you&apos;ll never use.
              </p>
              <p className="text-primary font-medium">
                That&apos;s what we build.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default BigSaasChallenge;
