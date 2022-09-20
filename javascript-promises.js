// Example 1

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

// Example 2

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

// Example 3

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Done')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Done')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Done')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})