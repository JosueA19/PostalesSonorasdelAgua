ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11523994.123608, 2367202.216743, -11520611.995326, 2369020.498554]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapabaseGoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Mapa base Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MapabasePositronnolabels_2 = new ol.layer.Tile({
            'title': 'Mapa base Positron [no labels]',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_ZMGextendida5kmcontorno_3 = new ol.format.GeoJSON();
var features_ZMGextendida5kmcontorno_3 = format_ZMGextendida5kmcontorno_3.readFeatures(json_ZMGextendida5kmcontorno_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMGextendida5kmcontorno_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMGextendida5kmcontorno_3.addFeatures(features_ZMGextendida5kmcontorno_3);
var lyr_ZMGextendida5kmcontorno_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMGextendida5kmcontorno_3, 
                style: style_ZMGextendida5kmcontorno_3,
                popuplayertitle: 'ZMG extendida 5 km contorno',
                interactive: false,
                title: '<img src="styles/legend/ZMGextendida5kmcontorno_3.png" /> ZMG extendida 5 km contorno'
            });
var format_DivisinmunicipaldeJalisco_4 = new ol.format.GeoJSON();
var features_DivisinmunicipaldeJalisco_4 = format_DivisinmunicipaldeJalisco_4.readFeatures(json_DivisinmunicipaldeJalisco_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivisinmunicipaldeJalisco_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisinmunicipaldeJalisco_4.addFeatures(features_DivisinmunicipaldeJalisco_4);
var lyr_DivisinmunicipaldeJalisco_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DivisinmunicipaldeJalisco_4, 
                style: style_DivisinmunicipaldeJalisco_4,
                popuplayertitle: 'División municipal de Jalisco',
                interactive: false,
                title: '<img src="styles/legend/DivisinmunicipaldeJalisco_4.png" /> División municipal de Jalisco'
            });
var format_ZMGextendida5km_5 = new ol.format.GeoJSON();
var features_ZMGextendida5km_5 = format_ZMGextendida5km_5.readFeatures(json_ZMGextendida5km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMGextendida5km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMGextendida5km_5.addFeatures(features_ZMGextendida5km_5);
var lyr_ZMGextendida5km_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMGextendida5km_5, 
                style: style_ZMGextendida5km_5,
                popuplayertitle: 'ZMG extendida 5 km',
                interactive: false,
                title: '<img src="styles/legend/ZMGextendida5km_5.png" /> ZMG extendida 5 km'
            });
var format_PresadeSantaLuciapolgono_6 = new ol.format.GeoJSON();
var features_PresadeSantaLuciapolgono_6 = format_PresadeSantaLuciapolgono_6.readFeatures(json_PresadeSantaLuciapolgono_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PresadeSantaLuciapolgono_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PresadeSantaLuciapolgono_6.addFeatures(features_PresadeSantaLuciapolgono_6);
var lyr_PresadeSantaLuciapolgono_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PresadeSantaLuciapolgono_6, 
                style: style_PresadeSantaLuciapolgono_6,
                popuplayertitle: 'Presa de Santa Lucia polígono',
                interactive: false,
                title: '<img src="styles/legend/PresadeSantaLuciapolgono_6.png" /> Presa de Santa Lucia polígono'
            });
var format_PresadeSantaLucia_7 = new ol.format.GeoJSON();
var features_PresadeSantaLucia_7 = format_PresadeSantaLucia_7.readFeatures(json_PresadeSantaLucia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PresadeSantaLucia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PresadeSantaLucia_7.addFeatures(features_PresadeSantaLucia_7);
var lyr_PresadeSantaLucia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PresadeSantaLucia_7,
maxResolution:28004.466152261964,
 
                style: style_PresadeSantaLucia_7,
                popuplayertitle: 'Presa de Santa Lucia',
                interactive: true,
                title: '<img src="styles/legend/PresadeSantaLucia_7.png" /> Presa de Santa Lucia'
            });
var format_PresadeSantaLuciagrabaciones_8 = new ol.format.GeoJSON();
var features_PresadeSantaLuciagrabaciones_8 = format_PresadeSantaLuciagrabaciones_8.readFeatures(json_PresadeSantaLuciagrabaciones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PresadeSantaLuciagrabaciones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PresadeSantaLuciagrabaciones_8.addFeatures(features_PresadeSantaLuciagrabaciones_8);
var lyr_PresadeSantaLuciagrabaciones_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PresadeSantaLuciagrabaciones_8, 
                style: style_PresadeSantaLuciagrabaciones_8,
                popuplayertitle: 'Presa de Santa Lucia grabaciones',
                interactive: true,
                title: '<img src="styles/legend/PresadeSantaLuciagrabaciones_8.png" /> Presa de Santa Lucia grabaciones'
            });
