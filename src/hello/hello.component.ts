import {Component} from '@angular/core'

@Component({
  selector: 'app-hello',
  // inline template
  // template: `
  //   <h2>Hello there!</h2>
  //   <h3>Your name: {{ user.name}}</h3>
  //   <p>Your age: {{ user.age}}</p>`

  // outline template
  templateUrl:'./hello.component.html',
})

// Data binding

export class HelloComponent {
  name = "Test"
  // for interpolation
  user = {
    name: `Nguyen Bao`,
    age: 21
  }

  // data binding
  inputType = 'text'

  // event binding
  addName(event: any){
    console.log("add", event)
  }
}
