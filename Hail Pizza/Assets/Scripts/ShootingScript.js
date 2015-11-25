#pragma strict
import System.Collections.Generic;

public var offset : Vector3 = new Vector3(1.1, 0, 0);

public var Bullet : GameObject;
public var wavebullet : GameObject;

public var fireDelay = 0.25;

private var cooldownTimer = 0.0;

function Start () {
}

function Update () {
    cooldownTimer -= Time.deltaTime;
    if(Input.GetKeyDown("space") && cooldownTimer <= 0)
    {
        Debug.Log("FIRE!");
        var player = gameObject.Find("PlainPizza").GetComponent(PizzaScript);
        var powerup = player.powerup;

        if(powerup == "pepperoni") {
            cooldownTimer = fireDelay;
            var bulletOffset1 : Vector3 = transform.rotation * offset;
            var wave : GameObject = Instantiate(wavebullet, transform.position + bulletOffset1, transform.rotation).gameObject;
            Destroy(wave, 3);
        }

        else {
            cooldownTimer = fireDelay;
            var bulletOffset : Vector3 = transform.rotation * offset;
            var newBullet : GameObject = Instantiate(Bullet, transform.position + bulletOffset, transform.rotation);
            Destroy(newBullet, 3);
        }
    }
}