import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../styles/cadastrarProdutoStyles';
import { createProduct } from '../services/productService';

export default function CadastrarProduto() {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [basicInfo, setBasicInfo] = useState('');
  const [description, setDescription] = useState('');
  const [tastingNotes, setTastingNotes] = useState('');
  const [marketingSummary, setMarketingSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!name || !basicInfo || !description || !tastingNotes || !marketingSummary) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        imageUrl: image || 'https://example.com/placeholder.jpg',
        basicInfo,
        name,
        description,
        tastingNotes,
        marketingSummary,
      };

      await createProduct(payload);
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      router.back();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível cadastrar o produto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Cadastrar Produto</Text>
            <Text style={styles.subtitle}>Adicione uma nova obra-prima ao portfólio Salva</Text>
          </View>
        </View>

        {/* Image Upload Section */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.imageUploadArea} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.selectedImage} />
            ) : (
              <>
                <MaterialCommunityIcons name="camera-outline" size={40} color="#888" />
                <Text style={styles.imageUploadTitle}>Carregar imagem</Text>
                <Text style={styles.imageUploadSubtitle}>Garrafa ou Rótulo (PNG/JPG)</Text>
              </>
            )}
          </TouchableOpacity>
          <Text style={styles.labelCentered}>VISUAL DO PRODUTO</Text>
        </View>

        {/* Basic Info Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="information-outline" size={20} color="#333" />
            <Text style={styles.sectionTitle}>Informações Básicas</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>NOME DO PRODUTO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Salva Pilsen"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>ESTILO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: German Pilsner"
              value={basicInfo}
              onChangeText={setBasicInfo}
            />
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="file-outline" size={20} color="#333" />
            <Text style={styles.sectionTitle}>Descrição e Notas de Degustação</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>DESCRIÇÃO</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descrição detalhada do produto..."
              multiline
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>NOTAS DE DEGUSTAÇÃO</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Ex: Refrescante, leve, com notas cítricas..."
              multiline
              numberOfLines={3}
              value={tastingNotes}
              onChangeText={setTastingNotes}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>RESUMO DE MARKETING</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descreva o perfil sensorial, aromas e harmonizações sugeridas..."
              multiline
              numberOfLines={4}
              value={marketingSummary}
              onChangeText={setMarketingSummary}
            />
          </View>
        </View>

        {/* Footer Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()} disabled={loading}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saveButton, loading && { opacity: 0.7 }]}
            onPress={handleSave}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <MaterialCommunityIcons name="content-save-outline" size={20} color="#fff" style={{marginRight: 8}} />
                <Text style={styles.saveButtonText}>Salvar Produto</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
