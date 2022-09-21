#### 9: setTimeout()

```js
setTimeout(() => {
    console.log('a')
}, 0)

console.log('b')
console.log('c')
console.log('d')

// The result will be
b
c
d
a
```

- What's going deeply behind this is: for JS to execute, it compiles using something called the **Event Loop** - it helps JS to prioritize which gets executed first.
- The setTimeout will from the stack to an web api processor and back to the task queue, but it only enters back to the stack after the stack finished execute other code before it.
- Therefore the setTimeout gets putted onto the last position for executing.

