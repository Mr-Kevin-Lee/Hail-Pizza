//#pragma strict
var player : DamageHandler;

function Start () {
    //var v3Pos = Vector3(0.0, 1.0, 0.0);
    //transform.position = gui.camera.ViewportToWorldPoint(v3Pos);
}

// updates player health and changes sprite accordingly.
function updatePlayerHealth(addHealth){
    player = GameObject.Find("PlainPizza").GetComponent(DamageHandler);
    healthSprite1 = GameObject.Find("PlayerHealth1").GetComponent(SpriteRenderer);
    healthSprite2 = GameObject.Find("PlayerHealth2").GetComponent(SpriteRenderer);
    healthSprite3 = GameObject.Find("PlayerHealth3").GetComponent(SpriteRenderer);
    healthSprite4 = GameObject.Find("PlayerHealth4").GetComponent(SpriteRenderer);

    // update health
//    if (addHealth)
//        player.health++;
//    else
//        player.health--;

    // take action based on new health
    if (player.health > 0) {
        // player is alive   
        switch(player.health) {
            case 4:
                healthSprite1.enabled = true;
                healthSprite2.enabled = true;
                healthSprite3.enabled = true;
                healthSprite4.enabled = true;
                break;
            case 3:
                healthSprite1.enabled = true;
                healthSprite2.enabled = true;
                healthSprite3.enabled = true;
                healthSprite4.enabled = false;
                break;
            case 2:
                healthSprite1.enabled = true;
                healthSprite2.enabled = true;
                healthSprite3.enabled = false;
                healthSprite4.enabled = false;
                break;
            case 1:
                healthSprite1.enabled = true;
                healthSprite2.enabled = false;
                healthSprite3.enabled = false;
                healthSprite4.enabled = false;
                break;
        }
        print("Player Health: " + player.health);
    }
    else {
        // player is dead
        healthSprite1.enabled = false;
        healthSprite2.enabled = false;
        healthSprite3.enabled = false;
        healthSprite4.enabled = false;
        // gameOver()
    }
}

function gameOver() {

}

function Update () {
    // replace with check for collision
//    if (GameObject.Find("PlainPizza"))
//        updatePlayerHealth(false);
}