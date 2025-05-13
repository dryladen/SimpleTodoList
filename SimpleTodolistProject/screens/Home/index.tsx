import React, { useCallback, useState } from 'react';
import {
    FlatList,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { deleteTodo, fetchTodos } from '../../services/todoServices';
import { styles } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

type Todolist = {
    _id: string;
    todo: string;
};
function Home() {

    const [todolist, setTodolist] = useState<Todolist[]>([]);
    // Fetch todos from the API
    const loadTodos = async () => {
        const todos = await fetchTodos();
        setTodolist(todos.message);
    };

    useFocusEffect(
        useCallback(() => {
            loadTodos();
        }, [])
    );

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}> Todo List </Text>
                </View>
                {/* {todolist.length === 0 && (
                    <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, gap: 8 }} >
                        <View style={{ padding: 15, paddingHorizontal: 27, backgroundColor: '#4D55CC', borderRadius: 100 }} >
                            <Icon name="exclamation" iconStyle="solid" size={30} color={'white'} />
                        </View>
                        <Text style={{ textAlign: 'center', color: 'red', fontSize: 14 }} > Server is down, please contact customer services for more information </Text>
                    </View>
                )} */}
                < FlatList
                    data={todolist}
                    renderItem={({ item }) => (
                        <View style={[styles.flexRow, styles.flex1, styles.px4, styles.p2, styles.gap2]} >
                            <Text style={{ flexWrap: 'wrap', textTransform: 'capitalize', flex: 1 }} > {item.todo} </Text>
                            <View style={{ flexDirection: 'row', gap: 10 }} >
                                <TouchableHighlight
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
            {/* Add Button */}
            <TouchableHighlight
                // @ts-ignore
                onPressIn={() => navigation.navigate('CreateTodo')}
                underlayColor={'white'} >
                <View style={[styles.addButton]} >
                    <Icon name="plus" iconStyle="solid" size={20} color={'white'} />
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default Home;
