import Comment from "./components/Comment";
import { useState } from "react";
import "./App.scss";

function App() {
  let [commentText, setCommentText] = useState("");
  const [commentsArray, setCommentsArray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArr = [checkSpam(commentText), ...commentsArray];
    setCommentsArray(newArr);
    setCommentText("");
  };
  const checkSpam = (comment) => {
    return comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
  };
  const handleChange = (e) => {
    setCommentText((commentText = e.target.value));
  };

  return (
    <div className="container">
      <form>
        <input type="text" onChange={handleChange} value={commentText} />
        <button onClick={handleSubmit}>Send</button>
      </form>
      <div className="comments">
        {commentsArray.map((el, i) => (
          <Comment
            text={el}
            key={i}
            className={i === 0 ? "new-comment comment" : "comment"}
          ></Comment>
        ))}
      </div>
    </div>
  );
}

export default App;
