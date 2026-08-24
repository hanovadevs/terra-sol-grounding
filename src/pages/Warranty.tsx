import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  FileText,
  Loader2,
  PackageCheck,
  Upload,
  X,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const GOOGLE_SHEETS_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycby3-W6I7I_OhdaciGMkoiK7kQ605KTY7uFSeplSZ9dFXxCJTr_iNnsK0bra2FsTwluY/exec';
const SUPPORT_EMAIL = 'support@terrasolgrounding.com';

interface FormData {
  fullName: string;
  email: string;
  purchaseLocation: string;
  orderNumber: string;
  purchaseDate: string;
  productType: string;
  concernDescription: string;
  confirmAccuracy: boolean;
  confirmCooperation: boolean;
  confirmTerms: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  purchaseLocation: 'Amazon',
  orderNumber: '',
  purchaseDate: '',
  productType: 'Grounding Fitted Sheet',
  concernDescription: '',
  confirmAccuracy: false,
  confirmCooperation: false,
  confirmTerms: false,
};

const inputClasses =
  'w-full rounded-xl border border-sand-300 bg-white px-4 py-3.5 text-sm text-earth-900 outline-none transition focus:border-earth-600 focus:ring-4 focus:ring-earth-600/10 placeholder:text-earth-800/35';
const labelClasses = 'mb-2 block text-xs font-bold uppercase tracking-wider text-earth-800/70';

