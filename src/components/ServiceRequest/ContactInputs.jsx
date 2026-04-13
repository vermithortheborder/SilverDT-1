import React from "react";
import { View, Text, TextInput } from "react-native";

export function ContactInputs({
  contactPhone,
  setContactPhone,
  contactWhatsapp,
  setContactWhatsapp,
  colors,
}) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 12,
        }}
      >
        Teléfono de Contacto *
      </Text>
      <TextInput
        value={contactPhone}
        onChangeText={setContactPhone}
        keyboardType="phone-pad"
        placeholder="55 1234 5678"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.cardBackground,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 12,
        }}
      />
      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 12,
        }}
      >
        WhatsApp (opcional)
      </Text>
      <TextInput
        value={contactWhatsapp}
        onChangeText={setContactWhatsapp}
        keyboardType="phone-pad"
        placeholder="55 1234 5678"
        placeholderTextColor={colors.secondary}
        style={{
          backgroundColor: colors.cardBackground,
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
