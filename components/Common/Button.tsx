import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  className = "", 
  type = "button",
  disabled = false
}) => {
  const baseClasses = "px-3 py-3 rounded bg-[#FD5A07] text-white text-[18px] font-['Bebas_Neue'] tracking-wider hover:shadow-[0_0_25px_rgba(253,90,7,0.5)] transition-all duration-300 transform hover:scale-105 min-w-[180px] inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
