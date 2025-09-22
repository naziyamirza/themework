
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemeWrapper } from "./src/theme/ThemeContext";
import { Main } from './src/theme/Main';

const App = () => {
  return (
    <ThemeWrapper>
      <Main />
    </ThemeWrapper>
  )
}

export default App

const styles = StyleSheet.create({})