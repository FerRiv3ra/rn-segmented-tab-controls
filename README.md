## React Native Segmented and Tab control V.1.0.0

## Installation

1. Install library
   ```bash
   npm install rn-segmented-tab-controls
   ```

## `SegmentedControl` Component

2. Use components
<p align="center" width="100%">
    <img width="33%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1709313673/GitHub/segmentedControl_dul8fq.gif"> 
</p>

```js
import {SegmentedControl} from 'rn-segmented-tab-controls';

const App = () => {
  const [value, setValue] = useState('tab1');

  const values = [
    {key: 'Tab 1', value: 'tab1'},
    {key: 'Tab 2', value: 'tab2'},
  ];

  return (
    <SegmentedControl
      label="Segmented Control"
      values={values}
      onChange={value => setValue(value)}
    />
  );
};
```

### Properties

| Prop                    | Description                                                     | Type                             | Required | Default     |
| ----------------------- | --------------------------------------------------------------- | -------------------------------- | -------- | ----------- |
| **`values`**            | Key and value array to generate each tab.                       | `{key: string; value: string}[]` | **Yes**  | _None_      |
| **`onChange`**          | Function that returns the selected value.                       | `(value: string) => void`        | **Yes**  | None\_      |
| **`label`**             | The label with which you want to identify the segmentedControl. | `string`                         | No       | _None_      |
| **`labelStyle`**        | Styles for label.                                               | `StyleProp<TextStyle>`           | No       | _None_      |
| **`selectedIndex`**     | Selected initial value.                                         | `number`                         | No       | `0`         |
| **`backgroundColor`**   | SegmentedControl background color.                              | `string`                         | No       | `'#CCCCCC'` |
| **`tintColor`**         | Tint color for the selected tab.                                | `string`                         | No       | `'#FFFFFF'` |
| **`textColor`**         | Text color in the segmentedControl.                             | `string`                         | No       | `'#000000'` |
| **`selectedTextColor`** | Text color en the selected tab.                                 | `string`                         | No       | `'#000000'` |
| **`style`**             | Styles for the component container.                             | `StyleProp<ViewStyle>`           | No       | _None_      |

## `TabControl` Component

<p align="center" width="100%">
    <img width="33%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1709313674/GitHub/tabControl_jntf6i.gif"> 
</p>

```js
import {TabControl} from 'rn-segmented-tab-controls';
import {FormUser, Users} from './components';

const App = () => {
  const values = [
    {key: 'Add user', renderItem: FormUser},
    {key: 'Users', renderItem: Users},
  ];

  return <TabControl values={values} />;
};
```

### Properties

| Prop                     | Description                                               | Type                                       | Required | Default     |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------ | -------- | ----------- |
| **`values`**             | Key and renderItem array to generate each tab.            | `{key: string; renderItem: JSX.Element}[]` | **Yes**  | _None_      |
| **`label`**              | The label with which you want to identify the tabControl. | `string`                                   | No       | _None_      |
| **`labelStyle`**         | Styles for label.                                         | `StyleProp<TextStyle>`                     | No       | _None_      |
| **`selectedIndex`**      | Selected initial value.                                   | `number`                                   | No       | `0`         |
| **`backgroundTabColor`** | TabControl background color.                              | `string`                                   | No       | `'#CCCCCC'` |
| **`tabTintColor`**       | Tint color for the selected tab.                          | `string`                                   | No       | `'#FFFFFF'` |
| **`textColor`**          | Text color in the TabControl.                             | `string`                                   | No       | `'#000000'` |
| **`selectedTextColor`**  | Text color en the selected tab.                           | `string`                                   | No       | `'#000000'` |
| **`containerStyle`**     | Styles for the rendered component.                        | `StyleProp<ViewStyle>`                     | No       | _None_      |
| **`style`**              | Styles for the component container.                       | `StyleProp<ViewStyle>`                     | No       | _None_      |

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
