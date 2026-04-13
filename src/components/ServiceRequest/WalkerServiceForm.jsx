import React from "react";
import { View } from "react-native";
import { WalkerDogInfo } from "./WalkerDogInfo";
import { WalkerLocationContact } from "./WalkerLocationContact";
import { WalkerRequirements } from "./WalkerRequirements";
import { NotesInput } from "./NotesInput";

export const WalkerServiceForm = ({
  walkerDogName,
  setWalkerDogName,
  walkerDogBreed,
  setWalkerDogBreed,
  walkerDogAge,
  setWalkerDogAge,
  walkerDogWeight,
  setWalkerDogWeight,
  walkerAddress,
  setWalkerAddress,
  walkerPhone,
  setWalkerPhone,
  walkerRequirements,
  setWalkerRequirements,
  notes,
  setNotes,
  colors,
}) => {
  return (
    <View>
      <WalkerDogInfo
        walkerDogName={walkerDogName}
        setWalkerDogName={setWalkerDogName}
        walkerDogBreed={walkerDogBreed}
        setWalkerDogBreed={setWalkerDogBreed}
        walkerDogAge={walkerDogAge}
        setWalkerDogAge={setWalkerDogAge}
        walkerDogWeight={walkerDogWeight}
        setWalkerDogWeight={setWalkerDogWeight}
        colors={colors}
      />

      <WalkerLocationContact
        walkerAddress={walkerAddress}
        setWalkerAddress={setWalkerAddress}
        walkerPhone={walkerPhone}
        setWalkerPhone={setWalkerPhone}
        colors={colors}
      />

      <WalkerRequirements
        walkerRequirements={walkerRequirements}
        setWalkerRequirements={setWalkerRequirements}
        colors={colors}
      />

      <NotesInput notes={notes} setNotes={setNotes} colors={colors} />
    </View>
  );
};
