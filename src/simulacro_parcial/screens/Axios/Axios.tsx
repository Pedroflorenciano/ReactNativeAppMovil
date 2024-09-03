import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

export const Axios = () => {
    const [users, setUsers] = useState<User[]>([]);

    // Realiza la petición GET a la API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Renderiza cada usuario dentro de un Card
    const renderItem = ({ item }: { item: User }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phone}</Text>
                <Text>{item.website}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
