import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import { ColorsGlobals } from '../theme/themeParcial';

interface Dato {
    id: string;
    codigo: string;
    carrera: string;
    facultad: string;
}

export const AsyncStorage04 = () => {
    const [codigo, setCodigo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [facultad, setFacultad] = useState('');
    const [datos, setDatos] = useState<Dato[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        loadDatos();
    }, []);

    const loadDatos = async () => {
        try {
            const storedDatos = await AsyncStorage.getItem('datos');
            if (storedDatos) {
                setDatos(JSON.parse(storedDatos));
            }
        } catch (error) {
            console.error('Error loading datos', error);
        }
    };

    const saveDatos = async (newDatos: Dato[]) => {
        try {
            await AsyncStorage.setItem('datos', JSON.stringify(newDatos));
            setDatos(newDatos);
        } catch (error) {
            console.error('Error saving datos', error);
        }
    };

    const handleCreateOrUpdate = () => {
        if (editingId) {
            const updatedDatos = datos.map(dato =>
                dato.id === editingId ? { id: editingId, codigo, carrera, facultad } : dato
            );
            saveDatos(updatedDatos);
            setEditingId(null);
        } else {
            const newDato = { id: Date.now().toString(), codigo, carrera, facultad };
            saveDatos([...datos, newDato]);
        }

        setCodigo('');
        setCarrera('');
        setFacultad('');
    };

    const handleEdit = (dato: Dato) => {
        setCodigo(dato.codigo);
        setCarrera(dato.carrera);
        setFacultad(dato.facultad);
        setEditingId(dato.id);
    };

    const handleDelete = (id: string) => {
        Alert.alert('Confirmar', '¿Estás seguro de que deseas eliminar este registro?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Eliminar',
                onPress: () => {
                    const updatedDatos = datos.filter(dato => dato.id !== id);
                    saveDatos(updatedDatos);
                },
                style: 'destructive',
            }
        ]);
    };

    const renderDato = ({ item }: { item: Dato }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.name}>Código: {item.codigo}</Text>
                <Text>Carrera: {item.carrera}</Text>
                <Text>Facultad: {item.facultad}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Editar" onPress={() => handleEdit(item)} />
                    <Button title="Eliminar" onPress={() => handleDelete(item.id)} color="red" />
                </View>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Código"
                value={codigo}
                onChangeText={setCodigo}
            />
            <TextInput
                style={styles.input}
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
            />
            <TextInput
                style={styles.input}
                placeholder="Facultad"
                value={facultad}
                onChangeText={setFacultad}
            />
            <Pressable
                style={styles.button}
                onPress={handleCreateOrUpdate}
            >
                <Text style={styles.textButton}>{editingId ? "Actualizar" : "Agregar"}</Text>
            </Pressable>
            <FlatList
                data={datos}
                keyExtractor={item => item.id}
                renderItem={renderDato}
            />
        </View>
    );
};

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
        backgroundColor: ColorsGlobals.primario,
        marginBottom: 20,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

export default AsyncStorage04;
