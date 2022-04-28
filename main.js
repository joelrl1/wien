/* OGD Wien Beispiel */


let stephansdom={
lat: 48.208493,
lng: 16.373118,
title: "Stephansdom",

};

let startlayer =L.tileLayer.provider("BasemapAT_grau").addTo(map);

let map = L.map("map",{
center:[ stephansdom.lat, stephansdom.lng], 
zoom:12,
layer:[
    startlayer
]
});

let layerControl= L.control.layer({
    "BasemapAT Grau": startlayer,

}).addTo(map);