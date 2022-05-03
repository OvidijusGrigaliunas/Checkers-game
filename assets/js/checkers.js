var socket = io();
var checkersBlack=0;
var checkersWhite=0;
var match;
var color;
var choiceCounter = 0;
var kirtimai = 0;

socket.on("matchStart", data => {
    match = data.match;
    color = data.color;
    document.getElementById('TheTable').style.visibility = 'visible';
    document.getElementById('Join').innerHTML='';
    socket.emit('socketMatchId', match)

    document.getElementById('Join').append(color);


    for (var i = 0; i < 8; i++){
        for (var a = 0; a < 8; a++){
            var g = document.createElement('div');
            g.setAttribute("id", `square${i+1}${a+1}`);
            if ( (a+i) % 2 == 1){
                g.setAttribute("class", `TableSquareWhite`);
            }
            else{
                g.setAttribute("class", `TableSquareBlack`);
                switch (i) {
                    case 0:
                        checkersBlack = checkersBlack + 1;
                        var img = document.createElement("img");
                        img.src = "/images/Blackchecker.png";
                        img.setAttribute("id", `black${checkersBlack}`);
                        if (data.color == 'black'){
                            img.style.cursor = 'pointer';
                        }
                        g.appendChild(img);
                        break;
    
                    case 1:
                        checkersBlack = checkersBlack + 1;
                        var img = document.createElement("img");
                        img.src = "/images/Blackchecker.png";
                        img.setAttribute("id", `black${checkersBlack}`);
                        if (data.color == 'black'){
                            img.style.cursor = 'pointer';
                        }
                        g.appendChild(img);
                        break;

                    case 2:
                        checkersBlack = checkersBlack + 1;
                        var img = document.createElement("img");
                        img.src = "/images/Blackchecker.png";
                        img.setAttribute("id", `black${checkersBlack}`);
                        if (data.color == 'black'){
                            img.style.cursor = 'pointer';
                        }
                        g.appendChild(img);
                        break;
                    
                    case  5:
                        checkersWhite = checkersWhite + 1;
                        var img = document.createElement("img");
                        img.src = "/images/Whitechecker.png";
                        img.setAttribute("id", `white${checkersWhite}`);
                        if (data.color == 'white'){
                            img.style.cursor = 'pointer';
                        }
                        g.appendChild(img);
                        break;

                    case  6:
                        checkersWhite = checkersWhite + 1;
                        var img = document.createElement("img");
                        img.src = "/images/Whitechecker.png";
                        img.setAttribute("id", `white${checkersWhite}`);
                        if (data.color == 'white'){
                            img.style.cursor = 'pointer';
                        }
                        g.appendChild(img);
                        break;
    
                    case  7:
                        checkersWhite = checkersWhite + 1;
                        var img = document.createElement("img");
                        img.src = "/images/Whitechecker.png";
                        img.setAttribute("id", `white${checkersWhite}`);
                        if (data.color == 'white'){
                            img.style.cursor = 'pointer';
                        }
                        g.appendChild(img);
                        break;

                  }
            }
            
            
            document.getElementById("TheTable").appendChild(g);
        }
        
    }

    
    if (data.color == 'black'){
        document.getElementById(`black1`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black1`).parentNode.id, `black1`);
        });
        document.getElementById(`black2`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black2`).parentNode.id, `black2`);
        });
        document.getElementById(`black3`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black3`).parentNode.id, `black3`);
        });
        document.getElementById(`black4`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black4`).parentNode.id, `black4`);
        });
        document.getElementById(`black5`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black5`).parentNode.id, `black5`);
        });
        document.getElementById(`black6`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black6`).parentNode.id, `black6`);
        });
        document.getElementById(`black7`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black7`).parentNode.id, `black7`);
        });
        document.getElementById(`black8`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black8`).parentNode.id, `black8`);
        });
        document.getElementById(`black9`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black9`).parentNode.id, `black9`);
        });
        document.getElementById(`black10`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black10`).parentNode.id, `black10`);
        });
        document.getElementById(`black11`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black11`).parentNode.id, `black11`);
        });
        document.getElementById(`black12`).addEventListener("click", function() {
            moveChoise(document.getElementById(`black12`).parentNode.id, `black12`);
        });
        document.getElementById('turnOverlay').style.visibility = 'visible';

    }
    else{
        document.getElementById(`white1`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white1`).parentNode.id, `white1`);
        });
        document.getElementById(`white2`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white2`).parentNode.id, `white2`);
        });
        document.getElementById(`white3`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white3`).parentNode.id, `white3`);
        });
        document.getElementById(`white4`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white4`).parentNode.id, `white4`);
        });
        document.getElementById(`white5`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white5`).parentNode.id, `white5`);
        });
        document.getElementById(`white6`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white6`).parentNode.id, `white6`);
        });
        document.getElementById(`white7`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white7`).parentNode.id, `white7`);
        });
        document.getElementById(`white8`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white8`).parentNode.id, `white8`);
        });
        document.getElementById(`white9`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white9`).parentNode.id, `white9`);
        });
        document.getElementById(`white10`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white10`).parentNode.id, `white10`);
        });
        document.getElementById(`white11`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white11`).parentNode.id, `white11`);
        });
        document.getElementById(`white12`).addEventListener("click", function() {
            moveChoise(document.getElementById(`white12`).parentNode.id, `white12`);
        });
        document.getElementById('turnOverlay').style.visibility = 'hidden';
    }
    
    
});




