import { connect } from "react-redux";
import DialogsList from "./DialogsList";

// const DialogsListContainer = (props) =>{ 
//     let state = props.store.getState();

//     return(
//         <DialogsList dialog={state.dialog.dialog}/>
//     )
// }


let mapPropsToState = (state) => {
    return{
        dialog: state.dialog.dialog,
    }
}


const DialogsListContainer = connect(mapPropsToState)(DialogsList)
export default DialogsListContainer