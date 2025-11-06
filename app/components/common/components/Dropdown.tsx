'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../../theming/ThemeProvider';
import { Body1, Body2 } from '../typography';
import { PrimaryButton } from '../buttons';

export type DropdownItem = {
  value: string;
  label: string;
};

type DropdownProps = {
  title: string;
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  onSelect,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef} 
      className={`relative overflow-visible min-w-[160px] flex-1 ${className}`}
    >
      <button
        className={`flex items-center justify-between w-full rounded-lg border-4 bg-white/60 px-3 py-2 text-sm`}
        style={{ border: "2.7px solid "+currentTheme.colors?.primary }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Body2>
          {selectedItem ? selectedItem.label : title}
        </Body2>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-50 w-full mt-1 overflow-visible bg-white rounded-lg shadow-md"
        >
          {items.map((item, key:number) => (
            <div
              key={key}
              className="px-3 py-2 cursor-pointer overflow-visible hover:bg-gray-50 text-sm"
              onClick={() => handleItemClick(item)}
            >
              <Body2>
                {item.label}
              </Body2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 