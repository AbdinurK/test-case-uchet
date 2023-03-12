<template>
  <label :for="id" class="rf-checkbox">
    <input
      :id="id"
      v-model="model"
      :disabled="disabled"
      type="checkbox"
      class="rf-checkbox__field"
    />
    <span class="rf-checkbox__indicator"></span>
    <span>
      <!-- @slot slot for checkbox label -->
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * ATOMS/RFCheckbox
 * @displayName RFCheckbox
 */
export default Vue.extend({
  name: 'RFCheckbox',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the checkbox
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state of the checkbox
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the checkbox
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
         * Emit the value from checkbox
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
$checkbox-accent: #605dec;
$checkbox-disabled: #8c8ca1;

.rf-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;

  span.rf-checkbox__indicator {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid $checkbox-accent;
    border-radius: 2px;
    margin-right: 8px;
    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      transform: translate(-50%, -50%);
      background-color: $checkbox-accent;
      border-radius: 2px;
      transition: 0.25s;
      opacity: 0;
    }
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.rf-checkbox__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.rf-checkbox__indicator {
      border-color: $checkbox-disabled;
      &::before {
        background-color: $checkbox-disabled;
      }
    }
    &:disabled ~ span {
      color: $checkbox-disabled;
    }
  }
}
</style>
