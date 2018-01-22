
function initMap() {

  var waialua = {
    info: '<strong>Skydive Hawaii</strong><br>\
    68-760 Farrington Highway, Box 1, Waialua, HI 96791<br>',
    lat: 21.578445,
    long: -158.182321
  };

  var dubai = {
    info: '<strong>Skydive Dubai</strong><br>\
    Al Seyahi Street, Dubai Marina - Dubai - United Arab Emirates<br>',
    lat: 25.091427,
    long: 55.138296
  };

  var keyWest = {
    info: '<strong>Skydive Key West</strong><br>\
    5 Bat Tower Rd, Summerland Key, FL 33042<br>',
    lat: 24.648356,
    long: -81.573646
  };

  var livingstone = {
    info: '<strong>Victoria Falls Adventures</strong><br>\
    Victoria Falls Adventures, PO Box 60957, Livingstone, Zambia<br>',
    lat: -17.924299,
    long: 25.857200
  };

  var lauterbrunnen = {
    info: '<strong>Skydive Lauterbrunnen</strong><br>\
    Victoria Falls Adventures, PO Box 60957, Livingstone, Zambia<br>',
    lat: 46.593551,
    long: 7.909771
  };


  var locations = [
    [waialua.info, waialua.lat, waialua.long, 1],
    [dubai.info, dubai.lat, dubai.long, 2],
    [keyWest.info, keyWest.lat, keyWest.long, 3],
    [livingstone.info, livingstone.lat, livingstone.long, 4],
    [lauterbrunnen.info, lauterbrunnen.lat, lauterbrunnen.long, 4],
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(25.091427, -158.182321),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
    marker.addListener('mouseout', function () {
      infowindow.close();
    });
  }
}

initMap();

