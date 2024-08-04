import { useField } from 'formik';
import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function CustomInput({label, ...props}: CustomInputProps) {

  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} className={meta.touched && meta.error ? 'input-error' : ''}/>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}