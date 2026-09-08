const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/18KGGoFLv5/",
  instagram: "https://www.instagram.com/nd_softwarestudio?stkn=YnQzZGM5cmtnY28y",
  whatsapp: "https://wa.me/22897988826",
};

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

            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-slate-soft transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.67.33-1 1-1Z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-slate-soft transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-slate-soft transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-[#0A0E14]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 3a8.9 8.9 0 0 0-7.67 13.43L3 21l4.72-1.3A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.57-.98l-.25-.15-2.8.77.75-2.73-.16-.28A7 7 0 1 1 12 19Zm3.84-5.25c-.2-.1-1.2-.59-1.39-.66-.19-.07-.33-.1-.47.1-.14.2-.52.66-.64.8-.12.14-.24.15-.44.05-.2-.1-.84-.31-1.6-.99-.59-.52-.99-1.17-1.1-1.37-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.47-1.14-.64-1.56-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.7s.74 1.97.84 2.1c.1.14 1.45 2.21 3.5 3.1.49.21.87.34 1.17.43.49.16.94.13 1.29.08.39-.06 1.2-.49 1.37-.96.17-.47.17-.87.12-.96-.05-.09-.18-.14-.38-.24Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
