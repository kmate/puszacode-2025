# Day 24 — Missing Numbers Sum

Find sum of missing numbers! 🎯

Write a method called `sumMissing` that takes an array that should contain numbers from 1 to n(some are missing, none are duplicated), and returns the sum of all missing numbers.

**Example:**
```java
sumMissing(new int[]{1, 3, 5}) → 9        // missing: 2,4 → 2+4=6... wait, max=5, so missing 2,4 → 6
sumMissing(new int[]{1, 2, 4}) → 3        // missing: 3
sumMissing(new int[]{1, 2, 3, 4, 5}) → 0  // nothing missing
```


**Your task:**
Create the method for new int[]{1, 2, 4, 6, 7, 9, 10}. The unlock code is this result.

**Hint:** Find max value n, calculate expected `sum(n×(n+1)`/2), subtract actual sum!

🎄 **Congratulations on completing all 24 challenges!** 🎄
