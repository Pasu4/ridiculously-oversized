const scrapWalls = [
    Blocks.scrapWall,
    Blocks.scrapWallLarge,
    Blocks.scrapWallHuge,
    Blocks.scrapWallGigantic
];

// Make scrap walls buildable
exports.addScrapWalls = () => {
    scrapWalls.forEach(function (value) {
        value.buildVisibility = BuildVisibility.shown;
    });

    // Add to tech tree
    TechTree.all.find(boolf(t => t.content.name.equals(Blocks.copperWallLarge))).children.add(
        TechTree.node(Blocks.scrapWall, () => {
            TechTree.node(Blocks.scrapWallLarge, () => {
                TechTree.node(Blocks.scrapWallHuge, () => {
                    TechTree.node(Blocks.scrapWallGigantic, () => { });
                });
            });
        })
    );
}

