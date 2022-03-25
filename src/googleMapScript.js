function initMap() {
    function displayCity(city) {
        const cityTag = document.getElementById('cityName');
        if (city != '' && city != null) {
            document.getElementById('cityName').innerHTML = city;
        }
        else {
            document.getElementById('cityName').innerHTML = 'unknown';
        }
    }

    const getWeather = async (city, zip) => {
        var query = 'https://api.openweathermap.org/data/2.5/weather?q='
        console.log(city)
        if (city != null && city != '') {

            query += city;
            displayCity(city);
            if (zip != null) {
                query += ',' + zip;
            }
            query += '&appid=053711b6648bf41d46aa4c876f6549d5';
        }
        await fetch(query)
            .then(response => { return response.json() })
            .then(response => {
                const kelvin = response.main.temp;
                const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32

                document.getElementById('temperature').innerHTML = fahrenheit.toFixed(1) + '&#176; F';
                document.getElementById('humidity').innerHTML = response.main.humidity;
                document.getElementById('description').innerHTML = response.weather[0].description;
                document.getElementById('windSpeed').innerHTML = response.wind.speed;
                setBackground(response.weather[0].description);
            })
            .catch(e => {
                console.log(e.code + ": " + e.message)
            })
    }

    const setBackground = (condition) => {
        switch (condition) {
            case 'clear sky':
                document.body.id = 'clearSky'
                break;
            case 'few clouds':
                document.body.id = 'fewClouds'
                break;
            case 'scattered clouds':
                document.body.id = 'scatteredClouds'
                break;
            case 'broken clouds':
                document.body.id = 'brokenClouds'
                break;
            case 'shower rain':
                document.body.id = 'rain'
                break;
            case 'rain':
                document.body.id = 'rain'
                break;
            case 'thunderstorm':
                document.body.id = 'thunder'
                break;
            case 'snow':
                document.body.id = 'snow'
                break;
            case 'mist':
                document.body.id = 'mist'
                break;
            default:
                break;

        }
    }

    const CONFIGURATION = {
        "ctaTitle": "Checkout",
        "mapOptions": { "center": { "lat": 37.4221, "lng": -122.0841 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": true, "zoom": 11, "zoomControl": true, "maxZoom": 22 },
        "mapsApiKey": "AIzaSyAEziqkZQo_BRBzF3dKTTJxsbIB0Ndf_Qc",
        "capabilities": { "addressAutocompleteControl": false, "mapDisplayControl": true, "ctaControl": false }
    };
    const componentForm = [
        'location',
        'locality',
        'administrative_area_level_1',
        'country',
        'postal_code',
    ];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: CONFIGURATION.mapOptions.zoom,
        center: { lat: 37.4221, lng: -122.0841 },
        mapTypeControl: false,
        fullscreenControl: CONFIGURATION.mapOptions.fullscreenControl,
        zoomControl: CONFIGURATION.mapOptions.zoomControl,
        streetViewControl: CONFIGURATION.mapOptions.streetViewControl
    });
    const marker = new google.maps.Marker({ map: map, draggable: false });
    const geocoder = new google.maps.Geocoder();

    const longEle = document.getElementById('longitude');
    const latEle = document.getElementById('latitude'); 

    const displayCoordinates = async (city) => {
  
        geocoder.geocode({ address: city }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var long = results[0].geometry.location.lng();
                var lat = results[0].geometry.location.lat();
                const place = [lat, long]
                longEle.innerHTML = results[0].geometry.location.lng();
                latEle.innerHTML = results[0].geometry.location.lat(); 
                map.setCenter(results[0].geometry.location);
            }
        })
    }

    var city_name = '';
    var postal_code = 0; 

    google.maps.event.addListener(map, 'click', function (event) {
        geocoder.geocode({
            'latLng': event.latLng
        }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        markLocation(results[0])
                        city_name = findCity(results[0].address_components)
                        postal_code = findZipcode(results[0].address_components)
                        if(city_name !== '')
                            getWeather(city_name, postal_code); 
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        longEle.innerHTML = longitude;
                        latEle.innerHTML = latitude; 
                    }
                }
        })
    })

    function findCity(data) {
        var city = ''; 
        const size = data.length; 
        for (var i = 0; i < size; i++) {
            data[i].types.forEach(item => {
                if (item === 'locality') {
                    city = data[i].long_name; 
                    return city; 
                }

            })
        }
        return city; 
    }

    function findZipcode(data) {
        var zipcode = '';
        const size = data.length;
        for (var i = 0; i < size; i++) {
            data[i].types.forEach(item => {
                if (item === 'postal_code') {
                    zipcode = data[i].long_name;
                    return zipcode;
                }

            })
        }
        return zipcode; 
    }

    // adding eventlisteners for all input fields in the form
    for (const component of componentForm) {
        document.getElementById(component).addEventListener(
            'blur', geocodeAddress);
        document.getElementById(component).addEventListener(
            'keyup', function (event) {
                // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
                    geocodeAddress();
                }
            });
    }

    function validateForm() {
        let formComplete = true;
        for (const component of componentForm) {
            if (!document.getElementById(component).value) {
                formComplete = false;
            }
        }
        return formComplete;
    }

    function geocodeAddress() {
        if (validateForm()) {
            let address = '';
            // Get address from form inputs
            for (const component of componentForm) {
                address += document.getElementById(component).value + ' ';
            }
            
            let city = document.getElementById('locality').value; 
            let postal = document.getElementById('postal_code').value; 
            let country = document.getElementById('country').value; 
            getWeather(city, postal);

            geocoder.geocode({ address: address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    renderAddress(results[0]);
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    longEle.innerHTML = longitude; 
                    latEle.innerHTML = latitude; 
                }
            });
        }
    }

    function renderAddress(place) {
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    }

    function markLocation(place) {
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    }
    (function startWithLA() {
        getWeather('Los Angeles', null);
        displayCoordinates('Los Angeles, CA')
    })();
}
