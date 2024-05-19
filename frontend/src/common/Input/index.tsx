import React from "react";
import "./input.css"
interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "input__border" | string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  variant,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${variant} ${className && className}`}
    />
  );
};

export default Input;
