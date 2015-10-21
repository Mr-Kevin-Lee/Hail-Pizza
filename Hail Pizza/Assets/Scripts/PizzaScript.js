//var rb: Rigidbody;
var speed = 10;

function Start() {

}


function Update () {
	GetComponent.<Rigidbody2D>().velocity.y = Input.GetAxis("Vertical") * speed;
}