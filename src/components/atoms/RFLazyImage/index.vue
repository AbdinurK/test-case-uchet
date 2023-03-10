<template>
  <figure
    v-lazyload
    :class="['rf-lazy-image', variant && `rf-lazy-image--${variant}`]"
  >
    <div class="rf-lazy-image__sceleton"></div>
    <client-only>
      <img :data-url="url" :alt="alt" src="" />
    </client-only>
    <figcaption v-if="caption" class="rf-lazy-image__caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import LazyLoadImage from 'directives/LazyLoadImage'
import PropsValidator from 'services/PropsValidator'

type VariantType = 'default' | 'half' | 'third' | 'quarter'

/**
 * ATOMS/RFLazyImage
 * @displayName RFLazyImage
 */
export default Vue.extend({
  name: 'RFLazyImage',
  directives: {
    lazyload: LazyLoadImage,
  },
  props: {
    /**
     * URL of the image source
     */
    url: {
      type: String,
      default: '',
    },
    /**
     * Alternative text of the image
     */
    alt: {
      type: String,
      default: '',
    },
    /**
     * Caption of the image
     */
    caption: {
      type: String,
      default: '',
    },
    /**
     * Variant of the image by size
     * @values default, half, third, quarter
     */
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['default', 'half', 'third', 'quarter'],
          v,
          'ATOMS/RFLazyImage'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.rf-lazy-image {
  position: relative;
  display: block;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  &--half {
    width: 50%;
  }
  &--third {
    width: 32%;
  }
  &--quarter {
    width: 25%;
    .rf-lazy-image__caption {
      font-size: rem(16);
    }
  }
  img {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    z-index: 2;
  }
  &__sceleton {
    position: absolute;
    min-height: 280px;
    width: 100%;
    height: 100%;
    background-color: $c-background;
    transition: 0.25s;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 30%;
      height: 100%;
      background-image: linear-gradient(90deg, transparent, #fff, transparent);
      animation: shim 1s infinite ease-in;
    }
  }
  &__caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 25px 20px 20px;
    font-size: rem(20);
    color: #fff;
    z-index: 3;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #333, transparent);
      z-index: -1;
    }
  }
  &--loaded {
    .rf-lazy-image__sceleton {
      display: none;
    }
  }
}

@keyframes shim {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(300%);
  }
}
</style>
