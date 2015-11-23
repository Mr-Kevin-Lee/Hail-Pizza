#pragma strict

public var deltaTime = 30;
var timer : int;
var spawned = false;

function Start () {
	
}

function Update () {
	timer = Time.time;
	if (timer > deltaTime) {
		if (spawned == false) {
			GameObject.Find("Sphinx").GetComponent(BossMovementScript).spawnBoss();
			GameObject.Find("Main Camera").GetComponent(AudioSource).Stop();
			GameObject.Find("Sphinx").GetComponent(AudioSource).Play();
			spawned = true;
		}
	}
}