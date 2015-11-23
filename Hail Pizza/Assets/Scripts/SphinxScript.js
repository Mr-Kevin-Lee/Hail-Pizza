//#pragma strict
var attackTimer : int;
var attackInterval : int;
public var canAttack = false;

public var offset : Vector3 = new Vector3(1.1, 0, 0);
public var Bullet : GameObject;

function Start () {

}

function Update() {
    if (canAttack) {
        bossAttack();
    }
}

function bossAttack() {
    var lastAttack = 0;
    attackTimer = Time.time;
    if ((attackTimer - lastAttack) % attackInterval == 0) {
        Debug.Log("BOSS ATTACK" + attackTimer);
        lastAttack = Time.time;

        var bulletOffset : Vector3 = transform.rotation * offset;
        var newBullet : GameObject = Instantiate(Bullet, transform.position + bulletOffset, transform.rotation);
        //newBullet.layer = bulletLayer;
        Destroy(newBullet, 3);
    }
}