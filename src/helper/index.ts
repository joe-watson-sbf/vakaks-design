
// Define the provided font size values
const f2Min = 12.38;
const f2Max = 12.38;
const f1Min = 14.4;
const f1Max = 16.5;

// Define the rest of the values
const fluidMinWidth = 320;
const fluidMaxWidth = 1292;
const fluidScreen = '100vw';

// Define the base values for min and max
let minBase = 18;
let maxBase = 22;
const growthFactor = 1.15; // Adjust this as needed

// Initialize an object to store the custom properties for fontSizeProperties
const fontSizeProperties: any = {
  '--f--2-min': f2Min,
  '--f--2-max': f2Max,
  '--f--1-min': f1Min,
  '--f--1-max': f1Max,
};



// Loop through the range and calculate values for fontSizeProperties
for (let step = 0; step <= 6; step++) {
  const minProperty = `--f-${step}-min`;
  const maxProperty = `--f-${step}-max`;

  fontSizeProperties[minProperty] = minBase.toFixed(2);
  fontSizeProperties[maxProperty] = maxBase.toFixed(2);

  // Update base values for the next step
  minBase *= growthFactor;
  maxBase *= growthFactor;
}

// Calculate the value for --f-5-min
const f4Min = parseFloat(fontSizeProperties['--f-4-min']);
const growthFactorForF5 = 1.15; // Adjust this as needed
const f5Min = (f4Min / growthFactorForF5).toFixed(2);
fontSizeProperties['--f-5-min'] = f5Min;

fontSizeProperties['--fluid-min-width'] = fluidMinWidth;
fontSizeProperties['--fluid-max-width'] = fluidMaxWidth;
fontSizeProperties['--fluid-screen'] = fluidScreen;

// Create a string for fontSizeProperties
const cssFontSizeProperties = Object.keys(fontSizeProperties)
  .map((property) => `${property}: ${fontSizeProperties[property]};`)
  .join('\n');

// Define the sizes formulas based on your provided formulas
const sizesSteps = `
  --size-0: calc(((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) * var(--fluid-bp));
  --size-1: calc(((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) * var(--fluid-bp));
  --size-3: calc(((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) * var(--fluid-bp));
  --size-4: calc(((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) * var(--fluid-bp));
  --size-2: calc(((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) * var(--fluid-bp));
  --size-5: calc(((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) * var(--fluid-bp));
  --size-6: calc(((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) * var(--fluid-bp));
  --size--1: calc(((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) * var(--fluid-bp));
  --size--2: calc(((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) * var(--fluid-bp));
`;

// Log the result for fontSizeProperties and sizesSteps
console.log(`:root {\n${cssFontSizeProperties}\n${sizesSteps}\n}`);

