import Vue from 'vue'
import store from "src/store/index"
import { Base64 } from 'js-base64';
class Entry {
  constructor({el,module}){
    this.module = module;
    this.el = el ? "#"+el : "#app";
    this.init();
  }
  init(){
    new Vue({
      el: this.el,
      store,
      render: h => h(this.module)
    })
  }
}
export default Entry
