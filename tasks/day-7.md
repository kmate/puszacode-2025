# Longest Palindromic Substring

Let's find patterns in strings! 🎯

Write a method called `longestPalindrome` that:
1. Takes a string as input
2. Finds the longest contiguous substring that is a palindrome (reads the same forwards and backwards)
3. Returns the **length** of that palindrome substring

**Examples:**
```java
longestPalindrome("racecar") → 7        // entire string is a palindrome
longestPalindrome("abaxyz") → 3         // "aba" is a palindrome
longestPalindrome("noon") → 4           // entire string is a palindrome
longestPalindrome("abcde") → 1          // single characters are palindromes
longestPalindrome("abcdcba") → 7        // entire string is a palindrome
```

**Your task:**
Compute `longestPalindrome("racecarxyzabadefggfedpqr")`. The unlock code is the length of the longest palindromic substring.

**Hint:** You can check every possible substring to see if it's a palindrome, or use a more efficient approach like expanding around centers.
