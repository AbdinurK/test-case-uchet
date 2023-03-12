<template>
  <div class="rf-toggle">
    <input
      :id="id"
      v-model="model"
      :disabled="disabled"
      class="rf-toggle__field"
      type="checkbox"
      name=""
    />
    <div class="rf-toggle__layer"></div>
    <div class="rf-toggle__indicator"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/RFToggle
 * @displayName RFToggle
 */
export default Vue.extend({
  name: 'RFToggle',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the toggle
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state of the toggle
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the toggle
     * @model
     */
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get(): boolean {
        return this.value
      },
      set(value: boolean): void {
        /**
         * Emit the value from toggle
         * @type {function}
         * @property {boolean} value
         */
        this.$emit('change', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$toggle-background: rgba($c-secondary, 0.25);
$toggle-background-active: rgba($c-secondary, 1);
$toggle-background-disabled: rgba(#8c8ca1, 0.5);

.rf-toggle {
  position: relative;
  width: 48px;
  height: 24px;
  &__field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    cursor: pointer;
    &:checked {
      ~ .rf-toggle__layer {
        background-color: $toggle-background-active;
      }
      ~ .rf-toggle__indicator {
        transform: translate(28px, 4px);
      }
    }
    &:disabled {
      ~ .rf-toggle__layer {
        background-color: $toggle-background-disabled;
      }
    }
  }
  &__layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: $toggle-background;
    pointer-events: none;
    transition: 0.3s;
  }
  &__indicator {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(4px, 4px);
    pointer-events: none;
    transition: 0.3s;
  }
}
</style>
