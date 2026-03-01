function Button({ text, variant, size, onClick, children }) {
  let className = 'btn'
  if (!variant) className += ''
  if (variant === 'ghost') className += ' btn-ghost'
  if (variant === 'primary') className += ' btn-primary'
  if (variant === 'secondary') className += ' btn-primary btn-soft'
  if (variant === 'warning') className += ' btn-warning btn-ghost'
  if (variant === 'error') className += ' btn-error btn-ghost'
  if (!size) className += ''
  if (size === 'lg') className += ' btn-lg'
  if (size === 'sm') className += ' btn-sm'

  return (
    <button onClick={onClick} className={className}>
      {text || children}
    </button>
  )
}
export default Button
