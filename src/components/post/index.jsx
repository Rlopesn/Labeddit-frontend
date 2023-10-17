import axios from "axios";
import { BASE_URL } from "../../constant/BASE_URL";
import * as s from "./styled";
import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../global/contextGlobal";
import { ReactComponent as LikeIcon } from "../../assets/img/like.svg";
import { ReactComponent as DislikeIcon } from "../../assets/img/dislike.svg";
import { ReactComponent as CommentIcon } from "../../assets/img/fluent_comment.svg";
import { goToComment } from "../../routes/coordenatior";
import { useNavigate } from "react-router-dom";
import { Container } from "../container";

const LIKE_NEUTRAL = "like-neutral";
const LIKE_UP = "like-up";
const LIKE_DOWN = "like-down";

function PostCard({ id, content, creator, likes, dislikes, comments }) {
  const context = useContext(ContextGlobal);
  const navigate = useNavigate();

  const [likeCount, setLikeCount] = useState(0);
  const [likeStatus, setLikeStatus] = useState(LIKE_NEUTRAL);

  const token = context.getToken();

  const likeDislike = async (like) => {
    if (likeStatus === LIKE_UP && like) {
      return;
    }

    if (likeStatus === LIKE_DOWN && !like) {
      return;
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/posts/${id}/like`,
        { like },
        { headers: { Authorization: token } }
      );

      if (response.status !== 200) {
        return;
      }

      if (like) {
        setLikeCount(likeCount + 1);
        setLikeStatus(LIKE_UP);
      } else {
        setLikeCount(likeCount - 1);
        setLikeStatus(LIKE_DOWN);
      }
    } catch (e) {
      console.error(e);
      alert(e.response.data);
    }
  };

  useEffect(() => {
    setLikeCount(likes - dislikes);
  }, [likes, dislikes]);

  const likeIconFillColor = (status) => {
    return likeStatus === status ? "#4088CB" : "#6F6F6F";
  };

  return (
      <s.Section>
        <s.List>
          <s.Identity>Enviado por: {creator?.name}</s.Identity>
          <s.ContentPost>{content}</s.ContentPost>
          <s.FlexListItem>
            <s.LikeDislike>
              <LikeIcon
                fill={likeIconFillColor(LIKE_UP)}
                onClick={() => likeDislike(true)}
              />
              <s.Number>{likeCount}</s.Number>
              <DislikeIcon
                fill={likeIconFillColor(LIKE_DOWN)}
                onClick={() => likeDislike(false)}
              />
            </s.LikeDislike>
            <s.Comment>
              <CommentIcon onClick={() => goToComment(navigate, id)} />
              <s.Number>{comments}</s.Number>
            </s.Comment>
          </s.FlexListItem>
        </s.List>
      </s.Section>
  );
}

export default PostCard;