import { Chart, registerables } from 'chart.js';
import {Component, EventEmitter, Event, Element, h, Listen} from '@stencil/core';

@Component({
  tag: 'chart-container',
  styleUrl: 'chart-container.css',
  shadow: true,
})
export class ChartContainer {
  @Element() private element: HTMLElement;

  myChartRef: any;
  myChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  componentDidLoad() {
    console.log("certo che funziona!");
    this.myChartRef = this.element.shadowRoot.querySelectorAll('canvas.myChart');
  }

  @Listen('changedDataset', { target: 'window' })
  changedDatasetEventHandler(event: any) {
    if(this.myChart !== undefined) {
      this.myChart.destroy();
    }

    this.myChart = new Chart(
      this.myChartRef,
      event.detail
    );
  }

  render() {
    return (
      <div class="chartContainer">
        <canvas class="myChart"></canvas>
      </div>
    );
  }
}
