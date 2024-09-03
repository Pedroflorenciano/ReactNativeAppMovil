import axios from 'axios';

interface MyDataType {
    id: string;
    nombre: string;
    apellido: string; 
}

const getDataFromFirebase = async (): Promise<MyDataType[]> => {
    try {
      const response = await axios.get<Record<string, MyDataType>>('https://testingprueba-ee2fc-default-rtdb.firebaseio.com/');
      // Convertir los datos a un array
      const dataArray: MyDataType[] = Object.keys(response.data).map(key => ({
        id: key,
        ...response.data[key],
      }));
      return dataArray;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      return [];
    }
};