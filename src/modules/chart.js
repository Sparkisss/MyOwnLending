
import Chart from 'chart.js/auto';
// import { getContext } from 'chart.js/helpers'

(async function() {
    const data = [0, 83, 30, 72, 30, 95, 30, 82, 0];
   
    
    Chart.defaults.borderColor = '#fff';
    Chart.defaults.font.family = "Asap";
    Chart.defaults.font.size = 15;
    
    
    new Chart(
      document.getElementById('chart'),
      {
        type: 'line',
        data: {
          labels: ['0', 'HTML', '', 'CSS', '', 'SCSS', '', 'JS', ''],
          datasets: [
            {
              label: '',
              borderColor: 'grey',
              backgroundColor: 'black',
              borderWidth: 1,
              data: data,              
              tension: 0.2,
            },            
          ],
        },
        options: {
          scales: {
              
              yAxes: [{
              ticks: {
              
                     min: 0,
                     max: 100,
                     callback: function(value){return value+ "%"}
                  },  
                    scaleLabel: {
                    display: true,
                    labelString: "Percentage"
                  }
              }]
          }
      },
        options: {
          
            animation: false,
            layout: {
                padding: 50,               
            },
            plugins: {
                // colors: {
                //     enabled: false
                //   },                  
              legend: {                
                display: false
              },
              tooltip: {                
                enabled: false
              },
            },
          },         
      }
      
    );
  })();