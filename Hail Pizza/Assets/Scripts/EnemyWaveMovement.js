#pragma strict
import System.Collections.Generic;

public var speed = 1.0;
public var height = 2;
public var pingPong = 0.0;

function Start () {
}

function Update () {
    //transform.Translate(Vector3(-1, Mathf.PingPong(Time.time, 2) - 1, transform.position.z) * Time.deltaTime * speed);
    transform.Translate(Vector3(-Mathf.PingPong(Time.time, 2), Mathf.PingPong(Time.time, 2) - 1, transform.position.z) * Time.deltaTime * speed);
    if (GetComponent(Transform).position.y > 4) {
        GetComponent(Transform).position.y = 4;
    } 
    if (GetComponent(Transform).position.y < -4.5) {
        GetComponent(Transform).position.y = -4.5;
    }
}

