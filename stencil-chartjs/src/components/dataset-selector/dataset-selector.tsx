import {Component, h, Event, EventEmitter, Element} from '@stencil/core';

@Component({
  tag: 'dataset-selector',
  styleUrl: 'dataset-selector.css',
  shadow: true,
})
export class DatasetSelector {
  @Event() private changedDataset: EventEmitter<any>;
  @Element() private element: HTMLElement;

   options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
   ]

  componentDidLoad() {
    setTimeout(() => {
      this.changedDataset.emit(this.config)
    }, 100);
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
      label: 'My First Dataset',
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
    if(event.path[0].selectedIndex === 0) {
      this.data.datasets[0].data = [0, 10, 5, 2, 20, 30, 45];
      this.data.datasets[0].label = "My First Dataset";
    } else if (event.path[0].selectedIndex === 1) {
      this.data.datasets[0].data = [30, 20, 40, 45, 20, 3, 10];
      this.data.datasets[0].label = "My Second Dataset";
    } else {
      this.data.datasets[0].data = [10, 10, 15, 12, 120, 130, 145];
      this.data.datasets[0].label = "My Third Dataset";
    }
    this.changedDataset.emit(this.config); // now correct this
  }

  render() {
    return (
      <div>
        <label>Set Dataset: </label>
        <select class="mySelect" onChange={this.changedDatasetEvent}>
          <option value="dataset1">Dataset 1</option>
          <option value="dataset2">Dataset 2</option>
          <option value="dataset3">Dataset 3</option>
        </select>
      </div>
    );
  }
}
