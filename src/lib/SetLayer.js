let layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

function getLayerPaintType(layer, map) {
  let layerType = map.getLayer(layer).type;

  return layerTypes[layerType];
}

export function setLayerOpacity(layer, map) {
  let paintProps = getLayerPaintType(layer.layer, map);
  console.log(paintProps);
  paintProps.forEach(function (prop) {
    let options = {};
    if (layer.duration) {
      let transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}
