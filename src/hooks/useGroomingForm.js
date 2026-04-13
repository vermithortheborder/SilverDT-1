import React, { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useUpload from "@/utils/useUpload";

export function useGroomingForm() {
  const [upload, { loading: uploadLoading }] = useUpload();

  const [groomingClientName, setGroomingClientName] = useState("");
  const [groomingPetName, setGroomingPetName] = useState("");
  const [groomingBreed, setGroomingBreed] = useState("");
  const [petSex, setPetSex] = useState("");
  const [groomingSize, setGroomingSize] = useState("mediano");
  const [petAge, setPetAge] = useState("");
  const [groomingColor, setGroomingColor] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [groomingAddress, setGroomingAddress] = useState("");
  const [vaccineUpToDate, setVaccineUpToDate] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      const uploadResult = await upload({
        reactNativeAsset: {
          uri: asset.uri,
          type: asset.type,
          name: asset.fileName || "pet-image.jpg",
          mimeType: asset.mimeType || "image/jpeg",
        },
      });

      if (uploadResult.url) {
        setPetImage(uploadResult.url);
      } else if (uploadResult.error) {
        Alert.alert("Error", "No se pudo subir la imagen");
      }
    }
  };

  const isFormComplete = () => {
    return (
      groomingClientName.trim() !== "" &&
      groomingPetName.trim() !== "" &&
      groomingBreed.trim() !== "" &&
      petSex.trim() !== "" &&
      groomingSize.trim() !== "" &&
      petAge.trim() !== "" &&
      groomingColor.trim() !== "" &&
      groomingAddress.trim() !== "" &&
      vaccineUpToDate.trim() !== "" &&
      serviceLocation.trim() !== ""
    );
  };

  return {
    groomingClientName,
    setGroomingClientName,
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
    groomingAddress,
    setGroomingAddress,
    vaccineUpToDate,
    setVaccineUpToDate,
    serviceLocation,
    setServiceLocation,
    uploadLoading,
    pickImage,
    isFormComplete,
  };
}
