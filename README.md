# GoogleMaps

Simple code to set location in google maps, in this new release it's possible to put many markers on map

Setup

1 - Set src from library api maps (https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true)

2 - Import library GoogleMaps

3 - Set in a some event js the below code

	GoogleMaps.show([objects], container);

	Example : 

	var objects = [
	  {content:'São Vicente', lat:-23.947979, ltg : -46.396058, z_index:4},
	  {content:'Santos', lat:-23.927268, ltg : -46.328187, z_index:5},
	  {content:'Praia Grande', lat:-23.992526, ltg : -46.409791, z_index:3},
	  {content:'Guarujá', lat:-23.979979, ltg : -46.254609, z_index:2},
	  {content:'Peruíbe', lat:-24.30017, ltg : -46.999619, z_index:1, icon : "android.png"}
	];

	GoogleMaps.show(objects, '#location');
	

Be happy :)

References 

https://developers.google.com/maps/documentation/javascript/examples/
http://www.w3schools.com/googleapi/default.asp