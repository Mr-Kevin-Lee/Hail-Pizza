#pragma strict

public var spawned = false;
var speed = 1;
var stopX = 7;
var move = false;;

function Start () {}

function Update () {
	if (move == true) {
		transform.Translate(Vector3(-1,0,0) * Time.deltaTime * speed);
	}
	if (transform.position.x < stopX) {
		move = false;
	}
}

function spawnBoss() {
	if (spawned == false) {
		spawned = true;
		move = true;;
	}
}