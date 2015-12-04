#pragma strict
import System.Collections.Generic;

public var speed = 1.0;

function Update () {
    var player : GameObject = GameObject.Find("PlainPizza");
    if(player != null)
    {
        var dir : Vector3 = player.transform.position - transform.position;
        transform.Translate(dir * Time.deltaTime * speed);
    }
}

