import { Field } from "@ark-ui/react/field";
import styles from "./InputText.module.css";

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputText = ({
  disabled,
  placeholder,
  label,
  value,
  name,
  type,
  onChange,
  onBlur,
  onFocus,
}: InputTextProps): React.ReactElement => {
  return (
    <Field.Root className={styles.inputText}>
      {label ? <Field.Label>{label}</Field.Label> : null}
      <Field.Input
        type={type || "text"}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
      />
    </Field.Root>
  );
};
