
 function myFunction1() {
  //get div and button elements by id
    var events = document.getElementById("functions-section");
    var bookings = document.getElementById("booking-section");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    
    // if events section is not displayed
    if (events.style.display === "none") {
      //swap from displaying booking form to events
      bookings.style.display = "none";
      events.style.display = "block";
      //change button state to reflect the section displayed
      button1.disabled = true;
      button2.disabled = false;
    } else {
      events.style.display = "none";
    }
    
  }
  
  function myFunction2() {
    //get div and button elements by id
    var events = document.getElementById("functions-section");
    var bookings = document.getElementById("booking-section");
    var button2 = document.getElementById("button2");
    var button1 = document.getElementById("button1");
    
    // if events section is not displayed
    if (bookings.style.display === "none") {
      //swap from displaying booking form to events
      events.style.display = "none";
      bookings.style.display = "block";
      //change button state to reflect the section displayed
      button2.disabled = true;
      button1.disabled = false;
    } else {
      bookings.style.display = "none";
    }
  }


