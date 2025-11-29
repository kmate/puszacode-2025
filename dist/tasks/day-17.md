# Consecutive Sequence

Find longest consecutive numbers! 🧹

Write a method called `longestConsecutive` that takes an unsorted array and returns the length of the longest sequence of consecutive numbers.

**Example:**
```java
longestConsecutive(new int[]{100, 4, 200, 1, 3, 2}) → 4  // 1,2,3,4
longestConsecutive(new int[]{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}) → 9  // 0-8
longestConsecutive(new int[]{10, 5, 12}) → 1
```


**Your task:**
Create the method and process new int[]{15, 14, 12, 13, 11, 20, 21}. The unlock code is this result.

**Hint:** Use a `Set` for `O(1)` lookup, then check sequences!
