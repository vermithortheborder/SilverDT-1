import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export function DateSelector({
  availableDates,
  selectedDateIndex,
  setSelectedDateIndex,
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
        Fecha Preferida
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        style={{ flexGrow: 0 }}
      >
        {availableDates.map((date, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDateIndex(index)}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 12,
              backgroundColor:
                selectedDateIndex === index
                  ? colors.accent
                  : colors.cardBackground,
              alignItems: "center",
              minWidth: 80,
              borderWidth: 2,
              borderColor:
                selectedDateIndex === index ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 12,
                color:
                  selectedDateIndex === index ? "#FFFFFF" : colors.secondary,
                marginBottom: 4,
              }}
            >
              {date.toLocaleDateString("es-ES", { weekday: "short" })}
            </Text>
            <Text
              style={{
                fontFamily: "Sora_800ExtraBold",
                fontSize: 18,
                color: selectedDateIndex === index ? "#FFFFFF" : colors.primary,
              }}
            >
              {date.getDate()}
            </Text>
            <Text
              style={{
                fontFamily: "Sora_400Regular",
                fontSize: 10,
                color:
                  selectedDateIndex === index ? "#FFFFFF" : colors.secondary,
              }}
            >
              {date.toLocaleDateString("es-ES", { month: "short" })}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
