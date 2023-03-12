<template>
  <div ref="rfSelect" class="rf-select">
    <button class="rf-select__head" @click="contentHandler">
      {{ selected.option }}
    </button>
    <transition name="fade">
      <div v-if="isOpen" class="rf-select__content">
        <ul>
          <template v-for="option in options">
            <li :key="option.value">
              <button
                :class="[
                  'rf-select__option',
                  option.value === selected.value &&
                    'rf-select__option--active',
                ]"
                @click="optionSelectHandler(option)"
              >
                {{ option.option }}
              </button>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface ISelectOption {
  value: string | number
  option: string
}

/**
 * MOLECULES/RFSelect
 * @displayName RFSelect
 */
export default Vue.extend({
  name: 'RFSelect',
  props: {
    /**
     * Options array
     */
    options: {
      type: Array as PropType<ISelectOption[]>,
      required: true,
    },
    /**
     * Placeholder when value is not selected
     */
    placeholder: {
      type: String,
      default: 'Select me',
    },
  },
  data() {
    return {
      isOpen: false,
      selected: {
        value: 0,
        option: this.placeholder,
      } as ISelectOption,
    }
  },
  mounted() {
    document.addEventListener('click', (e: MouseEvent) => {
      this.closeOusideHandler(e)
    })
  },
  destroyed() {
    document.removeEventListener('click', (e: MouseEvent) => {
      this.closeOusideHandler(e)
    })
  },
  methods: {
    /**
     * Method to open or close content
     */
    contentHandler(): void {
      this.isOpen = !this.isOpen
    },
    /**
     * Method to close content on click outside of the component
     */
    closeOusideHandler(event: MouseEvent): void {
      if (
        !(
          this.$refs.rfSelect === event.target ||
          (this.$refs.rfSelect as HTMLElement).contains(event.target as Node)
        )
      ) {
        this.isOpen = false
      }
    },
    /**
     * Method to select option
     * @event change
     * @description Returns selected value
     * @param {ISelectOption} option
     * @property {ISelectOption['value']} option.value
     */
    optionSelectHandler(option: ISelectOption): void {
      this.selected = option
      this.contentHandler()
      this.$emit('change', option.value)
    },
  },
})
</script>

<style lang="scss" scoped>
$select-head-border-color: $c-background;
$select-head-focus-border-color: $c-background;
$select-content-background: #fff;
$select-content-shadow: 0 4px 20px rgba(#444, 0.25);
$select-option-color: $c-text;
$select-option-hover: $c-secondary;
$select-option-color-hover: #fff;

.rf-select {
  position: relative;
  min-width: 280px;
  button {
    appearance: none;
    text-align: left;
    outline: none;
  }
  &__head {
    width: 100%;
    padding: 12px 20px;
    background-color: transparent;
    border: 1px solid $select-head-border-color;
    border-radius: 5px;
    font-size: rem(18);
    cursor: pointer;
    &:focus {
      border-color: $select-head-focus-border-color;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 20px;
      display: block;
      width: 10px;
      height: 10px;
      border: 2px solid #444;
      border-top-color: transparent;
      border-left-color: transparent;
      transform: translate(-50%, -65%) rotate(45deg);
    }
  }
  &__content {
    position: absolute;
    top: 100%;
    display: block;
    width: 100%;
    padding: 4px;
    background-color: $select-content-background;
    border-radius: 8px;
    box-shadow: $select-content-shadow;
    ul {
      margin: 0;
      padding: 0;
      li {
        position: relative;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }
  &__option {
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    padding: 4px 8px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: $select-option-color;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
      background-color: $select-option-hover;
      color: $select-option-color-hover;
    }
    &--active {
      background-color: rgba($select-option-hover, 0.5);
    }
  }
}
</style>
