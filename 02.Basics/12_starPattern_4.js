// Log below star patter

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    if (j >= 5 - (i + 1)) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
