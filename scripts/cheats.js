// Lock all tech from this mod
// Crashes the game for some reason
exports.lockAll = () => {
    Vars.content.getContentMap().forEach(map => {
        map.filter(c => c.minfo.mod != null && c.minfo.mod.name == "ridiculously-oversized" && c instanceof UnlockableContent)
        .forEach(c => {
            c.clearUnlock();
        });
    });
};