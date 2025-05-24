/**
 * Basic JavaScript syntax checker
 * 
 * @param {string} code - The JavaScript code to validate
 * @returns {Object} - Object containing the validation result and error message if any
 */
export function lintJavaScript(code) {
  try {
    // Use Function constructor as a simple way to check syntax
    // This won't execute the code, just parse it
    new Function(code);
    return { 
      valid: true,
      error: null
    };
  } catch (error) {
    return {
      valid: false,
      error: {
        message: error.message,
        line: extractLineNumber(error.message)
      }
    };
  }
}

/**
 * Extract line number from JavaScript error message
 * 
 * @param {string} errorMessage - The error message from JavaScript
 * @returns {number|null} - The line number or null if not found
 */
function extractLineNumber(errorMessage) {
  // Attempt to extract line number from various error message formats
  const lineMatch = errorMessage.match(/line (\d+)/i) || 
                   errorMessage.match(/at line (\d+)/i) ||
                   errorMessage.match(/:(\d+):/);
  
  return lineMatch ? parseInt(lineMatch[1]) : null;
}

/**
 * Run JavaScript code safely and capture console output
 * 
 * @param {string} code - The JavaScript code to run
 * @returns {Object} - Object containing result and any console output or errors
 */
export function runJavaScript(code) {
  // Store original console methods
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  
  let output = [];
  
  // Override console methods to capture output
  console.log = (...args) => {
    output.push({ type: 'log', content: args.map(arg => formatOutput(arg)).join(' ') });
  };
  
  console.warn = (...args) => {
    output.push({ type: 'warn', content: args.map(arg => formatOutput(arg)).join(' ') });
  };
  
  console.error = (...args) => {
    output.push({ type: 'error', content: args.map(arg => formatOutput(arg)).join(' ') });
  };
  
  try {
    // Execute the code and capture return value if any
    const result = new Function(code)();
    
    // If there's a return value and no console output, add it to output
    if (result !== undefined && output.length === 0) {
      output.push({ type: 'log', content: formatOutput(result) });
    }
    
    return {
      success: true,
      output
    };
  } catch (error) {
    output.push({ 
      type: 'error', 
      content: `Runtime Error: ${error.message}`
    });
    
    return {
      success: false,
      output
    };
  } finally {
    // Restore original console methods
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
  }
}

/**
 * Format various JavaScript types for display
 */
function formatOutput(value) {
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value, null, 2);
    } catch (e) {
      return String(value);
    }
  }
  return String(value);
}
