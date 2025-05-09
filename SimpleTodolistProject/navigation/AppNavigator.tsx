import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import UpdateTodo from "../screens/UpdateTodo";
import CreateTodo from "../screens/CreateTodo";

const Stack = createNativeStackNavigator<{
    Home: undefined;
    CreateTodo: undefined;
    UpdateTodo: { id: string, todo: string };

}>();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="CreateTodo" component={CreateTodo} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateTodo" component={UpdateTodo} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;