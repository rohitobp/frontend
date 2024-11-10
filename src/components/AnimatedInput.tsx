import React from 'react';

interface AnimatedInputProps {
  name: string;
  id: string;
  type?: string;
  label: string;
  placeholder: string;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  name,
  id,
  type = 'text',
  label,
  placeholder
}) => {
  return (
    <div className="inputBox relative mb-6">
        <input
        className="w-full border-b-2 border-gray-300 bg-transparent outline-none focus:border-blue-500 transition-all"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        />
        <span className="absolute left-0 top-2 text-gray-500 transition-all duration-300 pointer-events-none">
        {label}
        </span>
    </div>
  );
};

export default AnimatedInput;
