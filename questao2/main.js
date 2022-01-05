const style = document.getElementById("style");

function fontsize(x) {
    var zoom = x;
    return function(y) 
    {
        zoom *= y;
        if(zoom < 0.1) zoom = .1;
        return zoom;
    };
}

var zoomFont = fontsize(1);

function Zoom (n)
{
    style.innerText = "p { font-size: "+zoomFont(n)+"rem }";
    
}