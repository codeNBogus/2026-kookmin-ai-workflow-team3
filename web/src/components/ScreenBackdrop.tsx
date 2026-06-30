import type { ReactNode } from 'react'

type ScreenBackdropProps = {
  children: ReactNode
  className?: string
}

export function ScreenBackdrop({ children, className = '' }: ScreenBackdropProps) {
  return (
    <main
      className={`relative flex min-h-screen flex-col ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-linear-to-b from-slate-blue to-deep-navy" />
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </main>
  )
}
