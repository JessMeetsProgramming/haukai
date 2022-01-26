
//event listener for window resize   
$(window).resize( function() {
    // if user resizes the window refresh the page to run script 
    window.location.href = window.location.href;
  
       
    // if screen width is greater than 600px run the script
    if (document.documentElement.clientWidth > 600) {


        //run script when document has loaded
        $(document).ready(function() {
        
            // declare slideindex variable to count slides
            var slideIndex = 0;
            // run function
            carousel();

            // function to chnage the image every 6 seconds
            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > x.length) {slideIndex = 1}
                x[slideIndex-1].style.display = "block";
                setTimeout(carousel, 6000); // Change image every 6 seconds
                
            }

        });
    }
});