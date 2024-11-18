"use client";
import React, { useState, FocusEvent, ChangeEvent } from 'react';

interface AnimatedInputProps {
  name: string;
  id: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  name,
  id,
  type = 'text',
  label,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') setIsFocused(false);
  };
  return (
    <div className="input-field relative mb-6">
      <input
        type={type}
        name={name}
        id={id}
        required
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full border-b-2 border-gray-300 bg-transparent outline-none focus:border-blue-500 transition-all"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none ${isFocused ? '-top-4 text-sm text-blue-500' : ''
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default AnimatedInput;
