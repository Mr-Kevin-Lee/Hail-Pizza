//var rb: Rigidbody;
var speed = 10;
var health = 4;

function Start() {

}


function Update () {
	GetComponent.<Rigidbody2D>().velocity.y = Input.GetAxis("Vertical") * speed;
	if (GetComponent(Transform).position.y > 3) {
		GetComponent(Transform).position.y = 3;
	} 
	if (GetComponent(Transform).position.y < -4.5) {
		GetComponent(Transform).position.y = -4.5;
	}
}