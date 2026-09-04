export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="grid gap-10 border-t border-line pt-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-md font-display text-[30px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
              Un projet en tête&nbsp;? Parlons-en.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-slate-soft">
              Pour une demande de projet, un devis ou une collaboration,
              contactez ND Software Studio via nos canaux officiels.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <a
              href="mailto:contact@ndsoftwarestudio.com"
              className="w-fit border-b border-ink pb-1 font-display text-[20px] font-medium text-ink transition-colors hover:border-signal hover:text-signal-dim md:text-[24px]"
            >
              contact@ndsoftwarestudio.com
            </a>

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[14px] text-slate-soft">
              <a href="#" className="transition-colors hover:text-ink">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-ink">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-ink">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
