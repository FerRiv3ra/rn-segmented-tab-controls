import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {TestComponent} from './components/TestComponent';
import TestComponent2 from './components/TestComponent2';
import {TabControl} from './src';

const App = () => {
  const [value, setValue] = useState('tab1');

  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      {/* <SegmentedControl
        label="Segmented Control"
        values={[
          {
            key: 'Tab 1',
            value: 'tab1',
          },
          {
            key: 'Tab 2',
            value: 'tab2',
          },
        ]}
        onChange={value => setValue(value)}
      />

      <Text style={{marginTop: 20, textAlign: 'center'}}>
        Current value: {value}
      </Text> */}
      <TabControl
        values={[
          {key: 'Add user', renderItem: TestComponent},
          {key: 'Users', renderItem: TestComponent2},
        ]}
      />
    </SafeAreaView>
  );
};

export default App;
