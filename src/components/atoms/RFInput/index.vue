<template>
  <label :for="id" :class="['rf-input', isError && 'rf-input--error']">
    <!-- @slot slot for input label -->
    <slot name="label" />
    <input
      :id="id"
      v-model="model"
      :type="type"
      :inputmode="type"
      :placeholder="placeholder"
      :readonly="readonly"
      class="rf-input__field"
    />
    <span v-if="isError" class="rf-input__message">
      <!-- @slot slot for input message -->
      <slot name="message" />
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/PropsValidator'

type InputType = 'text' | 'numeric' | 'email' | 'phone'

/**
 * ATOMS/RFInput
 * @displayName RFInput
 */
export default Vue.extend({
  name: 'RFInput',
  props: {
    /**
     * ID of the input field
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Input field type
     * @values text, numeric, email, phone
     */
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (v: InputType) => {
        return PropsValidator.includes<InputType>(
          ['text', 'numeric', 'email', 'phone'],
          v,
          'ATOMS/RFInput'
        )
      },
    },
    /**
     * Placeholder of input field
     */
    placeholder: {
      type: String,
      default: '-',
    },
    /**
     * Readonly mode for input field
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Disabled state of the input field
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Error state of the input field
     */
    isError: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the input field
     * @model
     */
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get(): string {
        return this.value
      },
      set(value: string): void {
        /**
         * Emit the value from input field
         * @type {function}
         * @property {string} value
         */
        this.$emit('input', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
/** Label styles */
$label-font-size: rem(12);
$label-color: rgba($c-dark, 0.25);

/** Input styles */
$input-font-size: rem(16);
$input-color: $c-text;
$input-placeholder-color: $c-background;
$input-border-color: #ecf1f4;
$input-focused-border-color: $c-secondary;
$input-background: #fff;
$input-hover-background: $c-cards;
$input-error-color: $c-primary;

/** Message styles */
$message-font-size: rem(12);

.rf-input {
  display: flex;
  flex-direction: column;
  font-size: $label-font-size;
  line-height: 20px;
  color: $label-color;
  &__field {
    border: 1px solid $input-border-color;
    box-sizing: border-box;
    border-radius: 6px;
    background: $input-background;
    padding: 11.5px 12px;
    margin: 4px 0;
    font-size: $input-font-size;
    color: $c-text;
    transition: 0.25s;
    outline: none;
    &:hover {
      background: $input-hover-background;
    }
    &:focus {
      border-color: $input-focused-border-color;
      caret-color: $input-focused-border-color;
    }
    &::placeholder {
      color: $input-placeholder-color;
    }
  }
  &__message {
    font-size: $message-font-size;
    line-height: 20px;
    color: $input-error-color;
  }
  &--error {
    .rf-input__field {
      border-color: $input-error-color;
      &:focus {
        caret-color: $input-error-color;
      }
    }
  }
}
</style>
