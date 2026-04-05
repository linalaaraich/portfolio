export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Large emerald blob top-right */}
      <div
        className="blob absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/8"
      />
      {/* Mint blob left */}
      <div
        className="blob-slow absolute top-1/3 -left-48 h-[400px] w-[400px] rounded-full bg-emerald-300/8 dark:bg-emerald-400/5"
        style={{ animationDelay: "-5s" }}
      />
      {/* Small sage blob bottom */}
      <div
        className="blob absolute bottom-20 right-1/4 h-[300px] w-[300px] rounded-full bg-teal-400/8 dark:bg-teal-500/5"
        style={{ animationDelay: "-10s" }}
      />
      {/* Tiny accent blob */}
      <div
        className="blob-slow absolute top-2/3 left-1/3 h-[200px] w-[200px] rounded-full bg-green-200/10 dark:bg-green-300/5"
        style={{ animationDelay: "-7s" }}
      />
    </div>
  );
}

export function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 10C60 10 20 40 20 70C20 90 38 110 60 110C82 110 100 90 100 70C100 40 60 10 60 10Z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M60 25C60 25 60 110 60 110"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <path
        d="M60 50C45 42 30 48 30 48"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d="M60 65C75 57 88 63 88 63"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d="M60 80C42 72 28 78 28 78"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
    </svg>
  );
}
