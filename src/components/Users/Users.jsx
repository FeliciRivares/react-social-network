import style from './Users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        followed: false,
        fullName: 'Been P.',
        status: 'Wary intresting lsdjn sjdv hlc sldjvsjvl ldddsjc',
        location: { country: 'Ukraine', city: 'Kyiv' },
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        followed: true,
        fullName: 'Second P.',
        status: 'Wary intresting lsdjn sjdv hlc sldjvsjvl ldddsjc',
        location: { country: 'Ukraine', city: 'Kyiv' },
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        followed: false,
        fullName: 'Third P.',
        status: 'Wary intresting lsdjn sjdv hlc sldjvsjvl ldddsjc',
        location: { country: 'Ukraine', city: 'Kyiv' },
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        followed: true,
        fullName: 'Fos P.',
        status: 'Wary intresting lsdjn sjdv hlc sldjvsjvl ldddsjc',
        location: { country: 'Ukraine', city: 'Kyiv' },
      },
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        followed: false,
        fullName: 'Fifts P.',
        status: 'Wary intresting lsdjn sjdv hlc sldjvsjvl ldddsjc',
        location: { country: 'Ukraine', city: 'Kyiv' },
      },
      {
        id: 6,
        image:
          'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        followed: false,
        fullName: 'Sixts P.',
        status: 'Wary intresting lsdjn sjdv hlc sldjvsjvl ldddsjc',
        location: { country: 'Ukraine', city: 'Kyiv' },
      },
    ]);
  }
  return (
    <div className={style.container}>
      {props.users.map((obj) => (
        <div className={style.content} key={obj.id}>
          <div className={style.imageContent}>
            <img src={obj.image} alt="ava" />
            {obj.followed ? (
              <button
                onClick={() => {
                  props.unFollow(obj.id);
                }}
                className={style.follow}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(obj.id);
                }}
                className={style.unfollow}
              >
                Unfollow
              </button>
            )}
          </div>
          <div className={style.textContent}>
            <div className={style.userContent}>
              <h3>{obj.fullName}</h3>
              <p>{obj.status}</p>
            </div>
            <div className={style.locationContent}>
              <p>{obj.location.country}</p>
              <p>{obj.location.city}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
