import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables)


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chartdata : any[] = [];
  labeldata : any[] = [];
  realdata  : any[] = [];
  colordata : any[] = [];

  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
    
    this.apiservice.getChartInfo().subscribe(
      (res: any) => {
        this.chartdata = res;
        if(this.chartdata == null) return ;       
        
        this.chartdata.forEach((item) => {
          this.labeldata.push(item.title);
          this.realdata.push(item.price);
          this.colordata.push(item.color);     
        });

        this.renderChart(this.labeldata, this.realdata, this.colordata, 'barchart', 'bar');
        this.renderChart(this.labeldata, this.realdata, this.colordata, 'piechart', 'pie');
        this.renderChart(this.labeldata, this.realdata, this.colordata, 'dochart', 'doughnut');        
        this.renderChart(this.labeldata, this.realdata, this.colordata, 'pochart', 'polarArea');       
        this.renderChart(this.labeldata, this.realdata, this.colordata, 'rachart', 'radar');
      });
    

  }

  renderChart(labeldatas: any, maindata:any, chartcolor:any, chartid:any, charttype:any){
    const myChart = new Chart(chartid, {
      type: charttype,
      data: {
         labels : labeldatas, 
         datasets: [{
              label: 'price',
              data: maindata,
              backgroundColor: chartcolor,
              borderColor: chartcolor,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  }
}
