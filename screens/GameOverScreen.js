import { Image, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen(){
    return(
        <View style = {styles.rootContainer} >
            <Title>GAME OVER!</Title>
            <View style= {styles.imgContainer} >
                <Image source= {require('../assets/images/success.png')} style = {styles.image} />
            </View>
            <Text style = {styles.summuryText} >
                Your phone needed <Text style = {styles.highLight}>X</Text> round to guess the number {' '}
                <Text style = {styles.highLight}>Y</Text>.
            </Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imgContainer:{
        width : 300,
        height: 300,
        borderRadius: 150,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36 
    },
    image:{
        width: '100%',
        height: '100%'
    },
    summuryText:{
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highLight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})