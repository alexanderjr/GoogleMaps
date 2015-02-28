GoogleMaps = {

	map: {},

	properties: {
		target: "",
		showMarker: false
	},

	mapOptions: {
		center: new google.maps.LatLng(0, 0),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	},

	markerOptions: {
		position: new google.maps.LatLng(0, 0),
		draggable: true,
		title: "",
		icon: "",
		animation: google.maps.Animation.BOUNCE
	},

	type: function(type) {
		switch (type.toUpperCase()) {
			case "HYBRID":
				GoogleMaps.mapOptions.mapTypeId = google.maps.MapTypeId.HYBRID;
					break;
			case "SATELLITE":
				GoogleMaps.mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE;
				break;
			case "TERRAIN":
				GoogleMaps.mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
				break;

		}

	},

	coordinates: function(lat, lng) {
		this.markerOptions.position = this.mapOptions.center = new google.maps.LatLng(lat, lng);
	},

	show: function(lat, lng, container) {

		this.properties.target = container;

		this.coordinates(lat, lng);

		this.map = new google.maps.Map(document.querySelector(this.properties.target), this.mapOptions);

		if (this.properties.showMarker) {
			marker = new google.maps.Marker(this.markerOptions);
			marker.setMap(this.map);

			var infowindow = new google.maps.InfoWindow({content : this.markerOptions.title});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(this.map, marker);
			});
		}
	},

	removeMarker: function() {
		this.marker.setMap(null);
	}
}