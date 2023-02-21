import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGamescreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState } from 'react';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoad] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoad){
    return <AppLoading /> ;
  }

  function pickNumberHandler(pickNumber){
    setUserNumber(pickNumber);
    setGameIsOver(false);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber = {pickNumberHandler} />;
  
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  if(userNumber){
    screen = <GameScreen userNumber={ userNumber } onGameOver = { gameOverHandler } />;
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds}  userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style = {styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style = {styles.rootScreen}
        imageStyle = {styles.backgroundImage}
      >
        <SafeAreaView style = {styles.rootScreen} >{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex: 1,
  },

  backgroundImage : {
    opacity :0.15
  }
});
