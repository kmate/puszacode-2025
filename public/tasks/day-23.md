# Day 23 — Chunk Array

Split into chunks! ✂️

Write a function called `chunkArray` that takes an array and a chunk size, and returns the array split into chunks of that size.

**Example:**
```javascript
chunkArray([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
chunkArray([1, 2, 3, 4], 2) → [[1, 2], [3, 4]]
chunkArray([1, 2, 3, 4, 5, 6], 3) → [[1, 2, 3], [4, 5, 6]]
```

**Your task:**
Create the function and chunk `[10, 20, 30, 40, 50]` with size 2. The unlock code is the sum of numbers in the last chunk.

**Hint:** Use a loop and `.slice()` to extract chunks!
