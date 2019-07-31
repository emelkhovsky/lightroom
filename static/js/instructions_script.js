window.onload = function(){
    var button_back = document.querySelector(".buttons_phone .back_phone");
    var button_next = document.querySelector(".buttons_phone .next_phone");
    var blocks = document.querySelectorAll("#for_phone #photos_phone div")
    var index = 0;
    var button_back_computer = document.querySelector(".buttons_computer .back_computer");
    var button_next_computer = document.querySelector(".buttons_computer .next_computer");
    var blocks_computer = document.querySelectorAll("#for_computer #photos_computer div")
    var index_computer = 0;
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
    button_back_computer.addEventListener("click", function(){
        blocks_computer[index_computer].style.display = "none";
        index_computer--;
        if(index_computer < 0){
            index_computer = blocks_computer.length - 1;
        }
        blocks_computer[index_computer].style.display = "block";
    });
    button_next_computer.addEventListener("click", function(){
        blocks_computer[index_computer].style.display = "none";
        index_computer++;
        if(index_computer == blocks_computer.length){
            index_computer = 0;
        }
        blocks_computer[index_computer].style.display = "block";
    });
}