//#pragma strict
var player : PizzaScript;

function Start () {
    //var v3Pos = Vector3(0.0, 1.0, 0.0);
    //transform.position = gui.camera.ViewportToWorldPoint(v3Pos);
}

// updates player health and changes sprite accordingly.
function updatePlayerHealth(addHealth){
    player = GameObject.Find("PlainPizza").GetComponent(PizzaScript);

    // update health
    if (addHealth)
        player.health++;
    else
        player.health--;

    // take action based on new health
    if (player.health > 0) {
        // player is alive   
        //GameObject.Find("PlainPizza").GetComponent(SpriteRenderer).sprite = 
        print("Player Health: " + player.health);
    }
    else {
        // player is dead
        // gameOver()
    }
}

function gameOver() {

}

function Update () {
    updatePlayerHealth(true);
}