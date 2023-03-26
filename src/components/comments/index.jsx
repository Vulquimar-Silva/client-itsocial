import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from 'moment'
import { useContext, useState } from "react";

import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

import "./comments.scss";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], async () =>
    await makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={"/upload/" + currentUser.profilePic} alt="Imagem de um perfil de usuário." />
        <input
          type="text"
          placeholder="Escreva um comentario"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
      </div>
      {error
        ? "Algo deu errado"
        : isLoading
          ? "Carregando..."
          : data.map((comment) => (
            <div className="comment">
              <img src={"/upload/" + comment.profilePic} alt="Imagem de um perfil de usuário." />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
