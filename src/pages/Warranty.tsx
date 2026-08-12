import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Headphones,
  Loader2,
  Mail,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Upload,
  X,
  XCircle,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycby3-W6I7I_OhdaciGMkoiK7kQ605KTY7uFSeplSZ9dFXxCJTr_iNnsK0bra2FsTwluY/exec';
const SUPPORT_EMAIL = 'support@terrasolgrounding.com';

interface FormData {
  fullName: string;
  email: string;
  purchaseLocation: string;
  orderNumber: string;
  purchaseDate: string;
  registerWarranty: string;
  confirmAccurate: boolean;
  confirmNoAutoApproval: boolean;
  confirmTerms: boolean;
}

const initialFormData: FormData = {
  fullName: '', email: '', purchaseLocation: '', orderNumber: '', purchaseDate: '',
  registerWarranty: 'Yes', confirmAccurate: false, confirmNoAutoApproval: false, confirmTerms: false,
};

const steps = ['Your details', 'Purchase details', 'Proof & confirm'];
const inputClasses = 'w-full rounded-xl border border-sand-300 bg-white px-4 py-3.5 text-sm text-earth-900 outline-none transition focus:border-earth-600 focus:ring-4 focus:ring-earth-600/10 placeholder:text-earth-800/35';
const labelClasses = 'mb-2 block text-sm font-bold text-earth-900';

