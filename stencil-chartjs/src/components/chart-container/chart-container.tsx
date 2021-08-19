import { Chart, registerables } from 'chart.js';
import {Component, EventEmitter, Event, Element, h} from '@stencil/core';

@Component({
  tag: 'chart-container',
  styleUrl: 'chart-container.css',
  shadow: true,
})
export class ChartContainer {
  @Event() private todoCompleted: EventEmitter<any>;
  @Element() private element: HTMLElement;

  constructor() {
    Chart.register(...registerables);
  }

  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  data = {
    labels: this.labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  config: any = {
    type: 'line',
    data: this.data,
    options: {}
  };

  componentDidLoad() {
    const myChartRef: any = this.element.shadowRoot.querySelectorAll('canvas.myChart');

    let myChart = new Chart(
      myChartRef,
      this.config
    );
  }

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
        <p onClick={this.myCustomEvent} style={{color: 'red'}}>Sono Chart Container ciao!</p>
        <canvas class="myChart"></canvas>
      </div>
    );
  }

}
