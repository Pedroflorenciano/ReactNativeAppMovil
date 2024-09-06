import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { GlobalStyle } from '../theme/themeParcial';

interface User {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const axiosParcial = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/posts/1/comments');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const renderItem = ({ item }: { item: User }) => (
        <Card style={GlobalStyle.card}>
            <Card.Content>
                <Text style={GlobalStyle.textPrimario}>{item.postId}</Text>
                <Text style={GlobalStyle.textPrimario}>{item.id}</Text>
                <Text style={GlobalStyle.textPrimario}>{item.name}</Text>
                <Text style={GlobalStyle.textPrimario}>{item.email}</Text>
                <Text style={GlobalStyle.textPrimario}>{item.body}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={GlobalStyle.body}>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};
