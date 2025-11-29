# `Day` 3 — `Digit` `Pattern` `Analyzer`

`Let`'s `analyze` `number` `patterns`! 🎯

`Write` a method `called` `analyzeDigits` that `takes` a `positive` `integer` and `returns` a `score` `based` on these `rules`:
1. `Start` with a `base` `score` of 0
2. `For` `each` `digit` in the ``number`(`left` to `right`)`:
   - If the `digit` is `even`: ``add`(`digit` × `position`)` to the `score`, `where` `position` `starts` at 1
   - If the `digit` is `odd`: ``subtract`(`digit` + `position`)` from the `score`
3. If the `final` `score` is `negative`, return `its` `absolute` `value`
4. `Otherwise` return the `score` as-is

**`Example`:**
```java
analyzeDigits(246)
// Position 1: 2 (even) → score = 0 + (2×1) = 2
// Position 2: 4 (even) → score = 2 + (4×2) = 10
// Position 3: 6 (even) → score = 10 + (6×3) = 28
// Result: 28
analyzeDigits(135)
// Position 1: 1 (odd) → score = 0 - (1+1) = -2
// Position 2: 3 (odd) → score = -2 - (3+2) = -7
// Position 3: 5 (odd) → score = -7 - (5+3) = -15
// Result: 15 (absolute value)
analyzeDigits(2531)
// Position 1: 2 (even) → score = 0 + (2×1) = 2
// Position 2: 5 (odd) → score = 2 - (5+2) = -5
// Position 3: 3 (odd) → score = -5 - (3+3) = -11
// Position 4: 1 (odd) → score = -11 - (1+4) = -16
// Result: 16 (absolute value)
```


**`Your` `task`:**
`Create` the method and `compute` ``analyzeDigits`(84267)`. `The` `unlock` `code` is this `result`.

**`Hint`:** `Convert` to string to `iterate` `digits`, `track` `position` `counter`, `handle` `sign` at the `end`!
