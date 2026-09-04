export default function Footer() {
  return (
    <footer className="bg-dark-bg">
      <div className="mx-auto flex max-w-content flex-col gap-6 border-t border-dark-line px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-[14px] font-medium text-white">
            ND Software Studio
          </p>
          <p className="mt-1 text-[13px] text-white/40">
            Digital experiences. Design. Software. Growth.
          </p>
        </div>
        <p className="text-[13px] text-white/40">
          © {new Date().getFullYear()} ND Software Studio. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
