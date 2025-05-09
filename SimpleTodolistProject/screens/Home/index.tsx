import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Modal,
    Pressable,
    StatusBar,
    Text,
    TextInput,
    TouchableHighlight,
    useColorScheme,
    View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from '@react-native-vector-icons/fontawesome6';
import { createTodo, deleteTodo, fetchTodos, updateTodo } from '../../services/todoServices';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Todolist = {
    _id: string;
    todo: string;
};
function Home() {

    const [todolist, setTodolist] = useState<Todolist[]>([]);
    const [todo, setTodo] = useState<string>('');
    const [updatedTodo, setUpdateTodo] = useState<Todolist>({ _id: '', todo: '' });
    // Fetch todos from the API
    const loadTodos = async () => {
        const todos = await fetchTodos();
        setTodolist(todos.message);
    };
    useEffect(() => {
        loadTodos();
    }, []);

    // Add a new data to the API
    const addTodo = async () => {
        try {
            await createTodo(todo);
            loadTodos();
            setTodo('');
        } catch (err) {
            console.log(err);
        }
    };

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    return (
        <View>
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}> Todo List </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }} >
                    {/* Add Input */}
                    <TextInput
                        style={styles.newTodoInput}
                        value={todo}
                        onChangeText={text => setTodo(text)}
                        placeholder="Input new todo here"
                    />
                    {/* Add Button */}
                    <TouchableHighlight
                        onPressIn={() => addTodo()}
                        underlayColor={'white'} >
                        <View style={[styles.addButton]} >
                            <Icon name="plus" iconStyle="solid" size={16} color={'white'} />
                        </View>
                    </TouchableHighlight>
                </View>
                < FlatList
                    data={todolist}
                    renderItem={({ item }) => (
                        <View style={[styles.flexRow, styles.flex1, styles.px4, styles.p2, styles.gap2]} >
                            <Text style={{ flexWrap: 'wrap', textTransform: 'capitalize', flex: 1 }} > {item.todo} </Text>
                            <View style={{ flexDirection: 'row', gap: 10 }} >
                                <TouchableHighlight
                                    // onPress={() => { setModalVisible(true); setUpdateTodo({ _id: item._id, todo: item.todo }) }} 
                                    // @ts-ignore
                                    onPress={() => navigation.navigate('UpdateTodo', { id: item._id, todo: item.todo })} // Navigate to UpdateTodo screen
                                    underlayColor={'white'} >
                                    <View style={{ padding: 8, backgroundColor: '#3B82F6', borderRadius: 8 }} >
                                        <Icon name="pencil" iconStyle="solid" color={'white'} size={16} />
                                    </View>
                                </TouchableHighlight>
                                < TouchableHighlight
                                    onPress={() => { deleteTodo(item._id).then(loadTodos) }
                                    }
                                    underlayColor={'white'}
                                    style={{ borderRadius: 8 }} >
                                    <View style={{ padding: 8, backgroundColor: '#EF4444', borderRadius: 8 }} >
                                        <Icon
                                            name="trash-can"
                                            iconStyle="solid"
                                            color={'white'}
                                            size={16}
                                        />
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    )}
                />
            </View>
            < Modal visible={modalVisible} animationType="fade" transparent={true} >
                <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', borderRadius: 8 }} >
                    <View style={{
                        position: 'absolute',
                        flex: 1,
                        width: '80%',
                        padding: 16,
                        backgroundColor: '#F3F4F6', // Equivalent to bg-gray-100
                        borderRadius: 8, // Equivalent to rounded-lg
                        shadowColor: 'black', // Equivalent to shadow-black
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5
                    }} >
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Update Todo </Text>
                            < Pressable
                                style={{ padding: 8, borderRadius: 9999 }} // Equivalent to p-2 and rounded-full
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name="xmark" iconStyle="solid" color={'black'} size={18} />
                            </Pressable>
                        </View>
                        {/* Pakai formik & yupp */}
                        <View style={{ flex: 1, gap: 4 }} >
                            <TextInput
                                style={{
                                    flex: 1,
                                    paddingHorizontal: 16,
                                    color: 'black',
                                    textAlign: 'left',
                                    flexWrap: 'wrap',
                                    backgroundColor: '#E5E7EB', // Equivalent to bg-gray-200
                                    borderRadius: 12, // Equivalent to rounded-xl
                                }}
                                value={updatedTodo?.todo}
                                onChangeText={text => setUpdateTodo({ ...updatedTodo!, todo: text })}
                                placeholder="Update todo here"
                            />
                            <TouchableHighlight onPress={() => { updateTodo(updatedTodo._id, updatedTodo.todo).then(loadTodos); setModalVisible(false) }} underlayColor={'white'} >
                                <View style={[styles.updateButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }]} >
                                    <Icon name="pencil" iconStyle="solid" color={'white'} size={16} />
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}> Save </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Home;
