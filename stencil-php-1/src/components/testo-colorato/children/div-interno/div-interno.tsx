import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'div-interno',
  styleUrl: 'div-interno.css',
  shadow: true,
})
export class DivInterno {
  @Prop() mioTesto: string;

  render() {
    return (
      <div style={{backgroundColor:"green"}}>
        <p>{this.mioTesto}</p>
      </div>
    );
  }

}
