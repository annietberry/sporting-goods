import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";


export default class ItemsController {
  constructor() {
    ProxyState.on('items', this.drawItems)
    this.drawItems()
  }
  drawItems() {
    let template = ''
    ProxyState.items.forEach(item => {

      template += /*html*/`
    <div class="col-3 my-3">
    <div class="card bg-light">
    <img src="//placehold.it/300x300" class="img-fluid">
    <label for="itemName">Item Name: ${item.name}</label>
    <label for="price">Price: ${item.price} </label>
    <label for="price">Description: ${item.price} </label>
    <label for="stock">In Stock: ${item.stock} <button class="btn btn-primary" onclick="app.itemsController.addToCart(event)">Add to Cart</button> </label>
    <!--Add to Cart Button-->
    </div>
    </div>
    `
    })
    document.getElementById('item').innerHTML = template

  }


  addToCart(event) {
    event.preventDefault()
    console.log(event)
    console.log("You added this to the cart")
  }



}



