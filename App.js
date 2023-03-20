import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import Tarefa from './src/Tarefa';

export default function App() {
  const [tarefa, setTarefa] = useState('');

  const [list, setList] = useState([]);

  function handleAdd() {
    if (tarefa === '') {
      return;
    }

    const dados = {
      key: Date.now(),
      item: tarefa,
    };

    setList(oldArray => [dados, ...oldArray]);
    setTarefa('');
  }

  function handleDeleteItem(item) {
    let filtroItem = list.filter(tarefaFilter => {
      return tarefaFilter.item !== item;
    });

    setList(filtroItem);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite sua tarefa"
          style={styles.input}
          value={tarefa}
          onChangeText={text => setTarefa(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Tarefa data={item} deLete={() => handleDeleteItem(item.item)} />
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%',
  },
});
