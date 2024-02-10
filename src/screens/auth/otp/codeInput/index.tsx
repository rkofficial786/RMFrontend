import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { COLORS, LightCOLORS } from '../../../../constants/colors'

const CodeInput = ({ code, setCodeReddy, setCode }) => {

    const textInputRef = useRef(null)
    const codeDigitArray = new Array(6).fill(0)
    const [inputFocused, setInputFocused] = useState(false)

    const handleBlur = () => {
        setInputFocused(true)
    }

    const handleOnPress = () => {
        setInputFocused(true)
        textInputRef?.current?.focus()
    }

    useEffect(() => {
        setCodeReddy(code.length === 6)
        return () => setCodeReddy(false)
    }, [code])

    const { darkMode } = useSelector((state) => state.other)

    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = ""
        const digit = code[index] || emptyInputChar


        const isCurrentDigit = index === code.length;
        const isLastDigit = index === 6 - 1;
        const isCodeFull = code.length === 6
        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull)
       
        console.log(inputFocused,'input');
        console.log(isDigitFocused,'digit');
        
        

        return (
            <View key={index} style={inputFocused && isDigitFocused ? [styles.codeInputFocused, { borderColor: darkMode ? COLORS.buttonSecondary : LightCOLORS.primary }] : [styles.codeInput, { borderColor: darkMode ? COLORS.buttonSecondaryReduced : LightCOLORS.primaryReduced }]}>
                <Text style={styles.codeInputText}>{digit}</Text>
            </View>
        )
    }







    return (
        <View style={styles.codeInputSection}>
            <Pressable onPress={handleOnPress} style={styles.codeInputContainer}>

                {codeDigitArray.map(toCodeDigitInput)}

            </Pressable>

            <TextInput value={code} onChangeText={setCode} onSubmitEditing={handleBlur} keyboardType='number-pad' returnKeyType='done' textContentType='oneTimeCode' maxLength={6} ref={textInputRef} style={styles.hiddenTextInput}>

            </TextInput>





        </View>
    )
}

export default CodeInput