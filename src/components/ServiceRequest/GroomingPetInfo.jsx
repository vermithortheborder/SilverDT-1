import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Upload } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";

export function GroomingPetInfo({
  groomingPetName,
  setGroomingPetName,
  groomingBreed,
  setGroomingBreed,
  petSex,
  setPetSex,
  groomingSize,
  setGroomingSize,
  petAge,
  setPetAge,
  groomingColor,
  setGroomingColor,
  petImage,
  setPetImage,
  uploadLoading,
  onImagePick,
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
        🐾 Información de la Mascota
      </Text>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Nombre de la Mascota *
      </Text>
      <TextInput
        value={groomingPetName}
        onChangeText={setGroomingPetName}
        placeholder="Max"
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

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 14,
              color: colors.primary,
              marginBottom: 8,
            }}
          >
            Raza *
          </Text>
          <TextInput
            value={groomingBreed}
            onChangeText={setGroomingBreed}
            placeholder="Golden Retriever"
            placeholderTextColor={colors.secondary}
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

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 14,
              color: colors.primary,
              marginBottom: 8,
            }}
          >
            Sexo *
          </Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {["Macho", "Hembra"].map((sex) => (
              <TouchableOpacity
                key={sex}
                onPress={() => setPetSex(sex)}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  borderRadius: 12,
                  backgroundColor:
                    petSex === sex ? colors.accent : colors.background,
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: petSex === sex ? colors.accent : "transparent",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Sora_600SemiBold",
                    fontSize: 14,
                    color: petSex === sex ? "#FFFFFF" : colors.primary,
                  }}
                >
                  {sex}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Tamaño *
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        {[
          { key: "pequeno", label: "P" },
          { key: "mediano", label: "M" },
          { key: "grande", label: "G" },
        ].map((size) => (
          <TouchableOpacity
            key={size.key}
            onPress={() => setGroomingSize(size.key)}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 12,
              backgroundColor:
                groomingSize === size.key ? colors.accent : colors.background,
              alignItems: "center",
              borderWidth: 2,
              borderColor:
                groomingSize === size.key ? colors.accent : "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_800ExtraBold",
                fontSize: 18,
                color: groomingSize === size.key ? "#FFFFFF" : colors.primary,
              }}
            >
              {size.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 14,
              color: colors.primary,
              marginBottom: 8,
            }}
          >
            Edad *
          </Text>
          <TextInput
            value={petAge}
            onChangeText={setPetAge}
            placeholder="3 años"
            placeholderTextColor={colors.secondary}
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

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 14,
              color: colors.primary,
              marginBottom: 8,
            }}
          >
            Color *
          </Text>
          <TextInput
            value={groomingColor}
            onChangeText={setGroomingColor}
            placeholder="Dorado"
            placeholderTextColor={colors.secondary}
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
      </View>

      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 14,
          color: colors.primary,
          marginBottom: 8,
        }}
      >
        Imagen de la Mascota (opcional)
      </Text>
      <TouchableOpacity
        onPress={onImagePick}
        disabled={uploadLoading}
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
          minHeight: 120,
          borderWidth: 2,
          borderColor: petImage ? colors.accent : colors.secondary,
          borderStyle: "dashed",
        }}
      >
        {petImage ? (
          <Image
            source={{ uri: petImage }}
            style={{ width: "100%", height: 150, borderRadius: 8 }}
            resizeMode="cover"
          />
        ) : (
          <>
            <Upload size={32} color={colors.secondary} />
            <Text
              style={{
                fontFamily: "Sora_400Regular",
                fontSize: 14,
                color: colors.secondary,
                marginTop: 8,
              }}
            >
              {uploadLoading
                ? "Subiendo imagen..."
                : "Toca para subir una foto"}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
