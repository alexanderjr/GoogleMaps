window.onload = function() {
	GoogleMaps.properties.showMarker = true;
	GoogleMaps.markerOptions.icon    = "android.png"
	GoogleMaps.markerOptions.title   = "Here I Am, rock like a hurricane";
	GoogleMaps.show(-23.964597, -46.384161, '#location');
}