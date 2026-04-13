import { useState } from "react";

export const useWalkerForm = () => {
  const [walkerDogName, setWalkerDogName] = useState("");
  const [walkerDogBreed, setWalkerDogBreed] = useState("");
  const [walkerDogAge, setWalkerDogAge] = useState("");
  const [walkerDogWeight, setWalkerDogWeight] = useState("");
  const [walkerAddress, setWalkerAddress] = useState("");
  const [walkerPhone, setWalkerPhone] = useState("");
  const [walkerRequirements, setWalkerRequirements] = useState("");

  const isFormComplete = () => {
    return (
      walkerDogName.trim() !== "" &&
      walkerDogBreed.trim() !== "" &&
      walkerDogAge.trim() !== "" &&
      walkerDogWeight.trim() !== "" &&
      walkerAddress.trim() !== "" &&
      walkerPhone.trim() !== ""
    );
  };

  return {
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
    isFormComplete,
  };
};
