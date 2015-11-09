#pragma strict

var enemy : GameObject;
var spawnTime : float = 2;

function Start () {
	InvokeRepeating("addEnemy", spawnTime, spawnTime);
}

function addEnemy () {
	var y1 = GetComponent(Transform).position.y - GetComponent(Renderer).bounds.size.y/2;
	var y2 = GetComponent(Transform).position.y + GetComponent(Renderer).bounds.size.y/2;
	
	var spawnPoint = new Vector2(GetComponent(Transform).position.x, Random.Range(y1, y2));
	
	Instantiate(enemy, spawnPoint, Quaternion.identity);
}

// See image below
//    var x1 = transform.position.x - renderer.bounds.size.x/2;
//    var x2 = transform.position.x + renderer.bounds.size.x/2;
//
//    // Randomly pick a point within the spawn object
//    var spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);
//
//    // Create an enemy at the 'spawnPoint' position
//    Instantiate(enemy, spawnPoint, Quaternion.identity);
//}