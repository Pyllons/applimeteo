var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
		
		
		    var onSuccess = function(position) {

				
				var lat  = position.coords.latitude;
				var lng = position.coords.longitude ;
				
				//console.log(lat);
				
				
				
				$.ajax({ //ajax weather recuperer donnees avec coord gps
				type: "GET",
				dataType: "json",
				url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr",
				
				success: function(data) {


					var city_name = data.name;
					var general = data.weather[0].main;
					var description = data.weather[0].description;
					var icon = data.weather[0].icon;
					var celsiusmin = Math.round(data.main.temp_min - 273.15);
					var celsiusmax = Math.round(data.main.temp_max - 273.15);

				  console.log(city_name);


				  //on concatene la div en une variable
					var weather_now = city_name+'<br>';
					weather_now += '<img src="http://openweathermap.org/img/w/'+icon+'.png"><br>';
					weather_now += description +'<br>';
					weather_now += 'Temp min: '+ celsiusmin + '<br>';
					weather_now += 'Temp max: '+ celsiusmax + '<br>';

		
		
				

					//$("#meteo").html(weather_now);
				$("#nom_ville").html(city_name);
				$("#icon").html('<img src="img/'+icon+'.png">');
				$("#description").html(description);
				$("#temp_min").html('Temp min '+celsiusmin);
				$("#temp_max").html('Temp max '+celsiusmax);
		
                                  
         }, // success
                          
	 }); ///END AJAX WEATHER////

				
				
				
				
    };// on succes de la recup geoloc
 
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
		
		
		
		
		
		
		console.log("ready");
		
		$("#go").click(function() {
			
			var inputville = $("#inputville").val();
			
				$.ajax({ //ajax weather recuperer donnees avec coord gps
				type: "GET",
				dataType: "json",
				url: "http://api.openweathermap.org/data/2.5/weather?q="+inputville+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr ",
				
				success: function(data) {


					var city_name = data.name;
					var general = data.weather[0].main;
					var description = data.weather[0].description;
					var icon = data.weather[0].icon;
					var celsiusmin = Math.round(data.main.temp_min - 273.15);
					var celsiusmax = Math.round(data.main.temp_max - 273.15);

				  console.log(city_name);


				  //on concatene la div en une variable
					var weather_now = city_name+'<br>';
					weather_now += '<img src="http://openweathermap.org/img/w/'+icon+'.png"><br>';
					weather_now += description +'<br>';
					weather_now += 'Temp min: '+ celsiusmin + '<br>';
					weather_now += 'Temp max: '+ celsiusmax + '<br>';

		
		
				

					//$("#meteo").html(weather_now);
				$("#nom_ville2").html(city_name);
				$("#icon2").html('<img src="img/'+icon+'.png">');
				$("#description2").html(description);
				$("#temp_min2").html('Temp min '+celsiusmin);
				$("#temp_max2").html('Temp max '+celsiusmax);
		
                                  
         }, // success
                          
	 }); ///END AJAX WEATHER////
			
		}); // go click
        
    }, // device ready
	
	
	
	
	

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

