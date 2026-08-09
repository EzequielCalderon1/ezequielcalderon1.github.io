export default function StarburstBadge({ number, className = '' }) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`relative inline-flex items-center justify-center flex-shrink-0 w-16 h-16 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 8-point starburst */}
        <polygon
          points="50,2 57,34 82,18 67,43 96,50 67,57 82,82 57,66 50,98 43,66 18,82 33,57 4,50 33,43 18,18 43,34"
          fill="#e31837"
        />
      </svg>
      <span className="relative z-10 font-mono font-black text-white text-sm leading-none select-none">
        {number}
      </span>
    </div>
  )
}
