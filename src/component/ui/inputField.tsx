"use client";
import React from "react";

type InputFieldProps = {
  id?: string;
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  textarea?: boolean;
  rows?: number;
};

export default function InputField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  value,
  defaultValue,
  onChange,
  required = false,
  className = "",
  textarea = false,
  rows = 4,
}: InputFieldProps) {
  const inputId = id ?? name;
  const baseClasses = "mt-1 block w-full rounded-xl border border-gray-300 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-mainBlue focus:border-mainBlue bg-white";
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
          {required ? <span className="ml-1 text-red-500">*</span> : null}
        </label>
      )}
      {textarea ? (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          rows={rows}
          defaultValue={defaultValue as string | undefined}
          value={value as string | undefined}
          onChange={onChange}
          className={baseClasses}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue as string | undefined}
          value={value as string | undefined}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </div>
  );
}
