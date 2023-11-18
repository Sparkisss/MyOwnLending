//Конструктор
    class MenuTool {
        constructor(name, model, setDate, condition, useDate, setpoint, parentSelector) {
          this.name = name;
          this.model = model;
          this.setDate = setDate;
          this.condition = condition;
          this.useDate = useDate;
          this.setpoint = setpoint;
          this.parent = document.querySelector(parentSelector);
        }
        render() {
          const element = document.createElement('div');
          this.parent.innerHTML = '';          
          element.innerHTML = `
            <div class="modal__content">
                <ul>
                    <li>Модель: ${this.name}</li>
                    <li>Модель: ${this.model}</li>
                    <li>Дата установки: ${this.setDate}</li>
                    <li>Состояние: ${this.condition}</li>
                    <li>Дата обслуживания: ${this.useDate}</li>
                    <li>Текущие уставки: ${this.setpoint}</li>
                </ul>
            </div>
          `;
          this.parent.append(element);
        }
      }

    class MainInfo {
      constructor(tempOutside, weather, recomendTemp, status, parentSelector) {
        this.tempOutside = tempOutside;
        this.weather = weather;
        this.recomendTemp = recomendTemp;
        this.status = status;
        this.parent = document.querySelector(parentSelector);
        this.rate = 35;
        this.changeToRecomend();
      }

      changeToRecomend() {
        this.recomendTemp = this.tempOutside + this.rate
      };
      
      render() {
        const element = document.createElement('div');
        this.parent.innerHTML = '';
        element.innerHTML = `
          <ul>
            <li>Температура наружнего воздуха: ${Math.round(this.tempOutside)} &#8451</li>
            <li>Погода: ${this.weather}</li>
            <li>Рекомендованная температура теплоносителя: ${Math.round(this.recomendTemp)}</li>
            <li>Статус: ${this.status}</li>
          </ul>
        `;
        this.parent.append(element);
      }
    }
export {MenuTool};
export {MainInfo};