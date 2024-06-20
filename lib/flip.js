const { clsx } = require('clsx');
const { twMerge } = require('tailwind-merge');

function flip(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { flip };
