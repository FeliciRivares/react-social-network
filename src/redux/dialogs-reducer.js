const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE'

export const updateMessageText = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})
export const sendMessage = () => ({type: SEND_MESSAGE }) 


const dialogsReducer = (data, action) =>{
    switch(action.type){
        case UPDATE_MESSAGE_TEXT:
            data.newMessageText = action.text;
            return data;
        case SEND_MESSAGE:
            let newMessage = {id: 7, text: data.newMessageText}
            data.textItems.push(newMessage); 
            return data;
        default:
            return data;
    }
}
export default dialogsReducer