const fs = require('fs');
const path = require('path');

// Directories
const sourceDir = path.join(__dirname);
const outputDir = path.join(__dirname, 'generated');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all JSON files in the source directory
const themeFiles = fs.readdirSync(sourceDir)
  .filter(file => file.endsWith('.json') && !file.includes('package'));

/**
 * Simplifies a theme token by removing the type and directly using the value
 * @param {Object} sourceObj - The source object containing the complex structure
 * @returns {Object} - A new object with simplified structure
 */
function simplifyTheme(sourceObj) {
  const result = {};

  // Process all keys in the source object
  for (const [key, value] of Object.entries(sourceObj)) {
    // Skip if the value is null or undefined
    if (value === null || value === undefined) continue;

    // If value is an object with 'type' and 'value' properties, simplify it
    if (value && typeof value === 'object' && 'type' in value && 'value' in value) {
      result[key] = value.value;
    } 
    // If value is an object but doesn't have 'type' and 'value', process recursively
    else if (value && typeof value === 'object') {
      result[key] = simplifyTheme(value);
    } 
    // Otherwise, keep the value as is
    else {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Resolves token references in a simplified theme
 * @param {Object} theme - The simplified theme object
 * @param {Object} originalTheme - The original theme for reference lookups
 * @returns {Object} - Theme with resolved references
 */
function resolveReferences(theme, originalTheme) {
  const resolvedTheme = {};

  for (const [key, value] of Object.entries(theme)) {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      // Extract the reference path
      const refPath = value.slice(1, -1);
      
      // Debug: Log the key and reference we're trying to resolve
      console.log(`Resolving reference for [${key}]: ${value}`);
      
      // Special case for Health Purple.500 format
      if (refPath.startsWith('Health ') || refPath.startsWith('Health.')) {
        // Handle the specific format like {Health Purple.500}
        const parts = refPath.replace('Health ', '').split('.');
        const colorFamily = parts[0]; // "Purple"
        const shade = parts[1]; // "500"
        
        console.log(`Special handling for Health ${colorFamily}.${shade}`);
        
        if (originalTheme['brand colors'] && 
            originalTheme['brand colors'].health && 
            originalTheme['brand colors'].health[colorFamily] && 
            originalTheme['brand colors'].health[colorFamily][shade]) {
          
          const colorValue = originalTheme['brand colors'].health[colorFamily][shade];
          console.log(`Found color via direct lookup: ${JSON.stringify(colorValue)}`);
          resolvedTheme[key] = colorValue.type === 'color' ? colorValue.value : colorValue;
          continue; // Skip the regular resolution process
        }
      }
      
      // Split the path into segments
      const segments = refPath.split('.');
      console.log(`Path segments: ${JSON.stringify(segments)}`);
      
      // Resolve the reference
      let result = findValueByPath(originalTheme, segments);
      
      // Debug: Log the result of the reference resolution
      console.log(`Resolution result for [${key}]: ${result ? (typeof result === 'object' ? JSON.stringify(result) : result) : 'undefined'}`);
      
      // If the result is an object with type/value structure, get the value
      if (result && typeof result === 'object' && 'type' in result && 'value' in result) {
        result = result.value;
        
        // Check if the result itself is a reference that needs resolving
        if (typeof result === 'string' && result.startsWith('{') && result.endsWith('}')) {
          const nestedRefPath = result.slice(1, -1);
          const nestedSegments = nestedRefPath.split('.');
          console.log(`Resolving nested reference: ${result}, segments: ${JSON.stringify(nestedSegments)}`);
          
          let nestedResult = findValueByPath(originalTheme, nestedSegments);
          console.log(`Nested resolution result: ${nestedResult ? (typeof nestedResult === 'object' ? JSON.stringify(nestedResult) : nestedResult) : 'undefined'}`);
          
          if (nestedResult && typeof nestedResult === 'object' && 'type' in nestedResult && 'value' in nestedResult) {
            result = nestedResult.value;
          } else if (nestedResult !== undefined) {
            result = nestedResult;
          }
        }
      }
      
      resolvedTheme[key] = result;
    } else if (typeof value === 'object' && value !== null) {
      // Recursively resolve references in nested objects
      resolvedTheme[key] = resolveReferences(value, originalTheme);
    } else {
      // Keep non-reference values as they are
      resolvedTheme[key] = value;
    }
  }

  return resolvedTheme;
}

/**
 * Recursively searches for a value in an object based on path segments
 * @param {Object} obj - The object to search in
 * @param {Array<string>} pathSegments - The path segments to look for
 * @returns {*} - The found value or undefined if not found
 */
function findValueByPath(obj, pathSegments) {
  // Debug: Print the path we're searching for
  console.log(`Finding path: ${pathSegments.join('.')}`);
  
  // First try direct path lookup
  let directResult = getValueByPath(obj, pathSegments);
  if (directResult !== undefined) {
    console.log(`Direct path lookup success: ${pathSegments.join('.')}`);
    return directResult;
  }
  
  // Debug: Direct lookup failed
  console.log(`Direct lookup failed for: ${pathSegments.join('.')}`);
  
  // If direct lookup fails, try to find the value by searching
  // This handles cases like "{Health Purple.500}" that might be in "brand colors.health.Purple.500"
  
  // Check if we can find a match for the first segment
  if (pathSegments.length > 1) {
    const firstSegment = pathSegments[0];
    const remainingSegments = pathSegments.slice(1);
    
    // Try to find the first segment at the top level
    if (obj[firstSegment]) {
      const result = getValueByPath(obj[firstSegment], remainingSegments);
      if (result !== undefined) {
        console.log(`Found via first segment: ${firstSegment}`);
        return result;
      }
    }
    
    // Special case for "Health Purple.500" format - try looking directly in health.Purple.500
    // This is specifically to handle the {Health Purple.500} reference in primary
    if (firstSegment === 'Health' && pathSegments.length >= 2) {
      const colorFamily = pathSegments[1].split(' ')[0]; // Get "Purple" from "Purple.500"
      const shade = pathSegments[1].split(' ')[1] || ''; // Get "500" or undefined
      
      // Try path like brand colors.health.Purple.500
      if (obj['brand colors'] && obj['brand colors'].health && 
          obj['brand colors'].health[colorFamily] && 
          shade && obj['brand colors'].health[colorFamily][shade]) {
        console.log(`Found via special case: brand colors.health.${colorFamily}.${shade}`);
        return obj['brand colors'].health[colorFamily][shade];
      }
    }
    
    // Look for paths like "brand colors.health.Purple.500" when user specified "Health Purple.500"
    console.log(`Searching nested objects for: ${pathSegments.join('.')}`);
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        // Check if this object has the first segment
        if (value[firstSegment]) {
          const result = getValueByPath(value[firstSegment], remainingSegments);
          if (result !== undefined) {
            console.log(`Found ${firstSegment} in nested object: ${key}`);
            return result;
          }
        }
        
        // Check deeper in the object
        const nestedResult = searchObjectForSegments(value, pathSegments);
        if (nestedResult !== undefined) {
          console.log(`Found via deep search in: ${key}`);
          return nestedResult;
        }
      }
    }
  }
  
  console.log(`Failed to find: ${pathSegments.join('.')}`);
  return undefined;
}

