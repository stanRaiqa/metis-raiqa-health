export function capitalizeFirstLetter(value: string) {
    if (!value) return ''; // Handle empty or undefined strings
    return value.charAt(0).toUpperCase() + value.slice(1);
}