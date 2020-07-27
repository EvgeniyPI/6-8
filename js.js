let progressBar = $("#myProgressBar");
let progressWidth = $("#myProgressBar").width();
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-3");
let btn3 = document.querySelector("#btn-7");
let btn4 = document.querySelector("#btn-r");
let nowProgress = 0;  
btn1.addEventListener('click', event => {
    nowProgress = nowProgress + 1;
progressBar.attr("style","width: " + nowProgress + "%");
    });
btn2.addEventListener('click', event => {
    nowProgress = nowProgress + 3;
progressBar.attr("style","width: " + nowProgress + "%");
    });
btn3.addEventListener('click', event => {
    nowProgress = nowProgress + 7;
progressBar.attr("style","width: " + nowProgress + "%");
    });
btn4.addEventListener('click', event => {
            nowProgress = 0;
        progressBar.attr("style","width: " + nowProgress + "%");
     });
