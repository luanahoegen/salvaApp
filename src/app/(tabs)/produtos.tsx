import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../styles/produtosStyles';

export default function Produtos() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Produtos Screen</Text>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/cadastrar_produto')}
      >
        <MaterialCommunityIcons name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
