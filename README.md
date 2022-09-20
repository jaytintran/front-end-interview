### JS Promises
- Just like in real life, what you do is to commit to something by promising you'll do it. Then that promise has one of two results, either that promise is **completed** (**resolve**) or it's **failed** (**rejected**).

- Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

**Benefits of Promises**
- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling

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

- Promises are great when you need to do something that is going to take a long time in the background such as downloading an image from a different server. You want to do something else while waiting for it to be completed rather than put onhold everything else to wait for it. Also you can catch it if it fails so that you can make a retry or give the user an error message.

### JS Callbacks
- Something that was meant to be replaced by JS Promises. Which is a bit more complicated and harder than JS Promises.

```js
const userLeft = false
const userWatching = false

let watchTutorialCallback = (callback, errorCallback) => {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        }) 
    } else if (userWatching) {
        errorCallback({
            name: 'User Watching',
            message: 'JS Mastery'
        })
    } else {
        callback('Thumbs up and subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})
```

- Now let's look at the **promise** version of the exact same code above.

```js
let watchTutorialPromise = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            }) 
        } else if (userWatching) {
            reject({
                name: 'User Watching',
                message: 'JS Mastery'
            })
        } else {
            resolve('Thumbs up and subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
```

### JS Closures
- Every scope has access to variables outside of its scope. Inner functions inside another outer function can access to the outer function's variables and data.
