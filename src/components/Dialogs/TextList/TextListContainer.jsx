import TextList from './TextList';
import { sendMessageCreator, updateMessageTextCreator } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return{
        textItems: state.dialog.textItems,
        newMessageText: state.dialog.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateMessageText: (text) => {
            dispatch(updateMessageTextCreator(text))
        },
        sendMessage: () => { 
            dispatch(sendMessageCreator())
        }
    }
}

const TextListContainer = connect(mapStateToProps, mapDispatchToProps)(TextList);

export default TextListContainer

