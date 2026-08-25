import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 active:scale-[0.97]'

  const variants = {
    primary: 'bg-gold-400 hover:bg-gold-500 text-navy-900 hover:shadow-lg hover:shadow-gold-400/25',
    secondary: 'bg-skyblue hover:bg-skyblue/90 text-white',
    outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
    'outline-white': 'border-2 border-white/40 text-white hover:bg-white hover:text-navy-900',
    ghost: 'text-navy-600 hover:text-navy-900 hover:bg-navy-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
