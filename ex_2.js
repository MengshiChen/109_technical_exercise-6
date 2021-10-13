for (let number = 1; number <= 100; number=number+1) {
  let print = "";
  if (number % 3 == 0) print= print + "Fizz";
  if (number % 5 == 0) print= print + "Buzz";
  else if (number %3 == 0 && number %5 == 0) print= print +"FizzBuzz";
  console.log(print || number);
}
//
//   else (number%3 ==0; number%5 ==0); print= print+"FizzBuzz";
//   console.log(print||number);
// }
