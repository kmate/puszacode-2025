# Day 13 — Power Tower

Calculate nested powers! 🎲

Write a method called powerSum that takes a number n and returns the sum: 1¹ + 2² + 3³ + ... + nⁿ (each number raised to itself).

**Example:**
```java
powerSum(3) → 32  // 1¹ + 2² + 3³ = 1 + 4 + 27
powerSum(4) → 288 // 1 + 4 + 27 + 256
powerSum(2) → 5   // 1 + 4
```


**Your task:**
Create the method and calculate powerSum(5). The unlock code is this result.

**Hint:** Use Math.pow(i, i) in a loop from 1 to n!
