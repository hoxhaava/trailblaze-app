import * as Location from "expo-location"
import { set } from "react-native-reanimated";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timesstamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -121.0312186 + increment * tenMetersWithDegrees,
            latitude: 37.33233141 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)