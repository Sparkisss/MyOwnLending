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
export {MenuTool};