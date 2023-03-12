<template>
  <label :for="id" class="rf-radio">
    <input
      :id="id"
      v-model="model"
      :value="value"
      :name="name"
      :disabled="disabled"
      type="radio"
      class="rf-radio__field"
    />
    <span class="rf-radio__indicator"></span>
    <span class="rf-radio__message"><slot /></span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type RadioValueType = boolean | string | number

/**
 * ATOMS/RFRadio
 * @displayName RFRadio
 */
export default Vue.extend({
  name: 'RFRadio',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the radio
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Name of the radio, that uses to group them
     */
    name: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state of the radio
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the radio
     * @model
     */
    value: {
      type: [String, Number, Boolean] as PropType<RadioValueType>,
      default: '',
    },
  },
  computed: {
    model: {
      get(): RadioValueType {
        return this.value
      },
      set(value: RadioValueType): void {
        /**
         * Emit the value from radio
         * @type {function}
         * @property {RadioValueType} value
         */
        this.$emit('change', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$radio-accent: $c-secondary;
$radio-disabled: #8c8ca1;

.rf-radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  span.rf-radio__indicator {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid $radio-accent;
    border-radius: 50%;
    margin-right: 8px;
    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      transform: translate(-50%, -50%);
      background-color: $radio-accent;
      border-radius: 50%;
      transition: 0.25s;
      opacity: 0;
    }
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.rf-radio__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.rf-radio__indicator {
      border-color: $radio-disabled;
      &::before {
        background-color: $radio-disabled;
      }
    }
    &:disabled ~ span {
      color: $radio-disabled;
    }
  }
}
</style>
