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
        Application.LoadLevel("Level2");
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