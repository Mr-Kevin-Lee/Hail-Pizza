#pragma strict
import System.Collections.Generic;

public var speed = 15.0;
public var move = 1;

function Start() {}

function Update () {
	if (move == 1) {
	    transform.Translate(Vector3(-1,0,0) * Time.deltaTime * speed);
	    if (transform.position.x < -10) {
	    	Destroy(gameObject);
	    }
	}
}