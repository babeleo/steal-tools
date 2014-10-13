var build = require("../index").build;

module.exports = function(grunt){

	grunt.registerMultiTask("stealBuild", "Build a steal project into bundles.", function(){
		var done = this.async();
		var options = this.options();

		var system = options.system;
		var buildOptions = options.buildOptions;

		// Run the build with the provided options
		build(system, buildOptions).then(function(bundles){

			var finish = function(){
				grunt.log.writeln("Build was successful.");
				done();
			}

			if (typeof options.after == 'function'){
				options.after(bundles, options, finish)
			} else {
				finish()
			}
		});
		
	});

};
