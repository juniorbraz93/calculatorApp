/* eslint-disable no-bitwise */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const App = () => {
  // [‘AC’, ‘DEL’, ‘%’, ‘/’, ‘7’, ‘8’, ‘9’, ‘*’, ‘4’, ‘5’, ‘6’, ‘-’, ‘3’, ‘2’, ‘1’, ‘+’, ‘0’, ‘.’, ‘+/-’, ‘=’]
  const buttons = [
    'AC',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '3',
    '2',
    '1',
    '+',
    '0',
    '.',
    '+/-',
    '=',
  ];

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function handleInput(buttonPressed) {
    if (
      (buttonPressed === '*') |
      (buttonPressed === '/') |
      (buttonPressed === '+') |
      (buttonPressed === '-')
    ) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return;
    }

    if (buttonPressed === 'DEL') {
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      return;
    }

    if (buttonPressed === '+/-') {
      return;
    }
    if (buttonPressed === 'AC') {
      setCurrentNumber('');
      setLastNumber('');
      return;
    }
    if (buttonPressed === '=') {
      setLastNumber(currentNumber + '');
      calculator();
      return;
    }
    if (currentNumber.length) {
      calculator();
      setLastNumber(currentNumber + '');
      return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  function calculator() {
    // let numbers = [];
    // let operators = [];
    const splitNumbers = currentNumber.split(' ');
    const operator = splitNumbers[1];

    // const fristNumber = splitNumbers.shift();

    // splitNumbers.map((item) => {
    //   if ((item === '*') | (item === '/') | (item === '+') | (item === '-')) {
    //     operators.push(item);
    //   } else {
    //     numbers.push(item);
    //   }
    // });

    // const fristOperator = operators.shift();

    // console.log(fristNumber);
    // console.log(operators);
    // console.log(numbers);
    // console.log(fristOperator);

    switch (operator) {
      case '+':
        setCurrentNumber(
          (
            parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])
          ).toString(),
        );
        return;
      case '-':
        setCurrentNumber(
          (
            parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])
          ).toString(),
        );
        return;
      case '*':
        setCurrentNumber(
          (
            parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])
          ).toString(),
        );
        return;
      case '/':
        setCurrentNumber(
          (
            parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])
          ).toString(),
        );
        return;
    }
  }

  return (
    <>
      <View>
        <View style={styles.result}>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>

        <View style={styles.buttons}>
          {buttons.map((button) => (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={styles.button}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    minHeight: 80,
    minWidth: 82,
  },
  textButton: {
    color: '#5b5b5b',
    fontSize: 25,
  },

  resultText: {
    fontWeight: '100',
    fontSize: 80,
    margin: 10,
    alignSelf: 'center',
  },

  historyText: {
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});

export default App;
