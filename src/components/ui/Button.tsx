import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, icon, iconPosition = 'left', children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium select-none cursor-pointer rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed'
    
    const sizeStyles = {
      sm: 'text-xs px-4 sm:px-5 py-2 sm:py-2.5 gap-2',
      md: 'text-sm px-6 sm:px-7 py-2.5 sm:py-3 gap-2.5',
      lg: 'text-base px-8 sm:px-10 py-3.5 sm:py-4 gap-3 shadow-sm',
    }

    const variantStyles = {
      primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm active:bg-brand-800',
      dark: 'bg-dark-900 text-white hover:bg-dark-800 active:bg-black shadow-md',
      secondary: 'bg-surface-subtle text-dark-900 hover:bg-slate-200 active:bg-slate-300 border border-surface-border',
      outline: 'bg-transparent text-dark-900 border border-slate-300 hover:border-dark-900 hover:bg-slate-50',
      ghost: 'bg-transparent text-slate-700 hover:text-dark-900 hover:bg-slate-100',
    }

    return (
      <motion.button
        ref={ref}
        whileTap={disabled || isLoading ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === 'right' && (
          <span className="shrink-0">{icon}</span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
