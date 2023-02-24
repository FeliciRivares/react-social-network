const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const CREATE_NEW_POST = 'CREATE_NEW_POST';



let days = new Date().toLocaleDateString();
let store = {
    _data: {
        dialog: {
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
           
        },
        profile: {
            postData: [
            {id:1, header: 'Patrik', content: 'I`m happy cat', counter: '2', date: `${days}` },
            {id:2, header: 'Sirco', content: 'I`m fell good and you?', counter: '23', date: `${days}` },
            {id:3, header: 'Misa', content: 'Me first post', counter: '12', date: '22/08/02' },
            ], 
            newPostText:'  ',
        },
        friends: {
            topFriends: [
                {id:1, nameFriend: "Cat Cat", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Manoel.jpg/640px-Manoel.jpg"},
            ],
        }, 
    },
    dispatch(action){
        if(action.type === CREATE_NEW_POST){
            let newPost = {
                id:5, header: 'Patrik', content: this._data.profile.newPostText, counter: '25', date: `${days}`
            };
            this._data.profile.postData.push(newPost); 
            this._callSubscriber(this._data);

        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._data.profile.newPostText = action.newText;
            this._callSubscriber(this._data);
        
        }},
    getData(){
        return this._data;
    },
    _callSubscriber() {
        console.log('data change');
    }, 
    subscribe(observer){
        this._callSubscriber = observer;
    }

}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const createNewPostActionCreator = () => {
    return {type: CREATE_NEW_POST}
}

export default store