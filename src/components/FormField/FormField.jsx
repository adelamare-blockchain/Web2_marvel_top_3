// Librairies
export default function FormField({
  labelName,
  placeholder,
  inputType,
  value,
  isTextArea,
  handleChange,
}) {
  return (
    <label>
      {labelName && <span>{labelName}</span>}
      {inputType && isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step='0.1'
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
