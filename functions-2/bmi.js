const calcBMI = (heightInCentimeters, weightInKilograms) => {
  const heightInMeters = heightInCentimeters / 100;
  const bmi = weightInKilograms / heightInMeters ** 2;

  return bmi.toFixed(2);
};

console.log(calcBMI(180, 80)); // "24.69"
