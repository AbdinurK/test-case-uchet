<template>
  <component
    :is="tag"
    :class="['rf-heading', variant && `rf-heading--${variant}`]"
  >
    <!-- @slot default slot for content -->
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/PropsValidator'

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type VariantType = 'light' | 'dark'

/**
 * ATOMS/RFHeading
 * @displayName RFHeading
 */
export default Vue.extend({
  name: 'RFHeading',
  props: {
    tag: {
      type: String as PropType<TagType>,
      default: 'h1',
      validator(v: TagType) {
        return PropsValidator.includes<TagType>(
          ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          v,
          'ATOMS/RFHeading'
        )
      },
    },
    variant: {
      type: String as PropType<VariantType>,
      default: 'dark',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['light', 'dark'],
          v,
          'ATOMS/RFHeading'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$f-heading: 'Golos', arial, sans-serif;
$color-dark: #4a4a68;
$color-light: #fff;

/** H1 font styles */
$h1-font-size: rem(62);
$h1-font-weight: 600;
$h1-line-height: 72px;
$h1-margin: 20px 0;

/** H2 font styles */
$h2-font-size: rem(48);
$h2-font-weight: 500;
$h2-line-height: 58px;
$h2-margin: 15px 0;

/** H3 font styles */
$h3-font-size: rem(28);
$h3-font-weight: 500;
$h3-line-height: 34px;
$h3-margin: 10px 0;

.rf-heading {
  &--dark {
    color: $color-dark;
  }
  &--light {
    color: $color-light;
  }
}

h1.rf-heading {
  font-family: $f-heading;
  font-size: $h1-font-size;
  font-weight: $h1-font-weight;
  line-height: $h1-line-height;
  margin: $h1-margin;
}
h2.rf-heading {
  font-family: $f-heading;
  font-size: $h2-font-size;
  font-weight: $h2-font-weight;
  line-height: $h2-line-height;
  margin: $h2-margin;
}
h3.rf-heading {
  font-family: $f-heading;
  font-size: $h3-font-size;
  font-weight: $h3-font-weight;
  line-height: $h3-line-height;
  margin: $h3-margin;
}
</style>
