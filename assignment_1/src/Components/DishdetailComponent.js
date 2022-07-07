import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const DishdetailComponent = (selectedDish) => {
  console.log(selectedDish);
  const renderComments = (comments) => {
    if (comments == null) {
      return <div></div>;
    }
    const cmnts = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{cmnts}</ul>
      </div>
    );
  };
  const dishComment = renderComments(selectedDish.selectedDish.comments);
  return (
    <div className="row">
      {(() => {
        if (selectedDish.selectedDish != {}) {
          console.log("t");
          return (
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  width="100%"
                  src={selectedDish.selectedDish.image}
                  alt={selectedDish.selectedDish.name}
                />
                <CardBody>
                  <CardTitle> {selectedDish.selectedDish.name}</CardTitle>
                  <CardText> {selectedDish.selectedDish.description} </CardText>
                </CardBody>
              </Card>
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
      {dishComment}
    </div>
  );
};

export default DishdetailComponent;