function moveChoise(curLocation, checkerId){
    choiceReset();
    // kirtimai
    var curLocation1 = parseInt(curLocation.slice(6, 7))
    var curLocation2 = parseInt(curLocation.slice(7, 8))
    if (curLocation2 > 2 && curLocation2 < 7){
        if(curLocation1 > 2){
            if(document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1-1}${curLocation2+1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1-2}${curLocation2+2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1-2}${curLocation2+2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1-2}${curLocation2+2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1-2}${curLocation2+2}`,`square${curLocation1-1}${curLocation2+1}`, checkerId);
                        });

                    }
                }
            }
            if(document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1-1}${curLocation2-1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1-2}${curLocation2-2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1-2}${curLocation2-2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1-2}${curLocation2-2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1-2}${curLocation2-2}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                        });

                    }
                }
            }
        }
        if (curLocation1 < 7){
            if(document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1+1}${curLocation2+1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1+2}${curLocation2+2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1+2}${curLocation2+2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1+2}${curLocation2+2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1+2}${curLocation2+2}`,`square${curLocation1+1}${curLocation2+1}`, checkerId);
                        });

                    }
                }
            }
            if(document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1+1}${curLocation2-1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1+2}${curLocation2-2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1+2}${curLocation2-2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1+2}${curLocation2-2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1+2}${curLocation2-2}`,`square${curLocation1+1}${curLocation2-1}`, checkerId);
                        });

                    }
                }
            }
        }
    }
    else if(curLocation2 == 1  || curLocation2 == 2){
        if(curLocation1 > 2){
            if(document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1-1}${curLocation2+1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1-2}${curLocation2+2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1-2}${curLocation2+2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1-2}${curLocation2+2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1-2}${curLocation2+2}`,`square${curLocation1-1}${curLocation2+1}`, checkerId);
                        });

                    }
                }
            }
        }
        if (curLocation1 < 7){
            if(document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1+1}${curLocation2+1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1+2}${curLocation2+2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1+2}${curLocation2+2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1+2}${curLocation2+2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1+2}${curLocation2+2}`,`square${curLocation1+1}${curLocation2+1}`, checkerId);
                        });

                    }
                }
            }
        } 

    }
    else if(curLocation2 == 7  || curLocation2 == 8){
        if(curLocation1 > 2){
            if(document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1-1}${curLocation2-1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1-2}${curLocation2-2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1-2}${curLocation2-2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1-2}${curLocation2-2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1-2}${curLocation2-2}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                        });

                    }
                }
            }
        }
        if (curLocation1 < 7){
            if(document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                if (document.getElementById(`square${curLocation1+1}${curLocation2-1}`).childNodes[0].id.slice(0,1) != color.slice(0,1)){
                    if (!document.getElementById(`square${curLocation1+2}${curLocation2-2}`).hasChildNodes()){
                        choiceCounter++
                        kirtimai++
                        document.getElementById(`square${curLocation1+2}${curLocation2-2}`).style.backgroundColor = 'red';
                        document.getElementById(`square${curLocation1+2}${curLocation2-2}`).addEventListener("click", function () {
                            checkerCross(curLocation, `square${curLocation1+2}${curLocation2-2}`,`square${curLocation1+1}${curLocation2-1}`, checkerId);
                        });

                    }
                }
            }
        }

    }
    if (kirtimai == 0){
        if (checkerId.includes("damke")){
            
            if (curLocation2 > 1 && curLocation2 < 8 && curLocation1 < 8 && curLocation1 > 1){

                if (!document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1+1}${curLocation2+1}`,`square${curLocation1+1}${curLocation2-1}`, checkerId);
                    
                });
                }
                if (!document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2-1}`,`square${curLocation1+1}${curLocation2+1}`, checkerId);
                    });
                }
                if (!document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.cursor = 'pointer';   
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2+1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    });
                }
                
                
                if (!document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2-1}`,`square${curLocation1-1}${curLocation2+1}`, checkerId);
                    });
                }     
                
                
            }

            else if (curLocation2 == 1 && curLocation1 < 8 && curLocation1 > 1){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2+1}`,`none`, checkerId);
                    });
                }
                if (!document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2+1}`,`none`, checkerId);
                    });
                }
                

            }


            else if (curLocation2 == 8 && curLocation1 < 8 && curLocation1 > 1){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2-1}`,`none`, checkerId);
                    });
                }
                if (!document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.backgroundColor = 'green';

                    
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2-1}`,`none`, checkerId);
                    });
                }
            }
            else if (curLocation2 > 1 && curLocation2 < 8 && curLocation1 == 1){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1+1}${curLocation2+1}`,`square${curLocation1+1}${curLocation2-1}`, checkerId);
                    
                });
                }
                if (!document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2-1}`,`square${curLocation1+1}${curLocation2+1}`, checkerId);
                    });
                }
            }
            else if (curLocation2 > 1 && curLocation2 < 8 && curLocation1 == 8){
                if (!document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1-1}${curLocation2+1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    
                });
                }
                if (!document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2-1}`,`square${curLocation1-1}${curLocation2+1}`, checkerId);
                    });
                }
            }
            else if (curLocation2 == 1 && curLocation1 == 8){
                if (!document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1-1}${curLocation2+1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    
                });
                }
            }
            else if (curLocation2 == 8 && curLocation1 == 8){
                if (!document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1-1}${curLocation2-1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    
                });
                }
            }
            else if (curLocation2 == 1 && curLocation1 == 1){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1+1}${curLocation2+1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    
                });
                }
            }
            else if (curLocation2 == 8 && curLocation1 == 1){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1+1}${curLocation2-1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    
                });
                }
            }



        }
        else if(checkerId.charAt(0) == 'b'){
            
            if (curLocation2 > 1 && curLocation2 < 8 && curLocation1 < 8){

                if (!document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).addEventListener("click", function () {
                    move(curLocation, `square${curLocation1+1}${curLocation2+1}`,`square${curLocation1+1}${curLocation2-1}`, checkerId);
                    
                });
                }
                if (!document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2-1}`,`square${curLocation1+1}${curLocation2+1}`, checkerId);
                    });
                }
                
            }

            else if (curLocation2 == 1 && curLocation1 < 8){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2+1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2+1}`,`none`, checkerId);
                    });
                }

            }


            else if (curLocation2 == 8 && curLocation1 < 8){
                if (!document.getElementById(`square${curLocation1+1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1+1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1+1}${curLocation2-1}`,`none`, checkerId);
                    });
                }   
            } 
            
        }
        else {
            if (curLocation2 > 1 && curLocation2 < 8 && curLocation1 > 1){
                
                if (!document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.cursor = 'pointer';   
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2+1}`,`square${curLocation1-1}${curLocation2-1}`, checkerId);
                    });
                }
                
                
                if (!document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2-1}`,`square${curLocation1-1}${curLocation2+1}`, checkerId);
                    });
                }     
            }

            else if (curLocation2 == 1 && curLocation1 > 1){
                if (!document.getElementById(`square${curLocation1-1}${curLocation2+1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).style.backgroundColor = 'green';
                    document.getElementById(`square${curLocation1-1}${curLocation2+1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2+1}`,`none`, checkerId);
                    });
                }

            }


            else if (curLocation2 == 8 && curLocation1 > 1){
                if (!document.getElementById(`square${curLocation1-1}${curLocation2-1}`).hasChildNodes()){
                    choiceCounter++
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.cursor = 'pointer';
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).style.backgroundColor = 'green';

                    
                    document.getElementById(`square${curLocation1-1}${curLocation2-1}`).addEventListener("click", function () {
                        move(curLocation, `square${curLocation1-1}${curLocation2-1}`,`none`, checkerId);
                    });
                }
            }
            
        }
    }
    

}
function move(oldLocation, newLocation, unusedLocation, checkerId){
    document.getElementById(oldLocation).innerHTML = '';
    var img = document.createElement("img");
    if(checkerId.charAt(0) == 'b' && checkerId.includes('damke')){
        img.src = "/images/Blackdamke.png";
    }
    else if(checkerId.charAt(0) == 'w' && checkerId.includes('damke')){
        img.src = "/images/Whitedamke.png";
    }
    else if(checkerId.charAt(0) == 'b'){
        
        img.src = "/images/Blackchecker.png";
    }
    else {
        img.src = "/images/Whitechecker.png";
    } 

    img.setAttribute("id", checkerId);
    img.style.cursor = 'pointer';
    document.getElementById(newLocation).appendChild(img)
    document.getElementById('turnOverlay').style.visibility = 'visible';
    if (color == 'white' && newLocation.slice(6, 7) == '1'){
        var idgen= checkerId.slice(5)
        document.getElementById(checkerId).id= 'whitedamke' + idgen; 
        checkerId='whitedamke' + idgen;
        document.getElementById(checkerId).src = "/images/Whitedamke.png";
    }
    else if (color == 'black' && newLocation.slice(6, 7) == '8'){
        var idgen= checkerId.slice(5)
        document.getElementById(checkerId).id= 'blackdamke' + idgen;
        checkerId='blackdamke' + idgen;
        document.getElementById(checkerId).src = "/images/Blackdamke.png";
    }

    var newelement = document.getElementById(newLocation).cloneNode(true);
    document.getElementById(newLocation).parentNode.replaceChild(newelement, document.getElementById(newLocation));
    socket.emit("turnMove", match, oldLocation, newLocation, checkerId)

    


    
    document.getElementById(checkerId).addEventListener("click", function() {
        moveChoise(document.getElementById(checkerId).parentNode.id, checkerId);
    });
    choiceReset();

}

