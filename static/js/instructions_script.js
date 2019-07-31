window.onload = function(){
    var button_back = document.querySelector(".buttons_phone .back");
    var button_next = document.querySelector(".buttons_phone .next");
    var blocks = document.querySelectorAll("#for_phone #gallery_phone .photos_phone div")
    var index = 0;
    button_back.addEventListener("click", function(){
        blocks[index].style.display = "none";
        index--;
        if(index < 0){
            index = blocks.length - 1;
        }
        blocks[index].style.display = "block";
    });
    button_next.addEventListener("click", function(){
        blocks[index].style.display = "none";
        index++;
        if(index == blocks.length){
            index = 0;
        }
        blocks[index].style.display = "block";
    });
}