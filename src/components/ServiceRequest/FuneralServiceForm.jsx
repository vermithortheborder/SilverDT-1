import React from "react";
import { FuneralOwnerInfo } from "@/components/ServiceRequest/FuneralOwnerInfo";
import { FuneralPetInfo } from "@/components/ServiceRequest/FuneralPetInfo";
import { FuneralPaymentMethod } from "@/components/ServiceRequest/FuneralPaymentMethod";
import { NotesInput } from "@/components/ServiceRequest/NotesInput";

export function FuneralServiceForm({
  ownerFullName,
  setOwnerFullName,
  ownerIdDocument,
  setOwnerIdDocument,
  ownerAddress,
  setOwnerAddress,
  contactPhone,
  setContactPhone,
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
  notes,
  setNotes,
  colors,
}) {
  return (
    <>
      <FuneralOwnerInfo
        ownerFullName={ownerFullName}
        setOwnerFullName={setOwnerFullName}
        ownerIdDocument={ownerIdDocument}
        setOwnerIdDocument={setOwnerIdDocument}
        ownerAddress={ownerAddress}
        setOwnerAddress={setOwnerAddress}
        contactPhone={contactPhone}
        setContactPhone={setContactPhone}
        ownerEmail={ownerEmail}
        setOwnerEmail={setOwnerEmail}
        colors={colors}
      />

      <FuneralPetInfo
        petName={petName}
        setPetName={setPetName}
        petSpecies={petSpecies}
        setPetSpecies={setPetSpecies}
        petBreed={petBreed}
        setPetBreed={setPetBreed}
        petWeight={petWeight}
        setPetWeight={setPetWeight}
        petColor={petColor}
        setPetColor={setPetColor}
        colors={colors}
      />

      <FuneralPaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        colors={colors}
      />

      <NotesInput notes={notes} setNotes={setNotes} colors={colors} />
    </>
  );
}
