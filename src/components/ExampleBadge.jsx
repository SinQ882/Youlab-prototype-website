export default function ExampleBadge({ children = 'Voorbeeld' }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide border align-middle"
      style={{
        background: '#fffbeb',
        borderColor: '#fde68a',
        color: '#92400e',
      }}
    >
      <span aria-hidden="true">✦</span>
      {children}
    </span>
  );
}
