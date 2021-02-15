
var character = document.getElementById("character");
var enemy = document.getElementById("enemy");



//ADDING SCORE


function jump(){
    if(character.classlist!="animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    
}

//right movement

function right() {

  var leftVal =  parseInt(window.getComputedStyle(character).getPropertyValue("left"))
  
  //if function to stop going off out of the RIGHT wall
  if(leftVal<450){
  character.style.left = (leftVal + 30) + "px";
}
}

//left movement

function left() {

  var leftVal =  parseInt(window.getComputedStyle(character).getPropertyValue("left"))
 
  //if function to stop going off out of the LEFT WALL
  if(leftVal>0){
  character.style.left = (leftVal - 30) + "px";
}
}



//SIMPLIFIED SUGGESTION FROM A HAWORTH

var checkDead = setInterval(function(){
       
    // Get the positions of the top, left and bottom, right of the enemy and the character    
    let enemyPos = enemy.getBoundingClientRect() // this will give us the left, right, top and bottom positions of the enemy
    let characterPos = character.getBoundingClientRect() // this will give us the left, right, top and bottom positions of the character

    // now let's see if there is any overlap between the enemy and the character

   // we are going to check whether one of them is to the left of the other.
   // For example if the left side of the enemy is bigger than the right side of the character then the enemy is to the right of the character
    if (enemyPos.left >= characterPos.right || characterPos.left >= enemyPos.right) {
       // Now we know they don't overlap as either the enemy is to the right of the character or vice versa so do nothing
    }
    
       // if we still don't know, we see whether the character is above the enemy or vice versa
    else if (enemyPos.bottom <= characterPos.top || characterPos.bottom <= enemyPos.top) {
       // Now we know they don't overlap as either the enemy is above the character or vice versa so do nothing
    }
      
      // neither of them is totally to the left or totally above the other so they must overlap somewhere- GOTCHA!
    else {
        enemy.style.animation="none"; //remove the animation
        enemy.style.display="none";
        alert("Game Over");
        location.reload();
        //clearInterval(checkDead); //I've added this but you may want to start again completely or....
    }        
  },10 );




//left
addEventListener("keydown", function(e) {
    if(e.keyCode == 37) left()
})

//jump (up)
addEventListener("keydown", function(e) {
  if (e.keyCode === 38) {
    jump()
  }
})

//right
addEventListener("keydown", function(e) {
  if (e.keyCode === 39) {
    right()
  }
})





