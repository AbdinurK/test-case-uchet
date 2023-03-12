<template>
  <component
    :is="!clickable ? 'div' : 'button'"
    :class="[
      'rf-badge',
      `rf-badge--${variant}`,
      clickable && 'rf-badge--clickable',
    ]"
    @click="onClick"
  >
    <!-- @slot main slot for content -->
    <slot />
    <button v-if="withClear" class="rf-badge__close" @click.stop="onClear">
      <CloseIcon />
    </button>
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/PropsValidator'
import CloseIcon from 'icons/close.svg?inline'

type VariantType = 'success' | 'error' | 'warn' | 'count' | 'default'

/**
 * ATOMS/RFBadge
 * @displayName RFBadge
 */
export default Vue.extend({
  name: 'RFBadge',
  components: {
    CloseIcon,
  },
  props: {
    /**
     * Appearance variant of the badge
     * @values success, error, warn, count, default
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['success', 'error', 'warn', 'count', 'default'],
          v,
          'ATOMS/RFBadge'
        )
      },
    },
    /**
     * Flag that turns interaction on
     */
    clickable: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag to show clear button in badge
     */
    withClear: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * Click handler of the badge
     * @event click
     * @property {PointerEvent} e
     */
    onClick(e: PointerEvent): void {
      this.$emit('click', e)
    },
    /**
     * Click handler of the badge clear
     * @event clear
     * @property {PointerEvent} e
     */
    onClear(e: PointerEvent): void {
      this.$emit('clear', e)
    },
  },
})
</script>

<style lang="scss" scoped>
$badge-border-color: $c-secondary;
$badge-hover-background: rgba($badge-border-color, 0.25);
$badge-padding: 6px 12px;
$badge-font-family: $f-text;
$badge-font-size: rem(12);
$badge-font-weight: 500;
$badge-variant-success: $c-success;
$badge-variant-error: #ff6449;
$badge-variant-warn: #f0e583;
$badge-variant-count: $c-secondary;

.rf-badge {
  appearance: none;
  display: inline-flex;
  align-items: center;
  padding: $badge-padding;
  background: transparent;
  border: 1px solid $badge-border-color;
  border-radius: 100px;
  font-family: $badge-font-family;
  font-size: $badge-font-size;
  font-weight: $badge-font-weight;
  line-height: 1.75;
  transition: 0.25s;
  &--success {
    background: $badge-variant-success;
    border-color: $badge-variant-success;
    color: #fff;
  }
  &--warn {
    background: $badge-variant-warn;
    border-color: $badge-variant-warn;
  }
  &--error {
    background: $badge-variant-error;
    border-color: $badge-variant-error;
    color: #fff;
  }
  &--count {
    background: $badge-variant-count;
    border-color: $badge-variant-count;
    color: #fff;
  }
  &--clickable {
    cursor: pointer;
    &:hover {
      background: $badge-hover-background;
    }
    &:active {
      background: darken($color: $badge-hover-background, $amount: 15);
    }
  }
  &__close {
    appearance: none;
    outline: none;
    border: none;
    padding: 0;
    margin: 0 -3px 0 3px;
    width: 16px;
    height: 16px;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      transform: rotate(90deg);
    }
    &:active {
      transform: rotate(90deg) scale(0.75);
    }
  }
}
</style>
