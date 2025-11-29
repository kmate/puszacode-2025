# Array Rotator

Time to shift things around! 🔄

Write a method called `rotateArray` that takes an array of integers and a number k, then rotates the array to the right by k positions. Elements that fall off the end wrap around to the beginning.

**Examples:**
```java
rotateArray(new int[]{1, 2, 3, 4, 5}, 2) → [4, 5, 1, 2, 3]
// Move last 2 to front
rotateArray(new int[]{10, 20, 30}, 1) → [30, 10, 20]
rotateArray(new int[]{1, 2, 3, 4}, 4) → [1, 2, 3, 4]
// Full rotation = same array
rotateArray(new int[]{7, 8, 9}, 5) → [8, 9, 7]
// 5 % 3 = 2, so rotate by 2
```

**Your task:**
Create the method and rotate `new int[]{5, 10, 15, 20, 25, 30}` by 4 positions. Return the element at index 2 of the rotated array as the unlock code.
