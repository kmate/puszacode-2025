# Array Rotation Advanced

Rotate in both directions! ✂️

Write a method called `rotateArray` that takes an array and number k, and rotates right if k is positive, left if k is negative. Return the element at index 0 after rotation.

**Example:**
```java
rotateArray(new int[]{1,2,3,4,5}, 2) → 4   // [4,5,1,2,3]
rotateArray(new int[]{1,2,3,4,5}, -2) → 3  // [3,4,5,1,2]
rotateArray(new int[]{1,2,3,4,5}, 7) → 4   // same as k=2
```


**Your task:**
Create the method and rotate new int[]{10,20,30,40,50,60,70} by k=-3. The unlock code is the element at index 0.

**Hint:** Use modulo to normalize k, handle negative by converting to positive rotation!
