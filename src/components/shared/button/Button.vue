<template>
  <button :class="buttonStyle" :type="type" @click="runAction()">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    check: {
      required: false,
      default: false,
      type: Boolean
    },
    btnStyle: {
      required: false,
      default: 'default',
      type: String
    }
  },
  computed: {
    buttonStyle() {
      console.log(this.btnStyle);
      if(this.btnStyle == 'default') return 'button button-default';
      if(this.btnStyle == 'danger') return 'button button-danger';
    }
  },
  methods: {
    runAction() {
      if(this.check) {
        if(confirm('Confirma a operação?')){
          this.$emit('activeButton');
        }
        return;
      } 
      this.$emit('activeButton');        
    }
  }
}
</script>

<style scoped>
  .button {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .button-danger {
    background: firebrick;
    color: white;
  }

  .button-default {
    background: darkcyan;
    color: white;
  }
</style>
