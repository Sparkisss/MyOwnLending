import { MenuTool } from "./constructor";
window.addEventListener("DOMContentLoaded", () => {
  // Получаем ссылку на изображение  
  const img = document.getElementById('myImage'),
        test = document.querySelector('.test'),
        modal = document.querySelector('.modal');
  let numOfItem = 2;
  // Добавляем обработчик события "mouseover" к изображению
  img.addEventListener('mousemove', function(event) {
    // Получаем координаты курсора мыши относительно изображения
    let x = event.offsetX;
    let y = event.offsetY;
    // console.log("Side x - " + x);
    // console.log("Side y - " + y);
    // Проверяем, попадает ли курсор в определенную область
    if (x > 30 && x < 85 && y > 110 && y < 190) {
      // Если курсор попадает в область, выполняем нужные действия
      test.innerHTML = "Вводная задвижка подача";
      img.classList.add('active');      
    } else if (x > 30 && x < 85 && y > 355 && y < 435) {
      test.innerHTML = "Вводная задвижка обратка";
      img.classList.add('active');      
    }
    else {
      img.classList.remove('active');
      test.innerHTML = "Igor";      
    }
  });
  // Добавляем обработчик события "click" к изображению
    img.addEventListener('click', (e) => {      
      let x = e.offsetX;
      let y = e.offsetY;
      // Проверяем, попадает ли курсор в определенную область
      if (x > 30 && x < 85 && y > 110 && y < 190) {
        // Если курсор попадает в область, выполняем нужные действия
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 0;
      } else if (x > 30 && x < 85 && y > 355 && y < 435) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 1;
      }
      else {
        modal.classList.remove('show');
        modal.classList.add('hidden');
        numOfItem = 2;
      }

      function req() {
        fetch("http://localhost:3000/Equipment")
          .then(data => data.json())
          .then(data =>createInfoOfStaff (data))
          .catch(err => console.error(err));        
      }
      req();      
    });

    function getResource(url) {
      const res = fetch(`${url}`);

      return res;
    }
    function createInfoOfStaff (data) {
      data.forEach((item, i) => {
        if (i === numOfItem) {                
          new MenuTool(
            item.name,
            item.model,
            item.setDate,
            item.condition,
            item.useDate,
            item.setpoint,
            item.parent
          ).render();            
        }         
      }); 
    } 
    
});

