# `Day` 22 — `Anagram` `Groups`

`Count` `anagram` `groups`! 🔤

`Write` a method `called` `countAnagramGroups` that `takes` an array of `strings` and `returns` the `number` of `distinct` `anagram` `groups`.

**`Example`:**
```java
countAnagramGroups(new String[]{"eat", "tea", "tan", "ate", "nat", "bat"}) → 3
// Groups: ["eat","tea","ate"], ["tan","nat"], ["bat"]
countAnagramGroups(new String[]{"abc", "bca", "cab"}) → 1
// All are anagrams of each other
```


**`Your` `task`:**
`Create` the method and `count` `groups` in:
`new` `String`[]{"`listen`", "`silent`", "`enlist`", "`hello`", "`world`"}

`The` `unlock` `code` is this `result`.

**`Hint`:** `Use` a `Map` with `sorted` `characters` as `key`, `group` `words`, `count` `distinct` `groups`!
