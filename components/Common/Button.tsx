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
  const baseClasses = "group px-3 py-3 rounded bg-[#FD5A07] text-white text-[18px] font-['Bebas_Neue'] tracking-wider hover:shadow-[0_0_25px_rgba(253,90,7,0.5)] transition-all duration-300 transform hover:scale-105 min-w-[180px] inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const combinedClasses = `${baseClasses} ${className}`;

  const animatedContent = (
    <span className="relative overflow-hidden flex leading-tight">
      <span className="transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[110%]">
        {children}
      </span>
      <span className="absolute inset-0 flex justify-center translate-y-[110%] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {animatedContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {animatedContent}
    </button>
  );
};

export default Button;
