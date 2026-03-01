import Button from './Button'

function Divider({ label, onClear }) {
  return (
    <div className="flex items-center mt-3">
      <div className="group flex w-full flex-col">
        <div className="divider opacity-50">
          <span className="group-hover:hidden">{label}</span>
          <div className="hidden group-hover:block">
            <Button text="Clear completed" onClick={onClear} variant="ghost" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Divider
