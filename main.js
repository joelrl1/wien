/* OGD Wien Beispiel */


let stephansdom={
lat: 48.208493,
lng: 16.373118,
title: "Stephansdom",

};

let startlayer =L.tileLayer.provider("BasemapAT.grau").addTo(map);

let map = L.map("map",{
center:[ stephansdom.lat, stephansdom.lng], 
zoom:12,
layer:[
    startlayer
]
});

let layerControl= L.control.layer({
    "BasemapAT Grau": startlayer,
    "Basmap Standard": L.tileLayer.provider("BasmapAT.basemap"),
    "Basemap High-DPI": L.tileLayer.provider("BasemapAT.highdpi"),
    "Basemap Orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    // im ganzen 7 layer noch hinzu!
      "Basemap mit Orthofoto und Beschriftung":L.layerGroup([
        L.tileLayer.provider(Basemap.overlay),

      ])  
        
}).addTo(map);

layerControl.expand();

let sightlayer = L.featureGroup();

layerControl.addOverlay(sightlayer, "Sehenswürdigkeiten");

let mrk= L.marker([stephansdom.lat, stephansdom.lng]).addTo(sightlayer);

sightlayer.addTo(map);
//Maßstab hinzufügen
L.control.scale({
    imperial:false,
}).addTo(map);

L.control.fullscreen().addTo(map);
//map.addControl(L.controll.fullscreen());