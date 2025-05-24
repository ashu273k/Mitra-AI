// This file contains sample code templates that can be loaded into the playground

export const codeTemplates = {
  blank: `// Write your code here
console.log("Hello, World!");`,

  factorial: `// Factorial function using recursion
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Test with different values
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 10:", factorial(10));`,

  fibonacci: `// Fibonacci sequence calculator
function fibonacci(n) {
  // Create an array to store Fibonacci numbers
  const fib = [0, 1];
  
  // Generate the Fibonacci sequence
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[n];
}

// Print the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(\`Fibonacci(\${i}) = \${fibonacci(i)}\`);
}`,

  sorting: `// Array of random numbers
const numbers = [34, 7, 23, 32, 5, 62, 19, 11, 4, 25];

// Print original array
console.log("Original array:", numbers);

// Bubble sort implementation
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Sort the array and print result
console.log("Sorted array:", bubbleSort([...numbers]));`,

  asyncExample: `// Async/await example
async function fetchUserData() {
  console.log("Fetching user data...");
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock user data
  return {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "developer"
  };
}

// Function to process user data
async function processUser() {
  try {
    console.log("Starting user data processing...");
    
    const user = await fetchUserData();
    console.log("User data received:", user);
    
    console.log(\`Welcome back, \${user.name}!\`);
  } catch (error) {
    console.error("Error processing user:", error);
  }
}

// Execute the async function
processUser();
console.log("This will appear before the user data (async operation)");`,

  domManipulation: `// DOM Manipulation Example
// Note: This won't actually affect a real DOM in the playground
// but shows how DOM manipulation code would be written

// Create a new element
function createUserCard(user) {
  const card = document.createElement('div');
  card.className = 'user-card';
  
  const name = document.createElement('h2');
  name.textContent = user.name;
  
  const email = document.createElement('p');
  email.textContent = user.email;
  
  // Append elements to the card
  card.appendChild(name);
  card.appendChild(email);
  
  // Add click event listener
  card.addEventListener('click', () => {
    console.log(\`Card for \${user.name} was clicked\`);
  });
  
  return card;
}

// Sample data
const user = {
  name: 'Jane Smith',
  email: 'jane@example.com'
};

// Log how we would use this function
console.log("Function ready to create a card for:", user.name);
console.log("In a real DOM environment, this would create an HTML element");`
};

// Export a function to get a random template
export function getRandomTemplate() {
  const templateKeys = Object.keys(codeTemplates).filter(k => k !== 'blank');
  const randomKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];
  return codeTemplates[randomKey];
}
