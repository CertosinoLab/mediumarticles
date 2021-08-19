import { Chart, registerables } from 'chart.js';
import {Component, EventEmitter, Event, Element, h, Listen} from '@stencil/core';

@Component({
  tag: 'chart-container',
  styleUrl: 'chart-container.css',
  shadow: true,
})
export class ChartContainer {
  @Event() private todoCompleted: EventEmitter<any>;
  @Element() private element: HTMLElement;

  myChartRef: any;
  myChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  componentDidLoad() {
    this.myChartRef = this.element.shadowRoot.querySelectorAll('canvas.myChart');
  }

  @Listen('changedDataset', { target: 'window' })
  changedDatasetEventHandler(event: any) {
    //const myChartRef: any = this.element.shadowRoot.querySelectorAll('canvas.myChart');
    //myChartRef[0].destoy();
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ", this.myChartRef);
    if(this.myChart !== undefined) {
      this.myChart.destroy();
    }

    console.log(event);

    this.myChart = new Chart(
      this.myChartRef,
      event.detail
    );
  }

  /*
  componentDidLoad() {
    const myChartRef: any = this.element.shadowRoot.querySelectorAll('canvas.myChart');

    let myChart = new Chart(
      myChartRef,
      this.config
    );
  }
  */


  private myCustomEvent = (event: any) => {
    console.log("sono qui: ", event);
    this.todoCompleted.emit({
      "pippo": 50,
      "topolino": 100
    }); // now correct this
  }

  render() {
    return (
      <div class="chartContainer">
        <canvas class="myChart"></canvas>
      </div>
    );
  }

}
