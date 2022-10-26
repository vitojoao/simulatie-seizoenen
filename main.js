// object van bakstenen
var bakstenen = function(xBrick, xBrick2, yBrick) {
    stroke(0, 0, 0);
    fill(214, 110, 58);
    for(var yBrick = 130; yBrick < 315; yBrick += 20) {
        for(var xBrick = 110; xBrick < 265; xBrick +=30) {
            rect(xBrick, yBrick, 30, 10);
        }
        for(var xBrick2 = 95; xBrick2 < 280; xBrick2 += 30) {
        rect(xBrick2, yBrick + 10, 30, 10);
        }
    }
};

// object an dak
var dak = function(xDak, yDak) {
    fill(214, 110, 58);
    triangle(xDak, yDak, 200, 50, 294, 130);
    fill(176, 176, 176);
    rect(xDak+127, yDak-65, 20, 41);
};

//object van wolk
var wolk = function(xWolk, yWolk) {
    fill(255, 255, 255);
    ellipse(xWolk, yWolk, 70, 30);
    ellipse(xWolk+17, yWolk-16, 70, 30);
    ellipse(xWolk+28, yWolk+13, 70, 30);
    ellipse(xWolk+56, yWolk, 70, 30);
};

var timesTouched = 0;

var season = 0;

var xZon = 50;

var offset = 10;


draw = function() {
    if (timesTouched % 2 === 0) {
         background(219, 244, 255);
    } else {
        background(43, 56, 61);
    }
    
    noStroke();
    // zon
    if (timesTouched % 2 === 0) {
        fill(255, 217, 0);
    } else {
        fill(255, 255, 255);
    }
    ellipse(xZon, 50, 70, 70);
    xZon += 2;
    if(xZon > 435) {
        timesTouched ++;
        xZon -= 470;
        
        if ( timesTouched % 2 === 0 ) {
            
            season++;
            
            if ( season > 3 ) {
                season = 0;
            }
        }
    }
    
    // sneeuwlaag
    if (season === 0) {
         fill(240, 240, 240);
    } else if (season === 1) {
        fill(12, 120, 0);
    } else if (season === 2) {
        fill(12, 120, 0);
    } else if (season === 3) {
        fill(153, 99, 0);
    }
   
    rect(-1, 200, 401, 200);
    
    //wolken
    wolk(50, 50);
    wolk(300, 70);
    
    //bakstenen patroon
    bakstenen(110, 130);
    
    //dak
    dak(110, 130);
    

    // ramen -> verandert van kleur bij dag en nacht
    for(var xRaam = 130; xRaam < 220; xRaam += 89) {
        if (timesTouched % 2 === 0) {
            fill(240, 251, 255);
        } else {
            fill(240, 212, 0);
        }
        rect(xRaam, 170, 50, 50);
        fill(66, 66, 66);
        rect(xRaam+22, 170, 6, 50);
        rect(xRaam, 192, 50, 6);
    }

    // deur
    fill(117, 49, 0);
    rect(185, 270, 31, 60);
    
    // rook uit schoorsteen
    noStroke();
    fill(87, 87, 87);
    ellipse(243, 40, 30, 50);
    ellipse(230, 29, 24, 37);
    ellipse(257, 29, 24, 37);
    ellipse(238, 14, 24, 37);
    ellipse(252, 1, 24, 37);
    
    // vierkanten om de uitsteeksels van de bakstenen te verbergen
    if (season === 0) {
         fill(240, 240, 240);
    } else if (season === 1) {
        fill(12, 120, 0);
    } else if (season === 2) {
        fill(12, 120, 0);
    } else if (season === 3) {
        fill(153, 99, 0);
    }
    rect(95, 201, 16, 131);
    rect(290, 201, 18, 131);
    if (timesTouched % 2 === 0) {
        fill(219, 244, 255);
    } else {
        fill(43, 56, 61);
    }
    rect(95, 130, 16, 71);
    rect(290, 130, 16, 71);
    
    // sneeuwval bij winter en regen bij herfst
    if (season === 0) {
        stroke(255, 255, 255);
    } else if (season === 3) {
        stroke(0, 43, 255);
    }

    if (season === 0) {
        for(var ySnowfall = offset; ySnowfall < 400; ySnowfall += 25) {
            for(var xSnowfall = offset; xSnowfall < 400; xSnowfall += 25) {
                line(xSnowfall, ySnowfall, xSnowfall+10, ySnowfall+10);
            }
        }
        
        if ( offset > 20 ) {
            offset = 0;
        } else {
            offset += 5/2;
        }
    } else if (season === 3) {
        for(var ySnowfall = offset; ySnowfall < 400; ySnowfall += 25) {
            for(var xSnowfall = offset; xSnowfall < 400; xSnowfall += 25) {
                line(xSnowfall, ySnowfall, xSnowfall+10, ySnowfall+10);
            }
        }
        
        if ( offset > 20 ) {
            offset = 0;
        } else {
            offset += 5/2;
        }
    }

};
