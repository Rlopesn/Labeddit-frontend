import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/buttons/styled";
import CommentCard from "../../components/comment";
import Header from "../../components/header";
import { Line } from "../../components/line/styled";
import PostCard from "../../components/post";
import { useForm } from "../../hooks/useForm";
import * as s from "./styled";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";
import { ContextGlobal } from "../../components/global/contextGlobal";
import { useLocation } from "react-router-dom";

function Comment() {
  const [form, onChange, resetForm] = useForm({ content: "" });
  const [comments, setComments] = useState([]);
  const context = useContext(ContextGlobal);
  const location = useLocation();
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState(null);

  const token = context.getToken();

  useEffect(() => {
    setPostId(location.pathname.split("/")[2]);
  }, [location]);

  const sendComment = async (body) => {
    await axios.post(`${BASE_URL}/comments/${postId}`, body, {
      headers: { Authorization: token },
    });
  };

  const loadPost = async () => {
    const result = await axios.get(`${BASE_URL}/posts`, {
      headers: { Authorization: token },
    });

    const newPost = result.data.find((i) => i.id === postId);

    setPost({ ...newPost });
  };

  const loadComments = async () => {
    const result = await axios.get(`${BASE_URL}/comments`, {
      headers: { Authorization: token },
    });

    setComments(result.data.filter((i) => i.creator.post_id === postId));
  };

  const sendForm = (e) => {
    e.preventDefault();
    sendComment(form);
    resetForm();
    loadComments();
  };

  useEffect(() => {
    if (postId) {
      loadComments();
      loadPost();
    }
  }, [postId]);

  return (
    <>
      <Header />
      <s.ContainerComment>
        <PostCard
          id={post?.id}
          comments={post?.comments}
          content={post?.content}
          creator={post?.creator}
          likes={post?.likes || 0}
          dislikes={post?.dislikes || 0}
        />
        <s.SectionComment onSubmit={sendForm}>
          <s.Content
            name="content"
            value={form.content}
            onChange={onChange}
            required
            placeholder="Adicionar comentário"
          ></s.Content>
          <Button>Responder</Button>
          <Line />
        </s.SectionComment>
        {comments?.map(({ id, content, creator, likes, dislikes }) => (
          <CommentCard
            key={id}
            id={id}
            content={content}
            creator={creator}
            likes={likes}
            dislikes={dislikes}
            postId={postId}
          />
        ))}
      </s.ContainerComment>
    </>
  );
}

export default Comment;
