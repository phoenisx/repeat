import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs, text} from '@storybook/addon-knobs';

import Card from '@components/Card';
import {View, StyleSheet} from 'react-native';

// here I define that I want to create stories with the label "Buttons",
// this will be the name in the storybook navigation

const cardStories = storiesOf('Card', module);

cardStories.addDecorator(withKnobs);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 16,
  },
});

// then I add a story with the name default view, I can add multiple stories to button stories
cardStories.add('default view', () => (
  <View style={styles.container}>
    <Card
      title={text('Title: ', 'Title')}
      description={text(
        'Description: ',
        'Sunt sint magna dolor ut irure commodo et pariatur Lorem in.',
      )}
    />
  </View>
));
