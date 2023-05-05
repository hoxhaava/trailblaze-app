import React, { useContext} from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native"
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer"
import { Context as AuthContext } from "../context/AuthContext"
import { FontAwesome } from "@expo/vector-icons"
import { color } from "react-native-reanimated";


const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{ fontSize: 48 }}>Account Screen</Text>
            <Spacer>
                <Button
                    title="Sign out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

AccountScreen.navigationOptions = { 
    title: 'Account',
    tabBarIcon: <FontAwesome  name="gear" size={20} color={"#fff"}/>
}

export default AccountScreen