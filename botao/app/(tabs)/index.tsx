import {Text, View, StyleSheet} from 'react-native';

import Button from '../../components/Button'

export default function HomeScreen() {
  const Clicar = () => {
    alert('apertei no Botão');
  }
  return (
   <View style={styles.container}>
    <Text style={styles.title}> Çauan é um traira.</Text>
    <Button title="clique aqui" onPress={Clicar}/>
   </View>
);
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
  title: {
    fontSize:30, 
    fontWeight: 'bold',
    color: '#333', 
    padding:  20, 
  }
});
