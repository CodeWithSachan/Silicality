import React from 'react'

type ButtonVariant = 'main' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  variant = 'main',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer'

  const variants = {
    main:    'bg-accent text-white border-none hover:opacity-90',
    outline: 'bg-transparent text-primary border border-border2 hover:border-accent',
    ghost:   'bg-transparent text-primary border border-border2 hover:bg-surface',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
