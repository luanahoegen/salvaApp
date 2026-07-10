import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/homeStyles';

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Greeting */}
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Olá, Mestre Cervejeiro</Text>
            <View style={styles.statusContainer}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>A cervejaria está em pleno vapor hoje.</Text>
            </View>
          </View>

          {/* Essence Card */}
          <TouchableOpacity style={styles.essenceCard} activeOpacity={0.9}>
            <Text style={styles.essenceLabel}>NOSSA ESSÊNCIA</Text>
            <Text style={styles.essenceQuote}>
              "Hoje fazemos cerveja, mas sempre fomos artesãos da vida. O processo artesanal exige muita calma, cuidado e experiência."
            </Text>
            <View style={styles.readMoreContainer}>
              <Text style={styles.readMoreText}>Leia mais sobre nossa jornada</Text>
              <MaterialCommunityIcons name="arrow-right" size={16} color="white" />
            </View>
          </TouchableOpacity>

          {/* Gluten Free Card */}
          <View style={styles.glutenFreeCard}>
            <View style={styles.glutenFreeContent}>
              <Text style={styles.glutenFreeTitle}>Um brinde sem restrições</Text>
              <Text style={styles.glutenFreeDescription}>
                Acreditamos que cada história merece ser celebrada. Por isso, nossas cervejas agora são todas <Text style={styles.glutenFreeBold}>sem glúten</Text>.
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/produtos')}
              >
                <Text style={styles.buttonText}>CONHEÇA NOSSAS CERVEJAS</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.glutenFreeIconContainer}>
              <MaterialCommunityIcons name="glass-wine" size={30} color="black" />
              <View style={{ position: 'absolute', width: 2, height: 35, backgroundColor: 'black', transform: [{ rotate: '45deg' }] }} />
            </View>
          </View>

          {/* Tools Section */}
          <Text style={styles.sectionTitle}>Ferramentas de Artesão</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.toolsContainer}>
            <TouchableOpacity
              style={styles.toolCard}
              onPress={() => router.push('/produtos')}
            >
              <View style={styles.toolIconContainer}>
                <MaterialCommunityIcons name="package-variant-closed" size={24} color="black" />
              </View>
              <Text style={styles.toolLabel}>Produto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolCard}>
              <View style={styles.toolIconContainer}>
                <MaterialCommunityIcons name="calendar-month" size={24} color="black" />
              </View>
              <Text style={styles.toolLabel}>Evento</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
