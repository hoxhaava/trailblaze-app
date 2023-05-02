import React, { useState } from "react";
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            {/* onChangeText={(newEmail) => setEmail(newEmail)}  */}
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer> 
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 16
    }
})

export default AuthForm