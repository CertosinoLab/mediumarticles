import {Component, Host, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'dataset-selector',
  styleUrl: 'dataset-selector.css',
  shadow: true,
})
export class DatasetSelector {
  @Event() private changedDataset: EventEmitter<any>;

  constructor() {

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

  private changedDatasetEvent = (event: any) => {
    console.log("pppppppppp evento grafico ", event);
    this.changedDataset.emit(this.config); // now correct this
  }

  render() {
    return (
      <div onClick={this.changedDatasetEvent}>selezione dataset</div>
    );
  }

}
