# Day 15 — Collatz Conjecture

Explore the Collatz sequence! 🎮

Write a method called `collatzLength` that takes a starting number and returns the length of its Collatz sequence until it reaches 1. Rules: if even, divide by 2; if odd, multiply by 3 and add 1.

**Example:**
```java
collatzLength(13) → 10  // 13→40→20→10→5→16→8→4→2→1 (10 steps)
collatzLength(6) → 9    // 6→3→10→5→16→8→4→2→1
collatzLength(1) → 1    // already at 1
```


**Your task:**
Create the method and call `collatzLength(27)`. The unlock code is this result.

**Hint:** Use a while loop, count steps until n becomes 1!
