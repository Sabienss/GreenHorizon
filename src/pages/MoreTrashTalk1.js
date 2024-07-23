import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MoreTrashTalk1.css";

const MoreTrashTalk1 = () => {
  const navigate = useNavigate();

  const onMoreTrashTalkClick = useCallback(() => {
    navigate("/moretrash-talk-3");
  }, [navigate]);

  return (
    <div className="more-trash-talk-4" onClick={onMoreTrashTalkClick}>
      <img className="more-trash-talk-4-child" alt="" src="/group-35.svg" />
    </div>
  );
};

export default MoreTrashTalk1;
