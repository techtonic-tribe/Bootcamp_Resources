// const callback = (n) => {
//     return n ** 2
//   }
//   ​
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   ​
//   console.log(cube(callback, 3))

// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

// const sayHello = () => {
//     console.log(" hello world")
// }

// setTimeout (sayHello , 2000) 


// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const arr = [10, 2, 13, 4, 5, 16, 7, 8]

// let sum =0
// const double = (i) => {
//     sum += i
//    console.log ( sum )
   
// }
// arr.forEach(double)
// console.log ( sum )

// arr.forEach( function(i) {
//  console.log (i)
// })
// console.log ("----------------------")

// arr.forEach((i) => {
//  console.log (i*2)
// })

// for (let i = 0; i < arr.length; i++) {
//     console.log (arr[i]*2)
// }

// const newArr = arr.map((i)=>i*2)
// console.log (newArr)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const capNames = names.map((name)=> name.toUpperCase())
// console.log (capNames)

// const filterdNames = names.filter((name)=> name.includes("x"))
// const filterdNames = names.filter((name)=> name.endsWith("h"))
// const filterdNames = names.filter((name)=> name.startsWith("M"))
// const filterdNames = names.filter((name)=> name.length == 5)
// console.log (filterdNames)


// const sum = arr.reduce((acc, cur) => acc + cur)
// console.log(sum)

// const newArr = arr.every((i) => typeof(i) === "number")
// const newArr = arr.some((i) => typeof(i) === "number")
// console.log(newArr)

// const age = arr.find((age) => age < 5)
// const age = arr.findIndex((age) => age < 5)
// console.log(age)

// console.log(arr.sort()) 
// arr.sort(function (a, b) {
//   return b - a
// })
// console.log(arr)

// num=[3,2]
// const newNum = num.sort((a,b) => b-a)
// console.log(newNum)

// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// companies.forEach((i) => setOfCompanies.add(i))
// console.log(setOfCompanies)

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
//   const langSet = new Set(languages)
//   console.log(langSet) 
//   console.log(langSet.size) 
  
//   const counts = []
//   const count = {}
  
//   for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang) 
//     counts.push({ language: l, count: filteredLang.length })
//   }
//   console.log(counts)   



// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
  
//   for(const [first, third] of fullStack) {
//   console.log(first, third)
//   }




