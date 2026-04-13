import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function FuneralPaymentMethod({
  paymentMethod,
  setPaymentMethod,
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
        💳 Método de Pago *
      </Text>
      <View style={{ gap: 12 }}>
        {["Efectivo", "Tarjeta de Crédito", "Transferencia Bancaria"].map(
          (method) => (
            <TouchableOpacity
              key={method}
              onPress={() => setPaymentMethod(method)}
              style={{
                padding: 16,
                borderRadius: 12,
                backgroundColor:
                  paymentMethod === method ? colors.accent : colors.background,
                borderWidth: 2,
                borderColor:
                  paymentMethod === method ? colors.accent : "transparent",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Sora_600SemiBold",
                  fontSize: 16,
                  color: paymentMethod === method ? "#FFFFFF" : colors.primary,
                }}
              >
                {method}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    </View>
  );
}
