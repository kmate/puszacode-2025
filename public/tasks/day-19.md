# Day 19 — Twin Prime Counter

Count twin prime pairs! 🔢

Write a method called countTwinPrimes that takes a number n and returns how many twin prime pairs exist up to n. Twin primes are pairs of primes that differ by 2 (like 3,5 or 11,13).

**Example:**
```java
countTwinPrimes(15) → 3  // (3,5), (5,7), (11,13)
countTwinPrimes(20) → 4  // (3,5), (5,7), (11,13), (17,19)
countTwinPrimes(5) → 1   // (3,5)
```


**Your task:**
Create the method and calculate `countTwinPrimes(30)`. The unlock code is this result.

**Hint:** Check each number if it's prime, then check if number+2 is also prime!
