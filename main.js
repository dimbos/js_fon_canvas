window.onload = function(){
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    let clicks = [[0, 0]];

    canvas.onclick = function(e){
        e = e || window.event;
        /*
        console.log(e.offsetX);
        console.log(e.offsetY);
        */
       let x = e.offsetX;
       let y = e.offsetY;

       let xy = [x, y];
       clicks.push(xy);
       //console.log(clicks);
       //ctx.moveTo(0, 0); //помещаем перо в точку начла рисования
       //ctx.lineTo(x, y); // рисуем линию в нужную точку
       if(clicks.length > 2){
        ctx.moveTo(clicks[clicks.length-3][0], clicks[clicks.length-3][1]); 
        ctx.lineTo(x, y);
       }
       ctx.moveTo(clicks[clicks.length-2][0], clicks[clicks.length-2][1]);
       ctx.lineTo(x, y);
       ctx.stroke(); //рисуем линию
       
    }
}