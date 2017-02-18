import { State } from 'jumpsuit';

const appState = State({
    initial: {
        userName: "",
        user: ''
    },
      addToList({list}, text) {
    return {
      list:  [...list, {name: text}],
      textInput: ''
    }
  },
  setInputText({list}, text){
    return {
      list,
      textInput: text
    }
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