function checkerCross(oldLocation, newLocation, opponentChecker, checkerId){
    document.getElementById(oldLocation).innerHTML = '';
    var img = document.createElement("img");
    if(checkerId.charAt(0) == 'b' && checkerId.includes('damke')){
        img.src = "/images/Blackdamke.png";
        checkersWhite = checkersWhite -1;
    }
    else if(checkerId.charAt(0) == 'w' && checkerId.includes('damke')){
        img.src = "/images/Whitedamke.png";
        checkersBlack = checkersBlack - 1;
    }
    else if(checkerId.charAt(0) == 'b'){
        
        img.src = "/images/Blackchecker.png";
        checkersWhite = checkersWhite -1;
    }
    else {
        img.src = "/images/Whitechecker.png";
        checkersBlack = checkersBlack - 1;
    } 

    img.setAttribute("id", checkerId);
    img.style.cursor = 'pointer';
    document.getElementById(newLocation).appendChild(img)
    
    document.getElementById(opponentChecker).innerHTML = '';
    

    


    var newelement = document.getElementById(newLocation).cloneNode(true);
    document.getElementById(newLocation).parentNode.replaceChild(newelement, document.getElementById(newLocation));
    if (color == 'white' && newLocation.slice(6, 7) == '1'){
        var idgen= checkerId.slice(5)
        document.getElementById(checkerId).id= 'whitedamke' + idgen;
        checkerId='whitedamke' + idgen;
        document.getElementById(checkerId).src = "/images/Whitedamke.png";
    }
    else if (color == 'black' && newLocation.slice(6, 7) == '8'){
        var idgen= checkerId.slice(5)
        document.getElementById(checkerId).id= 'blackdamke' + idgen;
        checkerId='blackdamke' + idgen;
        document.getElementById(checkerId).src = "/images/Blackdamke.png";
    }

    document.getElementById(checkerId).addEventListener("click", function() {
        moveChoise(document.getElementById(checkerId).parentNode.id, checkerId);
    });
    kirtimai = 0;
    socket.emit("turnCross", match, oldLocation, newLocation, opponentChecker, checkerId)
    CrossChoiseCounting(checkerId)
    if (checkersWhite ==0){
        if (color == 'black'){
            alert('u won')
            document.location.reload(true);

        }
        else {
            alert('u lost')
            document.location.reload(true);

        }
    }
    if (checkersBlack ==0){
        if (color == 'white'){
            alert('u won')
            document.location.reload(true);

        }
        else {
            alert('u lost')
            document.location.reload(true);

        }
    }
}

