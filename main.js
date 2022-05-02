/* OGD Wien Beispiel */


let stephansdom={
lat: 48.208493,
lng: 16.373118,
title: "Stephansdom",

};

let startLayer =L.tileLayer.provider("BasemapAT.grau");

let map = L.map("map",{
center:[ stephansdom.lat, stephansdom.lng], 
zoom:12,
layer:[
 startLayer
]
});

let layerControl = L.control.layers({
    "BasemapAT Grau": startLayer,
    "Basemap Standard": L.tileLayer.provider("BasemapAT.basemap"),
    "Basemap High-DPI": L.tileLayer.provider("BasemapAT.highdpi"),
    "Basemap Gelände": L.tileLayer.provider("BasemapAT.terrain"),
    "Basemap Oberfläche": L.tileLayer.provider("BasemapAT.surface"),
    "Basemap Orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    "Basemap Beschriftung": L.tileLayer.provider("BasemapAT.overlay"),
    "Basemap mit Orthofoto und Beschriftung": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay"),
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

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("BasemapAT")
).addTo(map);