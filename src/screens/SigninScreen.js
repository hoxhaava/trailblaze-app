import React from "react";
import { View, StyleSheet, Text } from "react-native"
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    return (
        <View>
            <AuthForm />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName="Signup" />
       </View>
        )
}

const styles = StyleSheet.create({})

export default SigninScreen