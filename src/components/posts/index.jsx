import { useQuery } from "@tanstack/react-query";

import { makeRequest } from "../../axios";
import Post from "../post";

import "./posts.scss";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error
        ? "Algo deu errado!"
        : isLoading
          ? "carregando..."
          : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
