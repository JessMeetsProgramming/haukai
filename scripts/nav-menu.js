//run script when document has loaded
document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        //wait for click on menu icon
        hamburger.addEventListener("click", mobileMenu);

        // function to make the mobile menu display 
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        
        /*const navLink = document.querySelectorAll(".nav-link");
        //wait for click on menu links
        navLink.forEach(n => n.addEventListener("click", closeMenu));
        // close menu when link is selected
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }*/
    }
}
