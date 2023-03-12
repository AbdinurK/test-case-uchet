Default

```js

// let selectedOption = 0

const selectOptions = [
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
];

// const selectHandler = (e: number) => {
//   selectedOption = e
// }

<RFSelect :options="selectOptions" @change="selectHandler" />

```
