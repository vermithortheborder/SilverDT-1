import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAppTheme } from "@/components/AppTheme";
import AppScreen from "@/components/AppScreen";
import AppHeader from "@/components/AppHeader";
import {
  Scissors,
  Heart,
  Shield,
  Home,
  Baby,
  Stethoscope,
  Footprints,
} from "lucide-react-native";
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_800ExtraBold,
} from "@expo-google-fonts/sora";

const services = [
  {
    id: "peluqueria",
    icon: Scissors,
    title: "Peluquería Canina",
    subtitle: "Servicios de estética para tu perro",
    color: "#EC4899",
    description: "Baño, corte, limpieza de oídos y más",
  },
  {
    id: "funerario",
    icon: Heart,
    title: "Servicio Funerario",
    subtitle: "Despedida digna para tu compañero",
    color: "#6B7280",
    description: "Servicios profesionales de cremación",
  },
  {
    id: "seguro",
    icon: Shield,
    title: "Seguro",
    subtitle: "Protección y cobertura médica",
    color: "#3B82F6",
    description: "Cobertura médica para tu mascota",
  },
  {
    id: "hospedaje",
    icon: Home,
    title: "Hospedaje",
    subtitle: "Alojamiento seguro para tu perro",
    color: "#F59E0B",
    description: "Cuidado 24/7 en instalaciones seguras",
  },
  {
    id: "daycare",
    icon: Baby,
    title: "Daycare",
    subtitle: "Cuidado diurno profesional",
    color: "#10B981",
    description: "Supervisión durante el día",
  },
  {
    id: "paseadores",
    icon: Footprints,
    title: "Paseos",
    subtitle: "Paseadores profesionales",
    color: "#8B5CF6",
    description: "Ejercicio y socialización para tu perro",
  },
  {
    id: "clinica",
    icon: Stethoscope,
    title: "Clínica Veterinaria",
    subtitle: "Atención médica especializada",
    color: "#14B8A6",
    description: "Consultas y tratamientos veterinarios",
  },
];

export default function ServicesScreen() {
  const { colors, isDark } = useAppTheme();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const header = (
    <AppHeader
      title="Servicios"
      showBackButton={true}
      titleStyle={{
        fontFamily: "Sora_800ExtraBold",
        fontSize: 24,
      }}
    />
  );

  return (
    <AppScreen header={header}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text
          style={{
            fontFamily: "Sora_400Regular",
            fontSize: 16,
            color: colors.secondary,
            marginBottom: 8,
            marginTop: 12,
          }}
        >
          Selecciona un servicio
        </Text>
        <Text
          style={{
            fontFamily: "Sora_800ExtraBold",
            fontSize: 26,
            color: colors.primary,
            marginBottom: 24,
            lineHeight: 34,
          }}
        >
          ¿Qué necesitas hoy?
        </Text>

        {/* Services Grid */}
        <View style={{ gap: 16 }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <TouchableOpacity
                key={service.id}
                onPress={() =>
                  router.push({
                    pathname: "/service-request",
                    params: { serviceType: service.id },
                  })
                }
                style={{
                  backgroundColor: colors.cardBackground,
                  borderRadius: 16,
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  shadowColor: colors.cardShadow,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: isDark ? 0.3 : 0.06,
                  shadowRadius: 8,
                  elevation: 4,
                }}
              >
                {/* Icon */}
                <View
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: service.color + "20",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon size={28} color={service.color} strokeWidth={2.5} />
                </View>

                {/* Content */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Sora_600SemiBold",
                      fontSize: 16,
                      color: colors.primary,
                      marginBottom: 4,
                    }}
                  >
                    {service.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Sora_400Regular",
                      fontSize: 13,
                      color: colors.secondary,
                      marginBottom: 6,
                    }}
                  >
                    {service.subtitle}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Sora_400Regular",
                      fontSize: 12,
                      color: service.color,
                    }}
                  >
                    {service.description}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </AppScreen>
  );
}
