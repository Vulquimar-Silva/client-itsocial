import { useContext } from "react";
import { AuthContext } from "../../context/authContext"
import "./stories.scss"

const Stories = () => {

  const { currentUser } = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Maria Eduarda",
      img: "https://images.pexels.com/photos/7078862/pexels-photo-7078862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Bob Silva",
      img: "https://images.pexels.com/photos/5847763/pexels-photo-5847763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "João Queiroz",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Nayara Côrtes",
      img: "https://images.pexels.com/photos/4855422/pexels-photo-4855422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories