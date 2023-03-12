<template>
  <p :class="['text', variant && `text--${variant}`]">
    <!-- @slot default slot for content -->
    <slot />
  </p>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/PropsValidator'

type VariantType = 'large' | 'mid' | 'default' | 'small'

/**
 * ATOMS/RFText
 * @displayName RFText
 */
export default Vue.extend({
  name: 'RFText',
  props: {
    /**
     * Variant of appearence of the text
     * @values large, mid, default, small
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['large', 'mid', 'default', 'small'],
          v,
          'ATOMS/RFText'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.text {
  &--default {
    font-size: 20px;
    line-height: 28px;
  }
  &--large {
    font-size: 24px;
    line-height: 34px;
    font-weight: 500;
  }
  &--mid {
    font-size: 24px;
    line-height: 34px;
  }
  &--small {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
