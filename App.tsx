/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

const App: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [number, onChangeNumber] = useState<string>('0'); // Use string state for TextInput
  const [numbersecond, onChangeNumbersecond] = useState<string>('0'); // Use string state for TextInput

  useEffect(() => {
    async function fetchData() {
      const value = await RTNCalculator?.add(Number(number), Number(numbersecond)); // Convert number to a number
      setResult(value ?? null);
    }
    fetchData();
  }, [number]); // Fetch whenever the number changes

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="enter value"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumbersecond}
        value={numbersecond}
        placeholder="enter value"
        keyboardType="numeric"
      />
      <Text style={{ marginLeft: 20, marginTop: 20 }}>
        Output: {result !== null ? result : '0'}
      </Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.add(Number(number), Number(numbersecond));
          setResult(value ?? null);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
