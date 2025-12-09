# LCM and GCD Challenge

Number theory time! �

Write two methods:

1. **`gcd(int a, int b)`** - Returns the Greatest Common Divisor using the Euclidean algorithm
2. **`lcm(int a, int b)`** - Returns the Least Common Multiple using the formula: `(a * b) / gcd(a, b)`

**Examples:**
```java
gcd(12, 8) → 4
gcd(48, 18) → 6
lcm(12, 8) → 24    // (12 * 8) / gcd(12, 8) = 96 / 4 = 24
lcm(4, 6) → 12     // (4 * 6) / gcd(4, 6) = 24 / 2 = 12
```

Now write a method `sumOfLCMs(int[] numbers)` that:
- Takes an array of integers
- Computes the LCM of each consecutive pair: lcm(numbers[0], numbers[1]), lcm(numbers[1], numbers[2]), etc.
- Returns the **sum** of all LCMs

**Your task:**
Compute `sumOfLCMs(new int[]{4, 6, 8, 10, 12})`. The unlock code is this result.
