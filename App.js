import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UNITS = {
  celsius: 'celsius',
  fahrenheit: 'fahrenheit',
};

function convertTemperatureTo(unit, value) {
  if (unit === UNITS.celsius) {
    return value * 1.8 + 32;
  } else {
    return (value - 32) / 1.8;
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celsius ? UNITS.fahrenheit : UNITS.celsius;
}

function isIceTemperature(value, unit) {
  if (unit === UNITS.celsius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}

const Temp = () => {
  const [celsius, setCelsius] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
  };

  const celsiusValue = parseFloat(celsius);
  const fahrenheit = !isNaN(celsiusValue) ? convertTemperatureTo(UNITS.celsius, celsiusValue) : '';

  return (
    <View style={styles.container}>
      <Text style={styles.celsius}>°C</Text>
      <Text style={styles.label}>CELSIUS</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={celsius}
        onChangeText={handleCelsiusChange}
        placeholder="Enter the °C"
      />
      <Text style={styles.result}>
        Convert to °F: {fahrenheit ? fahrenheit.toFixed(2) : ''}
      </Text>
      {fahrenheit && isIceTemperature(celsiusValue, UNITS.celsius) && (
        <Text style={styles.iceWarning}>Warning: This is ice temperature!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'bisque',
    padding: 16,
  },
  celsius: {
    fontSize: 60,
    marginBottom: 10,
    color: 'maroon',
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'brown',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Times New Roman',
    borderRadius: 20,
    backgroundColor: 'azure',
    color: 'coral',
  },
  result: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'brown',
  },
  iceWarning: {
    marginTop: 10,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Temp;
export { getOppositeUnit, convertTemperatureTo, isIceTemperature };
