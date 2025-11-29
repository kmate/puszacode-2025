# Fibonacci Filter

Let's combine sequences and filtering! 🔢

Write a method called `fibonacciSum` that takes an array of integers and returns the sum of all numbers in the array that are Fibonacci numbers.

A Fibonacci number is a number that appears in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

**Examples:**
```java
fibonacciSum(new int[]{1, 2, 3, 4, 5}) → 11  // 1 + 2 + 3 + 5
fibonacciSum(new int[]{10, 13, 15, 21}) → 34  // 13 + 21
fibonacciSum(new int[]{8, 9, 10, 11}) → 8  // only 8
fibonacciSum(new int[]{100, 200, 300}) → 0  // no Fibonacci numbers
fibonacciSum(new int[]{0, 1, 1, 2}) → 4  // 0 + 1 + 1 + 2
```

**Your task:**
Calculate `fibonacciSum(new int[]{3, 5, 7, 8, 13, 15, 21, 34, 50, 55})`. The unlock code is this result.
