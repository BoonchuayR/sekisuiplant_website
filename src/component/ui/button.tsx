import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
  text?: string
  className?: string
}

export default function Button({ children, text, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'px-8 py-2 rounded-full font-bold w-fit'
  const variantClass =
    variant === 'primary'
      ? 'bg-mainBlue text-white'
      : 'bg-transparent border  text-black'

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children ?? text}
    </button>
  )
}