const Warranty: React.FC = () => {
  useSEO({
    title: '2-Year Limited Conductivity Warranty & Claim Terms | Terra Sol Grounding',
    description:
      'Official 2-Year Limited Conductivity Warranty terms, testing standards, claim procedures, and warranty claim submission for Terra Sol grounding fitted sheets.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://terrasolgrounding.com/warranty/#warrantypage',
      name: 'Terra Sol 2-Year Limited Conductivity Warranty',
      description:
        'Official 2-Year Limited Conductivity Warranty, objective testing standard, claim terms, and warranty claim portal.',
      url: 'https://terrasolgrounding.com/warranty',
    },
  });

  const [currentView, setCurrentView] = useState<'main' | 'claim-terms'>('main');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to top or element on view change
  const switchView = (view: 'main' | 'claim-terms', targetId?: string) => {
    setCurrentView(view);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
    }));
    setError(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setError('Please choose a file smaller than 10 MB.');
      return;
    }
    setProofFile(file);
    setError(null);
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setProofPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setProofPreview(null);
    }
  };

  const removeFile = () => {
    setProofFile(null);
    setProofPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.orderNumber.trim()) {
      setError('Please complete all required contact and purchase details.');
      return;
    }
    if (!proofFile) {
      setError('Please upload your proof of purchase (receipt, invoice, or screenshot).');
      return;
    }
    if (!formData.confirmAccuracy || !formData.confirmCooperation || !formData.confirmTerms) {
      setError('Please check all three required confirmation boxes before submitting.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      let fileData = '';
      if (proofFile) {
        fileData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(proofFile);
        });
      }

      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fileName: proofFile?.name || '',
          fileType: proofFile?.type || '',
          fileData,
          submissionType: 'Warranty Claim / Registration',
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
      setFormData(initialFormData);
      removeFile();
    } catch {
      setError('We could not submit your claim. Please try again or contact warranty support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Terms Navigation IDs
  const termsSections = [
    { id: 'purpose', label: 'Purpose' },
    { id: 'claim-conditions', label: 'Claim conditions' },
    { id: 'evidence-and-inspection', label: 'Evidence and inspection' },
    { id: 'accuracy-and-duplicate-recovery', label: 'Accuracy and duplicate recovery' },
    { id: 'privacy-notice', label: 'Privacy notice' },
    { id: 'required-confirmations', label: 'Required confirmations' },
    { id: 'legal-rights', label: 'Legal rights' },
  ];

  return (
    <main className="min-h-screen bg-sand-100 font-sans text-earth-900">
      {/* ─────────────────────────────────────────────────────────────
          VIEW 1: MAIN WARRANTY PAGE
         ───────────────────────────────────────────────────────────── */}
      {currentView === 'main' && (
        <div>
          {/* Top Sub-Navigation Header inside Warranty Page */}
          <div className="bg-[#12220f] border-b border-white/10 text-white pt-24 pb-3">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-sand-400/40 text-[11px] font-bold font-serif text-sand-300">
                  TS
                </div>
                <span className="text-xs font-serif font-bold uppercase tracking-[0.2em] text-sand-200">
                  Terra Sol <span className="font-sans text-[9px] text-sand-400/70">Grounding</span>
                </span>
              </div>

              <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-sand-300/80">
                <a href="#coverage" className="hover:text-white transition-colors">
                  Coverage
                </a>
                <a href="#full-terms" className="hover:text-white transition-colors">
                  Full Terms
                </a>
                <a href="#claim-form" className="hover:text-white transition-colors">
                  Claim
                </a>
                <button
                  type="button"
                  onClick={() => switchView('claim-terms')}
                  className="hover:text-white transition-colors uppercase tracking-widest"
                >
                  Claim Terms
                </button>
              </div>

              <div>
                <a
                  href="#claim-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a94e] px-4 py-1.5 text-xs font-bold text-earth-950 transition-all hover:bg-[#d9b85c] shadow-sm"
                >
                  Start a claim
                </a>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative overflow-hidden bg-[#162a13] text-white py-16 sm:py-20 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(112,180,78,0.15),transparent_50%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Left Hero Content */}
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-sand-300/90 mb-4">
                    2-Year Limited Conductivity Warranty
                  </span>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-sand-50 mb-6">
                    A clear promise.
                    <br />
                    A fair process.
                  </h1>
                  <p className="max-w-xl text-sm sm:text-base leading-relaxed text-sand-200/80 mb-8 font-medium">
                    Terra Sol covers one objective product property: the electrical conductivity of an eligible
                    grounding fitted sheet. The terms below explain exactly what is covered, what is not, and
                    how a genuine claim is reviewed.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <a
                      href="#claim-form"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-sand-100 shadow-md"
                    >
                      Start a warranty claim
                    </a>
                    <a
                      href="#full-terms"
                      className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 backdrop-blur-sm"
                    >
                      Read the complete terms
                    </a>
                  </div>

                  <p className="text-xs text-sand-300/60 font-medium">
                    Registration is optional. It does not activate, extend, or determine coverage.
                  </p>
                </div>

                {/* Right Hero "AT A GLANCE" Box */}
                <div className="rounded-3xl border border-white/10 bg-[#10200e]/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-sand-400 mb-6">
                    At a Glance
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-5">
                      <strong className="block font-serif text-2xl sm:text-3xl text-white font-bold mb-1">
                        2 years
                      </strong>
                      <span className="block text-xs leading-relaxed text-sand-300/70">
                        From the documented original purchase date
                      </span>
                    </div>

                    <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-5">
                      <strong className="block font-serif text-2xl sm:text-3xl text-white font-bold mb-1">
                        Conductivity
                      </strong>
                      <span className="block text-xs leading-relaxed text-sand-300/70">
                        The sheet itself, not health or wellness results
                      </span>
                    </div>

                    <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-5">
                      <strong className="block font-serif text-2xl sm:text-3xl text-white font-bold mb-1">
                        No fee
                      </strong>
                      <span className="block text-xs leading-relaxed text-sand-300/70">
                        No claim, processing, or inspection charge
                      </span>
                    </div>

                    <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-5">
                      <strong className="block font-serif text-2xl sm:text-3xl text-white font-bold mb-1">
                        Written review
                      </strong>
                      <span className="block text-xs leading-relaxed text-sand-300/70">
                        Reason and warranty clause supplied if denied
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sub-bar / Anchor Nav */}
          <nav
            aria-label="Warranty page sections"
            className="sticky top-20 z-30 border-b border-sand-300/80 bg-sand-50/95 backdrop-blur-md shadow-xs"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-start gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
              {[
                { label: 'Coverage', href: '#coverage' },
                { label: 'Testing', href: '#testing' },
                { label: 'Process', href: '#process' },
                { label: 'Full warranty', href: '#full-terms' },
                { label: 'Claim form', href: '#claim-form' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-bold text-earth-800/70 transition hover:bg-sand-200 hover:text-earth-900"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => switchView('claim-terms')}
                className="shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-bold text-earth-700 bg-earth-100 hover:bg-earth-200 transition-colors ml-auto"
              >
                Claim terms & privacy →
              </button>
            </div>
          </nav>

          {/* SECTION 1: CONDUCTIVITY-ONLY COVERAGE */}
          <section id="coverage" className="scroll-mt-36 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="mb-10 max-w-3xl">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-earth-700 mb-2">
                Conductivity-Only Coverage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-earth-900">
                Know exactly where you stand.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-earth-800/70">
                This summary is followed by the complete Limited Warranty. If the summary and the full terms
                differ, the full terms control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* What is covered card */}
              <div className="rounded-3xl border border-earth-200 bg-white p-7 sm:p-9 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-earth-100 text-earth-700">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth-900">What is covered</h3>
                </div>
                <ul className="space-y-4 text-sm leading-relaxed text-earth-800/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-600" />
                    <span>Loss of electrical conductivity in a covered Terra Sol grounding fitted sheet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-600" />
                    <span>
                      Failure of the conductive path between the sheet fabric and its permanent connection
                      snap
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-600" />
                    <span>
                      A covered failure arising during normal household use and care within two years of
                      purchase
                    </span>
                  </li>
                </ul>
              </div>

              {/* What is not covered card */}
              <div className="rounded-3xl border border-sand-300/80 bg-white p-7 sm:p-9 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sand-200 text-earth-700/80">
                    <X size={18} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth-900">
                    What is not covered
                  </h3>
                </div>
                <ul className="space-y-4 text-sm leading-relaxed text-earth-800/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-800/40" />
                    <span>
                      Health, sleep, pain, inflammation, recovery, energy, or other subjective outcomes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-800/40" />
                    <span>
                      Cords, outlet testers, conductivity testers, packaging, or other removable accessories
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-800/40" />
                    <span>
                      Cosmetic wear, color change, fit, comfort, elastic, stitching, tears, stains, or fabric
                      feel unless they cause the covered conductivity failure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-800/40" />
                    <span>
                      Conductivity loss caused by misuse, accident, pet damage, contamination, or care
                      contrary to the published instructions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Important correction Callout Banner */}
            <div className="rounded-2xl border border-amber-300/70 bg-[#fbf5e8] px-6 py-4 text-xs sm:text-sm text-earth-900 leading-relaxed shadow-xs">
              <strong>Important correction:</strong> Coverage is not based on a specific silver-fiber
              percentage. Older and current eligible Terra Sol sheets are governed by the warranty version
              promised at the time of sale.
            </div>
          </section>

          {/* SECTION 2: OBJECTIVE STANDARD */}
          <section id="testing" className="scroll-mt-36 border-t border-sand-300/80 bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-earth-700 mb-2">
                    Objective Standard
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-earth-900 mb-6">
                    What “loss of conductivity” means.
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-earth-800/80 mb-6">
                    A conductivity failure exists when a functioning continuity tester or multimeter detects no
                    conductive path between the sheet’s permanent connection snap and multiple representative
                    areas of the conductive fabric, after reasonable setup troubleshooting and testing under
                    Terra Sol’s published method.
                  </p>
                  <div className="border-l-3 border-[#c9a94e] pl-4 py-1 text-sm font-medium text-earth-800/90 italic">
                    A change in how a customer feels is not a conductivity test and is not covered by this
                    warranty.
                  </div>
                </div>

                {/* Right Dark Green Card */}
                <div className="rounded-3xl bg-[#142812] text-sand-100 p-7 sm:p-8 shadow-xl">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-sand-50 mb-4">
                    Initial home check
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-sand-200/80 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-300" />
                      <span>Use a clean, dry sheet and a tester that has been verified to work.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-300" />
                      <span>Rule out the wall outlet, adapter, and detachable grounding cord.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-300" />
                      <span>Test at three or more well-separated points on the sheet.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-300" />
                      <span>Record a short continuous video if support reasonably requests it.</span>
                    </li>
                  </ul>
                  <div className="mt-6 border-t border-white/10 pt-5 text-[11px] leading-relaxed text-sand-300/60">
                    This is a screening step, not automatic approval or denial. An inconclusive result may
                    require prepaid physical inspection.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: A FAIR CLAIM PATH (4 STEPS) */}
          <section id="process" className="scroll-mt-36 border-t border-sand-300/80 bg-sand-200/60 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-earth-700 mb-2">
                  A Fair Claim Path
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-earth-900">
                  Four steps, no hidden hurdles.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    num: '01',
                    title: 'Verify the setup',
                    desc: 'Confirm the tester works, rule out the outlet and cord, and test the clean, dry sheet at several separated points.',
                  },
                  {
                    num: '02',
                    title: 'Send reasonable evidence',
                    desc: 'Provide purchase details, a short description, and clear photos or a short test video when reasonably useful.',
                  },
                  {
                    num: '03',
                    title: 'Review or inspection',
                    desc: 'We review the evidence. If a physical inspection is needed, Terra Sol provides a prepaid U.S. return label.',
                  },
                  {
                    num: '04',
                    title: 'Written outcome',
                    desc: 'We approve the claim or explain the denial and the warranty clause used. You may request an internal review.',
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="rounded-3xl border border-sand-300 bg-white p-7 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-serif text-3xl sm:text-4xl text-earth-700/40 font-bold block mb-5">
                        {step.num}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-earth-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-earth-800/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: COMPLETE WRITTEN WARRANTY (14 CLAUSES) */}
          <section id="full-terms" className="scroll-mt-36 border-t border-sand-300/80 bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="mb-10">
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-earth-700 mb-2">
                  Complete Written Warranty
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-earth-900 mb-2">
                  2-Year Limited Conductivity Warranty
                </h2>
                <p className="text-xs text-earth-800/60 font-medium">
                  Draft version 1.0 · Proposed effective date: August 21, 2026
                </p>
              </div>

              {/* Callout Notice: Required before publication */}
              <div className="rounded-2xl border border-red-200 bg-[#fff5f2] p-5 mb-10 text-xs sm:text-sm text-earth-900 leading-relaxed shadow-xs">
                <strong className="block font-bold text-[#b83b26] mb-1">Required before publication</strong>
                [INSERT THE EXACT LEGAL NAME OF THE WARRANTOR, FULL U.S. MAILING ADDRESS, AND FREE NON-INTERNET
                CONTACT METHOD.]
              </div>

              {/* 14 Clauses List */}
              <div className="divide-y divide-sand-300/80">
                {[
                  {
                    num: '01',
                    title: 'Warrantor and contact',
                    content:
                      'This Limited Warranty is provided by [LEGAL ENTITY NAME], doing business as Terra Sol Grounding, [FULL MAILING ADDRESS] (“Terra Sol”). Warranty support: support@terrasolgrounding.com. To request a free paper copy without using the internet, call or write to [PHONE OR POSTAL METHOD].',
                  },
                  {
                    num: '02',
                    title: 'Covered products',
                    content:
                      'This warranty applies only to a new Terra Sol-branded grounding fitted sheet purchased for personal, family, or household use from Terra Sol or a seller listed as authorized at the time of purchase, where the product page, packaging, or included document expressly states that this 2-Year Limited Conductivity Warranty applies. Grounding mats, cords, testers, adapters, packaging, and other accessories are excluded unless covered by a separate written warranty.',
                  },
                  {
                    num: '03',
                    title: 'Who is covered',
                    content:
                      'Coverage extends to the original consumer purchaser and the first recipient of a new product purchased as a bona fide gift, with reasonable proof of the original purchase. It is not transferable after resale or other later transfer, except where applicable law provides otherwise.',
                  },
                  {
                    num: '04',
                    title: 'When coverage begins and ends',
                    content:
                      'Coverage begins on the documented original retail purchase date and lasts two years. If the purchase date cannot reasonably be established, Terra Sol may use the documented delivery date. A covered problem reported during the warranty period remains eligible for review even if processing finishes later.',
                  },
                  {
                    num: '05',
                    title: 'What Terra Sol warrants',
                    content:
                      'Terra Sol warrants that, under normal household use and care, the covered sheet will retain detectable electrical continuity between its permanent connection snap and representative areas of its conductive fabric during the warranty period. This is the only property covered by this written Limited Warranty.',
                  },
                  {
                    num: '06',
                    title: 'What is excluded',
                    content:
                      'This warranty does not cover subjective results or health, sleep, comfort, wellness, pain, inflammation, recovery, energy, or medical outcomes. It does not cover appearance, feel, fit, color, pilling, ordinary wear, removable accessories, or physical damage that does not cause the defined conductivity failure. It also excludes conductivity loss to the extent caused by misuse, abuse, accident, cuts, tears, burns, pets, contamination, improper storage, or failure to follow the care instructions supplied with the product. Modification or third-party service is excluded only when Terra Sol can reasonably connect it to the claimed failure. Counterfeit, used, previously returned, or unauthorized-reseller products are not covered, subject to non-waivable law.',
                  },
                  {
                    num: '07',
                    title: 'Available remedy and costs',
                    content:
                      'For a confirmed covered failure, Terra Sol will, at its option and within a reasonable time, replace the covered sheet with the same or a reasonably comparable new product. If replacement is unavailable or cannot reasonably be provided, Terra Sol will refund the actual purchase price paid for the covered sheet, or the reasonable allocated price of the sheet when sold in a bundle. There is no warranty processing or inspection fee. Terra Sol pays standard shipping for an approved replacement and provides a prepaid U.S. return label whenever Terra Sol requires physical inspection or return.',
                  },
                  {
                    num: '08',
                    title: 'How to obtain service',
                    content:
                      'Submit the claim form below or contact warranty support. Provide your name and contact information, purchase source and date, order number or other reasonable proof of purchase, product identifier, a description of the problem, and testing details. Photos or a short video may be requested when reasonably useful. Original packaging is not required. Do not send government identification, complete payment-card information, medical records, or unrelated personal information.',
                  },
                  {
                    num: '09',
                    title: 'Evaluation, inspection, and timing',
                    content:
                      'Terra Sol will acknowledge an online claim promptly and ordinarily complete an initial review within five business days after receiving reasonably complete information. Terra Sol may offer troubleshooting, request reasonable additional evidence, or arrange a prepaid inspection. A decision is ordinarily issued within ten business days after all reasonably requested information or the returned product is received. If more time is reasonably needed, Terra Sol will explain why and provide an updated estimate.',
                  },
                  {
                    num: '10',
                    title: 'Preventing duplicate or fraudulent claims',
                    content:
                      'Terra Sol may verify the order, seller, product identity, prior returns, chargebacks, refunds, replacements, and materially relevant test evidence. A materially false statement, altered evidence, counterfeit product, or attempt to obtain duplicate recovery may result in denial to the extent relevant to the claim. Terra Sol will not deny an otherwise valid claim for an immaterial mistake and may request clarification before deciding.',
                  },
                  {
                    num: '11',
                    title: 'Approved replacements and ownership',
                    content:
                      'To prevent duplicate recovery, Terra Sol may require the failed sheet to be returned using a prepaid label or, only after written approval, rendered unusable and documented before a replacement or refund is completed. A replacement is covered for the longer of the remainder of the original warranty period or 90 days, to the extent permitted by law. A replacement does not restart a new two-year period.',
                  },
                  {
                    num: '12',
                    title: 'Denials and review',
                    content:
                      'If a claim is denied, Terra Sol will provide the material reason and identify the warranty term supporting the decision. The claimant may request an internal reconsideration and submit additional relevant information. Terra Sol’s decision is not stated to be final or binding, and this internal review does not waive or restrict any legal right.',
                  },
                  {
                    num: '13',
                    title: 'Optional registration',
                    content:
                      'Product registration is optional and is one way to save purchase information. Failure to register within 30 days, or at any time, does not reduce coverage when the claimant can provide reasonable proof of purchase. Registration does not extend the warranty or guarantee approval of a later claim.',
                  },
                  {
                    num: '14',
                    title: 'Other legal rights',
                    content:
                      'This Limited Warranty does not disclaim implied warranties or limit rights that cannot lawfully be limited. The remedies described above are the remedies Terra Sol provides under this written warranty; applicable law may provide additional remedies. This warranty gives you specific legal rights, and you may also have other rights which vary from State to State.',
                  },
                ].map((clause) => (
                  <div key={clause.num} className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-3 md:gap-6 py-8">
                    <span className="font-serif text-lg font-bold text-earth-700/50 block">{clause.num}</span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-earth-900 mb-3">{clause.title}</h3>
                      <p className="text-sm leading-relaxed text-earth-800/80">{clause.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: WARRANTY CLAIM & REGISTRATION SUBMISSION FORM */}
          <section id="claim-form" className="scroll-mt-36 border-t border-sand-300 bg-sand-200/50 py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="rounded-3xl border border-sand-300/80 bg-white p-7 sm:p-10 shadow-lg">
                <div className="mb-8 border-b border-sand-200 pb-6">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-earth-700 mb-1">
                    Official Portal
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900">
                    Warranty Claim & Registration Form
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-earth-800/70">
                    Provide your contact details, purchase details, and test evidence for review under our
                    2-Year Limited Conductivity Warranty.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-earth-100 text-earth-700">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-earth-900 mb-3">
                        Claim Received for Review
                      </h3>
                      <p className="mx-auto max-w-lg text-sm leading-relaxed text-earth-800/75 mb-6">
                        We have logged your claim submission. Our warranty team will ordinarily complete an
                        initial review within five business days. Please retain your order confirmation and
                        proof of purchase.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-xl bg-earth-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-earth-800"
                      >
                        Submit another claim
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Details */}
                      <div>
                        <h3 className="font-serif text-xl font-bold text-earth-900 mb-4">1. Claimant Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="fullName" className={labelClasses}>
                              Full name *
                            </label>
                            <input
                              id="fullName"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className={labelClasses}>
                              Email address *
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              className={inputClasses}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Purchase Details */}
                      <div className="border-t border-sand-200 pt-6">
                        <h3 className="font-serif text-xl font-bold text-earth-900 mb-4">2. Purchase Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="purchaseLocation" className={labelClasses}>
                              Purchase source *
                            </label>
                            <select
                              id="purchaseLocation"
                              name="purchaseLocation"
                              required
                              value={formData.purchaseLocation}
                              onChange={handleChange}
                              className={inputClasses}
                            >
                              <option value="Amazon">Amazon</option>
                              <option value="Official Website">Official Website</option>
                              <option value="Authorized Seller">Authorized Seller</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="orderNumber" className={labelClasses}>
                              Order number *
                            </label>
                            <input
                              id="orderNumber"
                              name="orderNumber"
                              required
                              value={formData.orderNumber}
                              onChange={handleChange}
                              placeholder="e.g. 114-1234567-8901234"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label htmlFor="purchaseDate" className={labelClasses}>
                              Purchase date *
                            </label>
                            <div className="relative">
                              <input
                                id="purchaseDate"
                                name="purchaseDate"
                                type="date"
                                required
                                value={formData.purchaseDate}
                                onChange={handleChange}
                                className={inputClasses}
                              />
                              <CalendarDays
                                className="pointer-events-none absolute right-4 top-3.5 text-earth-800/35"
                                size={17}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Evidence & Concern */}
                      <div className="border-t border-sand-200 pt-6">
                        <h3 className="font-serif text-xl font-bold text-earth-900 mb-4">
                          3. Evidence & Testing Details
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label htmlFor="concernDescription" className={labelClasses}>
                              Description of testing & concern *
                            </label>
                            <textarea
                              id="concernDescription"
                              name="concernDescription"
                              rows={3}
                              required
                              value={formData.concernDescription}
                              onChange={handleChange}
                              placeholder="Describe your testing method (continuity tester, points tested, troubleshooting steps taken)..."
                              className={inputClasses}
                            />
                          </div>

                          <div>
                            <label className={labelClasses}>Upload Proof of Purchase / Testing Evidence *</label>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*,.pdf,video/*"
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="w-full rounded-2xl border-2 border-dashed border-sand-300 bg-sand-50 p-6 text-center transition hover:border-earth-500 hover:bg-earth-100/30"
                            >
                              {proofFile ? (
                                <span className="flex items-center gap-4 text-left">
                                  {proofPreview ? (
                                    <img
                                      src={proofPreview}
                                      alt="Preview"
                                      className="h-14 w-14 rounded-lg object-cover"
                                    />
                                  ) : (
                                    <FileText className="text-earth-600" size={30} />
                                  )}
                                  <span className="min-w-0 flex-1">
                                    <strong className="block truncate text-sm">{proofFile.name}</strong>
                                    <span className="mt-1 block text-xs text-earth-800/50">
                                      {(proofFile.size / 1024).toFixed(0)} KB
                                    </span>
                                  </span>
                                  <span
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeFile();
                                    }}
                                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-earth-800/50 hover:bg-red-50 hover:text-red-600"
                                    aria-label="Remove file"
                                  >
                                    <X size={16} />
                                  </span>
                                </span>
                              ) : (
                                <span>
                                  <Upload className="mx-auto text-earth-600" size={28} />
                                  <strong className="mt-3 block text-sm">
                                    Choose receipt or test file (or drop here)
                                  </strong>
                                  <span className="mt-1 block text-xs text-earth-800/45">
                                    JPG, PNG, PDF, or MP4 · 10 MB maximum
                                  </span>
                                </span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Required Confirmations at submission (From Screen 11 / Section 6) */}
                      <div className="border-t border-sand-200 pt-6">
                        <div className="mb-4">
                          <h3 className="font-serif text-xl font-bold text-earth-900 mb-1">
                            4. Required Confirmations at Submission
                          </h3>
                          <p className="text-xs text-earth-800/60">
                            Use separate, unchecked boxes immediately above the submit button. Do not combine
                            these with marketing consent.
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* Confirmation 1 */}
                          <label className="flex cursor-pointer items-start gap-3.5 rounded-2xl border border-sand-300/80 bg-[#f9f8f6] p-4.5 transition hover:bg-sand-50 border-l-4 border-l-earth-600">
                            <input
                              type="checkbox"
                              name="confirmAccuracy"
                              required
                              checked={formData.confirmAccuracy}
                              onChange={handleChange}
                              className="mt-1 h-4 w-4 accent-earth-700 shrink-0"
                            />
                            <div>
                              <strong className="block text-xs font-bold uppercase tracking-wider text-earth-900 mb-0.5">
                                Accuracy and eligibility
                              </strong>
                              <span className="block text-xs sm:text-sm leading-relaxed text-earth-800/80">
                                I certify that the information I provided is accurate to the best of my
                                knowledge, that the product was purchased new from Terra Sol or an authorized
                                seller, and that the same issue has not already been fully resolved by a
                                refund or replacement.
                              </span>
                            </div>
                          </label>

                          {/* Confirmation 2 */}
                          <label className="flex cursor-pointer items-start gap-3.5 rounded-2xl border border-sand-300/80 bg-[#f9f8f6] p-4.5 transition hover:bg-sand-50 border-l-4 border-l-earth-600">
                            <input
                              type="checkbox"
                              name="confirmCooperation"
                              required
                              checked={formData.confirmCooperation}
                              onChange={handleChange}
                              className="mt-1 h-4 w-4 accent-earth-700 shrink-0"
                            />
                            <div>
                              <strong className="block text-xs font-bold uppercase tracking-wider text-earth-900 mb-0.5">
                                Reasonable cooperation
                              </strong>
                              <span className="block text-xs sm:text-sm leading-relaxed text-earth-800/80">
                                I understand that Terra Sol may request reasonable troubleshooting, photos or
                                video, or a prepaid return for inspection when useful to evaluate
                                conductivity.
                              </span>
                            </div>
                          </label>

                          {/* Confirmation 3 */}
                          <label className="flex cursor-pointer items-start gap-3.5 rounded-2xl border border-sand-300/80 bg-[#f9f8f6] p-4.5 transition hover:bg-sand-50 border-l-4 border-l-earth-600">
                            <input
                              type="checkbox"
                              name="confirmTerms"
                              required
                              checked={formData.confirmTerms}
                              onChange={handleChange}
                              className="mt-1 h-4 w-4 accent-earth-700 shrink-0"
                            />
                            <div>
                              <strong className="block text-xs font-bold uppercase tracking-wider text-earth-900 mb-0.5">
                                Terms and privacy
                              </strong>
                              <span className="block text-xs sm:text-sm leading-relaxed text-earth-800/80">
                                I have read the 2-Year Limited Conductivity Warranty and the Warranty Claim
                                Terms & Privacy Notice. I understand that the written warranty covers
                                conductivity of an eligible sheet, not health or subjective outcomes, and that
                                submitting a claim does not waive any right that cannot legally be waived.
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Error Banner */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs sm:text-sm font-medium text-red-700"
                          >
                            <AlertCircle size={16} className="shrink-0" />
                            <span>{error}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit Buttons & Terms Link */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-sand-200 pt-6">
                        <button
                          type="button"
                          onClick={() => switchView('claim-terms')}
                          className="text-xs font-bold text-earth-700 underline hover:text-earth-900"
                        >
                          Review detailed Claim Terms & Privacy Notice →
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-earth-900 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-earth-800 disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="animate-spin" size={16} /> Submitting claim...
                            </>
                          ) : (
                            <>
                              <PackageCheck size={17} /> Submit Warranty Claim
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Support Banner */}
          <section className="bg-[#12220f] text-white py-14">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-400">
                  Direct Support
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-50 mt-1">
                  Questions about your warranty?
                </h3>
                <p className="text-xs sm:text-sm text-sand-300/70 mt-1">
                  Contact warranty support at{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sand-200 underline font-semibold">
                    {SUPPORT_EMAIL}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => switchView('claim-terms')}
                  className="rounded-xl border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  View Claim Terms
                </button>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Warranty%20Support`}
                  className="rounded-xl bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-earth-950 hover:bg-sand-100 transition-colors"
                >
                  Email Support
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          VIEW 2: WARRANTY CLAIM TERMS & PRIVACY NOTICE
          (Exact content & layout from Screenshots 8, 9, 10, 11, 12)
         ───────────────────────────────────────────────────────────── */}
      {currentView === 'claim-terms' && (
        <div className="min-h-screen bg-white">
          {/* Top Sub-Nav in Claim Terms */}
          <div className="bg-[#12220f] border-b border-white/10 text-white pt-24 pb-3">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-sand-400/40 text-[11px] font-bold font-serif text-sand-300">
                  TS
                </div>
                <span className="text-xs font-serif font-bold uppercase tracking-[0.2em] text-sand-200">
                  Terra Sol <span className="font-sans text-[9px] text-sand-400/70">Grounding</span>
                </span>
              </div>

              <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-sand-300/80">
                <a href="#t-claim-conditions" className="hover:text-white transition-colors">
                  Claim Conditions
                </a>
                <a href="#t-privacy" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#t-confirmations" className="hover:text-white transition-colors">
                  Confirmations
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => switchView('main', 'claim-form')}
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a94e] px-4 py-1.5 text-xs font-bold text-earth-950 transition-all hover:bg-[#d9b85c] shadow-sm"
                >
                  Back to claim
                </button>
              </div>
            </div>
          </div>

          {/* Claim Terms Hero */}
          <section className="relative bg-[#162a13] text-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-sand-300/90 mb-4">
                  Warranty Claim Terms & Privacy Notice
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-sand-50 mb-6">
                  Truthful claims.
                  <br />
                  Reasonable evidence.
                  <br />
                  No waiver of rights.
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-sand-200/80 mb-6 font-medium">
                  These terms explain how claim information is submitted and reviewed. They do not reduce the
                  2-Year Limited Conductivity Warranty or any right that cannot legally be waived.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-sand-300/70">
                  <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1">
                    Draft Version 1.0
                  </span>
                  <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1">
                    Proposed Effective Date: August 21, 2026
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content with Sticky Sidebar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">
              {/* Sticky Sidebar (ON THIS PAGE) */}
              <aside className="hidden lg:block sticky top-28 self-start">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-earth-700 mb-4">
                  On this page
                </span>
                <nav className="space-y-2 text-xs font-semibold text-earth-800/70">
                  {termsSections.map((item) => (
                    <a
                      key={item.id}
                      href={`#t-${item.id}`}
                      className="block py-1 transition-colors hover:text-earth-950"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* Terms Content Body */}
              <div className="max-w-3xl space-y-16 text-earth-900 leading-relaxed">
                {/* 1. Purpose and relationship to the warranty */}
                <section id="t-purpose" className="scroll-mt-32">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mb-4">
                    1. Purpose and relationship to the warranty
                  </h2>
                  <p className="text-sm sm:text-base text-earth-800/85">
                    These Warranty Claim Terms apply when a person submits a claim or related supporting
                    information to Terra Sol. The separate{' '}
                    <strong className="text-earth-900 font-bold">
                      2-Year Limited Conductivity Warranty
                    </strong>{' '}
                    defines the covered product, covered conductivity failure, exclusions, remedies, costs,
                    and claim procedure. If these Claim Terms conflict with that Limited Warranty, the Limited
                    Warranty controls. Neither document limits rights that cannot lawfully be limited.
                  </p>
                </section>

                <div className="border-t border-sand-300/80" />

                {/* 2. Who may submit a claim */}
                <section id="t-claim-conditions" className="scroll-mt-32">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mb-4">
                    2. Who may submit a claim
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-earth-800/85">
                    <p>
                      A claim may be submitted by the person covered under the Limited Warranty or by someone
                      that person authorizes to act for them. An authorized representative may be asked to
                      provide reasonable evidence of authority. Terra Sol does not ordinarily require
                      government identification to review a claim.
                    </p>
                    <p>
                      The claimant must provide a reliable contact method and enough purchase and product
                      information for Terra Sol to identify the order and sheet. Reasonable proof may include
                      an Amazon order record, receipt, invoice, order-confirmation email, seller record, or
                      another record that reasonably establishes the purchase. Warranty registration and
                      original packaging are not required.
                    </p>
                  </div>
                </section>

                <div className="border-t border-sand-300/80" />

                {/* 3. Reasonable evidence, testing, and inspection */}
                <section id="t-evidence-and-inspection" className="scroll-mt-32">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mb-4">
                    3. Reasonable evidence, testing, and inspection
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-earth-800/85">
                    <p>
                      Because this warranty covers an objective property, Terra Sol may reasonably request
                      troubleshooting details, photos, or a short continuous video showing a conductivity
                      test. The request will be limited to information useful for determining whether the
                      covered sheet has lost conductivity and whether an excluded cause materially contributed.
                    </p>
                    <p>
                      If remote evidence is inconclusive, Terra Sol may request physical inspection. When
                      Terra Sol requires a U.S. return, Terra Sol will provide return instructions and a
                      prepaid label. The claimant should not ship a product without authorization and should
                      not cut, mark, destroy, or discard the product unless Terra Sol gives written
                      instructions after approving the disposition method.
                    </p>
                    <p>
                      Terra Sol may use the same or an equivalent working test instrument to repeat the
                      published conductivity test. A denial will identify the material result and the
                      applicable warranty clause; Terra Sol will not describe its determination as final or
                      binding.
                    </p>
                  </div>
                </section>

                <div className="border-t border-sand-300/80" />

                {/* 4. Accuracy, product identity, and duplicate recovery */}
                <section id="t-accuracy-and-duplicate-recovery" className="scroll-mt-32">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mb-4">
                    4. Accuracy, product identity, and duplicate recovery
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-earth-800/85">
                    <p>
                      The claimant certifies that submitted information and evidence are accurate to the best
                      of their knowledge and have not been materially altered to misrepresent the claim. Terra
                      Sol may verify the order number, seller, purchase date, product identity, prior claims,
                      returns, chargebacks, refunds, and replacements to the extent reasonably relevant.
                    </p>
                    <p>
                      A claim may be denied to the extent it depends on a materially false statement,
                      fabricated or materially altered evidence, a counterfeit product, or an attempt to
                      obtain a second recovery for the same loss after a full refund or replacement. Terra Sol
                      will allow a reasonable opportunity to clarify an apparent inconsistency before denial
                      when doing so is practical. An immaterial mistake that does not affect eligibility will
                      not by itself invalidate an otherwise valid claim.
                    </p>
                    <p>
                      One remedy is available for one covered failure. If a retailer, payment provider,
                      insurer, or other party has already fully refunded or replaced the same product for the
                      same failure, Terra Sol may coordinate or reduce its remedy to avoid duplicate recovery,
                      without affecting non-waivable rights.
                    </p>
                  </div>
                </section>

                <div className="border-t border-sand-300/80" />

                {/* 5. Warranty Claim Privacy Notice */}
                <section id="t-privacy" className="scroll-mt-32 space-y-6">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900">
                    5. Warranty Claim Privacy Notice
                  </h2>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">
                      Information collected
                    </h3>
                    <p className="text-sm sm:text-base text-earth-800/85">
                      Terra Sol may collect the claimant’s name, contact details, shipping address when needed
                      for a remedy, purchase source, order or receipt information, product details, purchase
                      date, description of the concern, test results, photos or video, support
                      communications, claim status, and remedy history. The form should not request
                      government identification, full payment-card numbers, account passwords, medical
                      records, or information unrelated to the claim.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">How information is used</h3>
                    <p className="text-sm sm:text-base text-earth-800/85">
                      Claim information is used to identify the product and purchase, communicate with the
                      claimant, troubleshoot and evaluate coverage, arrange shipping or a remedy, maintain
                      warranty and quality records, prevent duplicate or fraudulent recovery, improve product
                      reliability and instructions, comply with law, and resolve disputes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">
                      Service providers and disclosures
                    </h3>
                    <p className="text-sm sm:text-base text-earth-800/85">
                      Terra Sol may provide only the information reasonably necessary to contracted providers
                      that support claim forms, customer service, file storage, testing, fraud prevention,
                      shipping, replacements, refunds, security, or legal compliance. Information may also be
                      disclosed when reasonably necessary to comply with law, protect rights or safety,
                      investigate suspected fraud, or complete a business transaction subject to applicable
                      privacy law. Warranty service is not conditioned on consent to marketing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">Retention and security</h3>
                    <p className="text-sm sm:text-base text-earth-800/85">
                      Claim records are retained only for as long as reasonably necessary for the purposes
                      above, considering the warranty period, product-safety and quality needs, dispute and
                      limitation periods, fraud prevention, tax or accounting requirements, and legal
                      obligations. Terra Sol should apply reasonable administrative, technical, and physical
                      safeguards and then delete or de-identify records under its approved retention schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">Privacy choices</h3>
                    <p className="text-sm sm:text-base text-earth-800/85">
                      Claimants may request access, correction, deletion, or other privacy rights available
                      under applicable law by contacting [PRIVACY CONTACT]. Terra Sol may retain information
                      when legally permitted or required, including to complete the claim, maintain warranty
                      records, prevent fraud, or establish and defend legal claims. Link the final notice to
                      the company’s complete Privacy Policy at [PRIVACY POLICY URL].
                    </p>
                  </div>
                </section>

                <div className="border-t border-sand-300/80" />

                {/* 6. Required confirmations at submission */}
                <section id="t-confirmations" className="scroll-mt-32">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mb-2">
                    6. Required confirmations at submission
                  </h2>
                  <p className="text-xs sm:text-sm text-earth-800/70 mb-6">
                    Use separate, unchecked boxes immediately above the submit button. Do not combine these
                    with marketing consent.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-sand-300/80 bg-[#f9f8f6] p-5 border-l-4 border-l-earth-600">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-earth-900 mb-1">
                        Accuracy and eligibility
                      </strong>
                      <p className="text-xs sm:text-sm leading-relaxed text-earth-800/85">
                        I certify that the information I provided is accurate to the best of my knowledge,
                        that the product was purchased new from Terra Sol or an authorized seller, and that
                        the same issue has not already been fully resolved by a refund or replacement.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-sand-300/80 bg-[#f9f8f6] p-5 border-l-4 border-l-earth-600">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-earth-900 mb-1">
                        Reasonable cooperation
                      </strong>
                      <p className="text-xs sm:text-sm leading-relaxed text-earth-800/85">
                        I understand that Terra Sol may request reasonable troubleshooting, photos or video,
                        or a prepaid return for inspection when useful to evaluate conductivity.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-sand-300/80 bg-[#f9f8f6] p-5 border-l-4 border-l-earth-600">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-earth-900 mb-1">
                        Terms and privacy
                      </strong>
                      <p className="text-xs sm:text-sm leading-relaxed text-earth-800/85">
                        I have read the 2-Year Limited Conductivity Warranty and the Warranty Claim Terms &
                        Privacy Notice. I understand that the written warranty covers conductivity of an
                        eligible sheet, not health or subjective outcomes, and that submitting a claim does
                        not waive any right that cannot legally be waived.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="border-t border-sand-300/80" />

                {/* 7. Changes, severability, and legal rights */}
                <section id="t-legal-rights" className="scroll-mt-32 space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mb-2">
                    7. Changes, severability, and legal rights
                  </h2>
                  <p className="text-sm sm:text-base text-earth-800/85">
                    The version in effect when a product was sold will not be retroactively narrowed for that
                    product. Terra Sol may update the claim process prospectively to improve clarity,
                    security, or administration, but a process update will not reduce existing warranty
                    coverage. If a provision is unenforceable, it will be applied only to the extent
                    permitted, and the remaining provisions continue to apply.
                  </p>
                  <p className="text-sm sm:text-base text-earth-800/85">
                    These Claim Terms do not create mandatory arbitration, a class-action waiver, or a
                    mandatory informal dispute mechanism. Any such program would require separate,
                    conspicuous terms and qualified U.S. legal review. Terra Sol’s internal reconsideration
                    process is optional and is not final or binding.
                  </p>
                  <p className="text-sm sm:text-base font-bold text-earth-900">
                    This warranty gives you specific legal rights, and you may also have other rights which
                    vary from State to State.
                  </p>
                </section>

                {/* Publication Blockers Callout */}
                <div className="rounded-2xl border border-red-200 bg-[#fff5f2] p-6 text-xs sm:text-sm text-earth-900 leading-relaxed shadow-xs">
                  <strong className="block font-bold text-[#b83b26] mb-1">Publication blockers</strong>
                  Insert the legal warrantor, mailing address, non-internet copy-request method, privacy
                  contact, complete Privacy Policy URL, approved retention standard, list of authorized
                  sellers, and operational shipping territory. Have U.S. consumer-products and privacy counsel
                  approve the final page and the connected backend workflow.
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => switchView('main', 'claim-form')}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-earth-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-earth-900 shadow-md"
                  >
                    <ArrowLeft size={16} /> Return to the claim form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Warranty;
