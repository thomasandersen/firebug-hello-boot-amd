/* See license.txt for terms of usage */

define([
    "firebug/lib/trace",
    "firebug/trace/traceModule",
    "firebug/trace/traceListener",
    "hellobootamd/myPanel",
    "hellobootamd/myModule",
],
function(FBTrace, TraceModule, TraceListener) {

// ********************************************************************************************* //
// Documentation
//
// Firebug coding style: http://getfirebug.com/wiki/index.php/Coding_Style
// Firebug tracing: http://getfirebug.com/wiki/index.php/FBTrace

// ********************************************************************************************* //
// The application/extension object

var theApp =
{
    initialize: function()
    {
        // Register trace customization listener for FBTrace. DBG_HELLOBOOTAMD represents a CSS rule
        // that is automatially associated with all logs prefixed with "helloBootAMD;".
        // The prefix is removed (third parameter is true).
        // The last parameter represents URL of the stylesheet that should be used by
        // the tracing console.
        this.traceListener = new TraceListener("helloBootAMD;", "DBG_HELLOBOOTAMD", true,
            "chrome:/hellobootamd/skin/hellobootamd.css");
        TraceModule.addListener(this.traceListener);

        if (FBTrace.DBG_HELLOBOOTAMD)
            FBTrace.sysout("helloBootAMD; HelloBootAMD extension initialize");

        // TODO: Extension initialization
    },

    shutdown: function()
    {
        if (FBTrace.DBG_HELLOBOOTAMD)
            FBTrace.sysout("helloBootAMD; HelloBootAMD extension shutdown");

        // Unregister all registered Firebug components
        Firebug.unregisterPanel(Firebug.MyPanel);
        Firebug.unregisterModule(Firebug.MyModule);
        Firebug.unregisterStylesheet("chrome://hellobootamd/skin/hellobootamd.css");
        Firebug.unregisterStringBundle("chrome://hellobootamd/locale/hellobootamd.properties");

        // TODO: Extension shutdown

        TraceModule.removeListener(this.traceListener);
    }
}

return theApp;

// ********************************************************************************************* //
});
