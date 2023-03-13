<template>
  <main class="board">
    <header>
      <RFHeading variant="light">Rocket Firm UI</RFHeading>
      <!-- <img src="~/assets/images/rf-logo-2.png" alt="Rocket Firm" /> -->
    </header>

    <section class="card">
      <RFHeading tag="h2">Heading – RFHeading</RFHeading>
      <article class="component">
        <RFHeading>Headline 1</RFHeading>
        <RFHeading tag="h2">Headline 2</RFHeading>
        <RFHeading tag="h3">Headline 3</RFHeading>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Text – RFText</RFHeading>
      <article class="component">
        <RFText>Default</RFText>
        <RFText variant="large">Large</RFText>
        <RFText variant="mid">Mid</RFText>
        <RFText variant="small">Small</RFText>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Button – RFButton</RFHeading>
      <article class="component">
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Primary</RFText>
          </div>
          <div class="component-col component-col--30">
            <RFButton>Primary</RFButton>
          </div>
          <div class="component-col component-col--30">
            <RFButton disabled>Disabled</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Primary Icon</RFText>
          </div>
          <div class="component-col component-col--30">
            <RFButton is-icon>😼</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Secondary</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="secondary">Secondary</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Secondary Icon</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="secondary" is-icon>😼</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Tertiary</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="tertiary">Tertiary</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Tertiary Icon</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="tertiary" is-icon>😼</RFButton>
          </div>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Input – RFInput</RFHeading>
      <article class="component">
        <div class="component-row">
          <div class="component-col component-col--30">Default</div>
          <div class="component-col component-col--30">
            <RFInput
              id="ref"
              v-model="input"
              :value="input"
              placeholder="X3TE0LG5"
            >
              <template #label> Referal code </template>
            </RFInput>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">Error</div>
          <div class="component-col component-col--30">
            <RFInput id="ref" is-error placeholder="X3TE0LG5">
              <template #label> Referal code </template>
              <template #message>Error message</template>
            </RFInput>
          </div>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Checkbox – RFCheckbox</RFHeading>
      <article class="component">
        <RFCheckbox id="checkbox" v-model="checkbox"> Check me! </RFCheckbox>
        {{ checkbox }}
        <RFCheckbox id="checkbox2" v-model="checkbox" disabled>
          Check me!
        </RFCheckbox>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Radio – RFRadio</RFHeading>
      <article class="component">
        <RFRadio
          id="radio-1"
          :value="radio.one"
          name="radio"
          @change="radioHandler"
        >
          Check me!
        </RFRadio>
        <RFRadio
          id="radio-2"
          :value="radio.two"
          name="radio"
          @change="radioHandler"
        >
          Check me!
        </RFRadio>
        <RFRadio
          id="radio-3"
          :value="radio.three"
          name="radio"
          disabled
          @change="radioHandler"
        >
          Check me!
        </RFRadio>
        {{ radioPicked }}
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Badge – RFBadge</RFHeading>
      <article class="component">
        <RFBadge> Music </RFBadge>
        <RFBadge with-clear> Music </RFBadge>
        <RFBadge clickable> Click me! </RFBadge>
        <RFBadge variant="count"> 9 </RFBadge>
        <RFBadge variant="success"> success </RFBadge>
        <RFBadge variant="warn"> warn </RFBadge>
        <RFBadge variant="error"> error </RFBadge>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Toggle – RFToggle</RFHeading>
      <article class="component">
        <RFToggle id="toggle" v-model="toggle" />
        <RFToggle id="toggle-2" v-model="toggle" disabled />
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Lazy Image – RFLazyImage</RFHeading>
      <article class="component">
        <RFLazyImage
          url="https://images.unsplash.com/photo-1632338983477-b0a13e3e6ef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2382&q=80"
          caption="There is a caption for this image"
        />
        <RFLazyImage
          url="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
          variant="half"
          caption="There is a caption for this image"
        />
        <RFLazyImage
          url="https://images.unsplash.com/photo-1554203623-83684df2e5ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80"
          variant="third"
          caption="There is a caption for this image"
        />
        <RFLazyImage
          url="https://images.unsplash.com/photo-1609048296073-344867b42508?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
          variant="quarter"
          caption="There is a caption for this image"
        />
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Lazy Image – RFLazyImage</RFHeading>
      <article class="component">
        <RFSelect :options="selectOptions" @change="selectHandler" />
        {{ selectedOption }}
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'
import RFRadio from 'atoms/RFRadio/index.vue'
import RFBadge from 'atoms/RFBadge/index.vue'
import RFToggle from 'atoms/RFToggle/index.vue'
import RFLazyImage from 'atoms/RFLazyImage/index.vue'
import RFSelect from 'molecules/RFSelect/index.vue'

/**
 * 'PAGES/UI'
 * @displayName UI
 */
export default Vue.extend({
  name: 'UI',
  components: {
    RFHeading,
    RFText,
    RFButton,
    RFInput,
    RFCheckbox,
    RFRadio,
    RFBadge,
    RFToggle,
    RFLazyImage,
    RFSelect,
  },
  data() {
    return {
      input: '',
      checkbox: false,
      toggle: false,
      radio: {
        one: 'Hi',
        two: 'Bye',
        three: 'Oops',
      },
      radioPicked: '',
      selectOptions: [
        {
          value: 1,
          option: 'first option',
        },
        {
          value: 2,
          option: 'second option',
        },
        {
          value: 3,
          option: 'third option',
        },
      ],
      selectedOption: 0,
    }
  },
  methods: {
    radioHandler(v: string) {
      this.radioPicked = v
    },
    selectHandler(e: number) {
      this.selectedOption = e
    },
  },
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  img {
    display: block;
    width: 120px;
    height: auto;
  }
}

.board {
  width: 100%;
  height: 100%;
  background-color: $c-secondary;
  padding: 20px 25px 100px;
}
.card {
  width: 100%;
  padding: 50px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 25px;
}
.component {
  width: 100%;
  border-radius: 10px;
  padding: 25px 35px;
  border: 1px solid rgba($c-secondary, 0.25);
  &-row {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed rgba($color: $c-text, $alpha: 0.5);
    margin: 15px 0;
    padding: 10px 0;
  }
  &-col {
    &--30 {
      width: 30%;
    }
  }
}
</style>
