(function()
{
    browser.runtime.onInstalled.addListener(details =>
    {
        require(["scripts/meta/deployment"],
                deployment_module =>
                {
                    deployment_module.on_deploy(details);
                });
    });
    require(["scripts/background/bookmarks_manager",
             "scripts/background/browser_action",
             "scripts/background/commands",
             "scripts/background/page_action",
             "scripts/background/storage_events",
             "scripts/meta/deployment"]);
})();
