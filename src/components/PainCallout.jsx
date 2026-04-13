export default function PainCallout() {
  return (
    <section
      className="py-8 overflow-hidden"
      style={{ background: '#0a0f33' }}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-center justify-center gap-6">
        {/* Heading */}
        <p
          className="text-[clamp(28px,4vw,48px)] font-semibold text-center leading-none max-w-[860px]"
          style={{ color: '#f7f8fc' }}
        >
          Dit kan anders. YouLab geeft je team structuur, werkvormen en overzicht&nbsp;– op één plek.
        </p>

        {/* Outlined button */}
        <button
          className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium rounded-lg border cursor-pointer"
          style={{
            background: '#f7f8fc',
            borderColor: '#e2e8f0',
            color: '#4057ff',
          }}
        >
          Plan een demo
        </button>
      </div>
    </section>
  );
}
