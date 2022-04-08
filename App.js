import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.selecao}> Selecione o nível desejado! </Text>
        <Button label='iniciante' iniciante>

      </Button>
      <Button label='intermediário' intermediario>
        
      </Button>
      <Button label='avançado' avancado>
        
    </Button> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selecao: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#888',
  }
});
