import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'restaurant-menu-item',
  styleUrl: 'restaurant-menu-item.css',
  shadow: true,
})
export class RestaurantMenuItem {
  @Prop() price: number;
  @Prop() name: string;
  @Prop() imageUrl: string;


  render() {
    return (
      <div>
        <img height="250" width="400" class="menu-item-image" src={this.imageUrl} alt="alternatetext" />
        <p class="menu-item-text">Name: {this.name}</p>
        <p class="menu-item-text">Price: {this.price} €</p>
      </div>
    );
  }

}
