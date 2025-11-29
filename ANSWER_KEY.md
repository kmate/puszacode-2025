# Answer Key for PuszaCode 2025

This document contains the correct answers for all tasks. Keep this file private!

## Tasks 1-10

### Day 1: General Name Parts Length
**Task:** `totalNameLength("Rudolf The Red Nosed Reindeer")`
- Parts: ["Rudolf","The","Red","Nosed","Reindeer"]
- Lengths: 6 + 3 + 3 + 5 + 8 = 25
- **Answer: `25`**

### Day 2: Prime-Even Fusion Calculator
**Task:** `complexCalculate(new int[]{7, 12, 12, 5, -3, 18, 21, 8})`
- Filter negatives → {7,12,12,5,18,21,8}
- Primes (count duplicates): 7 + 5 = 12 → S = 12
- Distinct evens: {12,18,8} → P = 12 * 18 * 8 = 1728
- Max = 21 → digit sum D = 2 + 1 = 3
- Result = (S * P) - D = (12 * 1728) - 3 = 20736 - 3 = 20733
- **Answer: `20733`**

### Day 3: Digit Pattern Analyzer
**Task:** `analyzeDigits(84267)`
- Position 1: 8 (even) → score = 0 + (8×1) = 8
- Position 2: 4 (even) → score = 8 + (4×2) = 16
- Position 3: 2 (even) → score = 16 + (2×3) = 22
- Position 4: 6 (even) → score = 22 + (6×4) = 46
- Position 5: 7 (odd) → score = 46 - (7+5) = 34
- Final score: 34 (positive, so return as-is)
- **Answer: `34`**

### Day 4: Weighted Array Score
**Task:** `weightedScore(new int[]{5, 10, 15, 20, 25, 30, 35})`
- Length: 7, Midpoint: 4 (first half gets extra element)
- First half [5,10,15,20]: (5×1)+(10×2)+(15×3)+(20×4) = 5+20+45+80 = 150
- Second half [25,30,35]: (25×3)+(30×2)+(35×1) = 75+60+35 = 170
- Difference: |150 - 170| = 20
- **Answer: `20`**

### Day 5-10
*(Refer to original task files for specifics)*

## Tasks 11-24 (Enhanced Difficulty)

This section contains the enhanced difficulty tasks:

### Day 11: Array Transformation Chain
**Task:** `processArray(new int[]{6, 7, 9, 10, 12, 15})`
- Filter numbers divisible by 3 OR 5: [6, 9, 10, 12, 15]
- Square each: [36, 81, 100, 144, 225]
- Sum: 36 + 81 + 100 + 144 + 225
- **Answer: `586`**

### Day 12: Index Finder
**Task:** `findAllIndices(new int[]{3, 7, 5, 7, 2, 7, 9}, 7)`
- Indices where 7 appears: [1, 3, 5]
- Sum of indices: 1 + 3 + 5
- **Answer: `9`**

### Day 13: Power Tower
**Task:** `powerSum(5)`
- Calculate: 1¹ + 2² + 3³ + 4⁴ + 5⁵
- = 1 + 4 + 27 + 256 + 3125
- **Answer: `3413`**

### Day 14: Palindrome Length
**Task:** `longestPalindromeLength("A Santa at NASA")`
- Clean string: "asantaatnasa"
- The entire string is a palindrome!
- **Answer: `12`**

### Day 15: Collatz Conjecture
**Task:** `collatzLength(27)`
- Sequence: 27→82→41→124→62→31→94→47→142→71→...→8→4→2→1
- Count the steps until reaching 1
- **Answer: `111`**

### Day 16: Statistical Mode
**Task:** `findMode(new int[]{8, 12, 8, 16, 20, 12, 8, 4})`
- Frequencies: 8 appears 3 times, 12 appears 2 times, others 1 time
- Most frequent: 8
- **Answer: `8`**

### Day 17: Consecutive Sequence
**Task:** `longestConsecutive(new int[]{15, 14, 12, 13, 11, 20, 21})`
- Consecutive sequences: [11, 12, 13, 14, 15] and [20, 21]
- Longest length: 5
- **Answer: `5`**

### Day 18: Pig Latin Converter
**Task:** `toPigLatin("java")`
- Move first letter to end: "avaj"
- Add "ay": "avajay"
- **Answer: `avajay`**

### Day 19: Twin Prime Counter
**Task:** `countTwinPrimes(30)`
- Primes up to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
- Twin prime pairs (differ by 2): (3,5), (5,7), (11,13), (17,19)
- **Answer: `4`**

### Day 20: Lucas Numbers
**Task:** `lucas(10)`
- Lucas sequence: 2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123
- The 10th Lucas number (0-indexed)
- **Answer: `123`**

### Day 21: Spiral Matrix
**Task:** `spiralSum(4x4 matrix)` with matrix [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
- Outer spiral: 1,2,3,4,8,12,16,15,14,13,9,5
- Sum: 1+2+3+4+8+12+16+15+14+13+9+5
- **Answer: `102`**

### Day 22: Anagram Groups
**Task:** `countAnagramGroups(new String[]{"listen", "silent", "enlist", "hello", "world"})`
- Groups: {listen, silent, enlist}, {hello}, {world}
- Count: 3
- **Answer: `3`**

### Day 23: Array Rotation Advanced
**Task:** `rotateArray(new int[]{10, 20, 30, 40, 50, 60, 70}, -3)`
- Rotate left by 3: [40, 50, 60, 70, 10, 20, 30]
- Element at index 0: 40
- **Answer: `40`**

### Day 24: Missing Numbers Sum
**Task:** `sumMissing(new int[]{1, 2, 4, 6, 7, 9, 10})`
- Should contain: 1 to 10
- Missing: 3, 5, 8
- Sum: 3 + 5 + 8
- **Answer: `16`**

---

## Quick Reference

| Day | Answer | Description |
|-----|--------|-------------|
| 11  | 586    | Sum of squared filtered numbers |
| 12  | 9      | Sum of indices |
| 13  | 3413   | Power tower sum |
| 14  | 12     | Longest palindrome length |
| 15  | 111    | Collatz sequence steps |
| 16  | 8      | Most frequent number |
| 17  | 5      | Longest consecutive length |
| 18  | avajay | Pig Latin conversion |
| 19  | 4      | Twin prime pairs count |
| 20  | 123    | 10th Lucas number |
| 21  | 102    | Spiral matrix sum |
| 22  | 3      | Anagram groups count |
| 23  | 40     | Element after rotation |
| 24  | 16     | Sum of missing numbers |

---

**Note:** All SHA-256 hashes in `codes.json` have been updated to match these answers. Your wife should be able to unlock each day successfully after completing the tasks correctly!
