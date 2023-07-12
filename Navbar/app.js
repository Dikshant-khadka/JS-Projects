// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



const navToggle = document.querySelector(".nav-toggle");
const links =document.querySelector(".links");


navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("random")); // returns false since the class is not there
    // console.log(links.classList.contains("links")); // returns true because the class exist

    // if(links.classList.contains('show-links')){
    //     links.classList.remove("show-links");
    // }else{
    //     links.classList.add("show-links");
    // }
    // now instead of adding and removing we can write these lines of code in 1-line

    links.classList.toggle("show-links");

})