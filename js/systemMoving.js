function animation(args, elem,planetNumber) {
    // некоторые аргументы определим на будущее
    let moon=document.getElementById('moon')

        // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)

    switch(planetNumber){
        case 0:
            var $ = {
                radius  :     10, // радиус окружности
                speed   :     1,
                center_left: 75,
                center_top: 75

                // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
            }
            /*console.log($.center_left);
            console.log($.center_top);*/
            break;

        case 1:
            var $ = {
                radius  :     225, // радиус окружности
                speed   :     50,
                center_left: 210,
                center_top: 210
                // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
            }
            break;
        case 2:
            var $ = {
                radius  :     175, // радиус окружности
                speed   :     25 ,
                center_left: 160,
                center_top: 160
            }
            break;
        case 3:
            var $ = {
                radius  :     100, // радиус окружности
                speed   :     4 ,
                center_left: 95,
                center_top: 95
            }
            break;
        case 4:
            var $ = {
                radius  :     75, // радиус окружности
                speed   :     2 ,
                center_left: 70,
                center_top: 70
            }
            break;
        case 5:
            var $ = {
                radius  :     50, // радиус окружности
                speed   :     1 ,
                center_left: 45,
                center_top: 45
            }
            break;
        case 6:
            var $ = {
                radius  :     30, // радиус окружности
                speed   :     0.3 ,
                center_left: 20,
                center_top: 22
            }
            break;
    }

    var f = 0;let x=0;
    var s =  Math.PI / 180; //Вычислим угол

    setInterval(function () { // функция движения
        f += s;
        if(planetNumber!==0){
            elem.style.left = $.center_left + $.radius * Math.sin(f) + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
            elem.style.top = $.center_top + $.radius * Math.cos(f) + 'px';
        }
        else{
            x+=s;
            let m=10/75,R=75;
            moon.style.left =  (R+m*R)*Math.sin(m*x)-m*Math.sin(x+m*x)+ 'px';
            moon.style.top =  (R+m*R)*Math.cos(m*x)-m*Math.cos(x+m*x)+ 'px';
        }



    }, $.speed)

}