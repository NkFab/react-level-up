import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courses';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = event => {
    const { course } = this.state;
    const courses = {
      ...course,
      title: event.target.value,
    };
    this.setState({ course: courses });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { course } = this.state;
    const { dispatch } = this.props;
    dispatch(courseActions.createCourse(course));
  };

  render() {
    const { course } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h5>Add course</h5>
        <input
          type="text"
          onChange={this.handleChange}
          value={course.title}
        />
        <input type="submit" value="SAVE" />
      </form>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    courses: state.course,
  };
};

export default connect(mapStateToProps)(CoursesPage);
