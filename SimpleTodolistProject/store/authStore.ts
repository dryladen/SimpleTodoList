// store/authStore.ts
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthState {
    user: any | null;
    token: string;
    setAuth: (user: any, token: string) => Promise<void>;
    logout: () => Promise<void>;
    loadAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: '',
    setAuth: async (user, token) => {
        await AsyncStorage.setItem('@auth', JSON.stringify({ user, token }));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.baseURL = 'http://10.0.2.2:3001';
        set({ user, token });
    },
    logout: async () => {
        await AsyncStorage.removeItem('@auth');
        axios.defaults.headers.common['Authorization'] = '';
        set({ user: null, token: '' });
    },
    loadAuth: async () => {
        const data = await AsyncStorage.getItem('@auth');
        const loginData = data ? JSON.parse(data) : null;
        if (loginData) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${loginData.token}`;
            axios.defaults.baseURL = 'http://10.0.2.2:3001';
            set({ user: loginData.user, token: loginData.token });
        }
    }
}));

export default useAuthStore;