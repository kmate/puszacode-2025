# Day 6 — Pattern Generator

Time for string manipulation! 🔄

Write a method called generatePattern that takes a character and a number n, and returns a string where each line contains the character repeated i `times(for i from 1 to n)`, with lines separated by newlines.

**Example:**
```java
generatePattern('*', 3) → "*\n**\n***"
generatePattern('#', 2) → "#\n##"
```


**Your task:**
Create the method and call `generatePattern('X', 4)`. The unlock code is the total number of 'X' characters in the result.

**Hint:** Use nested loops - outer for lines, inner for characters per line!
