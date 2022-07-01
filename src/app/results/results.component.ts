import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartPoint } from '../shared/components/scatter-chart/scatter-chart.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { ILog } from '../shared/services/logger.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  public ngrxData: ILog[];
  public ngxsData: ILog[];
  public ngxsChartData: ChartPoint[];
  public ngrxChartData: ChartPoint[];
  public ngxsDuration: number;
  public ngrxDuration: number;
  public ngxsAvrDuration: number;
  public ngrxAvrDuration: number;

  constructor(private localStorageService: LocalStorageService) {}

  public ngOnInit(): void {
      this.initData();
      this.buildChartData();

      this.ngxsDuration = this.getFullDuration(this.ngxsData);
      this.ngrxDuration = this.getFullDuration(this.ngrxData);
      this.ngrxAvrDuration = this.getAverageDuration(this.ngrxData);
      this.ngxsAvrDuration = this.getAverageDuration(this.ngxsData);
      console.log(this.ngrxData)
  }

  private initData(): void {
    this.ngrxData = JSON.parse(this.localStorageService.getData('ngrx')) as ILog[];
    this.ngxsData = JSON.parse(this.localStorageService.getData('ngxs')) as ILog[];
  }

  private get 

  private buildChartData(): void{
    this.ngrxChartData =  this.ngrxData.map(v => ({x: v.start, y: v.duration}) as ChartPoint);
    this.ngxsChartData =  this.ngxsData.map(v => ({x: v.start, y: v.duration}) as ChartPoint);
  }

  private getFullDuration(data: ILog[]): number{
    const lastItem = data[data.length-1]
    return lastItem.duration + lastItem.start;
  }

  private getAverageDuration(data: ILog[]): number{
    return data.map(item => item.duration).reduce((a, b) => (a + b)) / data.length;
  }
}
