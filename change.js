// Define the AOI
var aoi = ee.Geometry.Rectangle([-122.55, 37.6, -122.35, 37.8]);

// Load the two Landsat 8 images
var image1 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_044034_20140318');
var image2 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_044034_20140419');

// Subtract the two images to perform change detection
var diff = image2.subtract(image1);

// Add the change detection layer to the map
Map.addLayer(diff, {bands: ['B4', 'B3', 'B2'], min: -1000, max: 1000}, 'Change detection');