function Checkbox({ onChange, checked }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      className="checkbox  border-indigo-50 text-indigo-50 opacity-20 checked:text-indigo-50 checked:opacity-100"
      onChange={(e) => {
        onChange(e)
      }}
    />
  )
}
export default Checkbox