function choiseCounting(){
    for (var i = 0; i < 12; i++){
        if (document.getElementById(`${color}${i+1}`)){
            moveChoise(document.getElementById(`${color}${i+1}`).parentNode.id, `${color}${i+1}`)
        }
        if (document.getElementById(`${color}damke${i+1}`)){
            moveChoise(document.getElementById(`${color}damke${i+1}`).parentNode.id, `${color}damke${i+1}`)
        }
    }
    if (kirtimai > 0){
        alert('Galima kirsti')
    }
    if (choiceCounter ==0){
        alert('u lost')
        socket.emit('gameEnd', match);
        document.location.reload(true);
    }
    choiceCounter = 0;
    choiceReset();
}
function CrossChoiseCounting(checkerId){
    moveChoise(document.getElementById(checkerId).parentNode.id, checkerId)


    if (kirtimai > 0){
        alert('Galima kirsti dar karta')
    }
    else{
        document.getElementById('turnOverlay').style.visibility = 'visible';
        socket.emit("turnEnd", match)
        choiceReset();
    }
    choiceCounter = 0;
    
}

function choiceReset(){
    for (var i = 1; i < 9; i++){
        for (var j = 1; j < 9; j++){
            if((i+j)%2!=1){
                if (!document.getElementById(`square${i}${j}`).hasChildNodes()){
                    var newelement = document.getElementById(`square${i}${j}`).cloneNode(true);
                    document.getElementById(`square${i}${j}`).parentNode.replaceChild(newelement, document.getElementById(`square${i}${j}`));
                    
                }
                document.getElementById(`square${i}${j}`).style.backgroundColor = 'rgb(39, 38, 38)';
                document.getElementById(`square${i}${j}`).style.cursor = 'default';
            }
        }
    }
}



