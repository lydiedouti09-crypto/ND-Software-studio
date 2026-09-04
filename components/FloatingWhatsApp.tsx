"use client";

import { useState } from "react";

// ⚠️ Remplacez ce numéro par le vôtre, au format international sans "+" ni espaces.
const WHATSAPP_NUMBER = "22890000000";
const WHATSAPP_MESSAGE = "Bonjour ND Software Studio, j'aimerais discuter d'un projet.";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 rounded-2xl border border-line bg-surface p-4 shadow-xl">
          <p className="font-display text-[14px] font-medium text-ink">
            ND Software Studio
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-soft">
            Une question sur un projet&nbsp;? Écrivez-nous sur WhatsApp, on
            répond rapidement.
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[13.5px] font-medium text-[#0A0E14] transition-opacity hover:opacity-90"
          >
            Ouvrir la discussion
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le chat WhatsApp" : "Ouvrir le chat WhatsApp"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
        )}

        {open ? (
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="#0A0E14"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7"
            fill="#0A0E14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.02 3C9.4 3 4 8.36 4 14.94c0 2.23.62 4.35 1.72 6.18L4 29l8.1-1.66a13.1 13.1 0 0 0 3.92.6h.01c6.62 0 12.02-5.36 12.02-11.94C28.05 8.36 22.65 3 16.02 3zm0 21.75h-.01a10.7 10.7 0 0 1-5.44-1.49l-.39-.23-4.04.83.86-3.92-.25-.4a9.85 9.85 0 0 1-1.5-5.6c0-5.45 4.46-9.88 9.94-9.88 5.47 0 9.93 4.43 9.93 9.88 0 5.45-4.46 9.81-9.1 9.81zm5.44-7.4c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.08-.13-.27-.2-.57-.35z" />
          </svg>
        )}
      </button>
    </div>
  );
}
