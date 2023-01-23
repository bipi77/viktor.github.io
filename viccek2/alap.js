var tomb=
[
    "Mi a legtöbb válás legfőbb oka? A házasság",
    "Miaz? Feldobod zöld, leesik ugat? Mindegy, csak kutyára essen!",
    "Mi az? Reggel ugat este úszik? Az anyós műfogsora.",
    "-Mit néznek a vámpírok a TV-ben? -VÉRADÁST",
    "-Betonozás előtt mindig egy pontot ragasztok a betonkeverőre.  -Általában ez a munka fordulópontja."

]
var kepek=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "2.png"

]


function vicc(){
   // alert ("Hello")
    var veletlen=Math.floor(Math.random() * tomb.length);
    console.log=(veletlen)
    document.getElementById("vicchelye").innerHTML=tomb[veletlen]
    document.getElementById("vicckepe").src=veletlen+".jpg"
}
vicc()





