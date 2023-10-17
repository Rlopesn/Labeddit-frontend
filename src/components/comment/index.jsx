import * as s from "./styled";
import { ReactComponent as LikeIcon } from "../../assets/img/like.svg";
import { ReactComponent as DislikeIcon } from "../../assets/img/dislike.svg";
import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../global/contextGlobal";
import axios from "axios";
import { BASE_URL } from "../../constant/BASE_URL";

const LIKE_NEUTRAL = "like-neutral";
const LIKE_UP = "like-up";
const LIKE_DOWN = "like-down";

function CommentCard({ id, content, creator, likes, dislikes }) {
  const context = useContext(ContextGlobal);

  const [likeCount, setLikeCount] = useState(0);
  const [likeStatus, setLikeStatus] = useState(LIKE_NEUTRAL);
  const token = context.getToken();
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  const likeDislike = async (like) => {
    if (likeStatus === LIKE_UP && like) {
      return;
    }

    if (likeStatus === LIKE_DOWN && !like) {
      return;
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/comments/${id}/like`,
        { like },
        { headers: { Authorization: token } }
      );

      if (response.status !== 200) {
        return;
      }

      if (like) {
        setLikeCount(likeCount + 1);
        setLikeStatus(LIKE_UP);
        setHasLiked(true);
        if (hasDisliked) {
          setLikeCount(likeCount - 1);
          setHasDisliked(false);
        }
      } else {
        setLikeCount(likeCount - 1);
        setLikeStatus(LIKE_DOWN);
        setHasDisliked(true);
        if (hasLiked) {
          setLikeCount(likeCount + 1);
          setHasLiked(false);
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };
  useEffect(() => {
    setLikeCount(likes - dislikes);
    setHasLiked(likes > 0);
    setHasDisliked(dislikes > 0);
  }, [likes, dislikes]);

  const likeIconFillColor = (status) => {
    return likeStatus === status ? "#4088CB" : "#6F6F6F";
  };

  return (
    <s.Section>
      <s.List>
        <s.Identity>Enviado por:{creator?.name} </s.Identity>
        <s.Content>{content}</s.Content>
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
        </s.FlexListItem>
      </s.List>
    </s.Section>
  );
}

export default CommentCard;
