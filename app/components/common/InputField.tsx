'use client';

import React, { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { useTheme } from '@/app/theming/ThemeProvider';
import {Body2, Body4} from './typography';

interface BaseFieldProps {
  label: string;
  error?: string;
  fieldType?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>, BaseFieldProps {
  isTextArea?: false;
  rows?: never;
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFieldProps {
  isTextArea: true;
  rows?: number;
  fieldType?: never;
}

type Props = InputFieldProps | TextAreaFieldProps;

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ label, isTextArea = false, className = '', rows = 5, error, fieldType = 'text', ...props }, ref) => {
    const { currentTheme } = useTheme();
    
    const borderColor = error 
      ? 'rgb(220, 38, 38)' // Error red color
      : currentTheme?.["brand colors"]?.health?.Purple?.["100"];

    const inputStyles = {
      width: '100%',
      border: `4px solid ${borderColor}`,
      borderRadius: '16px',
      padding: '12px',
      fontSize: '16px',
      lineHeight: '1.5em',
      outline: 'none',
      backdropFilter: 'blur(44px)',
    };

    return (
      <div className="flex flex-col gap-2">
        <Body4 className="font-bold">{label}</Body4>
        {isTextArea ? (
          <textarea
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            style={inputStyles}
            rows={rows}
            className={className}
            placeholder={label}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.RefObject<HTMLInputElement>}
            type={fieldType}
            style={inputStyles}
            className={className}
            placeholder={label}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p className="text-red-600 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField; 