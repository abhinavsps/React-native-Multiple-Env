import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import analytics from '@react-native-firebase/analytics';
import Config from 'react-native-config';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App</Text>
      <Text style={{color: 'black'}}>{Config.API_URL}</Text>
      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: 'round neck',
            size: 'L',
          })
        }
      />
    </SafeAreaView>
  );
};

export default App;
