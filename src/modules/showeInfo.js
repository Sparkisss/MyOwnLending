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
    console.log("Side x - " + x);
    console.log("Side y - " + y);
    // Проверяем, попадает ли курсор в определенную область
    if (x > 30 && x < 85 && y > 110 && y < 190) {
      // Если курсор попадает в область, выполняем нужные действия
      test.innerHTML = "Вводная задвижка подача";
      img.classList.add('active');      
    } else if (x > 30 && x < 85 && y > 355 && y < 435) {
      test.innerHTML = "Вводная задвижка обратка";
      img.classList.add('active');      
    }else if (x > 175 && x < 235 && y > 155 && y < 200) {
      test.innerHTML = "Фильтр подача";
      img.classList.add('active');      
    }else if (x > 175 && x < 235 && y > 400 && y < 455) {
      test.innerHTML = "Фильтр обратка";
      img.classList.add('active');      
    }else if (x > 275 && x < 300 && y > 365 && y < 410) {
      test.innerHTML = "Датчик обратного теплоносителя";
      img.classList.add('active');      
    }else if (x > 535 && x < 555 && y > 125 && y < 170) {
      test.innerHTML = "Датчик подающего теплоносителя";
      img.classList.add('active');      
    }else if (x > 320 && x < 390 && y > 290 && y < 430) {
      test.innerHTML = "Клапан регулирующий";
      img.classList.add('active');      
    }else if (x > 575 && x < 650 && y > 365 && y < 435) {
      test.innerHTML = "Насос циркуляционный";
      img.classList.add('active');      
    }else if (x > 740 && x < 805 && y > 395 && y < 445) {
      test.innerHTML = "Фильтр обратный из дома";
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
      }else if (x > 175 && x < 235 && y > 155 && y < 200) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 2;
      }else if (x > 175 && x < 235 && y > 400 && y < 455) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 3;
      }else if (x > 275 && x < 300 && y > 365 && y < 410) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 4;
      }else if (x > 535 && x < 555 && y > 125 && y < 170) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 5;
      }else if (x > 320 && x < 390 && y > 290 && y < 430) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 6;
      }else if (x > 575 && x < 650 && y > 365 && y < 435) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 7;
      }else if (x > 740 && x < 805 && y > 395 && y < 445) {
        modal.classList.add('show');
        modal.classList.remove('hidden');
        numOfItem = 8;
      }
      else {
        modal.classList.remove('show');
        modal.classList.add('hidden');
        numOfItem = -1;
      }

      function req() {
        getResource("http://localhost:3000/Equipment")          
          .then(data => createInfoOfStaff (data))
          .catch(err => console.error(err));        
      }
      req();      
    });

    async function getResource(url) {
      const res = await fetch(`${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
    };
// создаем контент на странице
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

