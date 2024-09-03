import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';

interface Person {
    id: string;
    name: string;
    cedula: string;
}

export const AsyncStorageCRUD = () => {
    const [name, setName] = useState('');
    const [cedula, setCedula] = useState('');
    const [people, setPeople] = useState<Person[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        loadPeople();
    }, []);

    const loadPeople = async () => {
        try {
            const storedPeople = await AsyncStorage.getItem('people');
            if (storedPeople) {
                setPeople(JSON.parse(storedPeople));
            }
        } catch (error) {
            console.error('Error loading people', error);
        }
    };

    const savePeople = async (newPeople: Person[]) => {
        try {
            await AsyncStorage.setItem('people', JSON.stringify(newPeople));
            setPeople(newPeople);
        } catch (error) {
            console.error('Error saving people', error);
        }
    };

    const handleCreateOrUpdate = () => {
        if (editingId) {
            const updatedPeople = people.map(person =>
                person.id === editingId ? { id: editingId, name, cedula } : person
            );
            savePeople(updatedPeople);
            setEditingId(null);
        } else {

            const newPerson = { id: Date.now().toString(), name, cedula };
            savePeople([...people, newPerson]);
        }

        setName('');
        setCedula('');
    }

    const handleEdit = (person: Person) => {
        setName(person.name);
        setCedula(person.cedula);
        setEditingId(person.id);
    }

    const handleDelete = (id: string) => {
        Alert.alert('Confirmar', '¿Estás seguro de que deseas eliminar este registro?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Eliminar',
                onPress: () => {
                    const updatedPeople = people.filter(person => person.id !== id);
                    savePeople(updatedPeople);
                },
                style: 'destructive',
            }
        ])
    }

    const renderPerson = ({ item }: { item: Person }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.cedula}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Editar" onPress={() => handleEdit(item)} />
                    <Button title="Eliminar" onPress={() => handleDelete(item.id)} color="red" />
                </View>
            </Card.Content>
        </Card>
    )

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Cédula"
                value={cedula}
                onChangeText={setCedula}
                keyboardType="numeric"
            />
            <Pressable
                style={styles.button}
                onPress={handleCreateOrUpdate} 
            >
                <Text style={styles.textButton}>{editingId ? "Actualizar" : "Agregar"}</Text>
            </Pressable>
            <FlatList
                data={people}
                keyExtractor={item => item.id}
                renderItem={renderPerson}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    input: {
        marginBottom: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    card: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#004379',
        marginBottom: 20
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }

});

export default AsyncStorageCRUD;
