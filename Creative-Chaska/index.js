

// Search functionality (example implementation)
document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    console.log('Search Query:', query);
    // Implement actual search logic here
});
document.getElementById("searchButton").addEventListener("click", () => {
    const dish = document.getElementById("dishInput").value;
    const location = document.getElementById("locationInput").value;
  
    if (!dish || !location) {
      alert("Please enter both a dish/cuisine and a location.");
      return;
    }
  
    searchNearbyPlaces(dish, location);
  });
  
  function searchNearbyPlaces(dish, location) {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
    });
  
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
  
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location: results[0].geometry.location,
            radius: 5000, // 5km radius
            keyword: dish,
          },
          (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              results.forEach((place) => {
                const marker = new google.maps.Marker({
                  position: place.geometry.location,
                  map: map,
                  title: place.name,
                });
  
                const infoWindow = new google.maps.InfoWindow({
                  content: <h3>${place.name}</h3><p>${place.vicinity}</p>,
                });
  
                marker.addListener("click", () => {
                  infoWindow.open(map, marker);
                });
              });
            } else {
              alert("No results found for your search.");
            }
          }
        );
      } else {
        alert("Location not found: " + status);
      }
    });
  }
 