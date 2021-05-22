export default class Item {
  constructor(name, price, description, stock, img) {
    this.name = name,
      this.price = price,
      this.description = description,
      this.stock = stock,
      this.img = img
  }

  // get Template() {

  //   return /*html*/`
  //     <div class="card p-2 value">
  //         ${this.title}
  //     </div>
  //     `
  // }
}