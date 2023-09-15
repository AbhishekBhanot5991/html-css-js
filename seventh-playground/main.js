const main = document.querySelector('#main');
const cursor = document.querySelector('.cursor');

// cursor.style.backgroundColor= "green"
main.addEventListener('mousemove', (dot)=>{
    console.log(dot)
    cursor.style.left = dot.x+"px"
    cursor.style.top = dot.y+"px"
})