import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  template: '<button @click="onClick">Click!</button>'
  // template: require('./My.vue')  // 잘못된 사용법
})
export default class MyComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'
  // Component methods can be declared as instance methods
  onClick(): void {
    window.alert(this.message); 
  }
}