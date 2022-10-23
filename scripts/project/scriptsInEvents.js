


const scriptsInEvents = {

	async Game_Event46_Act7(runtime, localVars)
	{
		
	},

	async Game_Event46_Act8(runtime, localVars)
	{
		runOnStartup(async runtime =>
		{
			// Code to run on the loading screen.
			// Note layouts, objects etc. are not yet available.
			
			runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
		});
		
		var ONLYBRAINS_API = { // should be in global context
		    username: "dognwsovkdof",
		    game_session_id: "2",
		    report_result: function(score, hash) {
		        console.log("RESULT REPORTED: ", score, hash);
		        console.log(score);
		        console.log(hash);
		    },
		}
		
		function forceUnityGameEnd() {
		    //UnityInstance is the object passed to "createUnityInstance" result calback argument 
		    //UnityInstance.SendMessage("OnlyBrainsAPI", "ForceFinishHandler")
		}
		async function OnBeforeProjectStart(runtime)
		{
			// Code to run just before 'On start of layout' on
			// the first layout. Loading has finished and initial
			// instances are created and available to use here.
			
			runtime.addEventListener("tick", () => Tick(runtime));
		}
		
		function Tick(runtime)
		{
			// Code to run every tick
		}
		report_result(runtime.globalvars.score,"zkp3lptsfa6ep9325t9sh5f2c9126xu4");
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

