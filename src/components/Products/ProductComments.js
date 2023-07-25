import React from "react";
import "./ProductComments.scss";

function ProductComments({ comments }) {
  if (comments == null) {
    return (
      <div className="comments">
        <div className="comments__title">Product Reviews</div>
        <div className="comments__error">
          Issued some error when fetching comments 😢
        </div>
      </div>
    );
  }

  comments.map((comment, i) => {
    let date = new Date();
    date.setDate(date.getDay() + i);

    comment.date = new Intl.DateTimeFormat("tr-TR").format(date);
  });
  return (
    <div className="comments">
      <div className="comments__title">Product Reviews</div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <span className="comment__date">{comment.date}</span>
          <div className="comment__content">{comment.body}</div>
          <span className="comment__owner">{comment.user.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductComments;
