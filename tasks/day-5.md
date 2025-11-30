# Multi-Array Merger

Time for array manipulation! 🔀

Write a method called `mergeMultiple` that takes multiple sorted integer arrays (varargs or array of arrays) and:
1. Merges all arrays into a single sorted array (maintaining order)
2. Removes all duplicates
3. Returns the sum of all numbers in the merged array

**Examples:**
```java
mergeMultiple(new int[]{1, 3, 5}, new int[]{2, 4, 6})
// Merged: [1, 2, 3, 4, 5, 6]
// Sum: 21
mergeMultiple(new int[]{1, 2, 3}, new int[]{2, 3, 4}, new int[]{3, 4, 5})
// Merged: [1, 2, 3, 4, 5] (duplicates removed)
// Sum: 15
mergeMultiple(new int[]{5, 10}, new int[]{15, 20}, new int[]{10, 25})
// Merged: [5, 10, 15, 20, 25]
// Sum: 75
```

**Your task:**
Calculate `mergeMultiple(new int[]{3, 7, 11}, new int[]{5, 11, 17}, new int[]{7, 13, 19}, new int[]{2, 11, 23})`. The unlock code is this result.
