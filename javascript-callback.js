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