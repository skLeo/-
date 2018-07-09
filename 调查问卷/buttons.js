Vue.component('myButton', {
  name: 'btn',
  template: `<button
                :value="value"
                @click="handleChange(way)"
                class="myBtn"
                :style="styles"
                v-show="btnShow">
                {{ text }}
             </button>`,
  props: {
    styles: {
      type: Object,
      default: {
        background: '#fff'
      }
    },
    text: {
      type: String,
      default: ''
    },
    way: {
      type: String,
      default:''
    },
    currentValue: {
      type: Number,
      default: ''
    },
    picked: {
      type: String,
      default: ''
    },
    checked: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {
      btnShow: true,
      value: this.currentValue,
      picked: ''
    }
  },
  methods: {
    // getPans() {

    // },
    handleChange(way) {
      var _this = this
      this.value = this.currentValue
      if(way == 'next') {
        if(this.currentValue == 1) {
          if(!this.picked) {
            alert('至少选择一项')
            return
          }
        } else if(this.currentValue == 2) {
          if(this.checked.length < 2) {
            alert('至少选择两项')
            return
          }
        }
        this.value += 1
      } else if(way == 'previous') {
        this.value -= 1
      } else if(way == 'reset') {
        this.value = 1
        this.$emit('reset-pane', '')
      }
      this.$emit('updateCurrent', this.value)
    }
  }
})