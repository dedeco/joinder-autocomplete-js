var input = document.getElementById('cities');
var options = {
  types: ['(cities)'],
  componentRestrictions: {country: 'br'}
};

autocomplete = new google.maps.places.Autocomplete(input, options);

