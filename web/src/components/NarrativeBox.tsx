type NarrativeBoxProps = {
  title: string
  text: string
  variant?: 'default' | 'feedback'
}

export function NarrativeBox({
  title,
  text,
  variant = 'default',
}: NarrativeBoxProps) {
  const isFeedback = variant === 'feedback'

  return (
    <div
      className={`rounded-xl border bg-slate-blue/90 p-5 shadow-lg backdrop-blur-sm ${
        isFeedback ? 'border-turf-green/30' : 'border-white/10'
      }`}
    >
      <p
        className={`mb-2 text-sm font-semibold tracking-wide uppercase ${
          isFeedback ? 'text-turf-green' : 'text-energy-red'
        }`}
      >
        {title}
      </p>
      <p className="text-base leading-relaxed text-off-white">{text}</p>
    </div>
  )
}
