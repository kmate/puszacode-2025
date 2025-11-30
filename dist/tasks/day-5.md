# Array Merger

Time for array manipulation! 🔀

Write a method called `mergeAndTransform` that takes two sorted integer arrays and:
1. Merges them into a single sorted array (maintaining order)
2. Removes all duplicates
3. Returns the sum of all numbers in the merged array

**Examples:**
```java
mergeAndTransform(new int[]{1, 3, 5}, new int[]{2, 4, 6})
// Merged: [1, 2, 3, 4, 5, 6]
// Sum: 21
mergeAndTransform(new int[]{1, 2, 3}, new int[]{2, 3, 4})
// Merged: [1, 2, 3, 4] (duplicates removed)
// Sum: 10
mergeAndTransform(new int[]{5, 10}, new int[]{15, 20, 25})
// Merged: [5, 10, 15, 20, 25]
// Sum: 75
```

**Your task:**
Calculate `mergeAndTransform(new int[]{3, 7, 11, 15, 19}, new int[]{5, 11, 17, 23})`. The unlock code is this result.
