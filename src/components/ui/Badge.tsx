import React from 'react'
import { cn } from '../../utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'brand' | 'dark' | 'neutral' | 'outline'
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'brand',
  dot = false,
  children,
  ...props
}) => {
  const variantStyles = {
    brand: 'bg-[#1D63ED] text-white border-transparent',
    dark: 'bg-[#1D63ED] text-white border-transparent',
    neutral: 'bg-slate-100 text-slate-800 border-transparent',
    outline: 'bg-white text-dark-900 border-slate-200',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />}
      <span>{children}</span>
    </div>
  )
}
