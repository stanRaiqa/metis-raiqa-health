import { NextRequest, NextResponse } from 'next/server';
import { decryptData } from '@/app/lib/encryption';

// Rate limiting (basic implementation)
const RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minute
  max: 5 // 5 requests per minute
};

const ipRequests = new Map<string, { count: number; resetTime: number }>();

// Function to check rate limit
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requestData = ipRequests.get(ip);
  
  if (!requestData || now > requestData.resetTime) {
    // First request or reset window
    ipRequests.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return true;
  }
  
  if (requestData.count >= RATE_LIMIT.max) {
    // Rate limit exceeded
    return false;
  }
  
  // Increment count
  requestData.count += 1;
  ipRequests.set(ip, requestData);
  return true;
}

// Validate the form data 
function validateFormData(data: any) {
  const errors = [];
  
  // Check required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
    errors.push('Name is required');
  }
  
  if (!data.email || typeof data.email !== 'string' || data.email.trim() === '') {
    errors.push('Email is required');
  } else {
    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim() === '') {
    errors.push('Message is required');
  }
  
  return errors;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Get request body
    const body = await request.json();
    
    // Make sure the encrypted data is provided
    if (!body.encryptedData) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    // Decrypt the data
    const formData = await decryptData(body.encryptedData);
    
    // Validate the form data
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validationErrors },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would send this data to a backend service or database
    // For now, we'll just log it to the console and simulate a successful submission
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 