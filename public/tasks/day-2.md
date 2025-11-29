# Vowel Counter

Let's count characters! 📝

Write a method called `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u) in it. Count both uppercase and lowercase vowels. Ignore all other characters.

**Examples:**
```java
countVowels("hello") → 2  // e, o
countVowels("sky") → 0
countVowels("AEIOU") → 5
countVowels("Programming") → 3  // o, a, i
countVowels("Java 2024!") → 3   // a, a, a
countVowels("") → 0
```

**Your task:**
Create the method and count vowels in "Beautiful December". The unlock code is this number.

**Hint:** Convert to lowercase first, then check each character!

---

OLD TASK BELOW (REPLACED):

# Prime-Even Fusion Calculator

Let's build a multi-step data cruncher! ✨

Write a method `complexCalculate(int[] nums)` that performs these operations in order:
1. Remove all negative numbers.
2. Collect all prime numbers (after removal) and compute their sum (S).
3. Collect all DISTINCT even numbers and compute their product (P). If there are no even numbers, P = 1.
4. Find the maximum number in the filtered list. Compute the sum of its decimal digits (D).
5. Return: (S * P) - D.
6. If fewer than 2 numbers remain after removing negatives, return -1.

Definitions:
- Prime: >1 and divisible only by 1 and itself.
- Distinct even numbers: each counted once regardless of duplicates.

**Examples:**
```java
complexCalculate(new int[]{7, 12, 5});
// S = 7 + 5 = 12
// Distinct evens = {12} → P = 12
// Max = 12 → D = 1 + 2 = 3
// Result = (12 * 12) - 3 = 144 - 3 = 141
complexCalculate(new int[]{2, 2, 3, 4});
// Filter: all non-negative already.
// Primes: 2, 2, 3 → S = 2 + 2 + 3 = 7 (count duplicates normally)
// Distinct evens: {2, 4} → P = 2 * 4 = 8
// Max = 4 → D = 4
// Result = (7 * 8) - 4 = 56 - 4 = 52
complexCalculate(new int[]{-5, 11, 11, 8});
// Filter: {11, 11, 8}
// Primes: 11 + 11 = 22 → S = 22
// Distinct evens: {8} → P = 8
// Max = 11 → D = 1 + 1 = 2
// Result = (22 * 8) - 2 = 176 - 2 = 174
```

**Your task:**
Compute `complexCalculate(new int[]{7, 12, 12, 5, -3, 18, 21, 8})`. The unlock code is the computed result.

**Hint:** Helper methods: `isPrime(int n)`, use a `Set` for distinct evens, digit sum via loop or by converting to string.
