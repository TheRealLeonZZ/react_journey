function ColorInput( {onColorChange} ) {
    return (
        <input
            type="text"
            placeholder="Enter a color"
            onChange={(e) => onColorChange(e.target.value)}
        />
    )
}
export default ColorInput;