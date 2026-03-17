type InputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function InputField({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  textarea = false,
  rows = 4,
  value,
  onChange,
  onBlur,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a4093] focus:ring-4 focus:ring-[#1a4093]/10"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a4093] focus:ring-4 focus:ring-[#1a4093]/10"
        />
      )}
    </div>
  );
}

export default InputField;