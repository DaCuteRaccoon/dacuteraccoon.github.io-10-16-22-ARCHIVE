// CREDIT FOR GET:
// https://stackoverflow.com/questions/2499567/how-to-make-a-json-call-to-an-url

function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var DaCuteRaccoon = JSON.parse(Get('https://api.github.com/users/DaCuteRaccoon'));
