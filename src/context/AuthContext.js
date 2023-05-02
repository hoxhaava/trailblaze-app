import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state
    }
}

const signup = (dispatch) => async ({ email, password }) => {
 
    try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token })
            
            // navigate to main flow
            navigate('TrackList')
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.'})
        }
    }

const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to sign in
        // Handle succes by updating state
        // Handle failure by showing error message
    }
}

const signout = (dispatch) => {
    return () => {
        // Sign out and handle succes and failure
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout},
    { token: null, errorMessage: '' }
)