const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const CREATE_NEW_POST = 'CREATE_NEW_POST';


export const updateNewPostCreator = (text) =>
   ({type: UPDATE_NEW_POST_TEXT, text: text})
export const createNewPostCreator = () => ({type: CREATE_NEW_POST})  

let initialState = {
    postData: [
        {id:1, header: 'Patrik', content: 'I`m happy cat', counter: '2', date: '22/08/02' },
        {id:2, header: 'Sirco', content: 'I`m fell good and you?', counter: '23', date: '22/08/02' },
        {id:3, header: 'Misa', content: 'Me first post', counter: '12', date: '22/08/02' },
        ], 
    newPostText:'',
}

const profileReducer = (data = initialState , action) => {
    switch(action.type){
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...data,
                newPostText: [action.text]
        }
        case CREATE_NEW_POST:
            let newPost = {
                id:5, header: 'Patrik', content: data.newPostText, counter: '25', date: `3234`
            };
            return {
                ...data,
                postData:[...data.postData, newPost],
                newPostText: '',
        }
        default:
            return data;
    }
}
export default profileReducer