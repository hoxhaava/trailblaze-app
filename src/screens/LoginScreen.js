import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext"
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const LoginScreen = ({ navigation }) => {
    const {state, login } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Log in for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Log in"
                onSubmit={login}
            />
        </View>
    )
    
}

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default LoginScreen