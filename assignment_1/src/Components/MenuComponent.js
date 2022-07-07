import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishdetailComponent from "./DishdetailComponent";
const MenuComponent = (dishes) => {
  const [selectedDish, setSelectedDish] = useState({});

  return (
    <div>
      <div className="container">
        <div className="row">
          {dishes.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card
                  onClick={() => {
                    setSelectedDish(dish);
                  }}
                >
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle> {dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
          })}
        </div>
        <DishdetailComponent selectedDish={selectedDish} />
      </div>
    </div>
  );
};

export default MenuComponent;
