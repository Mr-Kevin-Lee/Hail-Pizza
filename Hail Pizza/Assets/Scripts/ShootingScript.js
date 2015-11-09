#pragma strict
import System.Collections.Generic;
//Develop offset later, it is used so that the bullet comes out of the pizza and not from the center of it

public var offset : Vector3 = new Vector3(1.1, 0, 0);
public var Bullet : GameObject;
public var fireDelay = 0.25;

private var cooldownTimer = 0.0;
//private var bulletLayer : int;

function Start () {
    //bulletLayer = gameObject.layer;
}

function Update () {
    cooldownTimer -= Time.deltaTime;
    if(Input.GetKeyDown("space") && cooldownTimer <= 0)
    {
        Debug.Log("FIRE!");
        cooldownTimer = fireDelay;
        var bulletOffset : Vector3 = transform.rotation * offset;
        var newBullet : GameObject = Instantiate(Bullet, transform.position + bulletOffset, transform.rotation);
        //newBullet.layer = bulletLayer;
        Destroy(newBullet, 3);
    }
}