const table = require('./pathwayTable').table;
const _ = require('lodash');


// input: ["GO1", "REACTOME1","GO3"]
// requires: pathwayIds must be valid (returned from gprofiler)
// output: a list of objects
// [{pathwayId: "pathway1", description: "des1", genes: [gene1, gene2, gene3]},
// {pathwayId: "pathway2", description: "des2", genes: [gene4, gene2]},
// {pathwayId: "pathway3", description: "des3", genes: [gene1]},
// {pathwayId: "pathway4", description: "des4", genes: [gene8, gene1]}]
const fetch = (pathwayList) => {
  let ret = [];
  _.forEach(pathwayList, pathwayId => {
    if (!table.has(pathwayId)) {
      throw 'invalid pathway ID';
    }
    ret.push({'pathwayId': pathwayId, 'description': table.get(pathwayId)['description'], 'genes': table.get(pathwayId)['geneset']});
  });
  return ret;
};


module.exports = {fetch};