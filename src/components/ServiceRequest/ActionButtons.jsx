import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MessageCircle, Phone } from "lucide-react-native";

export function ActionButtons({
  onSubmit,
  isSubmitting,
  isFormComplete,
  onWhatsApp,
  onPhone,
  showContactButtons,
  colors,
}) {
  return (
    <View style={{ gap: 12, marginBottom: 20 }}>
      <TouchableOpacity
        onPress={onSubmit}
        disabled={isSubmitting || !isFormComplete}
        style={{
          backgroundColor: colors.accent,
          borderRadius: 16,
          padding: 18,
          alignItems: "center",
          opacity: isSubmitting || !isFormComplete ? 0.6 : 1,
        }}
      >
        <Text
          style={{
            fontFamily: "Sora_800ExtraBold",
            fontSize: 18,
            color: "#FFFFFF",
          }}
        >
          {isSubmitting ? "Enviando..." : "Solicitar Servicio"}
        </Text>
      </TouchableOpacity>

      {!isFormComplete && (
        <Text
          style={{
            fontFamily: "Sora_400Regular",
            fontSize: 12,
            color: colors.secondary,
            textAlign: "center",
          }}
        >
          ⚠️ Por favor completa todos los campos requeridos
        </Text>
      )}

      {showContactButtons && (
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            onPress={onWhatsApp}
            style={{
              flex: 1,
              backgroundColor: "#25D366",
              borderRadius: 16,
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <MessageCircle size={20} color="#FFFFFF" />
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 14,
                color: "#FFFFFF",
              }}
            >
              WhatsApp
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPhone}
            style={{
              flex: 1,
              backgroundColor: "#007AFF",
              borderRadius: 16,
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Phone size={20} color="#FFFFFF" />
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 14,
                color: "#FFFFFF",
              }}
            >
              Llamar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
