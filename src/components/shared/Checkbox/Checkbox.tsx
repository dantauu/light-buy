import "./Checkbox.scss"

export const Checkbox = ({ id }: { id: string }) => {
  return (
    <>
      <label className="check">
        <input type="checkbox" id={id} />
        <div className="checkmark"></div>
      </label>
    </>
  )
}
