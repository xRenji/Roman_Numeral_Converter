const form = document.getElementById("form");
const title = document.getElementById("title");
let output = "";
function convertToRoman(num) {
  //Check for every basic combination of roman numbers
  let solution = "";

  //add how many 1000 as roman M
  solution += "M".repeat(num / 1000);
  num %= 1000;
  console.log(num);

  solution += "CM".repeat(num / 900);
  num %= 900;
  solution += "D".repeat(num / 500);
  num %= 500;
  solution += "CD".repeat(num / 400);
  num %= 400;
  solution += "C".repeat(num / 100);
  num %= 100;
  solution += "XC".repeat(num / 90);
  num %= 90;
  solution += "L".repeat(num / 50);
  num %= 50;
  solution += "XL".repeat(num / 40);
  num %= 40;
  solution += "X".repeat(num / 10);
  num %= 10;
  solution += "IX".repeat(num / 9);
  num %= 9;
  solution += "V".repeat(num / 5);
  num %= 5;
  solution += "IV".repeat(num / 4);
  num %= 4;
  solution += "I".repeat(num);

  return solution;
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isNaN(title.value)) {
    output = `${title.value} is not an integer.`;
  } else {
    output = convertToRoman(title.value);
  }

  document.getElementById("output").innerHTML = `${output}`;
  console.log(output);
});
