### JS Promises
- Just like in real life, what you do is to commit to something by promising you'll do it. Then that promise has one of two results, either that promise is **completed** (**resolve**) or it's **failed** (**rejected**).

```js
let my_promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

my_promise.then((message) => {
    console.log("This is in the then: " + message)
}).catch((message) => {
    console.log("This is in the catch: " + message)
})
```

### JS Closures
- Every scope has access to variables outside of its scope. Inner functions inside another outer function can access to the outer function's variables and data.
