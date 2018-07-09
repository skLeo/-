Vue.component('myContent', {
  name: 'myContent',
  template: `
    <div v-show="contentShow" class="questions">
      <h4>{{index}}.{{title}}</h4>
      <slot></slot>
    </div>
    `,
    props: {
      index: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      contentShow: {
        type: Boolean,
        default: true
      }
    },
    data: function() {
    }
})