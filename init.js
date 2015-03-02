window.onload = function() {

	GoogleMaps.properties.showMarker = true;
	GoogleMaps.animate("bounce");

	var objects = [
	  {content:'São Vicente', lat:-23.947979, lng : -46.396058, z_index:4},
	  {content:'Santos', lat:-23.927268, lng : -46.328187, z_index:5},
	  {content:'Praia Grande', lat:-23.992526, lng : -46.409791, z_index:3},
	  {content:'Guarujá', lat:-23.979979, lng : -46.254609, z_index:2},
	  {content:'Peruíbe', lat:-24.30017, lng : -46.999619, z_index:1, icon : "android.png"}
	];

	GoogleMaps.show(objects, '#location');
	
}