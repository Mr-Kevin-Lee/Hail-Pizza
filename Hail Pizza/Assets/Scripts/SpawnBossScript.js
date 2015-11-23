#pragma strict

public var deltaTime = 30;
var timer = 0.0;
var spawned = false;

function Start () {
	
}

function Update () {
	timer += Time.deltaTime;
	if (timer > deltaTime) {
		if (spawned == false) {
			GameObject.Find("Sphinx").GetComponent(BossMovementScript).spawnBoss();
			GameObject.Find("Main Camera").GetComponent(AudioSource).Stop();
			GameObject.Find("Sphinx").GetComponent(AudioSource).Play();
			GameObject.Find("Sphinx").GetComponent(SphinxScript).canAttack = true;
			spawned = true;
		}
	}
}

function resetTimer() {
	timer = 0.0;
}