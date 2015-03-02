GoogleMaps = {

	map: {},

	properties: {
		target: "",
		showMarker: true,
		animate: false
	},

	mapOptions: {
		center: new google.maps.LatLng(0, 0),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	},

	markerOptions: {
		position: new google.maps.LatLng(0, 0),
		draggable: true,
		title: "",
		icon: "",
		animation: "",
		zIndex: 1
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

	animate: function(animation) {

		if (animation.toUpperCase() === "BOUNCE") {
			this.markerOptions.animation = google.maps.Animation.BOUNCE;
		}

	},

	coordinates: function(lat, lng) {
		this.markerOptions.position = this.mapOptions.center = new google.maps.LatLng(lat, lng);
	},

	show: function(objs, container) {

		this.properties.target = container;

		this.coordinates(objs[0].lat, objs[0].lng);

		this.map = new google.maps.Map(document.querySelector(this.properties.target), this.mapOptions);

		var infowindow = new google.maps.InfoWindow();

		for (item in objs) {

			if (this.properties.showMarker) {

				if (objs[item].content.trim() != "") {

					if (typeof(objs[item].icon) !== "undefined") {
						this.markerOptions.icon = objs[item].icon;
					}

					if (typeof(objs[item].z_index) !== "undefined") {
						this.markerOptions.zIndex = objs[item].z_index;
					}

					this.markerOptions.position = new google.maps.LatLng(objs[item].lat, objs[item].lng);

					marker = new google.maps.Marker(this.markerOptions);
					marker.setMap(this.map);

					google.maps.event.addListener(marker, 'click', (function(marker, item) {
						return function() {
							infowindow.setContent(objs[item].content);
							infowindow.open(this.map, marker);
						}
					})(marker, item));
				}
			}

		}


	},

	removeMarker: function() {
		this.marker.setMap(null);
	}
}