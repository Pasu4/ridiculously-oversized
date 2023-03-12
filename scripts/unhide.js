const scrapWalls = [
    Blocks.scrapWall,
    Blocks.scrapWallLarge,
    Blocks.scrapWallHuge,
    Blocks.scrapWallGigantic
];

// Make scrap walls buildable
scrapWalls.forEach(function (value) {
    value.buildVisibility = BuildVisibility.shown;
});

// Add to tech tree
TechTree.all.find(boolf(t => t.content.name.equals(Blocks.copperWallLarge))).children.add(
    TechTree.node(Blocks.scrapWall, () => {
        TechTree.node(Blocks.scrapWallLarge, () => {
            TechTree.node(Blocks.scrapWallHuge, Seq.with(new Objectives.SectorComplete(Vars.content.sector("ancient-outpost"))), () => {
                TechTree.node(Blocks.scrapWallGigantic, () => { });
            });
        });
    })
);

// Make Shard core visible if Chip core is researched
if(Blocks.coreShard.unlocked)
    Blocks.coreShard.buildVisibility = BuildVisibility.shown;