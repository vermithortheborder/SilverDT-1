import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  ScrollView,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import { useRouter } from "expo-router";
import {
  X,
  CheckCircle,
  AlertCircle,
  User,
  Shield,
  Info,
} from "lucide-react-native";
import { useAppTheme } from "@/components/AppTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMutation } from "@tanstack/react-query";
import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_800ExtraBold,
} from "@expo-google-fonts/sora";

export default function QRScannerScreen() {
  const { colors, isDark } = useAppTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [facing, setFacing] = useState("back");
  const [showConsentModal, setShowConsentModal] = useState(false);

  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_800ExtraBold,
  });

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  // Verificar estudiante al escanear
  const verifyMutation = useMutation({
    mutationFn: async (studentId) => {
      const response = await fetch("/api/qr/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error al verificar estudiante");
      }
      return response.json();
    },
    onSuccess: (data) => {
      setStudentInfo(data);
    },
    onError: (error) => {
      Alert.alert("Error", error.message);
      setScanned(false);
    },
  });

  // Registrar asistencia
  const scanMutation = useMutation({
    mutationFn: async (studentId) => {
      const response = await fetch("/api/qr/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.error || error.message || "Error al registrar asistencia",
        );
      }
      return response.json();
    },
    onSuccess: (data) => {
      Alert.alert(
        "✅ Clase Registrada",
        `${data.student.name}\n\nClases restantes: ${data.classesRemaining}\n${data.wasDebt ? "⚠️ Esta clase fue en deuda" : ""}`,
        [
          {
            text: "OK",
            onPress: () => {
              setScanned(false);
              setStudentInfo(null);
            },
          },
        ],
      );
    },
    onError: (error) => {
      Alert.alert("Error", error.message);
      setScanned(false);
      setStudentInfo(null);
    },
  });

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return;

    setScanned(true);

    try {
      const qrData = JSON.parse(data);
      if (qrData.userId && qrData.type === "student_id") {
        verifyMutation.mutate(qrData.userId);
      } else {
        Alert.alert("QR Inválido", "Este código QR no es válido");
        setScanned(false);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo leer el código QR");
      setScanned(false);
    }
  };

  const handleConfirmAttendance = () => {
    // Show consent modal before registering
    setShowConsentModal(true);
  };

  const handleAcceptConsent = () => {
    setShowConsentModal(false);
    if (studentInfo?.student?.id) {
      scanMutation.mutate(studentInfo.student.id);
    }
  };

  const handleDeclineConsent = () => {
    setShowConsentModal(false);
    Alert.alert(
      "Registro Cancelado",
      "No se registrará la asistencia sin consentimiento.",
      [
        {
          text: "OK",
          onPress: () => {
            setScanned(false);
            setStudentInfo(null);
          },
        },
      ],
    );
  };

  const handleCancel = () => {
    setScanned(false);
    setStudentInfo(null);
  };

  if (!fontsLoaded) {
    return null;
  }

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Text>Solicitando permiso de cámara...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <AlertCircle size={64} color={colors.destructive} />
        <Text
          style={{
            fontFamily: "Sora_600SemiBold",
            fontSize: 18,
            color: colors.primary,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          No hay acceso a la cámara
        </Text>
        <Text
          style={{
            fontFamily: "Sora_400Regular",
            fontSize: 14,
            color: colors.secondary,
            marginTop: 8,
            textAlign: "center",
          }}
        >
          Por favor, habilita el permiso de cámara en la configuración
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 24,
            backgroundColor: colors.accent,
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            Volver
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <CameraView
        style={{ flex: 1 }}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        {/* Header */}
        <View
          style={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            paddingBottom: 16,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Sora_800ExtraBold",
                fontSize: 24,
                color: "#FFFFFF",
              }}
            >
              Escanear Carnet
            </Text>
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.2)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <X size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Scanner Frame */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 250,
              height: 250,
              borderWidth: 2,
              borderColor: "#FFFFFF",
              borderRadius: 20,
              backgroundColor: "transparent",
            }}
          >
            {/* Corner indicators */}
            <View
              style={{
                position: "absolute",
                top: -2,
                left: -2,
                width: 40,
                height: 40,
                borderTopWidth: 4,
                borderLeftWidth: 4,
                borderColor: colors.accent,
                borderTopLeftRadius: 20,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: -2,
                right: -2,
                width: 40,
                height: 40,
                borderTopWidth: 4,
                borderRightWidth: 4,
                borderColor: colors.accent,
                borderTopRightRadius: 20,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -2,
                left: -2,
                width: 40,
                height: 40,
                borderBottomWidth: 4,
                borderLeftWidth: 4,
                borderColor: colors.accent,
                borderBottomLeftRadius: 20,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: 40,
                height: 40,
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderColor: colors.accent,
                borderBottomRightRadius: 20,
              }}
            />
          </View>

          <Text
            style={{
              fontFamily: "Sora_400Regular",
              fontSize: 16,
              color: "#FFFFFF",
              marginTop: 24,
              textAlign: "center",
              paddingHorizontal: 40,
            }}
          >
            Centra el código QR del carnet del estudiante
          </Text>
        </View>
      </CameraView>

      {/* Student Info Modal */}
      {studentInfo && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.cardBackground,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 24,
            paddingBottom: insets.bottom + 24,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.3,
            shadowRadius: 12,
            elevation: 8,
          }}
        >
          {/* Student Header */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: colors.accent + "20",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <User size={40} color={colors.accent} />
            </View>
            <Text
              style={{
                fontFamily: "Sora_800ExtraBold",
                fontSize: 22,
                color: colors.primary,
                marginBottom: 4,
              }}
            >
              {studentInfo.student.name}
            </Text>
            <Text
              style={{
                fontFamily: "Sora_400Regular",
                fontSize: 14,
                color: colors.secondary,
              }}
            >
              {studentInfo.student.email}
            </Text>
          </View>

          {/* Stats Grid */}
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.02)",
                borderRadius: 16,
                padding: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Sora_800ExtraBold",
                  fontSize: 28,
                  color:
                    studentInfo.stats.remainingClasses < 0
                      ? "#EF4444"
                      : colors.accent,
                  marginBottom: 4,
                }}
              >
                {studentInfo.stats.remainingClasses}
              </Text>
              <Text
                style={{
                  fontFamily: "Sora_400Regular",
                  fontSize: 12,
                  color: colors.secondary,
                }}
              >
                Restantes
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.02)",
                borderRadius: 16,
                padding: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Sora_800ExtraBold",
                  fontSize: 28,
                  color: "#10B981",
                  marginBottom: 4,
                }}
              >
                {studentInfo.stats.completedClasses}
              </Text>
              <Text
                style={{
                  fontFamily: "Sora_400Regular",
                  fontSize: 12,
                  color: colors.secondary,
                }}
              >
                Completadas
              </Text>
            </View>
          </View>

          {/* Warning */}
          {studentInfo.warning && (
            <View
              style={{
                backgroundColor:
                  studentInfo.stats.remainingClasses < -1
                    ? "#FEE2E2"
                    : "#FEF3C7",
                borderRadius: 12,
                padding: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <AlertCircle
                size={16}
                color={
                  studentInfo.stats.remainingClasses < -1
                    ? "#EF4444"
                    : "#F59E0B"
                }
              />
              <Text
                style={{
                  fontFamily: "Sora_600SemiBold",
                  fontSize: 13,
                  color:
                    studentInfo.stats.remainingClasses < -1
                      ? "#EF4444"
                      : "#F59E0B",
                  flex: 1,
                }}
              >
                {studentInfo.warning}
              </Text>
            </View>
          )}

          {/* Action Buttons */}
          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity
              onPress={handleCancel}
              style={{
                flex: 1,
                backgroundColor: colors.destructiveBackground,
                paddingVertical: 16,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Sora_600SemiBold",
                  fontSize: 16,
                  color: colors.destructive,
                }}
              >
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleConfirmAttendance}
              disabled={!studentInfo.canTakeClass || scanMutation.isPending}
              style={{
                flex: 1,
                backgroundColor: studentInfo.canTakeClass
                  ? colors.accent
                  : colors.secondary + "40",
                paddingVertical: 16,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Sora_600SemiBold",
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                {scanMutation.isPending
                  ? "Registrando..."
                  : studentInfo.canTakeClass
                    ? "Registrar Clase"
                    : "No Disponible"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Data Consent Modal */}
      <Modal
        visible={showConsentModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowConsentModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: colors.cardBackground,
              borderRadius: 24,
              padding: 24,
              maxWidth: 500,
              width: "100%",
              maxHeight: "80%",
            }}
          >
            {/* Header */}
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: colors.accent + "20",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <Shield size={32} color={colors.accent} />
              </View>
              <Text
                style={{
                  fontFamily: "Sora_800ExtraBold",
                  fontSize: 20,
                  color: colors.primary,
                  textAlign: "center",
                  marginBottom: 4,
                }}
              >
                Consentimiento de Datos
              </Text>
              <Text
                style={{
                  fontFamily: "Sora_400Regular",
                  fontSize: 14,
                  color: colors.secondary,
                  textAlign: "center",
                }}
              >
                Información sobre el registro de asistencia
              </Text>
            </View>

            {/* Content */}
            <ScrollView
              style={{
                maxHeight: 300,
                marginBottom: 20,
              }}
              showsVerticalScrollIndicator={false}
            >
              {/* What data is collected */}
              <View style={{ marginBottom: 16 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Info size={18} color={colors.accent} />
                  <Text
                    style={{
                      fontFamily: "Sora_600SemiBold",
                      fontSize: 15,
                      color: colors.primary,
                      marginLeft: 8,
                    }}
                  >
                    Datos que se registrarán:
                  </Text>
                </View>
                <View style={{ paddingLeft: 26 }}>
                  <Text
                    style={{
                      fontFamily: "Sora_400Regular",
                      fontSize: 13,
                      color: colors.secondary,
                      lineHeight: 20,
                    }}
                  >
                    • Nombre completo del estudiante{"\n"}• Correo electrónico
                    {"\n"}• ID de usuario{"\n"}• Fecha y hora de la clase{"\n"}•
                    Clases completadas y restantes{"\n"}• Nombre del instructor
                    que registra
                  </Text>
                </View>
              </View>

              {/* Why it's collected */}
              <View style={{ marginBottom: 16 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Info size={18} color={colors.accent} />
                  <Text
                    style={{
                      fontFamily: "Sora_600SemiBold",
                      fontSize: 15,
                      color: colors.primary,
                      marginLeft: 8,
                    }}
                  >
                    Propósito:
                  </Text>
                </View>
                <View style={{ paddingLeft: 26 }}>
                  <Text
                    style={{
                      fontFamily: "Sora_400Regular",
                      fontSize: 13,
                      color: colors.secondary,
                      lineHeight: 20,
                    }}
                  >
                    Esta información se utiliza para:{"\n"}• Llevar un registro
                    de asistencia a clases{"\n"}• Gestionar el paquete de clases
                    del estudiante{"\n"}• Generar estadísticas de participación
                    {"\n"}• Comunicar el progreso al estudiante
                  </Text>
                </View>
              </View>

              {/* Data protection */}
              <View
                style={{
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.02)",
                  borderRadius: 12,
                  padding: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Sora_600SemiBold",
                    fontSize: 13,
                    color: colors.primary,
                    marginBottom: 4,
                  }}
                >
                  🔒 Protección de datos
                </Text>
                <Text
                  style={{
                    fontFamily: "Sora_400Regular",
                    fontSize: 12,
                    color: colors.secondary,
                    lineHeight: 18,
                  }}
                >
                  Tus datos están protegidos y solo se comparten con los
                  instructores autorizados de Silver Dog Training. No vendemos
                  ni compartimos tu información con terceros.
                </Text>
              </View>
            </ScrollView>

            {/* Buttons */}
            <View style={{ gap: 12 }}>
              <TouchableOpacity
                onPress={handleAcceptConsent}
                disabled={scanMutation.isPending}
                style={{
                  backgroundColor: colors.accent,
                  paddingVertical: 16,
                  borderRadius: 16,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Sora_600SemiBold",
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                >
                  {scanMutation.isPending
                    ? "Registrando..."
                    : "Acepto y Continuar"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleDeclineConsent}
                disabled={scanMutation.isPending}
                style={{
                  backgroundColor: colors.destructiveBackground,
                  paddingVertical: 16,
                  borderRadius: 16,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Sora_600SemiBold",
                    fontSize: 16,
                    color: colors.destructive,
                  }}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
