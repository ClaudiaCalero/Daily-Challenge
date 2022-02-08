// program to find the largest among three numbers

function max_of_three(a, b, c) {
  max_val = 0;
  if (a > b) {
    max_val = a;
  } else {
    max_val = b;
  } if (c > max_val) {
    max_val = c;
  }
  return max_val;
}

console.log(max_of_three(739,291,348));
console.log(max_of_three(12,-569,666));
