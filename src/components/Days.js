import React, { Component } from "react";
import { connect } from "react-redux";
import { getDays } from "../actions/dayActions";
import { getActiveUser } from "../actions/userActions";
import PropTypes from "prop-types";
import Day from "./Day";
import Carousel from "react-bootstrap/Carousel";
import "./Days.css";

class Days extends Component {
  componentDidMount() {
    this.props.getActiveUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeUser !== prevProps.activeUser) {
      const activeUser = this.props.activeUser;
      const id = activeUser.id;
      this.props.getDays(id);
    }
  }

  render() {
    const { days, activeUser } = this.props;

    return (
      <React.Fragment>
        <Carousel wrap={false} indicators={false} interval={null}>
          {days.map(day => (
            <Carousel.Item key={day.id}>
              <Day key={day.id} day={day} activeUser={activeUser} />
            </Carousel.Item>
          ))}
        </Carousel>
      </React.Fragment>
    );
  }
}

Days.propTypes = {
  days: PropTypes.array.isRequired,
  getDays: PropTypes.func.isRequired,
  getActiveUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  days: state.days.days,
  activeUser: state.users.activeUser
});

export default connect(
  mapStateToProps,
  { getDays, getActiveUser }
)(Days);
