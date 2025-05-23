const doPromise = new Promise((resolve, reject) => {
  console.log("Promise function is running...") // This runs immediately 1
  
  setTimeout(() => {
    console.log("Timeout finished, resolving/rejecting promise...") // Runs after 2 sec 3
    
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills) // This triggers `.then()`
    } else {
      reject('Something wrong has happened') // This triggers `.catch()`
    }
  }, 2000)
})

console.log("Before calling .then()") //2

doPromise
  .then(result => {
    console.log("Promise resolved with:", result) //4
  })
  .catch(error => console.log("Promise rejected with:", error))

console.log("After calling .then()") //3
