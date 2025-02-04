

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');


// HOW TO PREVENT THE AOUTOMATIC RELOADING  
// tweetForm.addEventListener('submit', function (e) {
//         console.log("Submitted!!");
//         e.preventDefault();// IT PREVENT THE DEFAULT BEHAVIOR(RELOADING)
// });


// HOW TO GET THE VALUE 
// FIRST CHECK THIS IN THE CONSOLE 

// const usernameInput = document.querySelectorAll('input')[0];
// console.log(usernameInput)
// console.log(usernameInput.value)
// const tweetInput = document.querySelectorAll('input')[1];
// console.log(tweetInput)
// console.log(tweetInput.value)

// BUT INSTADE 
// console.dir(tweetsForm)// TO CHECK WHERE THE VALUE IS

// tweetForm.addEventListener('submit', function (e) {
        // CONS OLE.LOG THE VALUE 
//     console.log(tweetForm.elements.username.value)
//     console.log(tweetForm.elements.tweet.value)

//     e.preventDefault();// IT PREVENT THE DEFAULT BEHAVIOR(RELOADING)
// });

tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = tweetForm.elements.username;
    // const tweetInput = tweetForm.elements.tweet;
    // addTweet(usernameInput.value, tweetInput.value)
    // usernameInput.value = '';
    // tweetInput.value = '';
    e.preventDefault();
});

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

