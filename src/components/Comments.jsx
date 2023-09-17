import Comment from "./Comment";
import { useState } from "react";

function Comments() {
  let [commentText, setCommentText] = useState("");
  const [commentsArray, setCommentsArray] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      const newArr = [checkSpam(commentText), ...commentsArray];
      setCommentsArray(newArr);
      setCommentText("");
    } else {
      setError("Пожалуйста, заполните поле");
    }
  };
  const checkSpam = (comment) => {
    return comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
  };
  const handleChange = (e) => {
    setCommentText((commentText = e.target.value));
    setError("");
  };

  return (
    <div className="container">
      <span>{error}</span>
      <form>
        <input type="text" onChange={handleChange} value={commentText} />
        <button onClick={handleSubmit}>Оставить комментарий</button>
      </form>
      <div className="comments">
        {commentsArray.map((el, i) => (
          <Comment
            text={el}
            key={i}
            className={i === 0 ? "new-comment comment" : "comment"}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
