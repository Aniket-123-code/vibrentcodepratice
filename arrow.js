hello = () => {
    return "Hello world";
}
console.log(hello);

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

  let sum = (a, b) => {
      let result = a + b;
      return result;
  }
  let result1 = sum(5,7);
  console.log(result1);

  let mul = (a, b) => {
      let result = a - b;
      return result;
  }

  let result2 = mul(5,7);
  console.log(result2);

  let div = (a, b) => {
      let result = a / b;
      return result;

  }

  let result3 = div(6 , 2);
  console.log(result3);

welcome(); // Baby

