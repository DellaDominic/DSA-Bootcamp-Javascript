// Display numbers from n to 1 given n

let n = 10;
function print(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  print(n - 1);
}

print(n);
