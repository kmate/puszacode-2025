# Day 21 — Spiral Matrix

Sum spiral elements! 📦

Write a method called spiralSum that takes a square matrix and returns the sum of elements along the outer spiral(first row, last column, last row in reverse, first column in reverse).

**Example:**
```java
spiralSum(new int[][]{{1,2,3},{4,5,6},{7,8,9}}) → 40
// Outer spiral: 1,2,3,6,9,8,7,4 = 40
```


**Your task:**
Create the method for a 4x4 matrix:
new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}}

The unlock code is this result.

**Hint:** Sum first row, then last column(skip first), then last row reversed(skip last), then first column reversed(skip first and last)!
