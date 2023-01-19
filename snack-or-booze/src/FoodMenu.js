import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { toBeInTheDOM } from "@testing-library/jest-dom";

function FoodMenu({ items, type }) {
  let title = "";
  let description = "";
  if (type==="snacks"){
    title = "Food Menu"
    description = "Check out some of our delicious food-style items!"
  } else {
    title = "Drinks Menu"
    description = "Check out some of our beverage!"
  }
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            {description}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
