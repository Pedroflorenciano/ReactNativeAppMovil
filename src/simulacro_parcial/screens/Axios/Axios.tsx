import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

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
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.name}>{item.id}</Text>
                <Text>{item.title}</Text>
                <Image 
                style={{width: 200,
                    height: 200,
                    margin: 10,}}
                source={{uri: item.url}}/>
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
