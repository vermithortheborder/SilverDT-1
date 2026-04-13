import React from "react";
import { ScrollView } from "react-native";
import { PetSelector } from "@/components/ServiceRequest/PetSelector";
import { PetSizeSelector } from "@/components/ServiceRequest/PetSizeSelector";
import { DateSelector } from "@/components/ServiceRequest/DateSelector";
import { TimeSelector } from "@/components/ServiceRequest/TimeSelector";
import { DurationInput } from "@/components/ServiceRequest/DurationInput";
import { ContactInputs } from "@/components/ServiceRequest/ContactInputs";
import { NotesInput } from "@/components/ServiceRequest/NotesInput";

export function StandardServiceForm({
  pets,
  selectedPet,
  setSelectedPet,
  petSize,
  setPetSize,
  availableDates,
  selectedDateIndex,
  setSelectedDateIndex,
  requestedTime,
  setRequestedTime,
  needsDuration,
  durationDays,
  setDurationDays,
  contactPhone,
  setContactPhone,
  contactWhatsapp,
  setContactWhatsapp,
  notes,
  setNotes,
  colors,
}) {
  return (
    <>
      <PetSelector
        pets={pets}
        selectedPet={selectedPet}
        setSelectedPet={setSelectedPet}
        colors={colors}
      />

      <PetSizeSelector
        petSize={petSize}
        setPetSize={setPetSize}
        colors={colors}
      />

      <DateSelector
        availableDates={availableDates}
        selectedDateIndex={selectedDateIndex}
        setSelectedDateIndex={setSelectedDateIndex}
        colors={colors}
      />

      <TimeSelector
        requestedTime={requestedTime}
        setRequestedTime={setRequestedTime}
        colors={colors}
      />

      {needsDuration && (
        <DurationInput
          durationDays={durationDays}
          setDurationDays={setDurationDays}
          colors={colors}
        />
      )}

      <ContactInputs
        contactPhone={contactPhone}
        setContactPhone={setContactPhone}
        contactWhatsapp={contactWhatsapp}
        setContactWhatsapp={setContactWhatsapp}
        colors={colors}
      />

      <NotesInput notes={notes} setNotes={setNotes} colors={colors} />
    </>
  );
}