function joinmatch(){
    socket.emit('joinMatch');
    document.getElementById("joinbtn").style.visibility='hidden';
    document.getElementById('Join').append('waiting');
    
}
socket.on('nextTurn', (data) =>{
    document.getElementById(data.oldLocation).innerHTML = '';
    var img = document.createElement("img");

    if(data.checkerId.charAt(0) == 'b' && data.checkerId.includes('damke')){
        img.src = "/images/Blackdamke.png";
    }
    else if(data.checkerId.charAt(0) == 'w' && data.checkerId.includes('damke')){
        img.src = "/images/Whitedamke.png";
    }
    else if(data.checkerId.charAt(0) == 'b'){
        
        img.src = "/images/Blackchecker.png";
    }
    else {
        img.src = "/images/Whitechecker.png";
    } 

    img.setAttribute("id", data.checkerId);
    document.getElementById(data.newLocation).appendChild(img)


    document.getElementById('turnOverlay').style.visibility = 'hidden';
    choiseCounting();
    
});

socket.on('nextTurnCross', (data) =>{
    document.getElementById(data.oldLocation).innerHTML = '';
    var img = document.createElement("img");
    if(color == 'white' && data.checkerId.includes('damke')){
        img.src = "/images/Blackdamke.png";
        checkersWhite = checkersWhite -1;
    }
    else if(color == 'black' && data.checkerId.includes('damke')){
        img.src = "/images/Whitedamke.png";
        checkersBlack = checkersBlack - 1;
    }
    else if(color == 'white'){
        
        img.src = "/images/Blackchecker.png";
        checkersWhite = checkersWhite -1;
    }
    else {
        img.src = "/images/Whitechecker.png";
        checkersBlack = checkersBlack - 1;
    } 

    img.setAttribute("id", data.checkerId);
    document.getElementById(data.newLocation).appendChild(img)
    document.getElementById(data.opponentChecker).innerHTML = '';

        
    if (checkersWhite ==0){
        if (color == 'black'){
            alert('u won')
            document.location.reload(true)
        }
        else {
            alert('u lost')
            document.location.reload(true)
        }
    }
    if (checkersBlack ==0){
        if (color == 'white'){
            alert('u won')
            document.location.reload(true)
        }
        else {
            alert('u lost')
            document.location.reload(true)
        }
    }
    
    
});

socket.on('TurnEnd', () =>{
    document.getElementById('turnOverlay').style.visibility = 'hidden';
    choiseCounting();
    });

socket.on("opponent.left", () => {
    alert('Your opponent left')
    document.location.reload(true)
});

socket.on('GameEND', () =>{
    alert('u won')
    document.location.reload(true)
  });