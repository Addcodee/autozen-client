import "./InputWithLabel.scss";

interface InputWithLabelProps {
  value?: string;
  label: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel = ({
  onChange,
  value,
  label,
  required,
}: InputWithLabelProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className="inputWithLabel">
      <label>
        {label}: {required && <span>*</span>}
      </label>
      <input value={value} onChange={handleChange} type="text" />
    </div>
  );
};

export default InputWithLabel;
