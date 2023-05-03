import '../_mockLocation'
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native"
import { Text } from "react-native-elements"
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location" 
import Map from "../components/Map"

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location)
            })
            if (!granted) {
                throw new Error('Location permission not granted')
            }
            
        } catch (error) {
            setErr(error)
        }
    }

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>)
}

const styles = StyleSheet.create({})

export default TrackCreateScreen