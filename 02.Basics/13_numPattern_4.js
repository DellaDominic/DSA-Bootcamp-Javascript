// Log below pattern

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

for (let i = 0; i < 6; i++) {
  let row = "";
  let toggle = 0;
  for (let j = 0; j <= i; j++) {
    toggle = Number(!toggle);
    row += toggle + " ";
  }
  console.log(row);
}
