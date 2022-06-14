import * as turf from "@turf/turf";
function getPoint2() {
  const point = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "MultiPoint",
          coordinates: [
            [7.199237840421802, 53.024404855583185],
            [6.7511501198798385, 51.86370852112981],
            [6.3030623993378185, 50.53006768363153],
            [6.639128189745293, 49.26740269228506],
            [8.26344617670955, 48.826866117150615],
            [7.647325560963793, 47.78373978271165],
            [6.415084329473672, 46.488363163996496],
            [7.703336526031734, 45.789786557281644],
            [11.960169871180028, 46.87263302668117],
            [13.64049882321217, 46.217747630645164],
            [12.576290486925757, 44.72529572232739],
            [13.920553648550396, 42.906809567457515],
            [14.704707159499918, 42.08083482657338],
            [16.22998177060836, 41.52839217371306],
            [18.52643133838498, 39.915429514604654],
            [17.294190106894774, 38.87664666222199],
          ],
        },
      },
    ],
  };
  return point;
}

const steps = 50;
function calcPoints(p1, index, oriArray) {
  let feature = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [oriArray[index], p1],
    },
  };
  const lineDistance = turf.length(feature);
  const arc = [];
  if (lineDistance === 0) {
    for (let i = 0; i < steps; i++) {
      arc.push(oriArray[index]);
    }
    return arc;
  }
  for (let i = 0; i < lineDistance; i += lineDistance / steps) {
    const segment = turf.along(feature, i);
    arc.push(segment.geometry.coordinates);
  }
  return arc;
}
function generateDisArrary() {
  const point = getPoint2();
  let disArray = {
    "1949-1952": [
      [7.199237840421802, 53.024404855583185],
      [6.7511501198798385, 51.86370852112981],
      [6.3030623993378185, 50.53006768363153],
      [6.639128189745293, 49.26740269228506],
      [8.26344617670955, 48.826866117150615],
      [7.647325560963793, 47.78373978271165],
      [6.415084329473672, 46.488363163996496],
      [7.703336526031734, 45.789786557281644],
      [11.960169871180028, 46.87263302668117],
      [13.64049882321217, 46.217747630645164],
      [12.576290486925757, 44.72529572232739],
      [13.920553648550396, 42.906809567457515],
      [14.704707159499918, 42.08083482657338],
      [24.149706731453563, 41.36271424640222],
      [28.406540076604813, 41.320662128091215],
      [33.66690344423924, 41.83189223779567],
    ],
    "1952-1955": [
      [14.34778784460022, 53.55415311518232],
      [14.459809774736016, 52.66317538696143],
      [14.403798809666938, 50.807751568856986],
      [12.471420514829134, 49.932516911053426],
      [13.759672711387196, 48.764959077330076],
      [12.336016858226202, 47.57914749996604],
      [6.415084329473672, 46.488363163996496],
      [7.703336526031734, 45.789786557281644],
      [11.960169871180028, 46.87263302668117],
      [13.64049882321217, 46.217747630645164],
      [12.576290486925757, 44.72529572232739],
      [13.920553648550396, 42.906809567457515],
      [14.704707159499918, 42.08083482657338],
      [24.149706731453563, 41.36271424640222],
      [28.406540076604813, 41.320662128091215],
      [33.66690344423924, 41.83189223779567],
    ],
    "1955-1999": [
      [19.548861810173776, 54.32094234288559],
      [23.357607434780107, 54.124466572904566],
      [23.973728050525807, 52.55286105742459],
      [23.693673225186217, 51.48437440865436],
      [23.80569515532207, 50.06777103754888],
      [22.909519714238087, 48.829775503777796],
      [6.415084329473672, 46.488363163996496],
      [7.703336526031734, 45.789786557281644],
      [22.965530679304777, 47.89948667482267],
      [21.509245587544285, 46.18203883285835],
      [12.576290486925757, 44.72529572232739],
      [13.920553648550396, 42.906809567457515],
      [14.704707159499918, 42.08083482657338],
      [24.149706731453563, 41.36271424640222],
      [28.406540076604813, 41.320662128091215],
      [33.66690344423924, 41.83189223779567],
    ],
    "1999-2004": [
      [28.16903655601314, 59.24032387916577],
      [27.884474423341317, 56.72716691239415],
      [25.560550339852284, 54.06186531847959],
      [24.090312654380398, 52.99059580270432],
      [23.710896477484255, 51.509966096682376],
      [22.85721007946765, 49.365763567148605],
      [23.046918167916232, 47.924441949044024],
      [25.987393538860005, 47.79716041667501],
      [28.406171666573357, 46.4744816928777],
      [28.833014865580537, 45.15231259827442],
      [28.927868909805653, 44.17410470232926],
      [27.884474423341516, 42.483791950738606],
      [27.927868909805653, 41.140610921065814],
      [31.86834428074934, 41.24767485713929],
      [34.95110071803066, 41.81572244421224],
      [37.98643013319983, 40.89011443553673],
    ],
  };
  let result = {};
  Object.keys(disArray).forEach((key, index2, array) => {
    let calArray =
      index2 === 0
        ? point.features[0].geometry.coordinates
        : disArray[array[index2 - 1]];
    result[key] = disArray[key].map((item, index) => {
      return calcPoints(item, index, calArray);
    });
  });
  return [result, disArray];
}

// function animate(coord) {
//   const start = coord[counter >= steps ? counter - 1 : counter];
//   const end = coord[counter >= steps ? counter : counter + 1];

//   if (!start || !end) return;

//   point.features[0].geometry.coordinates = [end, end2];

//   // Update the source with this new data
//   map.getSource("point").setData(point);

//   if (counter < steps) {
//     requestAnimationFrame(animate);
//   }

//   counter = counter + 1;
// }

export { getPoint2, generateDisArrary };
