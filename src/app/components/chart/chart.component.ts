import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    // this.chartService.getTodos().subscribe((data) => {
    //   this.xData = data.values.map((item) => item.x).slice(0, 10);
    //   this.yData = data.values.map((item) => item.y).slice(0, 10);

    //   console.log(this.yData, this.xData);
    // });

    var myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['July', 'October', '2020', 'April'],
        datasets: [
          {
            label: 'Trade Volume (USD)',
            data: [162, 1130, 731, 171, 786, 801],
            backgroundColor: [
              'rgba(34, 49, 63, 0.9)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(34, 49, 63, 0.6)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
