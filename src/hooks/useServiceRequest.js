import { useState } from "react";
import { Alert, Linking } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useServiceRequest(
  serviceType,
  availableDates,
  selectedDateIndex,
) {
  const queryClient = useQueryClient();

  const createRequest = useMutation({
    mutationFn: async (data) => {
      const response = await fetch("/api/services/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to create request");
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["service-requests"]);
      Alert.alert(
        "¡Solicitud Enviada!",
        `Tu solicitud ha sido enviada. Total: $${data.request.final_price}`,
        [
          {
            text: "WhatsApp",
            onPress: () => openWhatsApp(data.request),
          },
          {
            text: "Aceptar",
            onPress: () => {},
          },
        ],
      );
    },
    onError: (error) => {
      Alert.alert("Error", "No se pudo enviar la solicitud");
    },
  });

  const openWhatsApp = (request) => {
    const phone = "5215512345678";
    const selectedDate = availableDates[selectedDateIndex];
    const SERVICE_NAMES = {
      peluqueria: "Peluquería Canina",
      funerario: "Servicio Funerario",
      seguro: "Seguro para Mascotas",
      hospedaje: "Hospedaje",
      daycare: "Daycare",
      clinica: "Clínica Veterinaria",
      paseadores: "Paseadores",
    };
    const message = `Hola! Solicito ${SERVICE_NAMES[serviceType]}. Fecha: ${selectedDate.toLocaleDateString()}. Total: $${request.final_price}`;
    const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert("Error", "WhatsApp no está instalado");
        }
      })
      .catch((err) => console.error("Error opening WhatsApp:", err));
  };

  const openPhone = () => {
    const phoneNumber = "tel:5512345678";
    Linking.openURL(phoneNumber);
  };

  return {
    createRequest,
    openWhatsApp,
    openPhone,
  };
}
