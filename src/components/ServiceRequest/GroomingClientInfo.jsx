import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Upload } from "lucide-react-native";

export function GroomingClientInfo({
  groomingClientName,
  setGroomingClientName,
  contactPhone,
  setContactPhone,
  colors,
}) {
  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "Sora_800ExtraBold",
          fontSize: 18,
          color: colors.primary,
          marginBottom: 16,
        }}
      >
        👤 Información del Cliente
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Nombre del Cliente *
      </Text>
      <TextInput
        value={groomingClientName}
        onChangeText={setGroomingClientName}
        placeholder="Juan Pérez"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 16,
        }}
      />

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Teléfono de Contacto *
      </Text>
      <TextInput
        value={contactPhone}
        onChangeText={setContactPhone}
        placeholder="55 1234 5678"
        placeholderTextColor={colors.secondary}
        keyboardType="phone-pad"
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
        }}
      />
    </View>
  );
}
