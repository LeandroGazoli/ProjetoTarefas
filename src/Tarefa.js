import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';

export default function Tarefa({data, deLete}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="trash" size={20} color="#22272e" onPress={deLete} />
      </TouchableOpacity>
      <Text>{data.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(169,169,169, 0.20)',
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row',
  },
  button: {
    marginRight: 8,
  },
});
