# Day 12 — Index Finder

Find all occurrences! 🔢

Write a method called `findAllIndices` that takes an array of integers and a target value, and returns an array of all indices where the target appears.

**Example:**
```java
findAllIndices(new int[]{1, 3, 5, 3, 7, 3}, 3) → [1, 3, 5]
findAllIndices(new int[]{10, 20, 30}, 20) → [1]
findAllIndices(new int[]{1, 2, 3}, 5) → []
```


**Your task:**
Create the method and find indices of 7 in new int[]{3, 7, 5, 7, 2, 7, 9}. The unlock code is the sum of all indices.

**Hint:** Use a `List` to collect indices, then convert to array!
