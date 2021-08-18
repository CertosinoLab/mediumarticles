import {Component, EventEmitter, Event, h} from '@stencil/core';

@Component({
  tag: 'chart-container',
  styleUrl: 'chart-container.css',
  shadow: true,
})
export class ChartContainer {
  @Event() todoCompleted: EventEmitter<any>;

  private myCustomEvent = (event: any) => {
    console.log("sono qui: ", event);
    this.todoCompleted.emit(1); // now correct this
  }

  render() {
    return (
      <p onClick={this.myCustomEvent} style={{color: 'red'}}>Sono Chart Container ciao!</p>
    );
  }

}
