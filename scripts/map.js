// Initialize and add the map
function initMap() {

    var haukai = {lat: -35.218147, lng: 173.957414};//{lat: -35.217653808420614, lng: 173.9573953838288}; 
  
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,//15.5,
      center: haukai,
      disableDefaultUI: true,
    });

    var marker = new google.maps.Marker({
        position: haukai,
        map: map, 

    });

    var infowindow = new google.maps.InfoWindow({
        content:"The Haukai"
      });
      
      infowindow.open(map,marker);

  }