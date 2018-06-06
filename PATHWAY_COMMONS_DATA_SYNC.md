# Migrating to new releases of Pathway Commons

The file `src/server/graph-generation/generic-physical-entities/generic-physical-entity-map.json` needs to be updated every release.

## Steps to generic-physical-entity-map.json

1. download the updated raw physical entities json file from http://www.pathwaycommons.org/archives/PC2/v10/
2. filter all the physical entities that have a mapping value to true 
e.g. 
```sh
grep "true}" ./physical-entities-file > ./processed-file
```
3. run the script `src/scripts/generic-physical-entity-map.js` to process the file even further until it is about ~3mb
4. replace `src/server/graph-generation/generic-phyiscal-entities/generic-phyiscal-entity-map.json` with the new file generated by the script and commit it