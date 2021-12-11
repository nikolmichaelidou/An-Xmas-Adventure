import k from "./kaboom.js"

import Tile from "./tile.js";

class Level {

    constructor(levelFile) {

        /* explicitly declare level constants
        so we can use them for loading the level */
        const TILE_WIDTH = 24;
        const TILE_HEIGHT = 24;
        const TILES_ACROSS = 135;

        /* call loadlevel function and deposit
        the level data into a variable */

        const solidLayerData = levelFile.layers[0].data;

        /* row and column are used during the level load procedure
        to determine the exact placement of each tile */
        let row = -1;
        let column = -1;

        this.visibleTiles = new Set();

        /* cycle through the loaded level data and for each visible tile,
        add it to the the visibleTiles set for rendering */
        solidLayerData.forEach(tile => {
            column += 1;

            if (tile > 0) {
                this.visibleTiles.add(new Tile(column * TILE_WIDTH, row * TILE_HEIGHT))
            }

            if (column === TILES_ACROSS) {
                column = 0;
                row += 1;
            }
        });
    }

    get getVisibleTiles() {
        return this.visibleTiles;
    }
}

export default Level;