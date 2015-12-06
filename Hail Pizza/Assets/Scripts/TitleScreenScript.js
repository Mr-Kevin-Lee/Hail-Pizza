//#pragma strict

private var displayLabel = false;
var instructionText : Text;

function Update () {
    if (displayLabel)
        instructionText.text = "PRESS SPACE TO START";
    else
        instructionText.text = "";

    if(Input.GetKeyDown("space"))
    {
        Application.LoadLevel("Instructions");
        this.enabled = false;
    }
}
 
function Start() {
    FlashLabel();
}
 
function FlashLabel() {  
    while (1) {
        displayLabel = true;
        yield WaitForSeconds(.5);
        displayLabel = false;
        yield WaitForSeconds(.5); 
    }
 
}

function Awake () {
	DontDestroyOnLoad (gameObject);
}

//function onLevelWasLoaded(level : int){
//	if (level == 2) {
//		print("Detsroy");
//		gameObject.GetComponent(AudioSource).Stop();
//	}
//}