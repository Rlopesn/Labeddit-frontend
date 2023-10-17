import { Button } from "../../components/buttons/styled";
import Header from "../../components/header";
import { Line } from "../../components/line/styled";
import * as s from "./styled";
import PostCard from "../../components/post";
import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../../components/global/contextGlobal";
import axios from "axios";
import { BASE_URL } from "../../constant/BASE_URL";
import { useForm } from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";

function Post() {
  useProtectedPage()
  const context = useContext(ContextGlobal);
  const [posts, setPosts] = useState([]);
  const [form, onChange, resetForm] = useForm({ content: "" });

  const token = context.getToken();

  const sendPost = async (body) => {
    const PATH = BASE_URL + "/posts";
    await axios
      .post(PATH, body, { headers: { Authorization: token } })
  };

  const loadPost = async () => {
    const result = await axios.get(`${BASE_URL}/posts`, {
      headers: { Authorization: token },
    });
    setPosts(result.data);
  };

  const sendForm = (e) => {
    e.preventDefault();
    sendPost(form);
    resetForm();
    context.setReload(!context.reload);
    loadPost();
  };

  useEffect(() => {
    loadPost();
  }, [context.reload, context]);

  return (
    <>
      <Header />
      <s.Form onSubmit={sendForm}>
        <s.Content
          name="content"
          value={form.content}
          onChange={onChange}
          required
          placeholder="Escreva seu post..."
        ></s.Content>
        <Button>Postar</Button>
        <Line />
      </s.Form>
      <s.Section>
        {posts?.map(({ id, content, creator, likes, dislikes, comments }) => (
          <PostCard
            key={id}
            id={id}
            content={content}
            creator={creator}
            likes={likes}
            dislikes={dislikes}
            comments={comments}
            posts={posts}
          />
        ))}
      </s.Section>
    </>
  );
}

export default Post;
