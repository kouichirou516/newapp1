export class Valid {
  static simple(bool, text, initial = null){
    this.data = initial ? initial : this.data
    if(bool) this.data.push(text)
    return this
  }
  static get() {
    return this.data
  }
}