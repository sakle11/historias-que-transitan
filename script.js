window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    let titulo = document.querySelector(".titulo");
    let oneVhInPixels = window.innerHeight / 100;
    let threshold = oneVhInPixels * 160;
    
    if (window.scrollY < threshold) {
	titulo.style.width = "55%";
	titulo.style.top = "12rem";
    } else {
	titulo.style.width = "35%";
	titulo.style.top = "6rem";
    }
}

document.querySelector('.play').onclick =_=>
{
    document.querySelector(".popup-video").style.display = "block";
}

document.querySelector(".popup-video span").onclick =_=>
{
    document.querySelector(".popup-video").style.display = "none";
}