const Warranty: React.FC = () => {
  useSEO({
    title: '2-Year Product Warranty | Terra Sol Grounding',
    description: 'Review Terra Sol warranty coverage, register your grounding product, or contact our support team for help.',
    schema: {
      '@context': 'https://schema.org', '@type': 'WebPage',
      '@id': 'https://terrasolgrounding.com/warranty/#warrantypage',
      name: 'Terra Sol 2-Year Product Warranty',
      description: 'Warranty coverage, registration, and support for Terra Sol Grounding products.',
      url: 'https://terrasolgrounding.com/warranty',
    },
  });

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    } else setProofPreview(null);
  };

  const removeFile = () => {
    setProofFile(null);
    setProofPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const goNext = () => {
    if (activeStep === 0 && (!formData.fullName.trim() || !formData.email.trim())) {
      setError('Enter your name and email to continue.'); return;
    }
    if (activeStep === 1 && (!formData.purchaseLocation || !formData.orderNumber.trim() || !formData.purchaseDate)) {
      setError('Complete all purchase details to continue.'); return;
    }
    setError(null);
    setActiveStep((step) => Math.min(step + 1, 2));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!proofFile) { setError('Upload your receipt or proof of purchase.'); return; }
    if (!formData.confirmAccurate || !formData.confirmNoAutoApproval || !formData.confirmTerms) {
      setError('Please agree to all three confirmations.'); return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const fileData = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(proofFile);
      });
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, fileName: proofFile.name, fileType: proofFile.type, fileData }),
      });
      setIsSubmitted(true);
      setFormData(initialFormData);
      removeFile();
    } catch {
      setError('We could not submit your registration. Please try again or contact support.');
    } finally { setIsSubmitting(false); }
  };

  return (
    <main className="min-h-screen bg-sand-100 pt-20 text-earth-900">
      <section className="relative overflow-hidden bg-earth-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(112,180,78,.16),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(201,169,78,.09),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_420px] lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold uppercase tracking-[.16em] text-sand-300">
              <ShieldCheck size={15} /> Product protection
            </div>
            <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Warranty help, without the guesswork.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-sand-300 sm:text-lg">
              See what your 2-year limited manufacturer warranty covers, register a recent purchase, or get help with a product you already own.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-sand-100 px-5 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-white">
                Register your product <ArrowRight size={16} />
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}?subject=Warranty%20support`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Get warranty help <Headphones size={16} />
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-sand-400">At a glance</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/[.06] p-4"><strong className="block font-serif text-3xl">2 years</strong><span className="mt-1 block text-xs leading-5 text-sand-300">Limited manufacturer coverage</span></div>
              <div className="rounded-2xl bg-white/[.06] p-4"><strong className="block font-serif text-3xl">30 days</strong><span className="mt-1 block text-xs leading-5 text-sand-300">Recommended registration window</span></div>
            </div>
            <div className="mt-5 flex gap-3 border-t border-white/10 pt-5 text-sm leading-6 text-sand-300"><ReceiptText className="mt-1 shrink-0 text-sand-400" size={18} /><span>Keep your order number and proof of purchase. You may need both if you request service.</span></div>
          </div>
        </div>
      </section>

      <nav aria-label="Warranty page sections" className="sticky top-20 z-30 border-b border-sand-300 bg-sand-100/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-8">
          {[['Overview', '#overview'], ['How it works', '#process'], ['Register', '#register'], ['Support', '#support']].map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 rounded-lg px-4 py-2.5 text-sm font-bold text-earth-800/65 transition hover:bg-white hover:text-earth-900">{label}</a>
          ))}
        </div>
      </nav>

      <section id="overview" className="scroll-mt-36 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-earth-600">Coverage overview</p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Know where you stand.</h2>
          <p className="mt-3 leading-7 text-earth-800/65">A quick summary of the standard terms. Our team will review eligibility using your purchase details and product condition.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-earth-200 bg-white p-6 shadow-[0_12px_40px_rgba(26,46,18,.05)] sm:p-8">
            <div className="mb-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-earth-100 text-earth-700"><CheckCircle2 size={21} /></span><h3 className="font-serif text-2xl font-bold">What’s covered</h3></div>
            <ul className="space-y-4">
              {['Manufacturing defects in materials or workmanship', 'Loss of conductivity in covered 12% silver-fiber products', 'Products owned by the original purchaser with valid proof of purchase'].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-earth-800/75"><Check className="mt-1 shrink-0 text-earth-600" size={16} />{item}</li>)}
            </ul>
          </article>
          <article className="rounded-3xl border border-sand-300 bg-white p-6 shadow-[0_12px_40px_rgba(26,46,18,.05)] sm:p-8">
            <div className="mb-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sand-200 text-earth-700"><XCircle size={21} /></span><h3 className="font-serif text-2xl font-bold">What’s not covered</h3></div>
            <ul className="space-y-4">
              {['Normal wear and cosmetic changes from regular use', 'Damage caused by misuse, accidents, or improper installation', 'Altered or modified products and purchases without valid proof'].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-earth-800/75"><X className="mt-1 shrink-0 text-earth-800/40" size={16} />{item}</li>)}
            </ul>
          </article>
        </div>
        <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-earth-800/75"><AlertCircle className="mt-0.5 shrink-0 text-amber-700" size={18} /><p>Registration creates a purchase record; it does not extend coverage or automatically approve a future claim. Final eligibility is determined after review.</p></div>
      </section>

      <section id="process" className="scroll-mt-36 border-y border-sand-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-earth-600">How it works</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Three simple steps.</h2></div>
          <div className="grid gap-8 md:grid-cols-3">
            {[{ icon: ReceiptText, title: 'Gather your details', text: 'Have your order number, purchase date, and receipt or order screenshot ready.' }, { icon: FileCheck2, title: 'Register the purchase', text: 'Complete the short form below. Registration is recommended within 30 days.' }, { icon: Headphones, title: 'Contact us if needed', text: 'If something goes wrong, email our support team with a description of the issue.' }].map((item, index) => <article key={item.title} className="relative"><span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-earth-900 text-sand-100"><item.icon size={22} /></span><span className="absolute right-0 top-2 font-serif text-4xl text-sand-300">0{index + 1}</span><h3 className="text-base font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-earth-800/60">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="register" className="scroll-mt-36 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <aside className="lg:sticky lg:top-40 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-earth-600">Product registration</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Register in a few minutes.</h2>
            <p className="mt-3 text-sm leading-6 text-earth-800/60">You’ll need your contact details, purchase information, and a receipt or order screenshot.</p>
            <div className="mt-7 space-y-3">
              {steps.map((step, index) => <button key={step} type="button" onClick={() => index < activeStep && setActiveStep(index)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition ${activeStep === index ? 'bg-earth-900 text-white' : activeStep > index ? 'bg-earth-100 text-earth-800' : 'text-earth-800/45'}`}><span className={`grid h-7 w-7 place-items-center rounded-full text-xs ${activeStep === index ? 'bg-white/15' : 'bg-white'}`}>{activeStep > index ? <Check size={14} /> : index + 1}</span>{step}</button>)}
            </div>
          </aside>

          <div className="overflow-hidden rounded-3xl border border-sand-300 bg-white shadow-[0_18px_60px_rgba(26,46,18,.07)]">
            <div className="flex items-center justify-between border-b border-sand-300 px-6 py-5 sm:px-8"><div><p className="font-bold">Step {activeStep + 1} of 3</p><p className="mt-1 text-xs text-earth-800/50">Fields marked * are required</p></div><span className="text-sm font-bold text-earth-600">{Math.round(((activeStep + 1) / 3) * 100)}%</span></div>
            <div className="h-1 bg-sand-200"><div className="h-full bg-earth-600 transition-all duration-500" style={{ width: `${((activeStep + 1) / 3) * 100}%` }} /></div>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center sm:p-14"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-earth-100 text-earth-700"><CheckCircle2 size={32} /></span><h3 className="mt-6 font-serif text-3xl font-bold">Registration received.</h3><p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-earth-800/60">Keep your order number and proof of purchase. If you need assistance, contact <a className="font-bold text-earth-700 underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p><button onClick={() => { setIsSubmitted(false); setActiveStep(0); }} className="mt-7 rounded-xl bg-earth-900 px-5 py-3 text-sm font-bold text-white">Register another product</button></motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="p-6 sm:p-8">
                  {activeStep === 0 && <div><h3 className="font-serif text-2xl font-bold">Your details</h3><p className="mt-2 text-sm text-earth-800/55">We’ll use these details to associate the registration with you.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><div><label htmlFor="fullName" className={labelClasses}>Full name *</label><input id="fullName" name="fullName" autoComplete="name" required value={formData.fullName} onChange={handleChange} className={inputClasses} placeholder="Your full name" /></div><div><label htmlFor="email" className={labelClasses}>Email address *</label><input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="you@example.com" /></div></div></div>}
                  {activeStep === 1 && <div><h3 className="font-serif text-2xl font-bold">Purchase details</h3><p className="mt-2 text-sm text-earth-800/55">Use the information shown on your receipt or order confirmation.</p><div className="mt-7 space-y-5"><div><label htmlFor="purchaseLocation" className={labelClasses}>Purchased from *</label><select id="purchaseLocation" name="purchaseLocation" required value={formData.purchaseLocation} onChange={handleChange} className={inputClasses}><option value="">Select a store</option><option>Amazon</option><option>Official website</option><option>Authorized seller</option><option>Other</option></select></div><div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="orderNumber" className={labelClasses}>Order number *</label><input id="orderNumber" name="orderNumber" required value={formData.orderNumber} onChange={handleChange} className={inputClasses} placeholder="e.g. 123-4567890-1234567" /></div><div><label htmlFor="purchaseDate" className={labelClasses}>Purchase date *</label><div className="relative"><input id="purchaseDate" name="purchaseDate" type="date" required value={formData.purchaseDate} onChange={handleChange} className={inputClasses} /><CalendarDays className="pointer-events-none absolute right-4 top-4 text-earth-800/35" size={17} /></div></div></div></div></div>}
                  {activeStep === 2 && <div><h3 className="font-serif text-2xl font-bold">Proof & confirmation</h3><p className="mt-2 text-sm text-earth-800/55">Upload a clear image or PDF that shows your order number and purchase date.</p><div className="mt-7"><label className={labelClasses}>Proof of purchase *</label><input ref={fileInputRef} type="file" accept="image/*,.pdf" onChange={handleFileChange} className="sr-only" /><button type="button" onClick={() => fileInputRef.current?.click()} className="w-full rounded-2xl border-2 border-dashed border-sand-300 bg-sand-50 p-6 text-center transition hover:border-earth-500 hover:bg-earth-100/30">{proofFile ? <span className="flex items-center gap-4 text-left">{proofPreview ? <img src={proofPreview} alt="Receipt preview" className="h-14 w-14 rounded-lg object-cover" /> : <FileText className="text-earth-600" size={30} />}<span className="min-w-0 flex-1"><strong className="block truncate text-sm">{proofFile.name}</strong><span className="mt-1 block text-xs text-earth-800/50">{(proofFile.size / 1024).toFixed(0)} KB</span></span><span onClick={(e) => { e.stopPropagation(); removeFile(); }} className="grid h-9 w-9 place-items-center rounded-full bg-white text-earth-800/50" aria-label="Remove file"><X size={16} /></span></span> : <span><Upload className="mx-auto text-earth-600" size={28} /><strong className="mt-3 block text-sm">Choose a receipt or drop it here</strong><span className="mt-1 block text-xs text-earth-800/45">JPG, PNG, or PDF · 10 MB maximum</span></span>}</button></div><fieldset className="mt-6 space-y-4 rounded-2xl border border-sand-300 p-5"><legend className="px-1 text-sm font-bold">Please confirm *</legend>{[{ name: 'confirmAccurate', text: 'The information I provided is accurate.' }, { name: 'confirmNoAutoApproval', text: 'I understand registration does not automatically approve a claim.' }, { name: 'confirmTerms', text: 'I understand coverage depends on the warranty terms, product condition, proper use, and proof of purchase.' }].map(({ name, text }) => <label key={name} className="flex cursor-pointer gap-3 text-sm leading-6 text-earth-800/75"><input type="checkbox" name={name} checked={formData[name as keyof FormData] as boolean} onChange={handleChange} className="mt-1 h-4 w-4 accent-earth-700" />{text}</label>)}</fieldset></div>}
                  <AnimatePresence>{error && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} role="alert" className="mt-6 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"><AlertCircle className="mt-0.5 shrink-0" size={16} />{error}</motion.div>}</AnimatePresence>
                  <div className="mt-8 flex items-center justify-between border-t border-sand-200 pt-6">{activeStep > 0 ? <button type="button" onClick={() => { setError(null); setActiveStep((step) => step - 1); }} className="rounded-xl px-4 py-3 text-sm font-bold text-earth-800/65 hover:bg-sand-100">Back</button> : <span />}{activeStep < 2 ? <button type="button" onClick={goNext} className="inline-flex items-center gap-2 rounded-xl bg-earth-900 px-5 py-3 text-sm font-bold text-white hover:bg-earth-800">Continue <ChevronRight size={16} /></button> : <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-earth-900 px-5 py-3 text-sm font-bold text-white disabled:opacity-60">{isSubmitting ? <><Loader2 className="animate-spin" size={16} /> Submitting</> : <><PackageCheck size={17} /> Submit registration</>}</button>}</div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="support" className="scroll-mt-36 bg-earth-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-sand-400"><Clock3 size={15} /> Need help with an existing product?</div><h2 className="mt-3 font-serif text-3xl font-bold">Talk to a real support person.</h2><p className="mt-3 text-sm leading-6 text-sand-300">Include your order number, purchase date, and a short description of the issue so our team can help faster.</p></div>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Warranty%20support`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-earth-900 hover:bg-sand-100"><Mail size={17} /> Email warranty support</a>
        </div>
      </section>
    </main>
  );
};

export default Warranty;
