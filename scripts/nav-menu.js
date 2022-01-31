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

        
        const navLink = document.querySelectorAll(".nav-link");
        //wait for click on menu links
        navLink.forEach(n => n.addEventListener("click", closeMenu));
        // close menu when link is selected
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }
}

/*document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
        const hamburger = document.querySelector(".hamburger");
        const close = document.querySelector(".close");
        const navMenu = document.querySelector(".nav-menu");
        const centerText = document.querySelector(".w3-right");

        //wait for click on menu icon
        hamburger.addEventListener("click", mobileMenu);
    
        // function to make the mobile menu display 
        function mobileMenu() {
            //hide hamburger icon on click event
            hamburger.className = hamburger.className.replace(" w3-show", " w3-hide");
            //display close icon on click
            close.className = close.className.replace(" w3-hide", " w3-show");
            //display menu 
            navMenu.className = navMenu.className.replace("w3-hide-small", "");
            //eliminates right alignment of menu items 
            centerText.className = centerText.className.replace("w3-right", "w3-center"); 
        }

      

    }
}*/