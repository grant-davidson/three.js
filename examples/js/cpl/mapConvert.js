export const mapConvert = (map) => {
  const {nodeContent, connectionContent,levels, ...converted} = map;
 converted.levels = levels.map( level => ({levelId: parseInt(level.levelId.$numberInt,10)}))
  converted.nodes = JSON.parse(nodeContent);
  converted.connections = JSON.parse(connectionContent);
  console.log("map",converted,map)
  return converted;
}