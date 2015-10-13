//Declaring variables

//"Been to"  room variabls
//bToCorridor = true - means player has been to Corridor

//Variables
var eyesOpen = false;
var standing = false;
var death = false;
var cutFinger = false;
var free = false;
var pendulum = 0;
var seeKnife = false;
var ropeAttached = false;


//INVENTORY
var inventory = []
var listItems = function(item){
	$(item).insertBefore("#placeholder").fadeIn(1000);
}
var knife = false;
var piecesOfRope = false;
var leatherStraps = false;
var longRope = false;
var paper = false;
var bloodiedPaper = false;


//FADE IN TEXT
function fadeInMessage(message, time){
	$(message).insertBefore("#placeholder").hide().fadeIn(time);
}

//CURRENT ROOM 
var currentRoom = "The Pit";

//////////MESSAGES/////////////////

function createPTag(stringMessage) {
    return '<p><br><br>' + stringMessage + '</p>';
}
var messages = {
    lookAroundPitNoKnifeNotStanding: createPTag(
        "You cannot see a ceiling but there are no stars in the sky. " +
        "Judging from the slight echoing of water dripping in the distance you must be inside" +
        "It sounds much like a cave. That or a pit." +
        "You catch a faint glint of something by your side. Could it be a knife?"
    ),
    lookAroundPitWithKnifeNotStanding: createPTag(
        "You cannot see a ceiling but there are no stars in the sky." +
        "Judging from the slight echoing of water dripping in the distance you must be inside" +
        "It sounds much like a cave. That or a pit." 
    ),
    lookAroundPitStanding: createPTag(
    	"You need to get off this platform quickly. If only there was a way to lower yourself down."

    ),
    awaken: createPTag(
        "You awaken but you dare not open your eyes. You lay on your back " +
        "bound about the chest. <br><br> " +
        "You feel a rhythmic disturbance of air pulsing over you, followed by brief moments of stillness. "
    ),
    openEyes: createPTag(
        "Your eyes open into darkness. Ater a moment they adjust and your " +
        "surroundings come into focus. <br><br> You are bound to a board by leather straps and " +
        "rope that is threaded through strong metal rings on either side." +
        "<br><br>A massive pendulum swings above you to and fro, directly above your chest some thirty feet. <br><br> Is it getting closer? "
    ),
    eyesClosed: createPTag(
        "You hear the sounds of dripping water echoing in the distance.<br><br>" +
        "Your eyes remain tightly shut."
    ),
    feelAroundPitNoKnife: createPTag(
    	"Leather straps and ropes bind you to a what feels like a wooden board on the ground. " +
        "The ground is rocky. It feels cold and damp beneath your hands. <br> As you feel the " +
        "ground around you, you cut your finger on something sharp. A knife??<br><br>" +
        "<br><br>Your hands clasp around the metal rings through which the rope is threaded. Solid."
    ),
    feelAroundPitWithKnife: createPTag(
        "The ground is rocky. It feels cold and damp beneath your hands " +
        "Leather straps and ropes bind you to a what feels like a wooden board on the ground. " + 
        "<br>Your hands clasp around the metal rings through which the rope is threaded. Solid.<br><br>" +
        "Is this rock sharp enough to cut the straps?"
    ),
    cutFreeNotCut: createPTag(
        "You use the sharp edge to cut through the leather straps and the knots in the rope. You are free. <br><br>" +
        "As you stand you notice you are on a raised platform with barely any room to move. The pendulum approaches ever closer. <br><br> " +
        "As you peer over the edge you cannot tell how far down the drop is. You need to get down off this platform quickly. Its the only away to avoid the blade. If only there was a way to lower yourself down.."
    ),
    cutFreeCut: createPTag(
        "You use the sharp edge to cut through the leather straps and the knots in the rope. You are free. <br><br>" +
        "As you stand you notice you are on a raised platform with barely any room to move. The pendulum approaches ever closer. <br><br> " +
        "The room is silent save for the WOOSH WOOSH of the oncoming pendulum blade. As you peer over the edge a drop of blood from your cut fingertip falls and you hear it spash delicately into the water below. The drop cant be more than 15 feet. You need to get down off this platform quickly. Its the only away to avoid the oncomming blade. <br><br>If only there was a way to lower yourself down."
    ),
    useRopeNotTied: createPTag(
    	"There are several pieces of rope each about 6 feet long. If only they were longer.."
    ),
    useRopeTied: createPTag(
    	"The rope is now long enough to get you down but what will you attach it to?"
    ),
    useRopeRings: createPTag(
    	"You attach one end of the rope to the metal rings bolted to the ground and safely lower yourself down off the platform and out of reach of the pendulum. You are safe for now.<br><br>" +
    	"As your feet hit the ground you notice you are in water a few inches deep. There is a door with barred windows in front of you. That must be the way out of this chamber."
    ),

    noKnife: createPTag(
        "You have nothing to cut it with."
    ),
    whatKnife: createPTag(
        "What knife?"
    ),
    getKnife: createPTag(
    	"You pick it up to discover it's not a knife but it's sharp all the same. A piece of rock that must have broken off of one of the walls."
    ),
    getRope: createPTag(
    	"You pick up the rope. There are several strands each about 6 feet long."
    ),
    getStraps: createPTag(
    	"Kinky..."
    ),
    tieRope: createPTag(
    	"You tie the ends of the rope together to create one long rope. Clever. If only there were something to attach it to."
    ),
    pendulumOne: createPTag(
    	"The pendulum approaches ever closer. It looks sharp."
    ),
    standUp: createPTag(
    	"You stand up. You realize there is not much space on your platform. You estimate that it is just over 6 feet by 4 feet. You know not what lies over the edge. <br><br>The pendulum is that much closer.."
    ),
    board: createPTag(
    	"You can't the board is bolted to the ground. The metal rings are very strong."
    ),
    pullRings: createPTag(
    	"They do not budge. The rings are strongly fastened to the ground. It would take the strength of several men to dislodge them."
    ),
    whoAmI: createPTag(
    	"You don't remember?"
    ),
    whereAmI: createPTag(
    	"You are in " + currentRoom
    ),
    whoAmI: createPTag(
    	"You dont remember?"
    ),
    whoAreYou: createPTag(
    	"Don't mind me, I'm just the narrator."
    ),
    whatAmI: createPTag(
    	"You are a prisoner."
    ),
    checkPockets: createPTag(
    	"Your pockets are empty save for a small crumpled paper. <br><br>" +
    	"It is too dim to read but you are able to make out a large black spot on the page"
    ),
    checkPocketsCut: createPTag(
    	"Your pockets are empty save for a small crumpled paper. <br><br>" +
    	"It is too dim to read but you are able to make out a large black spot.<br><br>" +
    	"Blood from your cut finger smears the page."
    ),
    checkPocketsNotPit: createPTag(
    	'Your pockets are empty. Try typing "inventory" to see what items you have. <br><br>' +
    	'These items somehow do not need to be stored in your pockets. Magic!' +
    	'Maybe you have an invisible backpack.. Yes thats it, you have an invisible backpack..'
    ),
    checkPocketsNotfree: createPTag(
    	"The bindings prevent you from checking your pockets. If only you could get free."
    ),

};

	
// $("#message_startgame").fadeIn(1500);
// $("#area_northwing").fadeIn(2500)

	$(document).ready(function(){

		$("#bg").fadeIn(3000);
		$("#area").fadeIn(4000);
		//$("#welcome").fadeIn(3000);
		$("#console").fadeIn(1000);
		$(messages.awaken).insertBefore("#placeholder").hide().fadeIn(6000);
		
		
		

		$("form").submit(function() {     //when the form is submitted
			var input = $("#command_line").val().toLowerCase(); //takes value of text field assigns it to input variable

			

			if(eyesOpen){

				//HELP
					if (input == "help"){
						fadeInMessage("#message_help", 1000);
					}

					//LOOK AROUND (different look around cases go here, checking for currentRoom)
					
					//LOOK AROUND-NO KNIFE-NOT STANDING
					else if ((input == "look around" || input === "search" || input === "explore" || input =="explore cave" || input == "explore pit" || input == "look around cave" || input ==="look around ") && knife == false && currentRoom == "The Pit" && standing == false) {
						fadeInMessage(messages.lookAroundPitNoKnifeNotStanding, 1000);						
						seeKnife = true;
					}

					///Who Where What
					else if (input == "who am i") {
						fadeInMessage(messages.whoAmI, 1000);
					}

					else if (input == "what am i"){
						fadeInMessage(messages.whatAmI, 1000);
					}

					else if (input == "where am i"){
						fadeInMessage(messages.whereAmI, 1000);
					}

					else if (input == "who are you"){
						fadeInMessage(messages.whoAreYou, 1000);
					}

					// check pockets cut finger
					else if ((input == "check pockets" || input == "look in pockets" || input == "whats in my pockets" || input == "check pocket")  && cutFinger == true && free == true && currentRoom == "The Pit"){
						fadeInMessage(messages.checkPocketsCut, 1000);
						inventory.push("<p>• bloodied paper</p>");
						bloodiedPaper = true;
					}
					// check pockets not in pit
					else if ((input == "check pockets" || input == "look in pockets" || input == "whats in my pockets" || input == "check pocket") && free == true && currentRoom != "The Pit"){
						fadeInMessage(messages.checkPocketsNotPit, 1000);
					}
					//check pockets free
					else if ((input == "check pockets" || input == "look in pockets" || input == "whats in my pockets" || input == "check pocket")  && cutFinger == false && free == true && currentRoom == "The Pit"){
						fadeInMessage(messages.checkPockets, 1000);
						inventory.push("<p>• crumpled paper</p>");
						note = true;
					}

					//check pockets not free
					else if ((input == "check pockets" || input == "look in pockets" || input == "whats in my pockets" || input == "check pocket") && free == false && currentRoom == "The Pit"){
						fadeInMessage(messages.checkPocketsNotfree, 1000);
					}

					//LOOK AROUND-WITH KNIFE-NOT STANDING
					else if ((input == "look around" || input === "search" || input === "explore" || input =="explore cave" || input == "explore pit" || input == "look around cave") && knife == true && currentRoom == "The Pit" && standing == false) {
						fadeInMessage(messages.lookAroundPitWithKnifeNotStanding, 1000);						
						
					}

					else if ((input == "look around" || input == "search" || input == "look over the edge" || input == "peer over the edge" || input == "look over edge" || input == "peer over edge" || input =="explore cave" || input == "explore pit" || input == "look around cave") && currentRoom == "The Pit" && standing == true) {
						fadeInMessage(messages.lookAroundPitStanding, 1000);
					}

					//FEEL AROUND
					 else if(input == "feel around" && currentRoom == "The Pit" && free == false && knife == false){
						fadeInMessage(messages.feelAroundPitNoKnife, 1000);
						cutFinger = true;
						seeKnife = true;
					}

					else if(input == "feel around" && currentRoom == "The Pit" && free == false && knife == true){
						fadeInMessage(messages.feelAroundPitWithKnife, 1000);
						cutFinger = true;
						seeKnife = true;
					}

					else if(input == "feel around" && currentRoom == "The Pit" && free == false && knife == false){
						fadeInMessage(messages.feelAround, 1000);
						cutFinger = true;
						seeKnife = true;
					}

					else if((input == "pull rings" || input === "pull on rings" || input == "grab rings" || input == "get rings") && currentRoom == "The Pit"){
						fadeInMessage(messages.pullRings, 1000);
						
					}

			//////////INVENTORY////////////

					else if(input === "inventory" || input === "items" || input === "what do i have") {						
						fadeInMessage("<p>You have:</p>", 1000);
						inventory.forEach(listItems);

					}

					//TAKE KNIFE 
					else if ((input == "take knife" || input == "pick up knife" || input == "grab knife" || input == "get knife") && seeKnife == false) {
						fadeInMessage(messages.whatKnife, 1000);
						
					} else if ((input == "take knife" || input == "pick up knife" || input == "grab knife" || input == "get knife") && seeKnife == true) {
						fadeInMessage(messages.getKnife, 1000);
						knife = true;
						inventory.push("<p>• knife</p>");
						pendulum -= 2;
					}

			/////////ACTIONS/////////

				/////ROPE///////
					//CUT ROPE, GET ROPE, LEATHER STRAPS
					else if((input === "cut rope" || input ===  "cut straps" || input ===  "cut bindings") && cutFinger == false && knife == true) {
						fadeInMessage(messages.cutFreeNotCut, 1000);
						free = true;
						standing = true;
						
					}	

					else if((input === "cut rope" || input ===  "cut straps" || input ===  "cut bindings") && cutFinger == true && knife == true) {
						fadeInMessage(messages.cutFreeCut, 1000);
						free = true;
						standing = true;
						
					}	

					//CUT ROPE NO KNIFE
					else if((input === "cut rope" || input === "cut straps" || input === "cut bindings") && knife == false) {
						fadeInMessage(messages.noKnife, 1000);
					}

					//GET ROPE
					else if ((input ==="get rope" || input === "take rope" || input === "grab rope" || input === "pick up rope" || input === "collect rope" || input === "grab the rope") && free === true){
						fadeInMessage(messages.getRope, 1000);
						inventory.push("<p>• several pieces of rope</p>");
						piecesOfRope = true;
						
					}

					//GET STRAPS
					else if ((input === "get straps" || input === "pick up straps" || input === "get leather straps" || input === "pick up leather straps" || input === "grab straps" || input === "grab leather straps") && currentRoom == "The Pit" && free === true) {
						fadeInMessage(messages.getStraps, 1000);
						inventory.push("<p>leather straps</p>");
						leatherStraps = true;
						
					} 

					//TIE ROPE
					else if ((input === "tie rope" || input === "connect rope" || input === "tie rope together") && piecesOfRope === true) {
						fadeInMessage(messages.tieRope, 1000);
						removePiecesOfRope = inventory.indexOf("<p>• several pieces of rope</p>");
						inventory.splice(removePiecesOfRope, removePiecesOfRope+1);
						inventory.push("<p>• long rope</p>");
						longRope = true;
						
					}

					else if((input === "use rope" || input ==="lower myself down with rope" || "use the rope" || "lower myself down with the rope") && currentRoom == "The Pit" && piecesOfRope == true && longRope == false) {
						fadeInMessage(messages.useRopeNotTied, 1000);
					}

					else if((input === " use rope" || input === "lower myself down with rope" || input === "lower myself down with the rope") && currentRoom == "The Pit" && longRope == true) {
						fadeInMessage(messages.useRopeTied, 1000);
					}

					else if ((input === "tie rope to rings" || input === "connect rope to rings" || input === "use rope on rings" || input === "tie rope to the rings" || input === "connect rope to the rings" || input === "attach to rings" || input === "attach rope to rings" || input === "attach rope to the rings" || input === "attach rope to the metal rings" || input === "use rope on metal rings" || input === "tie rope to the metal rings" || input === "tie the rope to the rings" || input === "tie the rope to the metal rings" || input === "connect rope to the metal rings" || input === "attach rope to the metal rings" || input === "use rope on the metal rings") && currentRoom == "The Pit" && longRope == true){
						fadeInMessage(messages.useRopeRings, 1000);
						removeLongRope = inventory.indexOf("<p>• long rope</p>");
						inventory.splice(removeLongRope, removeLongRope+1);
						currentRoom ="Lower Pit"
						document.querySelector("#area").innerHTML = "Lower Pit";

					} 

					//GRAB BOARD
					else if((input === "grab board" || input ==="get board" || input === "pick up board") && free == true){
						fadeInMessage(messages.board, 1000);
					}
					
					// CHECK POCKETS

					


					//DONT UNDERSTAND INPUT
				else {
					$("<p>I do not understand what you mean by " + input + "</p>").insertBefore("#placeholder").hide().fadeIn(500);
				}
			 
			//OPEN EYES
			} else if (input == "open eyes" || input == "open my eyes"){
				fadeInMessage(messages.openEyes);
				eyesOpen = true;

			//HELP EYES CLOSED
			} else if(input =="help"){
				fadeInMessage("#message_help")
			}	

			///Who Where What Eyes closed
					else if (input == "who am i") {
						fadeInMessage(messages.whoAmI, 1000);
					}

					else if (input == "what am i"){
						fadeInMessage(messages.whatAmI, 1000);
					}

					else if (input == "where am i"){
						fadeInMessage(messages.whereAmI, 1000);
					}

					else if (input == "who are you"){
						fadeInMessage(messages.whoAreYou, 1000);
					}

					//check pockets eyes closed
					else if ((input == "check pockets" || input == "look in pockets" || input == "whats in my pockets" || input == "check pocket") && free == false && currentRoom == "The Pit"){
						fadeInMessage(messages.checkPocketsNotfree, 1000);
					}
					
			//FEEL AROUND EYES CLOSED
			 else if(input =="feel around" && knife == false){				
				fadeInMessage(messages.feelAroundPitNoKnife);
				cutFinger = true;
				seeKnife = true;				
			} 


			else {
				fadeInMessage(messages.eyesClosed);				
			}

			//INCREMENT PENDULUM
			pendulum++;

			//SCROLLS TO BOTTOM AND CLEARS TEXT INPUT
			$("#console").scrollTop($("#console")[0].scrollHeight);
			$("#command_line").val('');

			//DEATH BY PENDULUM too many inccorect inputs
			if(pendulum > 10 && currentRoom == "The Pit") {
				death = true;

			//DECLARE DEATH FUNCTION
			function deathFunction(){
				$("h2").hide()
				$("h1").text("Death")
				$("h1").fadeIn(1500)
				document.getElementById("#death").innerHTML="body {background-color: red;}"
						}
		//While loop checking for deathFunction				
		var counter = 0
		while(death = true && counter < 1){
				deathFunction();
				counter++;
				}
			}

			if(pendulum === 4 && pendulumOff == false && eyesOpen === true){
				document.querySelector("#area").innerHTML = "The Pendulum";
				fadeInMessage(messages.pendulumOne, 2500)
				
			}



		});
	});



//set up a counter. give p tags an id that increments and 


		




