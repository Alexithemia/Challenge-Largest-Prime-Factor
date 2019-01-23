exports.largestPrimeFactor = function (n) {
  var primeNumber = 2;
  while (n > 2) {
    if (n % primeNumber === 0) {
      console.log(n + " before")
      n = n / primeNumber;
      console.log(primeNumber + ' Prime')
      console.log(n + " number after")
    } else (
      primeNumber++
    )
  }
  return primeNumber;
};