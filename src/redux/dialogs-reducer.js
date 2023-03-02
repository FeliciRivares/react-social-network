const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE'

export const updateMessageTextCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE }) 

let initialState ={
    textItems: [
        {id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing.", textElse:"Lorem ipsum dolor sit amet consectetur adipisicing."},
        {id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, voluptas. Nemo eveniet nihil, accusamus dolorem corrupti delectus expedita recusandae. Sunt quis adipisci saepe consequatur assumenda itaque sed repudiandae vero tempore iste doloribus natus omnis illo! Tempore eos ad harum?",
        textElse:"Lorem ipsum dolor sit amet consectetkljhjljhbkgjkkhkur adipisicing"},
        {id: 3, text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nihil temporibus qui aspernatur nesciunt nulla dicta provident! Id, earum voluptatibus!",
        textElse:"Lorem ipsum dolor sit amet consectetkljhjljhbkgjkkhkur adipisicing"},
        {id: 4, text: "Lorem ipsum dolor sit.",textElse:"Lorem ipsum dolor sit amet consectetkljhjljhbkgjkkhkur adipisicing"},
    ],
    dialog: [
        {id:1, name:'Ben Feel'},
        {id:2, name:'Lii Ben'},
        {id:3, name:'Ben Geern'},
        {id:4, name:'Alla New'},
    ],
    newMessageText: '',
   
}


const dialogsReducer = (data = initialState, action) =>{
    switch(action.type){
        case UPDATE_MESSAGE_TEXT: {
            let dataCopy = {...data};
            dataCopy.newMessageText = [...data.newMessageText]
            dataCopy.newMessageText = action.text;
            return dataCopy;
        }
        case SEND_MESSAGE:
            let newMessage = {
                id: 7, text: data.newMessageText
            };
            let dataCopy = {...data};
            dataCopy.textItems = [...data.textItems]
            dataCopy.textItems.push(newMessage); 
            dataCopy.newMessageText = '';
            return dataCopy;
        default:
            return data;
    }
}
export default dialogsReducer