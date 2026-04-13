import { useState } from "react";

export function useFuneralForm() {
  const [ownerFullName, setOwnerFullName] = useState("");
  const [ownerIdDocument, setOwnerIdDocument] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [petSpecies, setPetSpecies] = useState("perro");
  const [petBreed, setPetBreed] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petColor, setPetColor] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const isFormComplete = () => {
    return (
      ownerFullName.trim() !== "" &&
      ownerIdDocument.trim() !== "" &&
      ownerAddress.trim() !== "" &&
      ownerEmail.trim() !== "" &&
      petName.trim() !== "" &&
      petSpecies.trim() !== "" &&
      petBreed.trim() !== "" &&
      petWeight.trim() !== "" &&
      petColor.trim() !== "" &&
      paymentMethod.trim() !== ""
    );
  };

  return {
    ownerFullName,
    setOwnerFullName,
    ownerIdDocument,
    setOwnerIdDocument,
    ownerAddress,
    setOwnerAddress,
    ownerEmail,
    setOwnerEmail,
    petName,
    setPetName,
    petSpecies,
    setPetSpecies,
    petBreed,
    setPetBreed,
    petWeight,
    setPetWeight,
    petColor,
    setPetColor,
    paymentMethod,
    setPaymentMethod,
    isFormComplete,
  };
}
