red = 1;
yellow = 2;
outside = 3;
read = 0;
disc = red;
var win;
var lost;
var tie ;
var difficulty;
var won=false;
var lose=false;
if (localStorage.win)
	win = localStorage.win;
else
	win = 0;
if (localStorage.lost)
	lost = localStorage.lost;
else
	lost = 0;
if (localStorage.tie)
	tie = localStorage.tie;
else
	tie = 0;
if (localStorage.difficulty)
	difficulty = localStorage.difficulty;
else
	difficulty = "easy";


//create 2d array for storing the pucks
    field =  new Array(0,0,0,0,0,0,0);
	field[0] = new Array(0,0,0,0,0,0);
	field[1] = new Array(0,0,0,0,0,0);
	field[2] = new Array(0,0,0,0,0,0);
	field[3] = new Array(0,0,0,0,0,0);
	field[4] = new Array(0,0,0,0,0,0);
	field[5] = new Array(0,0,0,0,0,0);
	field[6] = new Array(0,0,0,0,0,0);

    //set the height of the board for the pucks
height =  new Array(5,5,5,5,5,5,5); 
 
height1 =  new Array(5,5,5,5,5,5,5);
function newGame(){
	
	won=false;
	lose=false;
	 
	for ( i=0;i<7;i++){
		height[i] =5;
		height1[i] =5;
		for ( j=0;j<7;j++)
			field[i][j]=0;
	}
	
	for ( i=0;i<7;i++){
	
        height1[i] = height1[i] - 1;
	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height1[i]*52+62)+'px; left:'+(i*34+17)+'px;"><img src="empty.png" width=29 height =42> </div>';
	height1[i] = height1[i] - 1;
	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height1[i]*52+62)+'px; left:'+(i*34+17)+'px;"><img src="empty.png" width=29 height =42> </div>';
	height1[i] = height1[i] - 1;
	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height1[i]*52+62)+'px; left:'+(i*34+17)+'px;"><img src="empty.png" width=29 height =42> </div>';
	height1[i] = height1[i] - 1;
	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height1[i]*52+62)+'px; left:'+(i*34+17)+'px;"><img src="empty.png" width=29 height =42> </div>';
	height1[i] = height1[i] - 1;
	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height1[i]*52+62)+'px; left:'+(i*34+17)+'px;"><img src="empty.png" width=29 height =42> </div>';
	height1[i] = height1[i] - 1;
	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height1[i]*52+62)+'px; left:'+(i*34+17)+'px;"><img src="empty.png" width=29 height =42> </div>';
			
	}
	
document.getElementById("txtPlayer1").value=win;	
document.getElementById("txtPlayer2").value=lost;	
document.getElementById("tie").value=tie;	
}


function get(column, row){
	if ((column < 0) || (column > 6) || (row < 0) || (row > 5)) {
		return outside;
	}
	else {
		return (field[column][row]);
	}
}       

function put(column,color){
		if (color == red) 
			document.getElementById("board").innerHTML = document.getElementById("board").innerHTML +
			'<div style="position:absolute; top:'+(height[column]*52+62)+'px; left:'+(column*34+17)+'px;"><img src="red.png" width=29 height =42> </div>';
			
		if (color == yellow) 
			if (localStorage.theme=="theme2")
				document.getElementById("board").innerHTML = document.getElementById("board").innerHTML + 
			'<div style="position:absolute; top:'+(height[column]*52+62)+'px; left:'+(column*34+17)+'px;"><img src="black.png" width=29 height =42> </div>';
			else
				document.getElementById("board").innerHTML = document.getElementById("board").innerHTML + 
			'<div style="position:absolute; top:'+(height[column]*52+62)+'px; left:'+(column*34+17)+'px;"><img src="yellow.png" width=29 height =42> </div>';
		}


var won=false;

