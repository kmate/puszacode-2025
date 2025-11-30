# Binary String Transformer

Time to work with binary representations! 🔢

Write a method `transformBinary(String binary)` that:
1. Takes a binary string (containing only '0' and '1')
2. Converts it to decimal
3. Counts how many '1' bits are in the binary representation
4. Multiplies the decimal value by the count of '1' bits
5. Returns the result as an integer

**Examples:**
```java
transformBinary("1010") → 20
// Decimal: 10, Count of '1's: 2, Result: 10 * 2 = 20
transformBinary("1111") → 60
// Decimal: 15, Count of '1's: 4, Result: 15 * 4 = 60
transformBinary("10001") → 34
// Decimal: 17, Count of '1's: 2, Result: 17 * 2 = 34
```

Now write a method `sumTransformed(String[] binaries)` that:
- Applies `transformBinary` to each string in the array
- Returns the sum of all transformed values

**Your task:**
Compute `sumTransformed(new String[]{"1101", "10110", "11001", "101"})`. The unlock code is the computed result.
