import Validation from '../../validation'

const validation = new Validation()


class ValidBase {
  constructor() {
    this.errors = {}
  }
  register(data) {
    for(let i in data) {
      return {
        i: this.handle(i, data[i])
      }
    }
  }

  validate(name) {
    this.rules()[name].forEach(v => {
      if(Array.isArray(v)) {
        const validation_name = v[0]
        v.shift()
        if(validation[validation_name](this.target[name], ...v)) this.notify(name, validation_name)
      }else {
        if(validation[v](this.target[name])) this.notify(name, v)
      }
    })
    console.log(this.errors)
    return this.errors
  }

  validateAll() {
    this.rules.forEach(v => {
      if(Array.isArray(v)) {

      }else {
        validation[v](this.target[name])
      }
    })
  }

  notify(name, rule) {
    if(!this.errors[name]) this.errors[name] = []
    this.errors[name].push(this.messages()[name][rule])
  }

}


export default class Valid extends ValidBase {
  constructor(target) {
    super()
    this.target = target
  }
  rules() {
    return {
      catch1: ['require', ['maxLength', 30]]
    }
  }
  messages() {
    return {
      catch1: {
        require: '必須項目です。',
        maxLength: '30文字以内で入力してください。'
      }
    }
  }
}

