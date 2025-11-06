// Dynamic profession image mapper utility
// Handles different image sizes and profession name mapping

export type ImageSize = '64' | '100' | '256' | 'Default';

export interface ProfessionImageConfig {
    professionName: string;
    size: ImageSize;
    fallbackIcon?: React.ComponentType<any>;
}

// Mapping of profession titles to image file names
const professionNameMapping: { [key: string]: string } = {
    // General Practice
    'General Medical Practitioner': 'Physician',
    'General Practitioner': 'Physician',
    'General Physician': 'Physician',
    'GP': 'Physician',
    'Doctor': 'Physician',

    // Aboriginal and Torres Strait Islander Health
    'Aboriginal and Torres Strait Islander Health Worker': 'Aboriginal_and_Torres_Strait_Islander',
    'Aboriginal and Torres Strait Islander Health Practitioner': 'Aboriginal_and_Torres_Strait_Islander',
    'Aboriginal Health Worker': 'Aboriginal_and_Torres_Strait_Islander',
    'Torres Strait Islander Health Worker': 'Aboriginal_and_Torres_Strait_Islander',

    // Allied Health
    'Psychologist': 'Psychologist',
    'Clinical Psychologist': 'Psychologist',
    'Physiotherapist': 'Physiotherapist',
    'Accredited Practising Dietitian': 'Dietitian',
    'Dietitian': 'Dietitian',
    'Occupational Therapist': 'Occupational_Therapist',
    'Speech Pathologist': 'Speech_Pathologist',
    'Speech Therapist': 'Speech_Pathologist',
    'Audiologist': 'Audiologist',
    'Exercise Physiologist': 'Exercise_Physiologist',
    'Podiatrist': 'Podiatrist',
    'Optometrist': 'Optometrist',
    'Osteopath': 'Osteopath',
    'Chiropractor': 'Chiropractor',
    'Massage Therapist': 'Massage_Therapist',
    'Social Worker': 'Social_Worker',
    'Mental Health Social Worker': 'Social_Worker',
    'Art Therapist': 'Art_Therapist',
    'Music Therapist': 'Music_Therapist',
    'Nurse': 'Nurse',
    'Registered Nurse': 'Nurse',
    'Nurse Practitioner': 'Nurse_Practitioner',
    'Midwife': 'Midwife',
    'Pharmacist': 'Pharmacist',

    // Medical Specialists
    'Psychiatrist': 'Psychiatrist',
    'Dermatologist': 'Dermatologist',
    'Cardiologist': 'Cardiologist',
    'Endocrinologist': 'Endocrinologist',
    'Paediatrician': 'Paediatrician',
    'Pediatrician': 'Paediatrician',
    'Gastroenterologist': 'Gastroenterologist',
    'Neurologist': 'Neurologist',
    'Orthopaedic Surgeon': 'Orthopaedic_Surgeon',
    'Orthopedic Surgeon': 'Orthopaedic_Surgeon',
    'Ophthalmologist': 'Ophthalmologist',
    'ENT Specialist': 'ENT_Surgeon',
    'Ear, Nose and Throat Specialist': 'ENT_Surgeon',
    'Urologist': 'Urologist',
    'Oncologist': 'Oncologist',
    'Medical Oncologist': 'Oncologist',
    'Radiation Oncologist': 'Radiation_Oncology',
    'Rheumatologist': 'Rheumatologist',
    'Respiratory Medicine': 'Respiratory_Medicine',
    'Pulmonologist': 'Respiratory_Medicine',
    'Nephrologist': 'Nephrologist',
    'Haematologist': 'Haematologist',
    'Hematologist': 'Haematologist',
    'Infectious Diseases Physician': 'Infectious_Diseases',
    'Emergency Medicine Physician': 'Emergency_Medicine',
    'Anaesthetist': 'Anaesthetist',
    'Anesthetist': 'Anaesthetist',
    'Pathologist': 'Pathologist',
    'Radiologist': 'Radiology',
    'Nuclear Medicine Physician': 'Nuclear_Medicine',
    'Plastic Surgeon': 'Plastic_Surgeon',
    'Vascular Surgeon': 'Vascular_Surgeon',
    'Surgeon': 'Surgeon',
    'General Surgeon': 'Surgeon',
    'Neurosurgeon': 'Neurosurgeon',
    'Cardiothoracic Surgeon': 'Cardiothoracic_Surgeon',
    'Obstetrician': 'Obstetrician',
    'Gynaecologist': 'Gynaecologist',
    'Gynecologist': 'Gynaecologist',
    'Obstetrician and Gynaecologist': 'Obstetrician_and_Gynaecologist',
    'Fertility Specialist': 'Fertility_Specialist',
    'Reproductive Endocrinologist': 'Fertility_Specialist',
    'Geriatrician': 'Geriatrician',
    'Palliative Medicine Physician': 'Palliative_Medicine_Physician',
    'Rehabilitation Medicine': 'Rehabilitation_Medicine',
    'Sport and Exercise Medicine': 'Sport_and_Exercise_Medicine',
    'Sports Medicine Physician': 'Sport_and_Exercise_Medicine',
    'Addiction Medicine': 'Addiction_Medicine',
    'Sexual Health Physician': 'Sexual_Health_Physician',
    'Public Health Physician': 'Public_Health_Physician',
    'Occupational Medicine': 'Occupational_Medicine',
    'Forensic Pathologist': 'Forensic_Pathologist',
    'Clinical Geneticist': 'Clinical_Geneticist',
    'Immunologist': 'Immunologist',
    'Clinical Pharmacologist': 'Clinical_Pharmacologist'
};

