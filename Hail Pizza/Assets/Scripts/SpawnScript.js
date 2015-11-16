#pragma strict

var spawnItem : GameObject;
var spawnTimeMin : float = 1.0;
var spawnTimeMax : float = 4.0;

function Start () {
	while (true) {
		yield WaitForSeconds (Random.Range(spawnTimeMin, spawnTimeMax));
		addObject();
	}
//	InvokeRepeating("addEnemy", spawnTime, spawnTime);
}

function addObject () {
	var y1 = GetComponent(Transform).position.y - GetComponent(Renderer).bounds.size.y/2;
	var y2 = GetComponent(Transform).position.y + GetComponent(Renderer).bounds.size.y/2;
	
	var spawnPoint = new Vector2(GetComponent(Transform).position.x, Random.Range(y1, y2));
	
	Instantiate(spawnItem, spawnPoint, Quaternion.identity);
}