import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Zap,
  TrendingDown,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Euro,
  Clock,
  Users,
  Sliders,
  Copy,
  Check,
  LayoutGrid,
  Maximize2,
  Sparkles,
  Code2,
  Workflow,
  Building2,
  Calculator
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('slide'); // 'slide' | 'scroll'
  const [archMode, setArchMode] = useState('after'); // 'before' | 'after'
  const [activeBlueprint, setActiveBlueprint] = useState(0);
  const [copiedAudit, setCopiedAudit] = useState(false);

  // Interactive ROI Calculator State
  const [monthlySaasSpend, setMonthlySaasSpend] = useState(1200);
  const [weeklyManualHours, setWeeklyManualHours] = useState(12);
  const [reductionRate, setReductionRate] = useState(85); // 70% to 100%
  const hourlyTeamCost = 38; // Conservative €38/hr loaded Berlin ops/sales rate

  const totalSlides = 7;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'slide') return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextSlide, prevSlide]);

  // ROI Calculations
  const monthlyTaskSavings = Math.round(monthlySaasSpend * (reductionRate / 100));
  const monthlyTimeValueSaved = Math.round(weeklyManualHours * 4.33 * hourlyTeamCost * 0.8);
  const totalMonthlySavings = monthlyTaskSavings + monthlyTimeValueSaved;
  const annualSavings = totalMonthlySavings * 12;
  const avgProjectFee = 2500;
  const paybackMonths = totalMonthlySavings > 0 ? (avgProjectFee / totalMonthlySavings).toFixed(1) : '0';

  const handleCopyAuditPrompt = () => {
    const auditText = `Hi Prajjwol, we'd like to book a 15-Minute Task & Token Audit.\n\n• Current Monthly Make/Zapier/SaaS Spend: ~€${monthlySaasSpend}/mo\n• Manual Weekly Admin Hours: ~${weeklyManualHours} hrs/week\n• Target Model: ${totalMonthlySavings > 2000 ? 'Fractional Retainer / Custom Build' : 'Single Cost-Cutter Project'}`;
    navigator.clipboard.writeText(auditText);
    setCopiedAudit(true);
    setTimeout(() => setCopiedAudit(false), 3000);
  };

  const slideTitles = [
    '01. Executive Positioning',
    '02. The Automation Trap',
    '03. The In-House Math Paradox',
    '04. Hybrid Native Architecture',
    '05. Proven Client Blueprints',
    '06. ROI Calculator & Pricing',
    '07. 15-Min Task & Token Audit'
  ];

  // Blueprint Data (100% Anonymized by Industry)
  const blueprints = [
    {
      tag: '100% Internal Task Elimination',
      industry: 'B2B Sales & Digital Services Agencies',
      title: 'Zero-Token CRM-to-Document & AI Call Summary Pipeline',
      problem:
        'Every time a sales rep completed a discovery call or updated a deal stage in the CRM, a 7-step Make/Zapier scenario triggered—burning thousands of monthly operations and AI tokens to summarize transcripts, build Google Docs, export PDFs, and email the team.',
      solution:
        'Replaced 100% of the third-party middleware tasks with a direct CRM Webhook listener built in Google Apps Script. The script ingests the payload natively, summarizes the transcript via direct API, populates a structured Google Doc template, compiles a PDF in Drive, and routes team emails.',
      metrics: [
        { label: 'Middleware Tasks Cut', value: '100%', sub: '€0/mo recurring task fees', bg: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
        { label: 'Admin Time Saved', value: '25 mins', sub: 'Per sales call automatically', bg: 'bg-sky-50 border-sky-200 text-sky-800' },
        { label: 'Execution Speed', value: '< 4 sec', sub: 'Direct webhook-to-Drive', bg: 'bg-violet-50 border-violet-200 text-violet-800' }
      ],
      flow: ['CRM Stage Webhook', 'Apps Script Endpoint', 'Direct AI Summary', 'Auto Google Doc + PDF', 'Team Gmail Dispatch']
    },
    {
      tag: '~70% Hybrid Task Deflation',
      industry: 'Regional Home & Commercial Services Network',
      title: 'Automated Multi-Partner Lead Splitter & Call-Tracking Engine',
      problem:
        'High-frequency polling and row-by-row updates across dozens of regional partner spreadsheets caused massive monthly task overages on third-party automation tools, alongside frequent timeout errors and manual copy-paste fixes.',
      solution:
        'Kept external ad/call triggers ultra-lean while offloading all heavy filtering, data normalization, and multi-sheet partitioning to a batch-optimized Google Apps Script engine with automated timeout protection.',
      metrics: [
        { label: 'Monthly Token Drop', value: '~70%', sub: 'Downgraded to lean base tier', bg: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
        { label: 'Manual Sheet Errors', value: '0%', sub: 'Fully deterministic routing', bg: 'bg-sky-50 border-sky-200 text-sky-800' },
        { label: 'Partner Scaling', value: 'Unlimited', sub: 'No per-row or per-seat cost', bg: 'bg-amber-50 border-amber-200 text-amber-800' }
      ],
      flow: ['Ad & Call Ingestion', 'Single Lean Webhook', 'Apps Script Batch Engine', 'Dynamic Partner Split', 'Isolated Live Sheets']
    },
    {
      tag: 'Zero Per-Seat SaaS Licenses',
      industry: 'Facility Management, Automotive & Trade Publishing',
      title: 'Bespoke Internal Micro-Apps, Calculators & Headless Portals',
      problem:
        'Companies were paying €30–€80/user/month across rigid SaaS tools for workforce time tracking, dealer package pricing, field crew surveys, and content publishing—while using less than 15% of the software features.',
      solution:
        'Rapidly engineered and handed over custom browser-based web apps and Google Workspace-backed systems: German Minijob/contractor ERP timers, self-service dealer pricing calculators, offline field survey apps, and Google Sheet Headless CMS portals.',
      metrics: [
        { label: 'Per-Seat License Cost', value: '€0 / user', sub: '100% client-owned code', bg: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
        { label: 'Build Turnaround', value: 'Days', sub: 'AI-accelerated prototyping', bg: 'bg-sky-50 border-sky-200 text-sky-800' },
        { label: 'Team Adoption', value: '100%', sub: 'Built around exact workflow', bg: 'bg-violet-50 border-violet-200 text-violet-800' }
      ],
      flow: ['Google Sheets / Docs DB', 'Custom Serverless API', 'Tailored React/Web UI', 'Role-Based Access', '100% Client Handover']
    }
  ];

  // Render Individual Slides
  const renderSlideContent = (index) => {
    switch (index) {
      case 0:
        return (
          <div className="flex flex-col justify-between h-full space-y-8">
            {/* Top Badge Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 border border-teal-300 flex items-center justify-center font-bold text-teal-900 text-lg shadow-sm">
                  PB
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold tracking-tight flex items-center gap-2">
                    Prajjwol Bhattarai
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-semibold">
                      Berlin, Germany
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600">
                    Independent Marketing Operations & Workflow Automation Consultant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 bg-amber-50/80 border border-amber-200 px-3.5 py-2 rounded-xl font-medium">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Executive B2B Proposal • Single Project & Fractional Retainer</span>
              </div>
            </div>

            {/* Hero Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-xs font-semibold">
                  <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                  Stop Paying the Runaway "Automation & Token Tax"
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Slash Your Automation & AI Token Bills by{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-sky-700">
                    70%–100%
                  </span>{' '}
                  Without Changing How Your Team Works.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  We re-engineer expensive, task-heavy middleware loops into lean{' '}
                  <span className="text-slate-900 font-semibold">Google Workspace automations, custom webhooks, and tailored AI micro-apps</span>—cutting recurring SaaS overhead while eliminating manual team admin.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setCurrentSlide(5)}
                    className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition flex items-center gap-2 shadow-md shadow-teal-600/15 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4" />
                    Calculate Your Monthly Savings
                  </button>
                  <button
                    onClick={() => setCurrentSlide(3)}
                    className="px-5 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 font-semibold text-sm border border-sky-200 transition flex items-center gap-2 cursor-pointer"
                  >
                    <Workflow className="w-4 h-4 text-sky-700" />
                    See the 70%–100% Architecture
                  </button>
                </div>
              </div>

              {/* Right Visual Architecture Card */}
              <div className="lg:col-span-5 bg-[#F8FAFC] border border-stone-200 rounded-2xl p-6 relative overflow-hidden shadow-md">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
                  <span>Live Optimization Benchmark</span>
                  <span className="text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" /> Verified Impact
                  </span>
                </div>

                {/* Before / After Mini Visual */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-rose-50/90 border border-rose-200">
                    <div className="flex justify-between items-center text-xs text-rose-900 font-semibold mb-1.5">
                      <span>BEFORE: Bloated Middleware + Per-Seat SaaS</span>
                      <span className="font-extrabold text-rose-700">€1,450 / mo</span>
                    </div>
                    <div className="w-full bg-rose-200/70 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-full rounded-full" />
                    </div>
                    <p className="text-[11px] text-rose-800/80 mt-2">
                      150,000+ metered tasks/mo, multi-step polling loops, AI token markups & manual spreadsheet glue.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-600" /> Offload Heavy Lifting to Native Apps Script & Webhooks
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200">
                    <div className="flex justify-between items-center text-xs text-emerald-900 font-semibold mb-1.5">
                      <span>AFTER: Lean Hybrid / Native Workspace Stack</span>
                      <span className="font-extrabold text-emerald-700">€0 – €190 / mo</span>
                    </div>
                    <div className="w-full bg-emerald-200/70 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[16%] rounded-full" />
                    </div>
                    <p className="text-[11px] text-emerald-900/80 mt-2">
                      <strong>70% reduction</strong> on external hybrid flows & <strong>100% elimination</strong> on internal CRM-to-Workspace workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Executive KPI Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white text-emerald-700 border border-emerald-200 shadow-xs">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">70% – 100%</div>
                  <div className="text-xs font-bold text-emerald-900">Monthly Task & Token Reduction</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Keep your existing tools, but stop paying per-row and per-step execution penalties.
                  </p>
                </div>
              </div>

              <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white text-sky-700 border border-sky-200 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">100% Client Owned</div>
                  <div className="text-xs font-bold text-sky-900">Zero Per-Seat License Creep</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Runs natively inside the Google Workspace and cloud accounts you already pay for.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white text-amber-700 border border-amber-200 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">~2.5 Months</div>
                  <div className="text-xs font-bold text-amber-900">Average Full Project Payback</div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Scoped so your monthly software and admin savings rapidly outpace our fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                The Industry Shift • Why Costs Have Exploded
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The New "Automation Trap": Why Your Monthly Bills Are Skyrocketing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
                Over the past 3 years, rapid advancements in AI and no-code tools made it easy to wire your entire company together. Now that your team is deeply dependent on these workflows, platforms have aggressively shifted their pricing models.
              </p>
            </div>

            {/* 3 Core Pain Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-auto">
              {/* Card 1 */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-white text-rose-600 border border-rose-200 shadow-xs">
                      <Layers className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                      Cost Driver #1
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    1. Metered Task & Loop Inflation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    Platforms like Zapier and Make.com charge for every filter, array iterator, lookup, and formatting step. A single lead update or 500-row spreadsheet sync can quietly burn <strong>1,500+ tasks in minutes</strong>.
                  </p>
                </div>

                <div className="bg-white border border-rose-200 rounded-xl p-3.5 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">
                    Typical "Silent" Task Multiplier:
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span>100 Deals/wk × 12 Steps × Polling</span>
                    <span className="text-rose-700 font-extrabold">~180k Tasks/mo</span>
                  </div>
                  <div className="text-[11px] text-rose-800 pt-1 border-t border-rose-100">
                    Result: Forced upgrades into €400–€1,500+/mo enterprise tiers.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-white text-amber-600 border border-amber-200 shadow-xs">
                      <Cpu className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                      Cost Driver #2
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    2. AI Credit & Token Markups
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    Using built-in "AI Steps" inside no-code platforms or third-party wrappers often carries a <strong>3x to 10x markup</strong> compared to calling Gemini/OpenAI APIs directly via lightweight scripts.
                  </p>
                </div>

                <div className="bg-white border border-amber-200 rounded-xl p-3.5 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">
                    Call Transcript Summary Comparison:
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span>Middleware AI Credits:</span>
                    <span className="text-amber-700 font-extrabold">€250 – €600 / mo</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span>Direct API via Apps Script:</span>
                    <span className="text-teal-700 font-extrabold">~€8 – €15 / mo</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-violet-50/60 border border-violet-200 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-white text-violet-600 border border-violet-200 shadow-xs">
                      <Users className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-100 text-violet-900 border border-violet-200">
                      Cost Driver #3
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    3. Per-Seat SaaS & "Human Glue"
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    Teams pay €30–€80/seat for scheduling tools, dashboards, and form apps where they only use <strong>10% of the features</strong>—yet sales and ops staff still spend hours every Monday cleaning up spreadsheets.
                  </p>
                </div>

                <div className="bg-white border border-violet-200 rounded-xl p-3.5 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">
                    Hidden Operational Drain:
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <span>10 hrs/wk Manual Admin + 15 Seats</span>
                    <span className="text-violet-700 font-extrabold">€2,200+ / mo</span>
                  </div>
                  <div className="text-[11px] text-violet-800 pt-1 border-t border-violet-100">
                    High recurring burn for rigid tools that still require manual work.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white text-teal-700 border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong>The Core Realization:</strong> You already pay for <strong>Google Workspace</strong> (Sheets, Docs, Drive, Gmail, Apps Script) and your <strong>CRM</strong>. You don't need to rent expensive middleware to make them talk to each other.
                </p>
              </div>
              <button
                onClick={() => setCurrentSlide(2)}
                className="shrink-0 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                Why Not Hire In-House? <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold mb-3">
                <Euro className="w-3.5 h-3.5 text-sky-700" />
                Financial Reality Check • German & European Market
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Hiring a Full-Time Employee to Fix This Fails the Math
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
                When automation bills hit €1,500–€3,000/month, leadership often thinks: <em>"Let's hire an internal Operations Engineer or Developer to build this in-house."</em> In Germany, the math makes that a costly mistake.
              </p>
            </div>

            {/* Visual Cost Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto">
              {/* Left: Bar Comparison Visual */}
              <div className="lg:col-span-7 bg-[#F8FAFC] border border-stone-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Monthly Total Cost of Ownership (Berlin / DACH Benchmark)
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Comparing the real monthly cash outflow of your three options:
                  </p>
                </div>

                <div className="space-y-6 my-auto">
                  {/* Option 1: Full-Time Hire */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        1. In-House Full-Time Marketing Ops / Automation Hire
                      </span>
                      <span className="font-extrabold text-rose-700 text-base">€6,800 – €8,500 / mo</span>
                    </div>
                    <div className="w-full bg-rose-100 h-7 rounded-lg overflow-hidden border border-rose-200 p-1">
                      <div className="bg-rose-300 h-full w-full rounded flex items-center justify-end pr-3 text-[11px] font-bold text-rose-950">
                        €65k–€85k Base + ~21% Lohnnebenkosten + Recruiting + Tooling
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      <strong>The Paradox:</strong> Spending €7,500/mo on fixed payroll just to save €1,500–€2,500/mo in automation tokens creates a <strong>€5,000+/mo net loss</strong>.
                    </p>
                  </div>

                  {/* Option 2: Doing Nothing (Status Quo) */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        2. Status Quo (Bloated Make/Zapier Tiers + Manual Team Hours)
                      </span>
                      <span className="font-extrabold text-amber-700 text-base">€1,800 – €3,800 / mo</span>
                    </div>
                    <div className="w-full bg-amber-100 h-7 rounded-lg overflow-hidden border border-amber-200 p-1">
                      <div className="bg-amber-300 h-full w-[48%] rounded flex items-center justify-end pr-3 text-[11px] font-bold text-amber-950">
                        Recurring Margin Bleed
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      <strong>The Trap:</strong> Costs scale linearly with every new lead, sales call, and team member you add.
                    </p>
                  </div>

                  {/* Option 3: Independent Consultant (Project or Retainer) */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-teal-900 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                        3. Independent Specialist (One-Time Build or Fractional Retainer)
                      </span>
                      <span className="font-extrabold text-teal-700 text-base">Net Cash-Flow Positive</span>
                    </div>
                    <div className="w-full bg-emerald-100 h-7 rounded-lg overflow-hidden border border-emerald-300 p-1">
                      <div className="bg-emerald-300 h-full w-[22%] rounded flex items-center justify-end pr-2 text-[11px] font-bold text-emerald-950">
                        80% Less
                      </div>
                    </div>
                    <p className="text-[11px] text-teal-800">
                      <strong>The Sweet Spot:</strong> Pay once (€1,800–€3,500) to eliminate the bottleneck permanently, or retain fractional senior ops (€1,250–€2,400/mo) with zero employer tax overhead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Why Independent Consulting Wins */}
              <div className="lg:col-span-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                    Executive Summary
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Why a Project or Fractional Retainer Is the Only Model That Offsets the Cost
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-white text-teal-700 border border-emerald-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">No Full-Time Workload Required</h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          You don't need 40 hours/week of coding. You need high-leverage architecture built once, stress-tested, and maintained for a few hours a month.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-white text-teal-700 border border-emerald-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Pre-Built Blueprints & Battle-Tested Code</h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Instead of paying an employee for 3 months to figure out Apps Script batching, CRM webhooks, and AI prompt structures, we deploy proven architectures in days.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-white text-teal-700 border border-emerald-200 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Dual Ops + Growth Fluency</h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Pure developers don't understand CAC, ROAS, or Close CRM sales pipelines. Pure marketers can't write serverless webhook code. You get both in one seat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-200">
                  <div className="text-xs font-bold text-teal-800">
                    The Golden Rule of Our Engagement:
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    If our build or retainer does not save you significantly more in SaaS bills, automation tokens, and team capacity than it costs, <strong>we will tell you upfront on the audit call.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col justify-between h-full space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-2">
                  <Workflow className="w-3.5 h-3.5 text-teal-600" />
                  Technical Strategy • Smart Hybrid & Native Offloading
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  We Don't Rip Out Your Stack—We Re-Engineer the Heavy Lifting
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                  Toggle below to see how we cut monthly task consumption by <strong>70% on hybrid external flows</strong> and <strong>100% on internal Workspace workflows</strong>.
                </p>
              </div>

              {/* Interactive Toggle Switch */}
              <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200 shrink-0">
                <button
                  onClick={() => setArchMode('before')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                    archMode === 'before'
                      ? 'bg-rose-200 text-rose-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  BEFORE: Metered Middleware (100% Cost)
                </button>
                <button
                  onClick={() => setArchMode('after')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                    archMode === 'after'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AFTER: Hybrid Native Architecture (-70% to -100%)
                </button>
              </div>
            </div>

            {/* Interactive Architecture Diagram Canvas */}
            <div className="bg-[#F8FAFC] border border-stone-200 rounded-2xl p-6 my-auto relative overflow-hidden">
              {archMode === 'before' ? (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold">
                        EXPENSIVE STATUS QUO
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        Every Single Step, Filter, Loop & AI Prompt Is Metered
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-rose-700">
                      ~15 to 40 Tasks Burned Per Single Lead Execution
                    </span>
                  </div>

                  {/* Flow Nodes - BEFORE */}
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
                    {[
                      { step: 'Step 1', title: 'CRM / Ad Trigger', sub: 'High-frequency polling every 5 mins', cost: 'Metered Task' },
                      { step: 'Step 2', title: 'Filter & Router', sub: 'Checks status & partner region', cost: '+2 Tasks' },
                      { step: 'Step 3', title: 'Iterator Loop', sub: 'Loops through 20 line items/rows', cost: '+20 Tasks' },
                      { step: 'Step 4', title: 'Middleware AI', sub: 'Summarizes call transcript', cost: 'High AI Credit Markup' },
                      { step: 'Step 5', title: 'Google Docs/Sheets', sub: 'Creates doc & updates rows', cost: '+4 Tasks' },
                      { step: 'Step 6', title: 'PDF & Email', sub: 'Exports file & sends Gmail', cost: '+2 Tasks' }
                    ].map((node, i) => (
                      <div key={i} className="bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 relative">
                        <div className="text-[10px] font-bold uppercase text-rose-700 mb-1">{node.step}</div>
                        <div className="text-xs font-bold text-slate-900 mb-1">{node.title}</div>
                        <div className="text-[11px] text-slate-600 mb-3 leading-snug">{node.sub}</div>
                        <div className="text-[10px] font-bold px-2 py-1 rounded bg-white text-rose-800 border border-rose-200 inline-block">
                          💸 {node.cost}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-rose-950">
                      <strong>Why This Bleeds Cash:</strong> You are using Make.com or Zapier as a <em>compute engine</em> instead of a lightweight trigger router. Loops, array parsing, and internal Google Workspace updates eat 70%–100% of your monthly quota.
                    </div>
                    <button
                      onClick={() => setArchMode('after')}
                      className="shrink-0 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs cursor-pointer"
                    >
                      Switch to Optimized Architecture →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold">
                        OPTIMIZED HYBRID & NATIVE ENGINE
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        Offload Heavy Processing to Zero-Cost Google Apps Script & Custom Webhooks
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-teal-700">
                      0 to 1 Task Used Total (70%–100% Reduction)
                    </span>
                  </div>

                  {/* Two Parallel Tracks */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Track A: 100% Native */}
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                          Track A: Internal Workflows (100% Task Elimination)
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-white border border-emerald-200 text-teal-800">
                          €0 Middleware Cost
                        </span>
                      </div>
                      <p className="text-xs text-slate-700">
                        When connecting your CRM (e.g., Close CRM), Call Trackers, or Web Forms to Google Docs, Sheets, Drive, and Gmail:
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                        <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-800 font-semibold">
                          1. Direct CRM Webhook
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                        <span className="px-2.5 py-1.5 rounded-lg bg-teal-600 text-white font-bold">
                          2. Google Apps Script Web App
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                        <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-800 font-semibold">
                          3. Direct AI + Doc/PDF + Gmail
                        </span>
                      </div>
                      <p className="text-[11px] text-teal-900 pt-1">
                        ✓ Bypasses Make/Zapier 100%. Runs natively inside your existing Google Workspace quota.
                      </p>
                    </div>

                    {/* Track B: 70% Hybrid */}
                    <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                          Track B: External Hybrid Flows (~70% Task Reduction)
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-white border border-sky-200 text-sky-800">
                          Downgrade SaaS Tiers
                        </span>
                      </div>
                      <p className="text-xs text-slate-700">
                        When integrating 3rd-party tools without native webhooks, we keep Make/Zapier for the <strong>1-step trigger only</strong> and offload the rest:
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                        <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-800 font-semibold">
                          1. Lean 1-Step Trigger
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                        <span className="px-2.5 py-1.5 rounded-lg bg-sky-700 text-white font-bold">
                          2. Apps Script Batch Processor
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                        <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-800 font-semibold">
                          3. 50+ Partner Sheets Updated
                        </span>
                      </div>
                      <p className="text-[11px] text-sky-900 pt-1">
                        ✓ Replaces 25-step middleware loops with 1 webhook pass. Cuts monthly task bills by ~70%.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center justify-between">
                    <span className="text-xs text-amber-950">
                      <strong>Built-In Enterprise Reliability:</strong> Includes automated execution batching, 6-minute script timeout protection, error logging, and clean documentation.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        const bp = blueprints[activeBlueprint];
        return (
          <div className="flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-2">
                <Code2 className="w-3.5 h-3.5 text-teal-600" />
                Proven Track Record • Anonymized Client Architectures
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Real-World Systems Engineered & Handed Over
              </h2>
            </div>

            {/* Interactive Case Study Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {blueprints.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBlueprint(idx)}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                    activeBlueprint === idx
                      ? 'bg-teal-50 border-teal-500 text-slate-900 shadow-sm'
                      : 'bg-[#F8FAFC] border-stone-200 text-slate-600 hover:bg-stone-100 hover:text-slate-900'
                  }`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-teal-700 mb-1">
                    Blueprint 0{idx + 1} • {item.tag}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                    {item.industry}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Blueprint Detail Card */}
            <div className="bg-[#F8FAFC] border border-stone-200 rounded-2xl p-6 my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs text-slate-600">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span>Industry Profile: <strong className="text-slate-900">{bp.industry}</strong></span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {bp.title}
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200">
                    <div className="text-xs font-bold text-rose-800 uppercase mb-1">
                      The Expensive Problem:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {bp.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                    <div className="text-xs font-bold text-teal-800 uppercase mb-1">
                      The Engineered Solution:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {bp.solution}
                    </p>
                  </div>
                </div>

                {/* Flow Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase text-slate-500 mb-2">
                    System Execution Pipeline:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {bp.flow.map((step, i) => (
                      <React.Fragment key={i}>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-xs text-slate-800 font-semibold shadow-2xs">
                          {step}
                        </span>
                        {i < bp.flow.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Impact Metrics */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Verified Operational Impact
                </div>
                {bp.metrics.map((m, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border flex items-center justify-between ${m.bg}`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{m.label}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">{m.sub}</div>
                    </div>
                    <div className="text-2xl font-extrabold">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-2">
                <Sliders className="w-3.5 h-3.5 text-teal-600" />
                Interactive ROI Calculator & Engagement Models
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pricing Designed So You Save More Than You Pay Us
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-auto">
              {/* Left: Interactive ROI Simulator */}
              <div className="lg:col-span-5 bg-amber-50/50 border border-amber-200 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <Calculator className="w-4 h-4 text-teal-700" />
                    Simulate Your Monthly Savings
                  </h3>

                  <div className="space-y-4">
                    {/* Slider 1 */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-700 font-medium">Current Make / Zapier / SaaS Bill:</span>
                        <span className="font-extrabold text-teal-700">€{monthlySaasSpend} / mo</span>
                      </div>
                      <input
                        type="range"
                        min="200"
                        max="4000"
                        step="100"
                        value={monthlySaasSpend}
                        onChange={(e) => setMonthlySaasSpend(Number(e.target.value))}
                        className="w-full accent-teal-600 cursor-pointer"
                      />
                    </div>

                    {/* Slider 2 */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-700 font-medium">Manual Team Admin / Reporting Hours:</span>
                        <span className="font-extrabold text-teal-700">{weeklyManualHours} hrs / week</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="35"
                        step="1"
                        value={weeklyManualHours}
                        onChange={(e) => setWeeklyManualHours(Number(e.target.value))}
                        className="w-full accent-teal-600 cursor-pointer"
                      />
                    </div>

                    {/* Slider 3 */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-700 font-medium">Target Task/Token Reduction:</span>
                        <span className="font-extrabold text-teal-700">{reductionRate}% Cut</span>
                      </div>
                      <input
                        type="range"
                        min="70"
                        max="100"
                        step="5"
                        value={reductionRate}
                        onChange={(e) => setReductionRate(Number(e.target.value))}
                        className="w-full accent-teal-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                        <span>70% (Hybrid External)</span>
                        <span>100% (Native Internal)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Output Box */}
                <div className="p-4 rounded-xl bg-white border border-emerald-300 space-y-2.5 shadow-xs">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Direct Software/Token Savings:</span>
                    <span className="text-slate-900 font-bold">€{monthlyTaskSavings} / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Reclaimed Team Capacity Value:</span>
                    <span className="text-slate-900 font-bold">€{monthlyTimeValueSaved} / mo</span>
                  </div>
                  <div className="border-t border-stone-200 pt-2 flex justify-between items-baseline">
                    <span className="text-xs font-bold text-teal-800">Est. Total Monthly Value Saved:</span>
                    <span className="text-xl font-extrabold text-teal-700">
                      €{totalMonthlySavings.toLocaleString()} / mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-teal-900 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded">
                    <span>12-Month Impact: <strong>€{annualSavings.toLocaleString()}/yr</strong></span>
                    <span>Project Payback: <strong>~{paybackMonths} mos</strong></span>
                  </div>
                </div>
              </div>

              {/* Right: Two Engagement Models */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Option A: Single Project */}
                <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-5 flex flex-col justify-between relative">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-sky-800 mb-1">
                      Option A • Fixed-Scope Handover
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Single Project: "The Cost-Cutter Build"
                    </h3>
                    <div className="mt-3 mb-4 pb-3 border-b border-sky-200">
                      <div className="text-2xl font-extrabold text-slate-900">
                        €1,800 – €3,500
                      </div>
                      <div className="text-xs text-slate-600">
                        One-Time Fixed Fee • Pays for itself in ~2–3 months
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 mb-3">
                      <strong>Best For:</strong> Companies with 1–2 expensive bottlenecks burning through Make/Zapier tokens or manual weekly admin hours.
                    </p>

                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <span>Deep-dive audit of your current automation & SaaS stack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <span>Custom Google Apps Script / Webhook / API re-engineering (70%–100% task drop)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <span>Custom Workspace dashboard or internal micro-app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <span>100% code ownership, documentation & team training</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sky-200 text-[11px] text-sky-900 font-bold">
                    ✓ Zero recurring fees after handover.
                  </div>
                </div>

                {/* Option B: Fractional Retainer */}
                <div className="bg-emerald-50/70 border-2 border-teal-500 rounded-2xl p-5 flex flex-col justify-between relative shadow-md">
                  <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-extrabold uppercase">
                    Saves 80% vs. In-House Hire
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1">
                      Option B • Ongoing Partnership
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Fractional Ops & Growth Retainer
                    </h3>
                    <div className="mt-3 mb-4 pb-3 border-b border-emerald-200">
                      <div className="text-2xl font-extrabold text-teal-800">
                        €1,250 – €2,400 <span className="text-sm font-normal text-slate-600">/ mo</span>
                      </div>
                      <div className="text-xs text-slate-600">
                        Flat Monthly Rate • Pause or cancel anytime
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 mb-3">
                      <strong>Best For:</strong> Scaling teams needing continuous workflow automation, custom AI tools, and performance marketing ops.
                    </p>

                    <ul className="space-y-2 text-xs text-slate-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span><strong>Everything in Project Mode</strong>, plus continuous optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>Proactive API/webhook maintenance & script timeout tuning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>Monthly rollout of new custom AI dashboards & internal tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>Optional: Meta Ads & Google Ads funnel & ROAS attribution alignment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] text-teal-900 font-bold">
                    ✓ Replaces a €7,500/mo full-time Berlin hire + ad ops overhead.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="flex flex-col justify-between h-full space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Zero-Risk Next Step • 48-Hour Turnaround
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Start With a Free 15-Minute "Task & Token Audit"
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                No vague consulting pitches. Show me one bloated workflow or monthly invoice, and I will map out the exact technical blueprint and net savings before we write a single line of code.
              </p>
            </div>

            {/* 3-Step Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 relative">
                <div className="w-8 h-8 rounded-lg bg-white border border-amber-300 text-amber-800 font-extrabold text-sm flex items-center justify-center mb-3 shadow-2xs">
                  1
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Share Your Usage or Bottleneck
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Send a screenshot of your current Make.com / Zapier task usage bill—or walk me through the manual spreadsheet/CRM workflow your team dreads doing every week.
                </p>
              </div>

              <div className="bg-violet-50/70 border border-violet-200 rounded-2xl p-5 relative">
                <div className="w-8 h-8 rounded-lg bg-white border border-violet-300 text-violet-800 font-extrabold text-sm flex items-center justify-center mb-3 shadow-2xs">
                  2
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  48-Hour Architecture Blueprint
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  I will identify which steps can be offloaded to native Google Apps Script, custom webhooks, or lightweight micro-apps—calculating your exact <strong>70%–100% task reduction</strong>.
                </p>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 relative">
                <div className="w-8 h-8 rounded-lg bg-white border border-emerald-300 text-teal-800 font-extrabold text-sm flex items-center justify-center mb-3 shadow-2xs">
                  3
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Fixed-ROI Implementation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Choose a <strong>One-Time Build (€1,800–€3,500)</strong> or a <strong>Fractional Retainer (€1,250–€2,400/mo)</strong>—priced so your monthly savings exceed the investment.
                </p>
              </div>
            </div>

            {/* Interactive Audit Action Box */}
            <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-sky-50 border border-teal-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Ready to Cut Your Automation Overhead?
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Prajjwol Bhattarai — Independent Growth & Automation Consultant
                </h3>
                <p className="text-xs text-slate-700">
                  📍 Based in Berlin, Germany • prajjwolbhattarai@gmail.com • +49 176 29858945
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={handleCopyAuditPrompt}
                  className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-md shadow-teal-600/15 cursor-pointer"
                >
                  {copiedAudit ? (
                    <>
                      <Check className="w-4 h-4" />
                      Audit Summary Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Your Custom ROI Audit Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col font-sans selection:bg-teal-200 selection:text-teal-950">
      {/* Top Executive Navigation Bar */}
      <header className="border-b border-stone-200 bg-[#FDFBF7]/90 backdrop-blur sticky top-0 z-30 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            <span className="font-extrabold text-sm tracking-tight text-slate-900">
              PRAJJWOL BHATTARAI
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              | B2B Automation & Token Reduction Pitch Deck
            </span>
          </div>

          {/* Slide Quick Jump Pills (Desktop) */}
          {viewMode === 'slide' && (
            <div className="hidden xl:flex items-center gap-1 bg-stone-100 border border-stone-200 rounded-lg p-1">
              {slideTitles.map((title, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition cursor-pointer ${
                    currentSlide === idx
                      ? 'bg-teal-600 text-white font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'slide' ? 'scroll' : 'slide')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition cursor-pointer shadow-2xs"
            >
              {viewMode === 'slide' ? (
                <>
                  <LayoutGrid className="w-3.5 h-3.5 text-teal-600" />
                  <span>Switch to Full Scroll View</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Switch to Interactive Slide Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Deck Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 flex flex-col justify-center">
        {viewMode === 'slide' ? (
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 min-h-[600px] flex flex-col justify-between shadow-xl shadow-stone-200/50 relative overflow-hidden">
            {renderSlideContent(currentSlide)}
          </div>
        ) : (
          <div className="space-y-10 pb-12">
            {slideTitles.map((title, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-stone-200/40"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-4 pb-2 border-b border-stone-200">
                  Slide {title}
                </div>
                {renderSlideContent(idx)}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Slide Controls (Only in Slide Mode) */}
      {viewMode === 'slide' && (
        <footer className="border-t border-stone-200 bg-[#FDFBF7] px-4 sm:px-8 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">
              <span className="text-slate-900 font-bold">{slideTitles[currentSlide]}</span>
              <span className="hidden sm:inline"> • Use Left/Right Arrow Keys to Navigate</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded-lg bg-white border border-stone-200 text-slate-700 disabled:opacity-40 hover:bg-stone-100 transition cursor-pointer shadow-2xs"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-700 px-2">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs disabled:opacity-40 flex items-center gap-1 transition cursor-pointer shadow-xs"
              >
                <span>Next Slide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
