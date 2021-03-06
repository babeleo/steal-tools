@function stealTools.pluginify pluginify
@parent steal-tools.JS 

A function provided by [stealTools.pluginifier] that can build out a specific module.

@signature `pluginify(moduleName, options)`

@param {moduleName} [moduleName=config.main] The module name to build.

@param {stealTools.pluginify.options} [options]

Options that configure how the files are compiled.  These options overwrite the 
`pluginifierOptions` argument passed to [stealTools.pluginifier].

@return {String} The result of `moduleName` being pluginified.

@body

## Use

After getting `pluginify` from [stealTools.pluginifier] you can call it like:

    var result = pluginify("module/name/to/build", {
      // specifies modules to ignore
      ignore: [
        // ignores this module and all of its dependencies
        "module/name/to/ignore",
        // ignores modules names matching this pattern
        /can\//
      ],
      
      // Remove code between !steal-remove-start and !steal-remove-end.
      // true by default.
      removeDevelopmentCode: true,
      
      // Transpile the code to either "amd","steal","cjs" or "global".
      // "global", the default, allows the file to work without any module loader.
      format: "global",
      
      // Minify the file using uglify.
      // `false` by default.
      minify: true,
      
      // Only write the module specified by `moduleName` instead of its dependencies.
      // `false` by default.
      ignoreAllDependencies: false
      
      // Map module names to their name on the global object. Useful for
      // building "global" modules that depend on other scripts already in the page.
      exports: {"jquery": "jQuery"},
      
      // Transpile to normalized dependency names.
      // `true` by default.
      useNormalizedDependencies: true
      
      // Custom normalization behavior
      // By default the normalized name is used.
      normalize: function(name, currentModule, address){
        return name;
      }
      
    });
    
Most of these options are optional.  For more 
information, read [stealTools.pluginify.options pluginifyOptions].
