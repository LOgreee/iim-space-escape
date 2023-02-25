//VARIABLE
const top_btn = document.getElementById("topbtn");

//FUNCTIONS
function goToTop(){
    top_btn.addEventListener('click', (event) => {
        window.scroll(0,0);
    });
}

//MAIN CODE
goToTop();
document.addEventListener('scroll', (event) => {
    //SCROLL POSITION
    if (window.scrollY > (window.innerHeight*0.8)) {
      top_btn.classList.add("active");
    } else {
        top_btn.classList.remove("active");
    }
});