# Array Transformation Chain

Let's chain multiple operations! 🎯

Write a method called `processArray` that takes an array of integers and:
1. Filters only numbers divisible by 3 OR 5
2. Squares each remaining number
3. Returns the sum of all squared numbers

**Example:**
```java
processArray(new int[]{1, 2, 3, 4, 5}) → 34  // 3² + 5² = 9 + 25
processArray(new int[]{10, 15, 20}) → 925    // 10² + 15² + 20² = 100 + 225 + 600
processArray(new int[]{1, 2, 4}) → 0         // no numbers divisible by 3 or 5
```


**Your task:**
Create the method and process new int[]{6, 7, 9, 10, 12, 15}. The unlock code is this result.

**Hint:** Filter numbers where n%3==0 OR n%5==0, then square and sum!
