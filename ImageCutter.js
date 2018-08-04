function txtColorKeyPressed(e) {
    if(e.keyCode === ENTER_KEY) {
        cutImage()
    }
}

function cutImageClicked() {
    cutImage()
}

function rdoOtherChanged() {
    
}


function cutImage() {
    
}

function getColorToCut() {
    var selected = document.querySelector('input[name="cutColor"]:checked').value;
    switch(selected) {
        case "transparent":
            return 
        case "white":
            return 
        case "black":
            return
        case "other":
                
            return
    }
}