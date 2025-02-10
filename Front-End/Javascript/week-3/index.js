// Store the user object in localStorage
const user = {  
    firstName: 'abebe',  
    age: 250,  
    skills: ['HTML', 'CSS', 'JS', 'React']  
  };
  const userText = JSON.stringify(user, undefined, 4);
  localStorage.setItem('user', userText);
  
  // Retrieve and parse the stored user data
  const retrievedUser = JSON.parse(localStorage.getItem('user'));
  
  let firstName = retrievedUser.firstName;
  let age = retrievedUser.age;
  let skills = retrievedUser.skills;
  
  console.log(firstName, age, skills);
  