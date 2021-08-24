var mouseevent ="empty";
var l_x, l_y; 

var color = "pink";
width_of_line = 1;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    c_p_o_mouseX = e.clientX - canvas.offsetLeft;   
    c_p_o_mouseY = e.clientY - canvas.offsetTop;
    
    if(mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        ctx.arc(c_p_o_mouseX,c_p_o_mouseY,40,0,2 * Math.PI)
        ctx.stroke();
    }
l_x = c_p_o_mouseX;
l_y = c_p_o_mouseY;
}