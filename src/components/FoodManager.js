import React, { Component } from "react";
import AddFood from "./AddFood";
import FoodList from "./FoodList";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./FoodManager.css";

export default class FoodManager extends Component {
  render() {
    const { dayId } = this.props;
    return (
      <div className="toggleAddFood">
        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Add Food
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <AddFood dayId={dayId} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <FoodList dayId={dayId} />
      </div>
    );
  }
}
