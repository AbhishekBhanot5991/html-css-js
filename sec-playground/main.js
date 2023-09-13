let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

console.log(buttons)
buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click', (e)=>{
        console.log(e)
        if(e.target.id === "grey"){
            body.style.backgroundColor = "grey"
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = "white"
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = "purple"
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = "green"
        }
    })
})