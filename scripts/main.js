const unhide = require("unhide");
require("attributes");

// Calls after mod init
Events.on(ContentInitEvent, () => {
    // Call after init so sector requirements are initialized
    unhide.unhide();
});
