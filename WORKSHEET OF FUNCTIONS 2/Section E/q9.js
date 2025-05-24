(function(x) {
  function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
  }
  console.log(fact(x));
})(5);
// ans 120

