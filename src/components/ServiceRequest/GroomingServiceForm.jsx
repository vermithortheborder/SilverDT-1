import React from "react";
import { GroomingClientInfo } from "@/components/ServiceRequest/GroomingClientInfo";
import { GroomingPetInfo } from "@/components/ServiceRequest/GroomingPetInfo";
import { GroomingServiceInfo } from "@/components/ServiceRequest/GroomingServiceInfo";
import { NotesInput } from "@/components/ServiceRequest/NotesInput";

export function GroomingServiceForm({
  groomingClientName,
  setGroomingClientName,
  contactPhone,
  setContactPhone,
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
  groomingAddress,
  setGroomingAddress,
  vaccineUpToDate,
  setVaccineUpToDate,
  serviceLocation,
  setServiceLocation,
  notes,
  setNotes,
  colors,
}) {
  return (
    <>
      <GroomingClientInfo
        groomingClientName={groomingClientName}
        setGroomingClientName={setGroomingClientName}
        contactPhone={contactPhone}
        setContactPhone={setContactPhone}
        colors={colors}
      />

      <GroomingPetInfo
        groomingPetName={groomingPetName}
        setGroomingPetName={setGroomingPetName}
        groomingBreed={groomingBreed}
        setGroomingBreed={setGroomingBreed}
        petSex={petSex}
        setPetSex={setPetSex}
        groomingSize={groomingSize}
        setGroomingSize={setGroomingSize}
        petAge={petAge}
        setPetAge={setPetAge}
        groomingColor={groomingColor}
        setGroomingColor={setGroomingColor}
        petImage={petImage}
        setPetImage={setPetImage}
        uploadLoading={uploadLoading}
        onImagePick={onImagePick}
        colors={colors}
      />

      <GroomingServiceInfo
        groomingAddress={groomingAddress}
        setGroomingAddress={setGroomingAddress}
        vaccineUpToDate={vaccineUpToDate}
        setVaccineUpToDate={setVaccineUpToDate}
        serviceLocation={serviceLocation}
        setServiceLocation={setServiceLocation}
        colors={colors}
      />

      <NotesInput notes={notes} setNotes={setNotes} colors={colors} />
    </>
  );
}
