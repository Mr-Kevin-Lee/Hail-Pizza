#pragma strict

var scrollSpeed : float;
var tileSize : float;
private var startPosition : Vector3;

function Start () {
	startPosition = GetComponent(Transform).position;
}

function Update () {
	var newPosition : float;
	newPosition = Mathf.Repeat(Time.time * scrollSpeed, tileSize);
	GetComponent(Transform).position = startPosition + Vector3(-1,0,0) * newPosition;
}