import { State } from 'jumpsuit';

const appState = State({
    initial: {
        userName: "",
        user: ''
    },
    setUser({user, ...rest}, newUser){
        return{
            ...rest,
            user: newUser
        }
    },
    setUserName({userName, ...rest}, displayName){
        console.log(displayName)
        return{
            ...rest,
            userName: displayName
        }
    }
})

export const globalState = {
    appState: appState
}