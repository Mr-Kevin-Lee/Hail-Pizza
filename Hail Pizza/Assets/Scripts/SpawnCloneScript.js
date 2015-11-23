#pragma strict

var spawnItem : GameObject;
var spawnTimeMin : float = 1.0;
var spawnTimeMax : float = 4.0;
var spawn = true;
var startTime;
var deltaTime : int;
var elapsedTime = 0.0;
var timer1On = true;
public var bossClip : AudioClip;

function Start () {
	while (spawn) {
		yield WaitForSeconds (Random.Range(spawnTimeMin, spawnTimeMax));
		addObject();
	}
}

function addObject () {
	var y1 = GetComponent(Transform).position.y - GetComponent(Renderer).bounds.size.y/2;
	var y2 = GetComponent(Transform).position.y + GetComponent(Renderer).bounds.size.y/2;
	
	var spawnPoint = new Vector2(GetComponent(Transform).position.x, Random.Range(y1, y2));
	
	Instantiate(spawnItem, spawnPoint, Quaternion.identity);
}

function Update() {
	if (timer1On) {
		elapsedTime += Time.deltaTime;
	}
	
	if ((elapsedTime > deltaTime) && timer1On) {
		Debug.Log("Timer UP");
		spawn = !spawn;
		timer1On = !timer1On;
	}
	
}

function resetTimer() {
	elapsedTime = 0.0;
}