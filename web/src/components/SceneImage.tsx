type SceneImageProps = {
  src?: string
  alt?: string
}

export function SceneImage({ src, alt = '' }: SceneImageProps) {
  if (!src) return null

  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-slate-blue/40 shadow-lg">
      <img
        src={src}
        alt={alt}
        className="aspect-video w-full object-contain bg-black/30 object-center"
      />
    </div>
  )
}
