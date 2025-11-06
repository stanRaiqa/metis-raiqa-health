'use client';

import React from 'react';
import {useTheme} from "@/app/theming/ThemeProvider";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search for any service",
  className = "",
}) => {
    const { currentTheme } = useTheme();
  return (
    <div className={`flex items-center gap-6 px-3 py-2 2xl:px-5 2xl:py-4  bg-white bg-opacity-60 border-4 border-primary rounded-lg z-30 ${className}`}
         style={{ border: "2px solid "+currentTheme.colors?.primary }}>
        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5002 21L17.2002 16.7M19.5 11C19.5 15.4183 15.9183 19 11.5 19C7.08172 19 3.5 15.4183 3.5 11C3.5 6.58172 7.08172 3 11.5 3C15.9183 3 19.5 6.58172 19.5 11Z" stroke="#3116C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <input
        type="text"
        placeholder={placeholder}
        className="flex-1 border-none bg-transparent text-md outline-none placeholder:text-black placeholder:font-medium "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput; 