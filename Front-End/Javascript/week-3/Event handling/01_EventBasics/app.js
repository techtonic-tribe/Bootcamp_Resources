const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}








// USING ADD EVENT LISTENER
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})



// WHY WE SHOULD USE EVENT LISTENER

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');
//  WE CAN'T HAVE 2 PROPERTY FOR THE SAME EVENT

// tasButton.onclick = twist; 
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
