import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import inicio from "./pantallas/inicio"
import boton from "./pantallas/boton";
import mapa from "./pantallas/mapa";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();//variable para los iconos

function TabGroup() { 
    return (
    <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({color, focused, size}) => {
            let iconName;
            if (route.name === "inicio") {
            iconName = focused ? "home" : "home-outline";//icono para el inicio
            } else if (route.name === "mapa") {
            iconName = focused ? "map" : "map-outline";//icono para el mapa
            } else if (route.name === "boton") {
            iconName = focused ? "circle" : "circle-o";//icono para el boton
            }
            return <Ionicons name={iconName} color={color} size={size} />
        },
        })}
        >
        <Tab.Screen name="inicio" component={Tabinicio} style={style.inicio}/> 
        <Tab.Screen name="boton" component={Tabboton} style={style.boton}/>
        <Tab.Screen name="mapa" component={Tabmapa} style={style.inicio}/>
        
        </Tab.Navigator> //Iconos de inicio, boton y mapa
    )
    }

    export default function Navigation() {
    
        return (
            <NavigationContainer>
    
                <TabGroup />
    
            </NavigationContainer>
        
        )
    }