#pragma strict
import System.Collections.Generic;

public var health = 1;
public var scoreAmount = 0;
public var invulnPeriod = 0.0;
private var invulnTimer = 0.0;
private var correctLayer : int;
public var stats : PlayerStatsScript;
public var gameManager : GameManagerScript;
public var addScore = false;

private var object : SpriteRenderer;

function Start () {
    correctLayer = gameObject.layer;
}

function OnTriggerEnter2D(other : Collider2D) {
	Debug.Log(other.name);
    if (other.name == "PlainPizza") {
    	health--;
    	addScore = true;
    }

    if(invulnPeriod > 0) 
    {
        invulnTimer = invulnPeriod;
        gameObject.layer = 10;
    }
}

function Update () {
    if(invulnTimer > 0)
    {
        invulnTimer -= Time.deltaTime;
        if(invulnTimer <= 0)
        {
            gameObject.layer = correctLayer;
            if(object != null)
                object.enabled = true;
        }
        else
        {
            if(object != null)
                object.enabled = !object.enabled;
        }
    }
        if(health <= 0)
            Die();
}

function Die() {
if (addScore) {
		gameManager = gameObject.Find("Background1").GetComponent(GameManagerScript);
		gameManager.gameScore += scoreAmount;
		gameManager.setGameScore();
	}
    Destroy(gameObject);
}