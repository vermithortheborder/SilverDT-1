import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export function GroomingServiceInfo({
  groomingAddress,
  setGroomingAddress,
  vaccineUpToDate,
  setVaccineUpToDate,
  serviceLocation,
  setServiceLocation,
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
        🏡 Información del Servicio
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Dirección *
      </Text>
      <TextInput
        value={groomingAddress}
        onChangeText={setGroomingAddress}
        placeholder="Calle, Número, Colonia, CP"
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
        ¿Vacuna al día? *
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        {["Sí", "No"].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setVaccineUpToDate(option)}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 12,
              backgroundColor:
                vaccineUpToDate === option ? colors.accent : colors.background,
              alignItems: "center",
              borderWidth: 2,
              borderColor:
                vaccineUpToDate === option ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 16,
                color: vaccineUpToDate === option ? "#FFFFFF" : colors.primary,
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Tipo de Servicio *
      </Text>
      <View style={{ gap: 12 }}>
        {[
          { key: "domicilio", label: "🏡 Servicio a Domicilio" },
          { key: "recogida", label: "🚗 Servicio de Recogida" },
        ].map((service) => (
          <TouchableOpacity
            key={service.key}
            onPress={() => setServiceLocation(service.key)}
            style={{
              padding: 16,
              borderRadius: 12,
              backgroundColor:
                serviceLocation === service.key
                  ? colors.accent
                  : colors.background,
              borderWidth: 2,
              borderColor:
                serviceLocation === service.key ? colors.accent : "transparent",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 16,
                color:
                  serviceLocation === service.key ? "#FFFFFF" : colors.primary,
              }}
            >
              {service.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
