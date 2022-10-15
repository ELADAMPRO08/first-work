str = "I'm EL aaddam Omar";
i=0;
dir="d";
function f(){
    t=setTimeout("f()",300);
    document.getElementById("header").innerHTML= str.substring(0,i) + "|";
    if (dir=="d"){
        if (i<str.length)
           i++;
        else
           dir = "g";
    }
    if (dir=="g"){
        if (i>0)
           i--;
        else
           dir = "d";
    }
}

