

$(function () {
    //setCopyright();
    showPosition();
});



function setCopyright() {
    $(".copyright").html("Copyright &#169; " + getCurrentYear().toString());
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function showPosition() {
    var coords = new google.maps.LatLng(40.3990522, -3.667203200000017);

    var mapOptions = {
        center: coords,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        disableDefaultUI: false,
        navigationControl: true,
        streetViewControl: true,
        scaleControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.ZOOM_PAN,
            position: google.maps.ControlPosition.TOP_RIGHT }
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: "Novafis"
    });

    var contentString = '<div id="content" style="height:285px; width:250px">' +
      '<h2>Novafis Fisioterapia</h2>' +
      '<img src="img/clinica/Entrada.jpg" alt="Novafis" height="150" width="220" />' +
      '<p>Calle Emilio Ortuño, 6 - Local<br>' +
      '28038 Madrid<br>' +
      'Teléfonos: 91 501 95 68 - 664 23 93 45</p>' +
      '</div>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, "click", function () {
        infoWindow.open(map, marker);
    });
}


function loadCarouselComments() {
    $("#imgArturo").prop("alt", "<table><tr><td style='width:15%'><strong>Arturo Casado</strong></td><td>Medalla de Oro en Campeonato Europeo de Atletismo A.L. en 1.500 metros (Barcelona 2010)</td></tr><tr><td>&nbsp;</td><td>Medalla de Bronce en Campeonato Europeo de Atletismo P.C. en 1.500 metros (Birmingham 2007)</td></tr><tr><td>&nbsp;</td><td>Medalla de Oro en Juegos del Mediterráneo A.L. en 1.500 metros (Almería 2005)</td></tr></table>");
    $("#imgAlberto").prop("alt", "<table><tr><td style='width:15%'><strong>Alberto García</strong></td><td>Medalla de Plata en Campeonato Europeo de Cross (Toro 2007 y Tilburg 2005)</td></tr><tr><td>&nbsp;</td><td>Medalla de Oro en Campeonato Europeo de Atletismo P.C. en 3.000 metros (Viena 2002)</td></tr><tr><td>&nbsp;</td><td>Medalla de Oro en Campeonato Europeo de Atletismo A.L. en 5.000 metros (Munich 2002)</td></tr><tr><td>&nbsp;</td><td>Medalla de Oro en Juegos del Mediterráneo A.L. en 5.000 metros (Bari 1997)</td></tr></table>");
}
