const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const CREATE_NEW_POST = 'CREATE_NEW_POST';


export const updateNewPostTextActionCreator = (text) =>
   ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const createNewPostActionCreator = () => ({type: CREATE_NEW_POST})  


const profileReducer = (data, action) => {
    switch(action.type){
        case UPDATE_NEW_POST_TEXT:
            data.newPostText = action.newText;
            return data;
        case CREATE_NEW_POST:
            let newPost = {
                id:5, header: 'Patrik', content: data.newPostText, counter: '25', date: `3234`
            };
            data.postData.push(newPost); 
            return data;
        default:
            return data;
    }
}
export default profileReducer