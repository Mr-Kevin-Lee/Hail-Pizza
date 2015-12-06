#pragma strict
import UnityEngine.UI;

var gameRun = true;
var gameScore = 0;
var gameScoreText;
var scoreText : Text;
var gameOverText : Text;
var retryText : Text;
var levelCompleteText : Text;

function Start () {
    gameOverText.text = "";
    retryText.text = "";
    setGameScore();
    
//    GameObject.Find("pizza-background").GetComponent(AudioSource).Stop();
	Destroy(GameObject.Find("pizza-background"));
    print("stopped");
}

function setGameScore() {
    scoreText.text = "Score: " + gameScore;
}

function restartText() {
    gameOverText.text = "GAME OVER";
    retryText.text = "PRESS SPACE TO RETRY";
}

function levelComplete() {
    print("level complete");
    GameObject.Find("LevelComplete").GetComponent(AudioSource).Play();
    levelCompleteText.text = "NOT BAD";
    retryText.text = "PRESS SPACE TO CONTINUE";
}

function Update() {
    if (!gameRun) {
        if(Input.GetKeyDown("space"))
        {
            Application.LoadLevel("Level2");
            GameObject.Find("spawn").GetComponent(SpawnCloneScript).resetTimer();
            GameObject.Find("Sphinx").GetComponent(SpawnBossScript).resetTimer();
        }
    }
}