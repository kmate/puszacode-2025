# Day 4 — Weighted Array Score

Calculate a weighted score from an array! 📊

Write a method called weightedScore that takes an array of integers and computes a score using these rules:
1. Split the array into two halves(if odd length, the middle element goes to the first half)
2. For the first half: multiply each element by its index(starting from 1) and sum them
3. For the second half: multiply each element by its reverse index(counting backwards from the half length) and sum them
4. Return the absolute difference between the two half-sums

**Example:**
```java
```java
weightedScore(new int[]{2, 4, 6, 8})
// First half: [2, 4] → (2×1) + (4×2) = 2 + 8 = 10
// Second half: [6, 8] → (6×2) + (8×1) = 12 + 8 = 20
// Difference: |10 - 20| = 10
```

weightedScore(new int[]{1, 2, 3, 4, 5})
// First half: [1, 2, 3] → (1×1) + (2×2) + (3×3) = 1 + 4 + 9 = 14
// Second half: [4, 5] → (4×2) + (5×1) = 8 + 5 = 13
// Difference: |14 - 13| = 1

weightedScore(new int[]{10, 20, 30, 40, 50, 60})
// First half: [10, 20, 30] → (10×1) + (20×2) + (30×3) = 10 + 40 + 90 = 140
// Second half: [40, 50, 60] → (40×3) + (50×2) + (60×1) = 120 + 100 + 60 = 280
// Difference: |140 - 280| = 140
```


**Your task:**
Create the method and compute weightedScore(new int[]{5, 10, 15, 20, 25, 30, 35}). The unlock code is this result.

**Hint:** Find midpoint with(len+1)/2 for integer division, use two separate loops for each half!
