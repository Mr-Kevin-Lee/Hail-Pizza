#pragma strict
import System.Collections.Generic;

public var health = 1;
public var invulnPeriod = 0.0;
private var invulnTimer = 0.0;
private var correctLayer : int;
public var stats : PlayerStatsScript;

private var object : SpriteRenderer;

function Start () {
    correctLayer = gameObject.layer;
}

function OnTriggerEnter2D() {
    health--;
    
    if (gameObject.name == "PlainPizza") {
    	stats = gameObject.Find("PlayerHealth1").GetComponent(PlayerStatsScript);
    	stats.updatePlayerHealth(false);
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
    Destroy(gameObject);
}