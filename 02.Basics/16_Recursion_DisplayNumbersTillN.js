// Console numbers from 1 to n given n
let n = 10;

function print(num) {
  if (num > n) {
    return;
  }
  console.log(num);
  print(++num);
}

print(1);
