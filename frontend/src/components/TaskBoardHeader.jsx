/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Form } from 'react-bootstrap';
import Pagination from './Pagination';

class TaskBoardHeader extends React.Component {
  render() {
    const { limit, tasksTotalNumber, onPageChange, onDoneTasksCheckbox } = this.props;

    return (
      <React.Fragment>
        <Grid
          container
          alignItems="center"
          spacing={3}
          justify="center"
          direction="row"
        >
          <Grid item xs={1}>
            <Button variant="contained" title="Add task" color="primary">
              <i className="fa fa-plus" aria-hidden="true" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            {!!tasksTotalNumber && (
              <Pagination
                limit={limit}
                count={tasksTotalNumber}
                onPageChange={onPageChange}
                key={tasksTotalNumber}
              />
            )}
          </Grid>
          <Grid item xs={3}>
            <div className="checkbox">
              <Form.Check
                type="checkbox"
                label={"Don't show 'Done' tasks"}
                onChange={evt => onDoneTasksCheckbox(evt.target.checked)}
              />
            </div>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained">
              <span
                className="glyphicon glyphicon-wrench"
                aria-hidden="true"
              />
              Search
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TaskBoardHeader;
