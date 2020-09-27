import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//#region Styles
const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 8,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
//#endregion

interface CardProps {
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <View style={styles.card}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.description && <Text>{props.description}</Text>}
    </View>
  );
};

export default Card;
