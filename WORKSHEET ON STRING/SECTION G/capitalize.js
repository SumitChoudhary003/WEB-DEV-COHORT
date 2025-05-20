let sentence = "hello bro welcome to javascript";
let capitalized = sentence
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);
//ans Hello Bro Welcome To Javascript
