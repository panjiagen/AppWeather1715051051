import React from 'react';
import { StyleSheet,Text, View, TextInput, Button } from 'react-native';

export default class Cuaca1  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: ''
}
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
    + this.state.city +
    '&appid=35ddeaf92d6dab24768687518775b343&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      });
  }

  render() {
    return (
      <View style = {{flex:4,backgroundColor:'#ADD8E6'}}>
        <View style={{backgroundColor:'#6495ED'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'black', textAlign:'center'}} >
            Prakiraan Cuaca
          </Text>
         </View>

        <View style={{margin:20,padding: 40,placeholder:'center' , backgroundColor:'#6495ED'}}>


            <TextInput style = {{height: 40,fontSize:20}}
              placeholder="Masukan Kota"
              onChangeText={(city)=>this.setState({city})}

            />

            <Button
              onPress={() =>this.getWeather ()}
              title="Lihat"
              accessibilityLabel="Klik Untuk Mencari Kota"
            />
       </View>


        <View style={styles.box2}>
          <Text style = {{padding: 20, fontSize: 15,color: 'black'}} >
              Suhu :  {this.state.forecast.temp} {"\n"}
              Cuaca :  {this.state.forecast.main} {"\n"}
              Deskripsi: {this.state.forecast.description} {"\n"}

          </Text>
         </View>
         <View style={styles.box3}>
         <Text style={styles.text}></Text>
         </View>
         <View style={styles.box4}>
         <Text style={styles.text}> CopyRight@AgengPanji</Text>
         </View>


   </View>

    );
  }

}
const styles = StyleSheet.create({
  box3: {
    flex: 0.8,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
      fontSize:12,
      color:'black'
    },
    box2:{
      flex:5,
      margin:20,
      backgroundColor:'#6495ED'
    },

    box4: {
      flex: 0.8,
      backgroundColor: '#6495ED',
      alignItems: 'center',
      justifyContent: 'center',
      },
});
