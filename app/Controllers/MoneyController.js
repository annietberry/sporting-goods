import { ProxyState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js";

export default class MoneyController {
  constructor() {
    ProxyState.on('money', addMoney);
    addMoney()
  }

  addMoney() {
    ProxyState.money++
    ProxyState.money = ProxyState.money
    document.getElementById('money').innerHTML = ProxyState.money

  }

}