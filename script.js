// typing
const text = "Kishor Kumar Sarma";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}
}
typing();

// reveal
window.addEventListener("scroll", ()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
});