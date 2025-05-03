var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: false,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_highway1_4 = new ol.format.GeoJSON();
var features_highway1_4 = format_highway1_4.readFeatures(json_highway1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway1_4.addFeatures(features_highway1_4);
var lyr_highway1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway1_4, 
                style: style_highway1_4,
                popuplayertitle: 'highway1',
                interactive: false,
                title: '<img src="styles/legend/highway1_4.png" /> highway1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_building_3.setVisible(true);lyr_highway1_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_highway_2,lyr_building_3,lyr_highway1_4];
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'passenger_': 'passenger_', 'covered': 'covered', 'material': 'material', 'height': 'height', 'power': 'power', 'crossing_m': 'crossing_m', 'button_ope': 'button_ope', 'ford': 'ford', 'direction': 'direction', 'noexit': 'noexit', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'traffic_ca': 'traffic_ca', 'image': 'image', 'shelter': 'shelter', 'ref': 'ref', 'network': 'network', 'lit': 'lit', 'departures': 'departures', 'bin': 'bin', 'bench': 'bench', 'traffic_si': 'traffic_si', 'traffic__1': 'traffic__1', 'tactile_pa': 'tactile_pa', 'crossing': 'crossing', 'share_taxi': 'share_taxi', 'public_tra': 'public_tra', 'name': 'name', 'bus': 'bus', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'crossing_b': 'crossing_b', 'barrier': 'barrier', 'traffic__2': 'traffic__2', 'railway': 'railway', });
lyr_building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'descriptio': 'descriptio', 'roof_orien': 'roof_orien', 'roof_mater': 'roof_mater', 'roof_level': 'roof_level', 'roof_colou': 'roof_colou', 'building_m': 'building_m', 'building_c': 'building_c', 'man_made': 'man_made', 'addr_place': 'addr_place', 'religion': 'religion', 'denominati': 'denominati', 'power': 'power', 'building_1': 'building_1', 'military': 'military', 'bunker_typ': 'bunker_typ', 'sport': 'sport', 'opening_ho': 'opening_ho', 'name_ru': 'name_ru', 'internet_a': 'internet_a', 'height': 'height', 'leisure': 'leisure', 'abandoned': 'abandoned', 'office': 'office', 'shop': 'shop', 'healthcare': 'healthcare', 'website': 'website', 'name': 'name', 'amenity': 'amenity', 'start_date': 'start_date', 'roof_shape': 'roof_shape', 'energy_cla': 'energy_cla', 'building_l': 'building_l', 'building_2': 'building_2', 'building_f': 'building_f', 'type': 'type', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'address': 'address', });
lyr_highway1_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'old_name_d': 'old_name_d', 'tracktype': 'tracktype', 'flood_pron': 'flood_pron', 'width': 'width', 'trail_visi': 'trail_visi', 'sac_scale': 'sac_scale', 'mtb_scale_': 'mtb_scale_', 'mtb_scale': 'mtb_scale', 'incline': 'incline', 'horse': 'horse', 'maxweight_': 'maxweight_', 'footway': 'footway', 'motor_vehi': 'motor_vehi', 'embankment': 'embankment', 'covered': 'covered', 'source_max': 'source_max', 'old_ref': 'old_ref', 'lane_marki': 'lane_marki', 'name_de': 'name_de', 'type': 'type', 'route': 'route', 'junction': 'junction', 'turn_lanes': 'turn_lanes', 'turn_lan_1': 'turn_lan_1', 'living_str': 'living_str', 'access': 'access', 'man_made': 'man_made', 'maxspeed_t': 'maxspeed_t', 'lit': 'lit', 'ref': 'ref', 'foot': 'foot', 'abandoned_': 'abandoned_', 'layer': 'layer', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'bridge': 'bridge', 'noexit': 'noexit', 'name_pl': 'name_pl', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'bicycle': 'bicycle', 'oneway': 'oneway', 'maxspeed_p': 'maxspeed_p', 'addr_postc': 'addr_postc', 'surface': 'surface', 'sidewalk': 'sidewalk', 'name_etymo': 'name_etymo', 'postal_cod': 'postal_cod', 'name_ru': 'name_ru', 'name_be': 'name_be', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_highway_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'passenger_': 'TextEdit', 'covered': 'TextEdit', 'material': 'TextEdit', 'height': 'TextEdit', 'power': 'TextEdit', 'crossing_m': 'TextEdit', 'button_ope': 'TextEdit', 'ford': 'TextEdit', 'direction': 'TextEdit', 'noexit': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'traffic_ca': 'TextEdit', 'image': 'TextEdit', 'shelter': 'TextEdit', 'ref': 'TextEdit', 'network': 'TextEdit', 'lit': 'TextEdit', 'departures': 'TextEdit', 'bin': 'TextEdit', 'bench': 'TextEdit', 'traffic_si': 'TextEdit', 'traffic__1': 'TextEdit', 'tactile_pa': 'TextEdit', 'crossing': 'TextEdit', 'share_taxi': 'TextEdit', 'public_tra': 'TextEdit', 'name': 'TextEdit', 'bus': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'crossing_b': 'TextEdit', 'barrier': 'TextEdit', 'traffic__2': 'TextEdit', 'railway': 'TextEdit', });
lyr_building_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'descriptio': 'TextEdit', 'roof_orien': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_level': 'TextEdit', 'roof_colou': 'TextEdit', 'building_m': 'TextEdit', 'building_c': 'TextEdit', 'man_made': 'TextEdit', 'addr_place': 'TextEdit', 'religion': 'TextEdit', 'denominati': 'TextEdit', 'power': 'TextEdit', 'building_1': 'TextEdit', 'military': 'TextEdit', 'bunker_typ': 'TextEdit', 'sport': 'TextEdit', 'opening_ho': 'TextEdit', 'name_ru': 'TextEdit', 'internet_a': 'TextEdit', 'height': 'TextEdit', 'leisure': 'TextEdit', 'abandoned': 'TextEdit', 'office': 'TextEdit', 'shop': 'TextEdit', 'healthcare': 'TextEdit', 'website': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'start_date': 'TextEdit', 'roof_shape': 'TextEdit', 'energy_cla': 'TextEdit', 'building_l': 'TextEdit', 'building_2': 'TextEdit', 'building_f': 'TextEdit', 'type': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway1_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'old_name_d': 'TextEdit', 'tracktype': 'TextEdit', 'flood_pron': 'TextEdit', 'width': 'TextEdit', 'trail_visi': 'TextEdit', 'sac_scale': 'TextEdit', 'mtb_scale_': 'TextEdit', 'mtb_scale': 'TextEdit', 'incline': 'TextEdit', 'horse': 'TextEdit', 'maxweight_': 'TextEdit', 'footway': 'TextEdit', 'motor_vehi': 'TextEdit', 'embankment': 'TextEdit', 'covered': 'TextEdit', 'source_max': 'TextEdit', 'old_ref': 'TextEdit', 'lane_marki': 'TextEdit', 'name_de': 'TextEdit', 'type': 'TextEdit', 'route': 'TextEdit', 'junction': 'TextEdit', 'turn_lanes': 'TextEdit', 'turn_lan_1': 'TextEdit', 'living_str': 'TextEdit', 'access': 'TextEdit', 'man_made': 'TextEdit', 'maxspeed_t': 'TextEdit', 'lit': 'TextEdit', 'ref': 'TextEdit', 'foot': 'TextEdit', 'abandoned_': 'TextEdit', 'layer': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'bridge': 'TextEdit', 'noexit': 'TextEdit', 'name_pl': 'TextEdit', 'service': 'TextEdit', 'turn_lan_2': 'TextEdit', 'bicycle': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed_p': 'TextEdit', 'addr_postc': 'TextEdit', 'surface': 'TextEdit', 'sidewalk': 'TextEdit', 'name_etymo': 'TextEdit', 'postal_cod': 'TextEdit', 'name_ru': 'TextEdit', 'name_be': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'passenger_': 'no label', 'covered': 'no label', 'material': 'no label', 'height': 'no label', 'power': 'no label', 'crossing_m': 'no label', 'button_ope': 'no label', 'ford': 'no label', 'direction': 'no label', 'noexit': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'traffic_ca': 'no label', 'image': 'no label', 'shelter': 'no label', 'ref': 'no label', 'network': 'no label', 'lit': 'no label', 'departures': 'no label', 'bin': 'no label', 'bench': 'no label', 'traffic_si': 'no label', 'traffic__1': 'no label', 'tactile_pa': 'no label', 'crossing': 'no label', 'share_taxi': 'no label', 'public_tra': 'no label', 'name': 'no label', 'bus': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'crossing_b': 'no label', 'barrier': 'no label', 'traffic__2': 'no label', 'railway': 'no label', });
lyr_building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'descriptio': 'no label', 'roof_orien': 'no label', 'roof_mater': 'no label', 'roof_level': 'no label', 'roof_colou': 'no label', 'building_m': 'no label', 'building_c': 'no label', 'man_made': 'no label', 'addr_place': 'no label', 'religion': 'no label', 'denominati': 'no label', 'power': 'no label', 'building_1': 'no label', 'military': 'no label', 'bunker_typ': 'no label', 'sport': 'no label', 'opening_ho': 'no label', 'name_ru': 'no label', 'internet_a': 'no label', 'height': 'no label', 'leisure': 'no label', 'abandoned': 'no label', 'office': 'no label', 'shop': 'no label', 'healthcare': 'no label', 'website': 'no label', 'name': 'no label', 'amenity': 'no label', 'start_date': 'no label', 'roof_shape': 'no label', 'energy_cla': 'no label', 'building_l': 'no label', 'building_2': 'no label', 'building_f': 'no label', 'type': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'address': 'no label', });
lyr_highway1_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'old_name_d': 'no label', 'tracktype': 'no label', 'flood_pron': 'no label', 'width': 'no label', 'trail_visi': 'no label', 'sac_scale': 'no label', 'mtb_scale_': 'no label', 'mtb_scale': 'no label', 'incline': 'no label', 'horse': 'no label', 'maxweight_': 'no label', 'footway': 'no label', 'motor_vehi': 'no label', 'embankment': 'no label', 'covered': 'no label', 'source_max': 'no label', 'old_ref': 'no label', 'lane_marki': 'no label', 'name_de': 'no label', 'type': 'no label', 'route': 'no label', 'junction': 'no label', 'turn_lanes': 'no label', 'turn_lan_1': 'no label', 'living_str': 'no label', 'access': 'no label', 'man_made': 'no label', 'maxspeed_t': 'no label', 'lit': 'no label', 'ref': 'no label', 'foot': 'no label', 'abandoned_': 'no label', 'layer': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'bridge': 'no label', 'noexit': 'no label', 'name_pl': 'no label', 'service': 'no label', 'turn_lan_2': 'no label', 'bicycle': 'no label', 'oneway': 'no label', 'maxspeed_p': 'no label', 'addr_postc': 'no label', 'surface': 'no label', 'sidewalk': 'no label', 'name_etymo': 'no label', 'postal_cod': 'no label', 'name_ru': 'no label', 'name_be': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_highway1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});