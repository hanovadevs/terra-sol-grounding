import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, Mail, ExternalLink } from 'lucide-react';

const GOOGLE_FORM_EMBED_URL = '';
const SUPPORT_EMAIL = 'support@terrasolgrounding.com';

const Warranty: React.FC = () => {
  const hasConfiguredGoogleForm = GOOGLE_FORM_EMBED_URL.startsWith('https://docs.google.com/forms/');

  return (
    <div className="pt-20">
      <div className="bg-earth-900 py-12 sm:py-16 md:py-20 text-sand-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <ShieldCheck className="mx-auto mb-4 sm:mb-6 text-sand-400" size={44} />
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold">Warranty Registration</h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-sand-100/70">
            Protect your investment. Register your Terra Sol products to activate your 3-year conductivity guarantee. Previous customers are welcome to register at any time.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-2xl sm:rounded-3xl border border-sand-300 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-serif font-bold text-earth-900">Why Register?</h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="shrink-0 mt-0.5 text-earth-600" size={18} />
                  <span className="text-[10px] sm:text-xs md:text-sm text-earth-800/70"><strong>3-Year Guarantee:</strong> Covers loss of conductivity in our high-density silver and carbon fiber products.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="shrink-0 mt-0.5 text-earth-600" size={18} />
                  <span className="text-[10px] sm:text-xs md:text-sm text-earth-800/70"><strong>Priority Support:</strong> Faster claim processing and direct access to our wellness experts.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="shrink-0 mt-0.5 text-earth-600" size={18} />
                  <span className="text-[10px] sm:text-xs md:text-sm text-earth-800/70"><strong>Authenticity Proof:</strong> Verifies your product is a genuine Terra Sol original.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-sand-300 bg-sand-100 p-5 sm:p-6 md:p-8">
              <h3 className="mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg font-bold text-earth-900">
                <FileText size={16} className="sm:w-[18px] sm:h-[18px]" /> Order Verification
              </h3>
              <p className="text-xs sm:text-sm text-earth-800/70">
                Please provide your <strong>Order Number</strong> from Amazon or our website. We will match this with your purchase date to determine your warranty coverage period.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] overflow-hidden rounded-2xl sm:rounded-3xl border border-sand-300 bg-white shadow-xl">
              {hasConfiguredGoogleForm ? (
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  title="Warranty Registration Form"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="h-full w-full"
                >
                  Loading...
                </iframe>
              ) : (
                <div className="flex h-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] items-center justify-center bg-sand-50 p-4 sm:p-8 md:p-12">
                  <div className="max-w-lg text-center">
                    <Mail className="mx-auto mb-3 sm:mb-4 text-earth-400" size={40} />
                    <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-serif font-bold text-earth-900">Register by Email</h3>
                    <p className="mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm text-earth-800/70">
                      The online registration form has not been connected yet. Until then, customers can activate coverage by emailing the details below to our support team.
                    </p>
                    <div className="mb-4 sm:mb-6 rounded-xl sm:rounded-2xl border border-sand-300 bg-white p-4 sm:p-6 text-left">
                      <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-earth-800/50">Include In Your Email</p>
                      <ul className="space-y-2 sm:space-y-3 text-[10px] sm:text-xs md:text-sm text-earth-800/80">
                        <li>Full name</li>
                        <li>Order number</li>
                        <li>Product purchased</li>
                        <li>Purchase date</li>
                        <li>Best contact email</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
                      <a
                        href={`mailto:${SUPPORT_EMAIL}?subject=Terra%20Sol%20Warranty%20Registration`}
                        className="inline-flex items-center gap-2 rounded-full bg-earth-800 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-sand-100 transition-colors hover:bg-earth-900"
                      >
                        Email Support
                        <Mail size={14} className="sm:w-[16px] sm:h-[16px]" />
                      </a>
                      <a
                        href="/manual.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-earth-800 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-earth-800 transition-colors hover:bg-earth-800 hover:text-sand-100"
                      >
                        View Manual
                        <ExternalLink size={14} className="sm:w-[16px] sm:h-[16px]" />
                      </a>
                    </div>
                    <p className="mt-4 sm:mt-6 text-[9px] sm:text-xs text-earth-800/60">
                      To switch this page to a Google Form later, update <code>GOOGLE_FORM_EMBED_URL</code> in <code>pages/Warranty.tsx</code>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
