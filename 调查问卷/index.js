var bus = new Vue();
var app = new Vue({
  el: '#app',
  data: function() {
    return {
      picked: '',
      checked: []
    }
  },
  methods: {
    handlePick(e) {
      this.picked = e.target.value
      console.log(this.picked)
      bus.$emit('on-picked', this.picked)
    },
    handleCheck(e) {
      var value = e.target.value
      this.getCkeck(value)
      console.log(this.checked)
    },
    getCkeck(value) {
      var index = this.checked.indexOf(value)
      if(index != -1) {
        this.checked.splice(index, 1)
      } else {
        this.checked.push(value)
      }
    },
    reset() {
      this.picked = '',
      this.checked = []
    }
  },
})