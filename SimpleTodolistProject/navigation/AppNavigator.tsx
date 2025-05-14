import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import UpdateTodo from "../screens/UpdateTodo";
import CreateTodo from "../screens/CreateTodo";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import useAuthStore from "../store/authStore";

const Stack = createNativeStackNavigator<{
    Home: undefined;
    CreateTodo: undefined;
    UpdateTodo: { id: string, todo: string };
    SignIn: undefined;
    SignUp: undefined;
}>();

function AppNavigator() {
    const { user } = useAuthStore();
    return (
        <Stack.Navigator initialRouteName={user ? "Home" : "SignIn"} >
            {user && (
                <>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="CreateTodo" component={CreateTodo} options={{ headerShown: false }} />
                    <Stack.Screen name="UpdateTodo" component={UpdateTodo} options={{ headerShown: false }} />
                </>)}
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;