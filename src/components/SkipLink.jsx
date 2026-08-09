export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        fixed top-4 left-4 z-[9999]
        px-4 py-2 rounded-md
        bg-ps-red text-white text-sm font-semibold
        translate-y-[-150%] focus:translate-y-0
        transition-transform duration-200
        outline-none focus:outline-2 focus:outline-white focus:outline-offset-2
      "
    >
      Saltar al contenido principal
    </a>
  )
}
