# `Day` 16 — `Statistical` `Mode`

`Find` the ``mode`(`most` `frequent` `value`)`! 📊

`Write` a method `called` `findMode` that `takes` an array and `returns` the `most` `frequently` `occurring` `number`. If `there`'s a `tie`, return the `smallest` `number`. If `all` `occur` `once`, return the `smallest`.

**`Example`:**
```java
findMode(new int[]{1, 2, 2, 3}) → 2
findMode(new int[]{5, 5, 7, 7}) → 5      // tie, return smaller
findMode(new int[]{3, 1, 2}) → 1         // all equal frequency
```


**`Your` `task`:**
`Create` the method and `find` the `mode` of `new` `int`[]{8, 12, 8, 16, 20, 12, 8, 4}. `The` `unlock` `code` is this `result`.

**`Hint`:** `Use` a `Map` to `count` `frequencies`, `find` the `maximum` `count`!
