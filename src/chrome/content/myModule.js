/* See license.txt for terms of usage */

define([
    "firebug/lib/object",
    "firebug/lib/trace"
],
function(Obj, FBTrace) {

// ********************************************************************************************* //
// Custom Module Implementation

Firebug.MyModule = Obj.extend(Firebug.Module,
{
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
    // Initialization

    initialize: function(owner)
    {
        Firebug.Module.initialize.apply(this, arguments);

        // TODO: Module initialization (there is one module instance per browser window)
        FBTrace.sysout("helloBootAMD; MyModule.initialize");

		// Seems like FBTrace is not working in r12846
        if (FBTrace.DBG_HELLOBOOTAMD)
            FBTrace.sysout("helloBootAMD; MyModule.initialize");
    },

	/**
     * Called when the UI is ready for context creation.
     * Used by chromebug; normally FrameProgressListener events trigger UI synchronization,
     * this event allows sync without progress events.
     */
    initializeUI: function(detachArgs)
    {
    },

    /**
     * Called by Firebug when Firefox window is closed.
     */
    
    shutdown: function()
    {
        Firebug.Module.shutdown.apply(this, arguments);

        if (FBTrace.DBG_HELLOBOOTAMD)
            FBTrace.sysout("helloBootAMD; MyModule.shutdown");
    },


	shutdown: function()
    {
    },

    /**
     * Called when a new context is created but before the page is loaded.
     */
    initContext: function(context, persistedState)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.initContext");
    },

    /**
     * Called when a context is destroyed. Module may store info on persistedState
     * for reloaded pages.
     */
    destroyContext: function(context, persistedState)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.destroyContext");
    },

    /**
     * Called when attaching to a window (top-level or frame).
     */
    watchWindow: function(context, win)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.watchWindow");
    },

    /**
     * Called when unwatching a window (top-level or frame).
     */
    unwatchWindow: function(context, win)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.unwatchWindow");
    },

    // Called when a FF tab is create or activated (user changes FF tab)
    // Called after context is created or with context == null (to abort?)
    showContext: function(browser, context)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.showContext");
    },

    /**
     * Called after a context's page gets DOMContentLoaded
     */
    loadedContext: function(context)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.loadedContext");
    },

    /*
     * After "onSelectingPanel", a panel has been selected but is not yet visible
     * @param browser a tab's browser element
     * @param panel selectet panel OR null
     */
    showPanel: function(browser, panel)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.showPanel");
    },

    showSidePanel: function(browser, sidePanel)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.showSidePanel");
    },

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

    updateOption: function(name, value)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.updateOption");
    },

    getObjectByURL: function(context, url)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.getObjectByURL");
    },

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
    // intermodule dependency

    // caller needs module. win maybe context.window or iframe in context.window.
    // true means module is ready now, else getting ready
    isReadyElsePreparing: function(context, win)
    {
	    FBTrace.sysout("helloBootAMD; MyModule.isReadyElsePreparing");
    },
});

// ********************************************************************************************* //
// Registration

Firebug.registerModule(Firebug.MyModule);

return Firebug.MyModule;

// ********************************************************************************************* //
});
