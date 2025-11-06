import { useMachine } from '@xstate/react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { createContactMachine, FormFieldData, ValidationError } from './contactMachine';
import { encryptData } from '@/app/lib/encryption';

interface UseContactFormProps {
  fields: Record<string, FormFieldData>;
}

interface UseContactFormReturn {
  formData: Record<string, FormFieldData>;
  errors: ValidationError[];
  handleChange: (field: string, value: string) => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string | null;
  resetForm: () => void;
}

export const useContactForm = ({ fields }: UseContactFormProps): UseContactFormReturn => {
  // Use React's useState to manage form data instead of relying solely on XState
  const [formState, setFormState] = useState<Record<string, FormFieldData>>(fields);
  
  // Memoize the machine to prevent recreating it on every render
  const contactMachine = useMemo(() => createContactMachine(formState), []);
  
  // Use the state machine
  const [current, send] = useMachine(contactMachine);
  
  const { errors, errorMessage } = current.context;
  
  // Using current.matches for determining the state
  const isSubmitting = current.matches('submitting');
  const isSuccess = current.matches('success');
  const isError = current.matches('error');

  // Update form data in the machine when formState changes
  useEffect(() => {
    if (isSuccess) {
      // Reset form values after successful submission
      const resetData = { ...formState };
      Object.keys(resetData).forEach(key => {
        resetData[key] = { ...resetData[key], value: '' };
      });
      setFormState(resetData);
    }
  }, [isSuccess, formState]);

  // Field change handler
  const handleChange = useCallback((field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value
      }
    }));
  }, []);

  // Submit the form data to the API
  const submitFormData = useCallback(async () => {
    try {
      // Prepare the data for submission (excluding internal field metadata)
      const dataToSubmit = Object.entries(formState).reduce((acc, [key, field]) => {
        acc[key] = field.value;
        return acc;
      }, {} as Record<string, string>);
      
      // Encrypt the data
      const encryptedData = await encryptData(dataToSubmit);
      
      // Submit the encrypted data
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ encryptedData }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit the form');
      }
      
      // Handle success
      send({ type: 'API_SUCCESS' });
    } catch (error) {
      // Handle error
      let errorMessage = 'An unexpected error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      send({ type: 'API_ERROR', error: errorMessage });
    }
  }, [formState, send]);

  // Validate the form before submission
  const validateForm = useCallback(() => {
    const newErrors: ValidationError[] = [];
    
    // Validate each field
    Object.entries(formState).forEach(([fieldName, data]) => {
      // Check required fields
      if (data.required && !data.value.trim()) {
        newErrors.push({
          field: fieldName,
          message: 'This field is required'
        });
        return;
      }
      
      // Apply specific validation based on field type
      if (data.type === 'email') {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(data.value)) {
          newErrors.push({
            field: fieldName,
            message: 'Please enter a valid email address'
          });
        }
      }
      
      // Apply custom validation if provided
      if (data.validation) {
        const customError = data.validation(data.value);
        if (customError) {
          newErrors.push({
            field: fieldName,
            message: customError
          });
        }
      }
    });
    
    return newErrors;
  }, [formState]);

  // Effect to handle form submission when state becomes 'submitting'
  useEffect(() => {
    if (isSubmitting) {
      submitFormData();
    }
  }, [isSubmitting, submitFormData]);
  
  // Form submission handler
  const handleSubmit = useCallback(() => {
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      // Dispatch validation errors
      send({ type: 'SUBMIT' });
    } else {
      // If no errors, proceed to submission
      send({ type: 'SUBMIT' });
    }
  }, [validateForm, send]);
  
  // Reset form handler
  const resetForm = useCallback(() => {
    const resetData = { ...formState };
    Object.keys(resetData).forEach(key => {
      resetData[key] = { ...resetData[key], value: '' };
    });
    setFormState(resetData);
    send({ type: 'RESET' });
  }, [formState, send]);
  
  return {
    formData: formState,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSuccess,
    isError,
    errorMessage,
    resetForm,
  };
}; 