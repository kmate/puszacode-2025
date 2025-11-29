# General Name Parts Length

Welcome to your coding adventure! 🎄

Write a method called `totalNameLength` that takes a full name string and returns the sum of the lengths of ALL its word parts (2 or more), ignoring spaces and removing any non-letter characters inside each part (e.g. hyphens, apostrophes). If the input is null/blank or contains fewer than 2 valid parts after cleaning, return -1.

Rules:
1. Trim leading/trailing spaces.
2. Split on one or more spaces (treat multiple spaces as one separator).
3. For each part, remove any character that is not a letter A-Z/a-z.
4. Discard any part that becomes empty after cleaning.
5. If fewer than 2 cleaned parts remain → return -1.
6. Otherwise sum the lengths of all cleaned parts and return that sum.

**Examples:**
```java
totalNameLength("John Doe") // → 7            // John(4) + Doe(3)
totalNameLength("  Mary   Jane   Watson  ") // → 14  // Mary(4)+Jane(4)+Watson(6)
totalNameLength("Anna-Marie O'Neill") // → 15 // AnnaMarie(9)+ONeill(6)
totalNameLength("Single") // → -1             // only one part
totalNameLength("") // → -1                   // blank
totalNameLength(null) // → -1                  // null
```

**Your task:**
Implement the method and compute `totalNameLength("Rudolf The Red Nosed Reindeer")`. The unlock code is this resulting number.