/**
 * Deep search for path segments within an object structure
 * @param {Object} obj - The object to search in
 * @param {Array<string>} pathSegments - The path segments to look for
 * @returns {*} - The found value or undefined if not found
 */
function searchObjectForSegments(obj, pathSegments) {
  // Check if we have all segments in series within this object
  let current = obj;
  for (const segment of pathSegments) {
    if (!current || typeof current !== 'object') {
      current = undefined;
      break;
    }
    current = current[segment];
  }
  
  if (current !== undefined) {
    return current;
  }
  
  // If not found, search in each child object
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      const result = searchObjectForSegments(value, pathSegments);
      if (result !== undefined) {
        return result;
      }
    }
  }
  
  return undefined;
}

/**
 * Gets a value from a nested object by path segments
 * @param {Object} obj - The object to traverse
 * @param {Array<string>} pathSegments - Array of path segments
 * @returns {*} - The value at the specified path or undefined if not found
 */
function getValueByPath(obj, pathSegments) {
  let current = obj;
  
  for (const segment of pathSegments) {
    if (current === undefined || current === null || typeof current !== 'object') {
      return undefined;
    }
    current = current[segment];
  }
  
  return current;
}

/**
 * Process each theme file
 */
themeFiles.forEach(file => {
  console.log(`Processing ${file}...`);
  
  // Read the source file
  const sourceFilePath = path.join(sourceDir, file);
  const themeData = JSON.parse(fs.readFileSync(sourceFilePath, 'utf8'));
  
  // Simplify the theme structure
  const simplifiedTheme = simplifyTheme(themeData);
  
  // Debug: Check if primary exists in simplified theme
  if (simplifiedTheme.colors && 'primary' in simplifiedTheme.colors) {
    console.log(`Primary in simplified theme: ${simplifiedTheme.colors.primary}`);
  } else {
    console.log(`Primary NOT FOUND in simplified theme`);
  }
  
  // Resolve references
  const resolvedTheme = resolveReferences(simplifiedTheme, themeData);
  
  // Debug: Check if primary exists in resolved theme
  if (resolvedTheme.colors && 'primary' in resolvedTheme.colors) {
    console.log(`Primary in resolved theme: ${resolvedTheme.colors.primary}`);
  } else {
    console.log(`Primary NOT FOUND in resolved theme`);
  }
  
  // Write to output
  const outputFilePath = path.join(outputDir, file);
  fs.writeFileSync(outputFilePath, JSON.stringify(resolvedTheme, null, 2), 'utf8');
  
  console.log(`✅ Generated ${file}`);
});

console.log('All theme files converted successfully!'); 