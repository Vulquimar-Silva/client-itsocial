import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="Imagem de perfil do usuário" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {error
        ? "Algo deu errado"
        : isLoading
          ? "Carregando..."
          : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="Imagem de stories" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
