//---------------------------------game1--//

document.getElementById("openPopupBtn1").addEventListener("click", function() {
    document.getElementById("popup1").style.display = "flex";
    startTicTacToe();  
});

document.getElementById("closePopupBtn1").addEventListener("click", function() {
    document.getElementById("popup1").style.display = "none";
});


//---------------------------------game2--//
const openPopupBtn2 = document.getElementById("openPopupBtn2");
const popup2 = document.getElementById("popup2");
const closePopupBtn2 = document.getElementById("closePopupBtn2");
//open popup
openPopupBtn2.onclick = function() {
    popup2.style.display = "flex";
}
//close popup button
closePopupBtn2.onclick = function() {
    popup2.style.display = "none";
}


//---------------------------------game3--//
const openPopupBtn3 = document.getElementById("openPopupBtn3");
const popup3 = document.getElementById("popup3");
const closePopupBtn3 = document.getElementById("closePopupBtn3");
//open popup
openPopupBtn3.onclick = function() {
    popup3.style.display = "flex";
}
//close popup button
closePopupBtn3.onclick = function() {
    popup3.style.display = "none";
}

//---------------------------------game4--//
const openPopupBtn4 = document.getElementById("openPopupBtn4");
const popup4 = document.getElementById("popup4");
const closePopupBtn4 = document.getElementById("closePopupBtn4");
//open popup
openPopupBtn4.onclick = function() {
    popup4.style.display = "flex";
}
//close popup button
closePopupBtn4.onclick = function() {
    popup4.style.display = "none";
}


//---------------------------------game5--//
const openPopupBtn5 = document.getElementById("openPopupBtn5");
const popup5 = document.getElementById("popup5");
const closePopupBtn5 = document.getElementById("closePopupBtn5");
//open popup
openPopupBtn5.onclick = function() {
    popup5.style.display = "flex";
}
//close popup button
closePopupBtn5.onclick = function() {
    popup5.style.display = "none";
}


//---------------------------------game6--//
const openPopupBtn6 = document.getElementById("openPopupBtn6");
const popup6 = document.getElementById("popup6");
const closePopupBtn6 = document.getElementById("closePopupBtn6");
//open popup
openPopupBtn6.onclick = function() {
    popup6.style.display = "flex";
}
//close popup button
closePopupBtn6.onclick = function() {
    popup6.style.display = "none";
}


//---------------------------------game7--//
const openPopupBtn7 = document.getElementById("openPopupBtn7");
const popup7 = document.getElementById("popup7");
const closePopupBtn7 = document.getElementById("closePopupBtn7");
//open popup
openPopupBtn7.onclick = function() {
    popup7.style.display = "flex";
}
//close popup button
closePopupBtn7.onclick = function() {
    popup7.style.display = "none";
}

//---------------------------------game8--//
const openPopupBtn8 = document.getElementById("openPopupBtn8");
const popup8 = document.getElementById("popup8");
const closePopupBtn8 = document.getElementById("closePopupBtn8");
//open popup
openPopupBtn8.onclick = function() {
    popup8.style.display = "flex";
}
//close popup button
closePopupBtn8.onclick = function() {
    popup8.style.display = "none";
}


//---------------------------------game9--//
const openPopupBtn9 = document.getElementById("openPopupBtn9");
const popup9 = document.getElementById("popup9");
const closePopupBtn9 = document.getElementById("closePopupBtn9");
//open popup
openPopupBtn9.onclick = function() {
    popup9.style.display = "flex";
}
//close popup button
closePopupBtn9.onclick = function() {
    popup9.style.display = "none";
}


//---------------------------------game10--//
const openPopupBtn10 = document.getElementById("openPopupBtn10");
const popup10 = document.getElementById("popup10");
const closePopupBtn10 = document.getElementById("closePopupBtn10");
//open popup
openPopupBtn10.onclick = function() {
    popup10.style.display = "flex";
}
//close popup button
closePopupBtn10.onclick = function() {
    popup10.style.display = "none";
}
//close popup everywhere
window.onclick = function(event) {
    if (event.target == popup10) {
        popup10.style.display = "none";
    }
}