// Function to normalize profession name for image lookup
function normalizeProfessionName(professionName: string): string {
    // Check direct mapping first (before any normalization)
    if (professionNameMapping[professionName]) {
        return professionNameMapping[professionName];
    }

    // Remove common prefixes and suffixes
    const normalized = professionName
        .replace(/^(Dr\.?\s*|Doctor\s*)/i, '')
        .replace(/\s*(Specialist|Physician|Doctor)$/i, '')
        .trim();

    // Check mapping after normalization
    if (professionNameMapping[normalized]) {
        return professionNameMapping[normalized];
    }

    // If the original name is already "Physician", return it as-is
    if (professionName === 'Physician') {
        return 'Physician';
    }

    // Fallback: convert to file name format
    const fallback = normalized
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '');

    // Don't return empty string
    return fallback || professionName.replace(/\s+/g, '_');
}

export function getProfessionImagePath(professionName: string, size: ImageSize = '100', available: boolean): string {
    // return available ? "Name="+normalizeProfessionName(professionName) + ", Size=" + size + ".jpg" : "Name=General_Medical_Practitioner, Size="+size+".jpg";
    return "Name="+normalizeProfessionName(professionName) + ", Size=" + size + ".jpg";
}

// Function to get profession image URL
export function getProfessionImageUrl(professionName: string, size: ImageSize = '100'): string {
    const normalizedName = normalizeProfessionName(professionName);

    // Use API route to serve images (handles malformed filenames)
    const apiPath = `/api/profession-image?name=${encodeURIComponent(normalizedName)}&size=${size}`;

    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        console.log(`🖼️ Loading profession image via API: ${apiPath}`);
    }

    return apiPath;
}

// Function to get profession image with fallback
export function getProfessionImage(config: ProfessionImageConfig): {
    src: string;
    alt: string;
    fallbackIcon?: React.ComponentType<any>;
} {
    const imageUrl = getProfessionImageUrl(config.professionName, config.size);

    return {
        src: imageUrl,
        alt: `${config.professionName} - Healthcare Professional`,
        fallbackIcon: config.fallbackIcon
    };
}

// React component for profession image with fallback
export interface ProfessionImageProps {
    professionName: string;
    size?: ImageSize;
    className?: string;
    fallbackIcon?: React.ComponentType<any>;
    onError?: () => void;
    style?: React.CSSProperties;
}

// Size mapping for different use cases
export const imageSizeMap = {
    '64': { width: 64, height: 64, className: 'w-16 h-16' },
    '100': { width: 100, height: 100, className: 'w-20 h-20 sm:w-24 sm:h-24' },
    '256': { width: 256, height: 256, className: 'w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40' },
    'Default': { width: 400, height: 400, className: 'w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48' }
};

// Context-based size recommendations
export const contextSizeMap = {
    'card-icon': '256' as ImageSize,         // Small cards, list items - using high-quality 256px images
    'card-large': 'Default' as ImageSize,    // Large cards, featured items - using Default (highest quality) images
    'profile': 'Default' as ImageSize,       // Profile pages, detailed views - using Default images
    'hero': 'Default' as ImageSize,          // Hero sections - using Default images
    'thumbnail': '256' as ImageSize,         // Thumbnails, small previews - using 256px images
    'avatar': '256' as ImageSize,            // Avatar displays, medium size - using 256px images
    'banner': 'Default' as ImageSize,        // Banner images, section headers - using Default images
    'fullsize': 'Default' as ImageSize       // Full-size professional photos - using Default images
};

// Function to get recommended image size for context
export function getRecommendedSize(context: keyof typeof contextSizeMap): ImageSize {
    return contextSizeMap[context];
}

// Function to check if image exists (client-side)
export function checkImageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// Function to get profession image with fallback (now uses API route)
export function getProfessionImageWithFallback(
    professionName: string,
    size: ImageSize = '100'
): string {
    // Now redirects to API route which handles all the fallback logic server-side
    return getProfessionImageUrl(professionName, size);
}

// Preload images for better performance
export function preloadProfessionImages(professionNames: string[], sizes: ImageSize[] = ['256']): void {
    professionNames.forEach(professionName => {
        sizes.forEach(size => {
            const imageUrl = getProfessionImageUrl(professionName, size);
            const img = new Image();
            img.src = imageUrl;
        });
    });
}

// Get all available profession names (for development/debugging)
export function getAvailableProfessions(): string[] {
    return Object.keys(professionNameMapping);
}

// Export the mapping for external use
export { professionNameMapping };