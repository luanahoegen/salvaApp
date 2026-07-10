import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../styles/cadastrarProdutoStyles'; // Reaproveitando estilos de formulário
import { createEvent } from '../services/eventService';

export default function CadastrarEvento() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name || !description || !date || !time || !category) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name,
        description,
        date,
        time,
        category,
      };

      await createEvent(payload);
      Alert.alert('Sucesso', 'Evento cadastrado com sucesso!');
      router.back();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível cadastrar o evento.');
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
            <Text style={styles.title}>Novo Evento</Text>
            <Text style={styles.subtitle}>Agende um novo evento na Salva</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="calendar" size={20} color="#333" />
            <Text style={styles.sectionTitle}>Detalhes do Evento</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>NOME DO EVENTO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Degustação Harmonizada"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CATEGORIA</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Passeio, Workshop, Lançamento"
              value={category}
              onChangeText={setCategory}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={[styles.inputGroup, { flex: 0.48 }]}>
              <Text style={styles.inputLabel}>DATA (DD/MM/AAAA)</Text>
              <TextInput
                style={styles.input}
                placeholder="26/06/2026"
                value={date}
                onChangeText={setDate}
              />
            </View>
            <View style={[styles.inputGroup, { flex: 0.48 }]}>
              <Text style={styles.inputLabel}>HORA (HH:MM)</Text>
              <TextInput
                style={styles.input}
                placeholder="14:00"
                value={time}
                onChangeText={setTime}
              />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>DESCRIÇÃO</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descreva o que vai acontecer no evento..."
              multiline
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()} disabled={loading}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: '#3B82F6' }, loading && { opacity: 0.7 }]}
            onPress={handleSave}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <MaterialCommunityIcons name="check" size={20} color="#fff" style={{marginRight: 8}} />
                <Text style={styles.saveButtonText}>Criar Evento</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
