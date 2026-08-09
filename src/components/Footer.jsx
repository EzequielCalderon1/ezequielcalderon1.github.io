export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#162b4e] border-t border-white/10 py-7 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase">
          © {year} Ezequiel Calderón Dinarte
        </p>
        <p className="font-mono text-[0.65rem] tracking-[0.15em] text-white/30 uppercase">
          Next.js &amp; Framer Motion
        </p>
      </div>
    </footer>
  )
}
