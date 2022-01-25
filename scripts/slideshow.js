// if screen width is greater than 600px run the script
if (document.documentElement.clientWidth > 600) {

    //use jquery to run script at correct time
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

            // if browser on large screen is resized to below 600px display single image to match CSS media queries
            if (window.matchMedia("only screen and (max-width: 600px)").matches)  {
                x[0].style.display= "block";
                return;
            } 
        }

    });
}
