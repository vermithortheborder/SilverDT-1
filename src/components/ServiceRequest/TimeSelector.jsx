import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function TimeSelector({ requestedTime, setRequestedTime, colors }) {
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
        Hora Preferida
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {["09:00", "11:00", "13:00", "15:00", "17:00"].map((time) => (
          <TouchableOpacity
            key={time}
            onPress={() => setRequestedTime(time)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 12,
              backgroundColor:
                requestedTime === time ? colors.accent : colors.cardBackground,
              borderWidth: 2,
              borderColor:
                requestedTime === time ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 14,
                color: requestedTime === time ? "#FFFFFF" : colors.primary,
              }}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
