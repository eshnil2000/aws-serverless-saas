import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData0: ChartData<'bar'> = {
    labels: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge', '12xlarge', '16xlarge'],
    datasets: [
      { data: [124,221,335,388,474,790,955], label: 'M6a' },
      { data: [124,221,600,850,902,1001,1200], label: 'M6i' },
      
    ],
    
  };
  public barChartData1: ChartData<'bar'> = {
    labels: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge', '12xlarge', '16xlarge'],
    datasets: [
      { data: [1200,1001,902,850,600,221,124], label: 'M6a' },
      { data: [955,790,474,388,335,221,124], label: 'M6i' },
      
    ],
    
  };
  
  public barChartData2: ChartData<'bar'> = {
    labels: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge', '12xlarge', '16xlarge'],
    datasets: [
      { data: [124,221,335,388,474,790,955], label: 'M5i' },
      { data: [124,221,600,850,902,1001,1200], label: 'M6i' },
      
    ],
    
  };
  public barChartData3: ChartData<'bar'> = {
    labels: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge', '12xlarge', '16xlarge'],
    datasets: [
      { data: [1200,1001,902,850,600,221,124], label: 'M5i' },
      { data: [955,790,474,388,335,221,124], label: 'M6i' },
      
    ],

    
    
  };
  
  
  public barChartData4: ChartData<'bar'> = {
    labels: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge', '12xlarge', '16xlarge'],
    datasets: [
      { data: [124,221,600,850,902,1001,1200], label: 'M6i No SSL' },
      { data: [124,221,335,388,474,790,955], label: 'M6i SSL' },
      { data: [124,221,600,850,902,1001,1200], label: 'M6i SSL with QAT' },
      
    ],
    
  };
  

  public barChartData5: ChartData<'bar'> = {
    labels: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge', '12xlarge', '16xlarge'],
    datasets: [
      { data: [955,790,474,388,335,221,124], label: 'M6i No SSL' },
      { data: [1200,1001,902,850,600,221,124], label: 'M6i SSL' },
      { data: [955,790,474,388,335,221,124], label: 'M6i SSL with QAT' },
    ],

    
    
  };
  

  

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {}

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {}

  public randomize(): void {
    // Only Change 3 values
    this.barChartData1.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards0 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'M6a, M6i CPS', cols: 1, rows: 1 },
          /*{ title: 'M6a, M6i Latency', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
        ];
      }

      return [
        { title: 'M6a, M6i CPS', cols: 1, rows: 1 },
         /* { title: 'M6a, M6i Latency', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
      ];
    })
  );
  
    cards1 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          /*{ title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M5i, M6i Latency', cols: 1, rows: 1 },
          /*{ title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
        ];
      }

      return [
       /* { title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M6i, M6i Latency', cols: 1, rows: 1 },
         /* { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
      ];
    })
  );
  
  cards2 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'M5i, M6i CPS', cols: 1, rows: 1 },
          /*{ title: 'M6a, M6i Latency', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
        ];
      }

      return [
        { title: 'M5i, M6i CPS', cols: 1, rows: 1 },
         /* { title: 'M6a, M6i Latency', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
      ];
    })
  );
  
    cards3 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          /*{ title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M5i, M6i Latency', cols: 1, rows: 1 },
          /*{ title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
        ];
      }

      return [
       /* { title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M6i, M6i Latency', cols: 1, rows: 1 },
         /* { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
      ];
    })
  );

    cards4 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          /*{ title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M6i CPI', cols: 1, rows: 1 },
          /*{ title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
        ];
      }

      return [
       /* { title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M6i CPI', cols: 1, rows: 1 },
         /* { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
      ];
    })
  );

    cards5 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          /*{ title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M6i Latency', cols: 1, rows: 1 },
          /*{ title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
        ];
      }

      return [
       /* { title: 'M5i, M6i CPS', cols: 1, rows: 1 },*/
          { title: 'M6i Latency', cols: 1, rows: 1 },
         /* { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },*/
      ];
    })
  );


  constructor(private breakpointObserver: BreakpointObserver) {}
}
