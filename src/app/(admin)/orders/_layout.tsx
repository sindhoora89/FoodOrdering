import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../../constants/Colors';
import { useColorScheme } from '../../../components/useColorScheme';

export default function MenuStack() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: "Orders" }} />
            <Stack.Screen name='list' options={{ headerShown: false }} />
        </Stack>
    );

};