import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "list", "input"]
  update() {
    // console.log(this.formTarget.action)
    // console.log(this.listTarget)
    // console.log(this.inputTarget.value)
    // console.log(url)
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, {headers: {"Accept": "text/plain"}})
    .then(response => response.text())
    .then((data) =>
      this.listTarget.outerHTML = data)
  }

}
