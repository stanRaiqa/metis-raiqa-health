/**
 * Contact form state machine
 */
import { ContextFrom, createMachine, assign } from 'xstate';

// Define the form field types
export type FieldType = 'text' | 'email' | 'textarea' | 'select';

// Define the validation error types
export type ValidationError = {
  field: string;
  message: string;
};

// Define the form field data
export type FormFieldData = {
  name: string;
  value: string;
  type: FieldType;
  required?: boolean;
  validation?: (value: string) => string | null;
};

// Define submission status type
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Define the context type
export interface ContactContext {
  formData: Record<string, FormFieldData>;
  errors: ValidationError[];
  submissionStatus: SubmissionStatus;
  errorMessage: string | null;
}

// Define event types for strong typing
export type ContactEvent = 
  | { type: 'SUBMIT' }
  | { type: 'API_SUCCESS' }
  | { type: 'API_ERROR'; error: string }
  | { type: 'RESET' };

// Validation functions
export const validators = {
  email: (value: string): string | null => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value) ? null : 'Please enter a valid email address';
  },
  required: (value: string): string | null => {
    return value.trim() ? null : 'This field is required';
  }
};

// Create the contact form machine
export const createContactMachine = (initialFormData: Record<string, FormFieldData>) => {
  return createMachine({
    id: 'contactForm',
    
    context: {
      formData: initialFormData,
      errors: [] as ValidationError[],
      submissionStatus: 'idle' as SubmissionStatus,
      errorMessage: null,
    },
    
    initial: 'idle',
    
    states: {
      idle: {
        on: {
          SUBMIT: 'validating'
        }
      },
      
      validating: {
        entry: assign({
          errors: (_) => [] // We're handling validation in the hook now
        }),
        always: 'submitting' // Always go to submitting since validation happens in the hook
      },
      
      submitting: {
        entry: assign({
          submissionStatus: () => 'submitting' as SubmissionStatus
        }),
        
        on: {
          API_SUCCESS: 'success',
          API_ERROR: {
            target: 'error',
          }
        }
      },
      
      success: {
        entry: assign({
          submissionStatus: () => 'success' as SubmissionStatus
        }),
        
        on: {
          RESET: {
            target: 'idle',
            actions: assign({
              submissionStatus: () => 'idle' as SubmissionStatus,
              errorMessage: () => null,
              errors: () => []
            })
          }
        }
      },
      
      error: {
        entry: assign({
          submissionStatus: () => 'error' as SubmissionStatus
        }),
        
        on: {
          SUBMIT: 'validating',
          RESET: {
            target: 'idle',
            actions: assign({
              errors: () => [],
              errorMessage: () => null,
              submissionStatus: () => 'idle' as SubmissionStatus
            })
          }
        }
      }
    }
  });
};

export type ContactMachine = ReturnType<typeof createContactMachine>;
export type ContactMachineContext = ContextFrom<ContactMachine>; 