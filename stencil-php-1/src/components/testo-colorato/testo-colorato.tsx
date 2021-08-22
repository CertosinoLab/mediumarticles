import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'testo-colorato',
  styleUrl: 'testo-colorato.css',
  shadow: true,
})
export class TestoColorato {
  @Prop() mioTesto: string;

  render() {
    return (
      <div>
        <p style={{color: "red"}}>{this.mioTesto}</p>
        <div-interno mio-testo={this.mioTesto}></div-interno>
      </div>
    );
  }

}
