#pragma strict

public var spawned = false;
var speed = 1;
public var stopX : float;
var move = false;

function Start () {}

function Update () {
    Debug.Log(stopX);
	if (move == true) {
		transform.Translate(Vector3(-1,0,0) * Time.deltaTime * speed);
	}
	if (transform.position.x < stopX) {
	    transform.Translate(Vector3(0, Mathf.PingPong(Time.time, 2.6) - 1.3, 0) * Time.deltaTime * speed);
	    move = false;
	}
}

function spawnBoss() {
	if (spawned == false) {
		spawned = true;
		move = true;;
	}
}