function set(column){
	if (isNaN(win))
		win =0;
	document.getElementById("txtPlayer1").value=win;
	if (isNaN(lost))
		lost =0;
	document.getElementById("txtPlayer2").value=lost;
	if (isNaN(tie))
		tie=0;
	document.getElementById("tie").value=tie;
        if (won== true || lose== true)
        	newGame();
        else
        {
	if (height[column] == -1){
		alert("This column is full");	
	}
	else
	{
		field[column][height[column]] = disc;
		height[column] = height[column] - 1;
		put(column,disc);
		
			if (check(column,height[column]+1,4,disc,false) == true) 
			{
				
				won=true;
				if ( disc == red){
					win ++; 
					document.getElementById("txtPlayer1").value=win;
				alert("You win");
				}
				else{
					lost++;
					document.getElementById("txtPlayer2").value=lost;
				alert("Visitor win");
				}
				
				
			}
			if ((height[0] == -1) && (height[1] == -1) && (height[2] == -1) && (height[3] == -1) && (height[4] == -1)  && (height[5] == -1) && (height[6] == -1)) 
			{
				tie ++;
				document.getElementById("tie").value=tie;
				alert("Its a Tie");
				
			}
			if (won != true){
				if ( disc == red )
					disc = yellow;
				else
					disc = red ;
			}
	}
}
}
//check
// x = xposition in the array y = y pos in array 
// amount is the amount of computer pucks in a row
// 
function check(x,y,amount,color,check_with_2){

	var i,j,k;
	var total1,total2,total3,total4;
	var total12,total22,total32,total42;
	var color2;
	var yes=false;

	if (color == red) {color2 = yellow;} else {color2 = red;}; 
	for (k=0;k<=3;k++){
		total1 = 0;
		total2 = 0;
		total3 = 0;
		total4 = 0;
		total12 = 0;
		total22 = 0;
		total32 = 0;
		total42 = 0;

	
		for(j=0;j<=3;j++){
			if (get(x-k+j,y) == color) {total1++;};
			if (get(x,y-k+j) == color) {total2++;};
			if (get(x-k+j,y-k+j) == color) {total3++;};
			if (get(x+k-j,y-k+j) == color) {total4++;};
			if (get(x-k+j,y) == color2) {total12++;};
			if (get(x,y-k+j) == color2) {total22++;};
			if (get(x-k+j,y-k+j) == color2) {total32++;};
			if (get(x+k-j,y-k+j) == color2) {total42++;};
			if (get(x-k+j,y) == outside) {total12++;};
			if (get(x,y-k+j) == outside) {total22++;};
			if (get(x-k+j,y-k+j) == outside) {total32++;};
			if (get(x+k-j,y-k+j) == outside) {total42++;};
		}
		
		if ((total1 >= amount) && (total12 == 0)) {yes = true;} else
		if ((total2 >= amount) && (total22 == 0)) {yes = true;} else
		if ((total3 >= amount) && (total32 == 0)) {yes = true;} else
		if ((total4 >= amount) && (total42 == 0)) yes = true;


		if ((yes == true) && (check_with_2 == true)){
			total12 = 0;
			total22 = 0;
			total32 = 0;
			total42 = 0;
			field[x][y] = color;
			height[x]--;

			for(j=0;j<=3;j++){
				if ((total1 >= amount) && (get(x-k+j,y) == read) && (get(x-k+j,height[x-k+j]+1) == read)) total12++;
				if ((total2 >= amount) && (get(x,y-k+j) == read) && (get(x,height[x]+1) == read)) total22++;
				if ((total3 >= amount) && (get(x-k+j,y-k+j) == read) && (get(x-k+j,height[x-k+j]+1) == read)) total32++;
				if ((total4 >= amount) && (get(x+k-j,y-k+j) == read) && (get(x+k-j,height[x+k-j]+1) == read)) total42++;
			}
			if ((total12 == 1) || (total22 == 1) || (total32 == 1) || (total42 == 1)) yes = false;
			height[x]++;
			field[x][y] = read;
		}
	}
return yes;
}


