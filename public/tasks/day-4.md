# Palindrome Checker

Let's check for symmetry! 🪞

Write a method called `isPalindrome` that takes a string and returns true if it reads the same forwards and backwards (ignoring spaces, punctuation, and case), false otherwise.

Then write `longestPalindrome` that takes an array of strings and returns the length of the longest palindrome in the array. If no palindromes exist, return 0.

**Examples:**
```java
isPalindrome("racecar") → true
isPalindrome("hello") → false
isPalindrome("A man a plan a canal Panama") → true
isPalindrome("Was it a car or a cat I saw") → true
isPalindrome("") → true  // empty is palindrome

longestPalindrome(new String[]{"hello", "level", "world"}) → 5  // "level"
longestPalindrome(new String[]{"noon", "deed", "morning"}) → 4  // both are 4
longestPalindrome(new String[]{"java", "code"}) → 0  // no palindromes
```

**Your task:**
Find `longestPalindrome(new String[]{"racecar", "hello", "deified", "noon", "java"})`. The unlock code is this number.

**Hint:** For isPalindrome: clean the string (only letters, lowercase), then compare with its reverse!
