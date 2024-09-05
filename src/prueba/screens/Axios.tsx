import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { GlobalStyle } from '../theme/Theme';

interface User {
    id: number;
    title: string;
    url: undefined;
}

export const Axios = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/photos');
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
                <Text style={GlobalStyle.textPrimario}>{item.id} {item.title}</Text>
                <Image 
                style={{width: 200,
                    height: 200,
                    margin: 10,}}
                source={{uri: item.url}}/>
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
