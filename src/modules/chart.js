"use strict"
import Chart from 'chart.js/auto';
// import { getContext } from 'chart.js/helpers'

// (async function() {
//     const data = [
//       { skill: '0', count: 0 },
//       { skill: 'Xd', count: 83 },
//       { skill: '', count: 30 },
//       { skill: 'Ae', count: 72 },
//       { skill: '', count: 30 },
//       { skill: 'Ps', count: 95 },
//       { skill: '', count: 30 },
//       { skill: 'Ai', count: 82 },
//       { skill: '', count: 0 },
//     ];
    
//     Chart.defaults.borderColor = '#fff';
//     Chart.defaults.font.family = "Asap";
//     Chart.defaults.font.size = 15;
          
//     new Chart(
//       document.getElementById('chart'),
//       {
//         type: 'line',
//         data: {
//           labels: data.map(row => row.skill),
//           datasets: [
//             {
//               label: '',
//               borderColor: 'green',
//               backgroundColor: 'green',
//               borderWidth: 5,
//               data: data.map(row => row.count),              
//               tension: 0.2
//             }
//           ],
//         },
//         options: {
//             animation: false,
//             layout: {
//                 padding: 50,               
//             },
//             plugins: {
//                 // colors: {
//                 //     enabled: false
//                 //   },                  
//               legend: {                
//                 display: false
//               },
//               tooltip: {                
//                 enabled: false
//               },
//             },
//           },         
//       }
//     );
//   })();

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const plugin = {
    id: 'chart',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '000';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };
const config = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        customCanvasBackgroundColor: {
          color: 'lightGreen',
        }
      }
    },
    plugins: [plugin],
  };

  


  new Chart(document.getElementById('chart'), config);