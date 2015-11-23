#pragma strict

var spawnItem : GameObject;
var spawnTimeMin : float = 1.0;
var spawnTimeMax : float = 4.0;
var spawn = true;
var startTime;
var deltaTime = 120;
var bossStart = 30;
var timer1 : int;
var timer1On = true;
public var bossClip : AudioClip;

function Start () {
	while (spawn) {
		yield WaitForSeconds (Random.Range(spawnTimeMin, spawnTimeMax));
		addObject();
	}
	
	startTime = Time.time;
}

function addObject () {
	var y1 = GetComponent(Transform).position.y - GetComponent(Renderer).bounds.size.y/2;
	var y2 = GetComponent(Transform).position.y + GetComponent(Renderer).bounds.size.y/2;
	
	var spawnPoint = new Vector2(GetComponent(Transform).position.x, Random.Range(y1, y2));
	
	Instantiate(spawnItem, spawnPoint, Quaternion.identity);
}

function Update() {
	if (timer1On) {
		timer1 = Time.time;
	}
	
	if ((timer1 > deltaTime) && timer1On) {
		Debug.Log("Timer UP");
		spawn = !spawn;
		timer1On = !timer1On;
	}
	
}