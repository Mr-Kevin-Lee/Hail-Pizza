#pragma strict
import System.Collections.Generic;

public var maxSpeed = 3.0;

function Update () {
    var bulletPosition : Vector3 = transform.position;
    var velocity : Vector3 = new Vector3(maxSpeed * Time.deltaTime, 0, 0);
    bulletPosition += transform.rotation * velocity;
    transform.position = bulletPosition;
}