var format_Bosquedeloscolomos_9 = new ol.format.GeoJSON();
var features_Bosquedeloscolomos_9 = format_Bosquedeloscolomos_9.readFeatures(json_Bosquedeloscolomos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bosquedeloscolomos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bosquedeloscolomos_9.addFeatures(features_Bosquedeloscolomos_9);
var lyr_Bosquedeloscolomos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bosquedeloscolomos_9, 
                style: style_Bosquedeloscolomos_9,
                popuplayertitle: 'Bosque de los colomos',
                interactive: false,
                title: '<img src="styles/legend/Bosquedeloscolomos_9.png" /> Bosque de los colomos'
            });
var group_Colomos = new ol.layer.Group({
                                layers: [lyr_Bosquedeloscolomos_9,],
                                fold: 'open',
                                title: 'Colomos'});
var group_PresadeSantaLucia = new ol.layer.Group({
                                layers: [lyr_PresadeSantaLuciapolgono_6,lyr_PresadeSantaLucia_7,lyr_PresadeSantaLuciagrabaciones_8,],
                                fold: 'open',
                                title: 'Presa de Santa Lucia'});
var group_Extras = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_MapabaseGoogleSatellite_1,lyr_MapabasePositronnolabels_2,lyr_ZMGextendida5kmcontorno_3,lyr_DivisinmunicipaldeJalisco_4,lyr_ZMGextendida5km_5,],
                                fold: 'close',
                                title: 'Extras'});

lyr_OpenStreetMap_0.setVisible(true);lyr_MapabaseGoogleSatellite_1.setVisible(true);lyr_MapabasePositronnolabels_2.setVisible(true);lyr_ZMGextendida5kmcontorno_3.setVisible(true);lyr_DivisinmunicipaldeJalisco_4.setVisible(true);lyr_ZMGextendida5km_5.setVisible(true);lyr_PresadeSantaLuciapolgono_6.setVisible(true);lyr_PresadeSantaLucia_7.setVisible(true);lyr_PresadeSantaLuciagrabaciones_8.setVisible(true);lyr_Bosquedeloscolomos_9.setVisible(true);
var layersList = [group_Extras,group_PresadeSantaLucia,group_Colomos];
lyr_ZMGextendida5kmcontorno_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_DivisinmunicipaldeJalisco_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_ZMGextendida5km_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_PresadeSantaLuciapolgono_6.set('fieldAliases', {'id': 'id', 'Extencion': 'Extencion', 'Perimetro': 'Perimetro', 'Altura': 'Altura', 'Area Ha': 'Area Ha', });
lyr_PresadeSantaLucia_7.set('fieldAliases', {'Extencion': 'Extencion', 'Perimetro': 'Perimetro', 'Altura': 'Altura', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_PresadeSantaLuciagrabaciones_8.set('fieldAliases', {'id': 'id', 'Puntos': 'Puntos', });
lyr_Bosquedeloscolomos_9.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Peri': 'Peri', 'Area': 'Area', });
lyr_ZMGextendida5kmcontorno_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_DivisinmunicipaldeJalisco_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_ZMGextendida5km_5.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_PresadeSantaLuciapolgono_6.set('fieldImages', {'id': 'TextEdit', 'Extencion': 'TextEdit', 'Perimetro': 'TextEdit', 'Altura': 'TextEdit', 'Area Ha': 'TextEdit', });
lyr_PresadeSantaLucia_7.set('fieldImages', {'Extencion': 'TextEdit', 'Perimetro': 'TextEdit', 'Altura': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'ExternalResource', });
lyr_PresadeSantaLuciagrabaciones_8.set('fieldImages', {'id': 'TextEdit', 'Puntos': 'ExternalResource', });
lyr_Bosquedeloscolomos_9.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Peri': 'TextEdit', 'Area': 'TextEdit', });
lyr_ZMGextendida5kmcontorno_3.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'NOM_ENT': 'hidden field', 'NOM_MUN': 'hidden field', 'Area': 'hidden field', 'PERIMETER': 'hidden field', 'COV_': 'hidden field', 'COV_ID': 'hidden field', });
lyr_DivisinmunicipaldeJalisco_4.set('fieldLabels', {'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'NOM_ENT': 'hidden field', 'NOM_MUN': 'inline label - visible with data', 'Area': 'hidden field', 'PERIMETER': 'hidden field', 'COV_': 'hidden field', 'COV_ID': 'hidden field', });
lyr_ZMGextendida5km_5.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'Area': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_PresadeSantaLuciapolgono_6.set('fieldLabels', {'id': 'header label - always visible', 'Extencion': 'header label - visible with data', 'Perimetro': 'header label - visible with data', 'Altura': 'header label - visible with data', 'Area Ha': 'header label - visible with data', });
lyr_PresadeSantaLucia_7.set('fieldLabels', {'Extencion': 'hidden field', 'Perimetro': 'hidden field', 'Altura': 'hidden field', 'Nombre': 'hidden field', 'Video': 'no label', });
lyr_PresadeSantaLuciagrabaciones_8.set('fieldLabels', {'id': 'hidden field', 'Puntos': 'no label', });
lyr_Bosquedeloscolomos_9.set('fieldLabels', {'id': 'header label - visible with data', 'Nombre': 'header label - visible with data', 'Peri': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Bosquedeloscolomos_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});