const unhide = require("unhide");
require("attributes");

Events.on(ContentInitEvent, () => {
    // Call after init so sector requirements are initialized
    unhide.unhide();
});
