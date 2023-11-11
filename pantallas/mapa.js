import { TextInput } from 'react-native';
import './AppDataBase/firebase.js'
import react from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
<script async id='map'
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0IGp-U2WQNvjTFiV90CrsMbIwtnM5fvM&libraries=places&callback=initMap">
</script>


export default function Inicio() {

<link rel='stylesheet' type='css' href='inicio.js'></link>
let map;
let marker;
let autocomplete;
const argCords = { lat: -34, lng: -64 }; //valor constante de las cordenadas de argentina
async function initMap() { 
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const input = document.getElementById('place_input');
    const mapDiv = document.getElementById['map'];
    map = new Map(document.getElementById("map"), {
      center: argCords,
      zoom: 5,
    });
  }
    marker = new google.maps.Marker({ //se crea el marcador
        position: argCords,
        map: map,
        initAutocomplete(){}
    })
    function initAutocomplete(){
        autocomplete = new google.maps.places.Autocomplete(input)
        autocomplete.addListener('place_changed', function(){
            const place = autocomplete.getplace(); //autocompleta el nombre del lugar al cual querres ir
            map.setcenter(place.geometry.location); //pone el mapa en la ubicacion puesta en el buscador
            marker.setposition(place.geometry.location); //pone el marcador en el lugar indicado por el buscador
        })

    }
    


    
    form.addEeventListener("submit", e=>{
        let warnings = ""
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(email.value.length < 10){
            warnings += "La contraseña no es valida" 

        }
    })


}

//const style = StyleSheet.create({
//   
//})


