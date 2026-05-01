import { cn } from '../lib/utils.js';

/**
 * Polished placeholder for a real platform screenshot.
 *
 * Props:
 *   label       – kort shotlabel,  e.g. "Platform-screenshot: dashboard"
 *   description – wat er in beeld moet komen
 *   ratio       – CSS aspect-ratio string, e.g. "16 / 10" | "4 / 3" | "9 / 16"
 *   size        – afmeting voor de shotlist, e.g. "1600×1000"
 *   url         – nep-URL in de browser-chrome (optioneel)
 *   className   – extra Tailwind klassen op de wrapper
 *
 * Swappen: vervang dit element door <img src="…" alt="…" className="rounded-2xl border border-border shadow-lg w-full" />
 * — het visuele kader (border, shadow, radius) is identiek.
 */
export default function ScreenshotPlaceholder({
  label = 'Platform-screenshot',
  description = '',
  ratio = '16 / 9',
  size = '',
  url = 'app.youlab.nl',
  className,
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border shadow-lg w-full select-none',
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      {/* Subtle gradient fill — light AND dark */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(145deg, var(--muted) 0%, var(--secondary) 55%, var(--muted) 100%)',
        }}
      />

      {/* Fine grid texture for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,var(--foreground) 0,var(--foreground) 1px,transparent 1px,transparent 32px),' +
            'repeating-linear-gradient(90deg,var(--foreground) 0,var(--foreground) 1px,transparent 1px,transparent 32px)',
        }}
      />

      {/* Ambient glow centre */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '60%', height: '60%', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(64,87,255,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Browser chrome bar */}
      <div
        className="relative flex items-center gap-2 px-3 border-b border-border"
        style={{
          height: 36,
          background: 'color-mix(in srgb, var(--card) 80%, transparent)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60 shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60 shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60 shrink-0" />
        <div
          className="flex-1 rounded-md text-[10px] text-muted-foreground/60 text-center py-0.5 px-3 border border-border/50 font-mono truncate mx-2"
          style={{ background: 'color-mix(in srgb, var(--background) 70%, transparent)' }}
        >
          {url}
        </div>
      </div>

      {/* Main content — centred label + description */}
      <div className="relative flex flex-col items-center justify-center h-[calc(100%-36px)] p-6 text-center gap-3">
        {/* Camera icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-1 border border-border/60"
          style={{ background: 'color-mix(in srgb, var(--secondary) 60%, transparent)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>

        {/* Label */}
        <p
          className="font-semibold text-foreground/70 leading-snug"
          style={{ fontSize: 'clamp(12px, 1.5vw, 15px)', maxWidth: '80%' }}
        >
          {label}
        </p>

        {/* Description */}
        {description && (
          <p
            className="text-muted-foreground/70 leading-relaxed"
            style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', maxWidth: '70%' }}
          >
            {description}
          </p>
        )}

        {/* Size chip */}
        {size && (
          <span
            className="rounded-full border border-border/60 text-muted-foreground/60 font-mono"
            style={{
              fontSize: 10, padding: '2px 10px',
              background: 'color-mix(in srgb, var(--muted) 50%, transparent)',
            }}
          >
            {ratio.replace(' / ', ':')} — {size}
          </span>
        )}
      </div>

      {/* "Screenshot volgt" badge — bottom-right */}
      <div
        className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-border/60 text-muted-foreground/60 font-semibold"
        style={{
          fontSize: 10, padding: '3px 10px',
          background: 'color-mix(in srgb, var(--card) 85%, transparent)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
        Screenshot volgt
      </div>
    </div>
  );
}
