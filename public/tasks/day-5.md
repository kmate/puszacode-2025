# Pattern Generator

Time for string building! 🔄

Write a method called `generatePattern` that takes a character and a number n, and returns a string where each line contains the character repeated i times (for i from 1 to n), with lines separated by newlines.

Then write `countPattern` that takes the result and returns the total count of the character in the entire pattern.

**Examples:**
```java
generatePattern('*', 3) → "*\n**\n***"
generatePattern('#', 2) → "#\n##"

countPattern(generatePattern('*', 3)) → 6  // 1 + 2 + 3
countPattern(generatePattern('X', 4)) → 10  // 1 + 2 + 3 + 4
countPattern(generatePattern('#', 5)) → 15  // 1 + 2 + 3 + 4 + 5
```

**Your task:**
Generate pattern with 'Z' and 9 levels, then count total 'Z' characters. The unlock code is this count.

**Hint:** Use nested loops for generation, or use formula n*(n+1)/2 for counting triangular numbers!
