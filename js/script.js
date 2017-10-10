$(document).ready(()=>{
	const cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">',
		'<img src="images/monsters-05.png">',
		'<img src="images/monsters-06.png">',
		'<img src="images/monsters-07.png">',
		'<img src="images/monsters-08.png">',
		'<img src="images/monsters-09.png">',
		'<img src="images/monsters-10.png">',
		'<img src="images/monsters-11.png">',
		'<img src="images/monsters-12.png">',		
		'<img src="images/monsters-13.png">',		
		'<img src="images/monsters-14.png">',		
		'<img src="images/monsters-15.png">',		
		'<img src="images/monsters-16.png">'	
	]
	var gridSize = 4;


	$("button").click(function(){
		// console.log("user clicked a button");
		var userAnser = $(this).html();
		if(userAnser == "Easy"){
			gridSize =4;
		}else if(userAnser == "Medium"){
			gridSize = 10;
		}else if (userAnser =="Hard"){
			gridSize == 32;
		}

		for(let i = 0; i<gridSize; i++){
			
		}
	})
});