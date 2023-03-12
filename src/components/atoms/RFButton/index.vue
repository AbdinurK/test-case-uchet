<template>
  <button
    :class="[
      'rf-btn',
      variant && `rf-btn--${variant}`,
      isIcon && 'rf-btn--icon',
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <!-- @slot title of the button -->
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/PropsValidator'

type VariantType = 'primary' | 'secondary' | 'tertiary'

/**
 * ATOMS/RFButton
 * @displayName RFButton
 */
export default Vue.extend({
  name: 'RFButton',
  props: {
    /**
     * Variant of appearence of the button
     * @values primary, secondary, tertiary
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'primary',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['primary', 'secondary', 'tertiary'],
          v,
          'ATOMS/RFButton'
        )
      },
    },
    /**
     * Diabled state of the button
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Loading state of the button
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag to use when some icon is coming to slot
     */
    isIcon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * Click handler of the button
     * @event click
     * @property {PointerEvent} e
     */
    onClick(e: PointerEvent): void {
      this.$emit('click', e)
    },
  },
})
</script>

<style lang="scss" scoped>
/* Disabled colors */
$c-disabled-background: #fafcfe;
$c-disabled-color: #c3c3ca;

/* Primary variant colors */
$c-primary-background: #1672eb;
$c-primary-hover: #145fc2;
$c-primary-active: #063572;
$c-primary-color: #fff;

/* Secondary variant colors */
$c-secondary-background: #c5dcfa;
$c-secondary-hover: #145fc2;
$c-secondary-active: #063572;
$c-secondary-color: #1672eb;

/* Tertiary variant colors */
$c-tertiary-background: #fff;
$c-tertiary-hover: #145fc2;
$c-tertiary-active: #063572;
$c-tertiary-color: #1672eb;

.rf-btn {
  appearance: none;
  cursor: pointer;
  transition: 0.25s;
  padding: 14px 16px;
  border: 1px solid transparent;
  font-size: rem(20);
  border-radius: 8px;
  &:disabled {
    background-color: $c-disabled-background;
    color: $c-disabled-color;
    &:hover {
      background-color: $c-disabled-background;
    }
  }
  &--primary {
    background: $c-primary-background;
    color: $c-primary-color;
    &:hover {
      background: $c-primary-hover;
    }
    &:active {
      background: $c-primary-active;
    }
  }
  &--secondary {
    background: $c-secondary-background;
    color: $c-secondary-color;
    &:hover {
      color: $c-secondary-hover;
    }
    &:active {
      color: $c-secondary-active;
    }
  }
  &--tertiary {
    background: $c-tertiary-background;
    color: $c-tertiary-color;
    &:hover {
      color: $c-tertiary-hover;
    }
    &:active {
      color: $c-tertiary-active;
    }
  }
  &--icon {
    padding: 19px;
  }
}
</style>
