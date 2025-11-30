


# Christmas Tree Printer

Welcome to your Christmas coding adventure! 🎄✨

Write a method called `printChristmasTree` that takes a positive integer `height` and prints a text-based Christmas tree of that height using stars (`*`) and spaces. The tree should be centered, with each row containing an odd number of stars, starting with one star at the top and increasing by two each row. The trunk should be a single `|` character, centered below the tree.

Rules:
1. The tree must have `height` rows of stars.
2. Each row is centered, with spaces on both sides as needed.
3. The bottom row has the most stars.
4. After the tree, print the trunk: one `|` character, centered.
5. If `height` is less than 1, print nothing.

**Example (height = 4):**
```java
printChristmasTree(4);
```
Output:
```
   *
  ***
 *****
*******
   |
```

**Your task:**
Implement the method and call `printChristmasTree(6)`. The unlock code is the number of stars in the bottom row.
