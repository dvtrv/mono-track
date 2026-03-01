function Input({ variant, label, legend, placeholder = 'Input text', onChange, value = '' }) {
  let className = 'input'
  let labelClassName = 'label mt-2'
  if (!variant) className += ''
  if (variant === 'ghost') className += ' input-ghost'
  if (label?.type === 'warning') {
    labelClassName += ' text-sm text-warning mt-1'
  }
  return (
    <fieldset className="flex flex-col w-full">
      {legend && <legend className="fieldset-legend">{legend}</legend>}
      <input
        value={value}
        type="text"
        className={className}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e)
        }}
      />
      {label && <p className={labelClassName}>{label.text}</p>}
    </fieldset>
  )
}
export default Input
