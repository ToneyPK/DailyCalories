import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFood, deleteFoodById } from "../actions/foodActions";
import { subtractDayCaloriesIn } from "../actions/dayActions";
import "./FoodList.css";

class FoodList extends Component {
  componentDidMount() {
    this.props.getFood();
  }

  deleteFood = food => {
    this.props.deleteFoodById(food.id);
    this.props.subtractDayCaloriesIn(food);
  };

  render() {
    const { dayId, food } = this.props;

    return (
      <div>
        <Table>
          <tbody>
            {food.map(theFood => {
              if (theFood.dayId === dayId)
                return (
                  <tr key={theFood.id}>
                    <td className="border-right">
                      <label>{theFood.foodName}</label>
                    </td>
                    <td className="caloriesTd">
                      <label>{theFood.calories} kcal</label>
                    </td>
                    <td className="removeFoodBtnTd">
                      <Button
                        className="removeFoodBtn"
                        variant="danger"
                        onClick={() => this.deleteFood(theFood)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              else {
                return console.log(
                  "Food with Day id:" + dayId + " is not found"
                );
              }
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

FoodList.propTypes = {
  food: PropTypes.array.isRequired,
  getFood: PropTypes.func.isRequired,
  deleteFoodById: PropTypes.func.isRequired,
  subtractDayCaloriesIn: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  food: state.food.food
});

export default connect(
  mapStateToProps,
  { getFood, deleteFoodById, subtractDayCaloriesIn }
)(FoodList);
