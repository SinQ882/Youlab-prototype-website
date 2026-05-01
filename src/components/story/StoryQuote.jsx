import ExampleBadge from '../ExampleBadge.jsx';

export default function StoryQuote({ story, accentColor }) {
  const { quote } = story;

  const initials = quote.author
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      className="py-16 border-y border-border"
      style={{ background: `${accentColor}08` }}
    >
      <div className="max-w-[680px] mx-auto px-6">
        {/* Decoratief aanhalingsteken */}
        <div
          className="font-extrabold leading-none mb-2 select-none"
          style={{ fontSize: 96, color: accentColor, opacity: 0.18, lineHeight: 1 }}
          aria-hidden="true"
        >
          "
        </div>

        <blockquote
          className="text-foreground font-semibold italic mb-8"
          style={{ fontSize: 'clamp(17px, 2.2vw, 22px)', lineHeight: 1.65 }}
        >
          "{quote.text}"&nbsp;<ExampleBadge />
        </blockquote>

        {/* Auteur */}
        <div className="flex items-center gap-4">
          {quote.image ? (
            <img
              src={quote.image}
              alt={quote.author}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-[14px]"
              style={{ background: accentColor }}
            >
              {initials}
            </div>
          )}
          <div>
            <div className="font-bold text-foreground text-[15px]">
              {quote.author}&nbsp;<ExampleBadge />
            </div>
            <div className="text-muted-foreground text-[13px]">
              {quote.role} — {quote.organization}&nbsp;<ExampleBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
