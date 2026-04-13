import React from "react";
import { View, Text, TextInput } from "react-native";

export function FuneralOwnerInfo({
  ownerFullName,
  setOwnerFullName,
  ownerIdDocument,
  setOwnerIdDocument,
  ownerAddress,
  setOwnerAddress,
  contactPhone,
  setContactPhone,
  ownerEmail,
  setOwnerEmail,
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
        👤 Información del Propietario
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Nombre Completo *
      </Text>
      <TextInput
        value={ownerFullName}
        onChangeText={setOwnerFullName}
        placeholder="Juan Pérez García"
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
        Documento de Identidad *
      </Text>
      <TextInput
        value={ownerIdDocument}
        onChangeText={setOwnerIdDocument}
        placeholder="INE, Pasaporte, etc."
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
        Dirección Completa *
      </Text>
      <TextInput
        value={ownerAddress}
        onChangeText={setOwnerAddress}
        placeholder="Calle, Número, Colonia, CP, Ciudad"
        placeholderTextColor={colors.secondary}
        multiline
        numberOfLines={2}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          fontFamily: "Sora_400Regular",
          fontSize: 16,
          color: colors.primary,
          marginBottom: 16,
          textAlignVertical: "top",
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
        Teléfono *
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
        Correo Electrónico *
      </Text>
      <TextInput
        value={ownerEmail}
        onChangeText={setOwnerEmail}
        placeholder="ejemplo@correo.com"
        placeholderTextColor={colors.secondary}
        keyboardType="email-address"
        autoCapitalize="none"
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
