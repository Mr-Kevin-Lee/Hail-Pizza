#pragma strict
import System.Collections.Generic;

public var MoveSpeed = 5.0;
public var frequency = 20.0;
public var magnitude = 0.5;

private var axis : Vector3;
private var pos : Vector3;

function Start () {
    pos = transform.position;
    axis = transform.up; 
}

function Update () {
    pos += transform.right * Time.deltaTime * MoveSpeed;
    transform.position = pos + axis * Mathf.Sin (Time.time * frequency) * magnitude; 

    if (transform.position.x > 10) {
        Destroy(gameObject);
    }
}  

