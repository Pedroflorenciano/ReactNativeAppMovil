import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ColorsGlobals, GlobalStyle } from '../theme/Theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../routes/StackNavigation';
import { Icon } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export const Imagen = () => {

  const navigation = useNavigation<NavigationProp<RootStackProps>>();

  return (
    <ScrollView style={GlobalStyle.content}>
      <View style={GlobalStyle.headerImg}>
        <Pressable style={{alignSelf: 'flex-start'}} onPress={() => navigation.goBack()}>
          <Icon
            source="arrow-left"
            color={'white'}
            size={30}
          />
        </Pressable>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQG1IXn75LKk5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704239283805?e=1730937600&v=beta&t=sspOqJWlNzcmt6kJcfA7ht_nZVqb_srQhyadDWTmwjw' }}
          style={GlobalStyle.imagen}
        />
        <Text style={GlobalStyle.textPrimario}>Pedro Pablo Florenciano Servín</Text>
      </View>
      <View style={GlobalStyle.bodyImg}>
        <Text style={GlobalStyle.textImgTitle}>Datos Personales</Text>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="card-account-details-outline"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Cedula de Identidad</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>5185208</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="calendar"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Fecha de Nacimiento</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>16/04/2001</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="mail"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Correo Electronico</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>ppflorenciano@gmail.com</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="flag"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Nacionalidad</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>Paraguaya</Text>
          </View>
        </View>

        <Text style={GlobalStyle.textImgTitle}>Otros datos adicionales</Text>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="school"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Carrera</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>Ingeniería de Sistemas</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="seal"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Semestre</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>Octavo</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="crosshairs-gps"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Domicilio</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>Ciudad del Este</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="home"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Barrio</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>San Juan - km 8</Text>
          </View>
        </View>
        <View style={GlobalStyle.textImg}>
          <Icon
            source="cellphone"
            color={ColorsGlobals.primario}
            size={35}
          /> 
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: ColorsGlobals.terciario}}>Celular</Text>
            <Text style={{fontWeight: 'bold', color: ColorsGlobals.primario, fontSize: 15}}>+595 973 416150</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



