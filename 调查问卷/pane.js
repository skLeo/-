Vue.component('pane', {
  template: `
    <div class="main">
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="btn">
        <my-button
          @reset-pane="reset" 
          :currentValue="currentValue"
          v-key="index" 
          @updateCurrent="updateCurrent"
          v-for="(item, index) in btnArg"  
          :way="item.way" :text="item.text"
          :picked="picked"
          :checked="checked">
        </my-button>
      </div>
    </div>
  `,
  data: function() {
    return {
      navList: [],
      currentValue: 1,
      btnArg: [{
        way: 'next',
        text: '下一步' 
      },{
        way: 'previous',
        text: '上一步'
      },{
        way: 'reset',
        text: '重置'
      }]
    }
  },
  props: {
    picked: {
      type: String,
      default: ''
    },
    checked: {
      type: Array,
      default: []
    }
  },
  methods: {
    getContents() {
      return this.$children.filter(function(item) {
        return item.$options.name == 'myContent'
      })
    },
    getButtons() {
      return this.$children.filter(function(item) {
        return item.$options.name == 'btn'
      })
    },
    updateCurrent(e) {
      this.currentValue = e
    },
    changeOne() {
      var tabs = this.getButtons()
      if(this.currentValue == 1) {
        tabs[1].btnShow = false
      } else {
        tabs[1].btnShow = true
      }
    },
    updateStatus() {
      var _this = this
      this.getContents().forEach(function(content, index) {
        return content.contentShow = _this.currentValue == index + 1
      })
    },
    reset(msg) {
      this.$emit('reset-index', '')
    }
  },
  watch: {
    currentValue() {
      console.log(111)
      if(this.currentValue == 3) {
        this.$set(this.btnArg[0],'way','commit')
        this.$set(this.btnArg[0],'text','提交')
      } else {
        this.$set(this.btnArg[0],'way','next')
        this.$set(this.btnArg[0],'text','下一步')
      }
      this.changeOne()
      this.updateStatus()
    },
  },
  mounted() {
    this.changeOne()
    this.updateStatus()
  },
})