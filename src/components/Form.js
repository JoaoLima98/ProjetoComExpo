import * as React from 'react';
import { useState } from "react";
import { CheckBox, StyleSheet, TextInput, View, Text, Button } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';

export function FormNaruto() {
  const [email, setEmail] = useState('');
  const [isSelected] = useState(true);
  const [creditCard, setCreditCard] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [creditCardFocused, setCreditCardFocused] = useState(false);
  const [cvvFocused, setCvvFocused] = useState(false);
  const [dateFocused, setDateFocused] = useState(false);

  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => setEmailFocused(false);
  const handlePasswordFocus = () => setPasswordFocused(true);
  const handlePasswordBlur = () => setPasswordFocused(false);
  const handleCreditCardFocus = () => setCreditCardFocused(true);
  const handleCreditCardBlur = () => setCreditCardFocused(false);
  const handleCvvFocus = () => setCvvFocused(true);
  const handleCvvBlur = () => setCvvFocused(false);
  const handleDateFocus = () => setDateFocused(true);
  const handleDateBlur = () => setDateFocused(false);

  const handleChangeCvv = (text) => {
    // Allow only numbers 
    const numericValue = text.replace(/[^0-9]/g, "");
    setCvv(numericValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>MONTE SEU NOME NINJA!! </Text>

        <View>
          <Text style={styles.texts}>Email pessoal:</Text>
          <TextInput
            style={[styles.standard, emailFocused && styles.inputFocused]}
            onChangeText={setEmail}
            value={email}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            placeholder='emailPessoal@gmail.com'
            placeholderTextColor='#c7c5c5'
          />
        </View>

        <View>
          <Text style={styles.texts}>Senha do seu Email pessoal:</Text>
          <TextInput
            style={[styles.standard, passwordFocused && styles.inputFocused]}
            secureTextEntry={true}
            onChangeText={(password) => console.log(password)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
        </View>

        <View>
          <Text style={styles.texts}>Os primeiros 16 números do cartão de credito:</Text>
          <MaskInput
            style={[styles.standard, creditCardFocused && styles.inputFocused]}
            value={creditCard}
            onChangeText={setCreditCard}
            mask={Masks.CREDIT_CARD}
            placeholder='XXXX XXXX XXXX XXXX'
            placeholderTextColor='#c7c5c5'
            onFocus={handleCreditCardFocus}
            onBlur={handleCreditCardBlur}
          />
        </View>

        <View>
          <Text style={styles.texts}>3 números de trás do cartão:</Text>
          <TextInput
            style={[styles.standard, cvvFocused && styles.inputFocused]}
            onChangeText={handleChangeCvv}
            value={cvv}
            keyboardType='numeric'
            placeholder='XXX'
            placeholderTextColor='#c7c5c5'
            maxLength={3}
            onFocus={handleCvvFocus}
            onBlur={handleCvvBlur}
          />
        </View>

        <View>
          <Text style={styles.texts}>Data de validade:</Text>
          <MaskInput
            style={[styles.standard, dateFocused && styles.inputFocused]}
            value={date}
            onChangeText={setDate}
            mask={Masks.DATE_DDMMYYYY}
            placeholder='DD/MM/YYYY'
            placeholderTextColor='#c7c5c5'
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
          />
        </View>

        <View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              style={styles.checkbox}
              color='#13BBC0'
            />
            <Text style={styles.label}>Você concorda em fornecer seus dados pessoais!</Text>
          </View>
        </View>

        <Button
          style={styles.button}
          title='SALVAR, TO CERTO'
          color='#13BBC0'
          onPress={() => Alert.alert('Simple Button pressed')}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1365c0',
    padding: 20,
  },
  container2: {
    minWidth: 300,
    maxWidth: 600,
  },
  titulo: {
    height: 120,
    color: '#f2f2f2',
    fontSize: 40,
    textAlign: 'center'
  },
  standard: {
    marginBottom: 20,
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#1365c0', // cor de fundo padrão
  },
  inputFocused: {
    backgroundColor: '#1d7cc6', // cor de fundo quando focado
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: '#f2f2f2'
  },
  button: {
    borderRadius: 5,
    color: '#f2f2f2',
  },
  texts: {
    color: '#f2f2f2'
  },
});
