import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Grid,
  Typography
} from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import TextTruncate from 'react-text-truncate';

export default class ClassListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  editMode = () => {
    this.setState({ edit: !this.state.edit });
  };
  render() {
    const { edit } = this.state;
    const { id, name, view } = this.props;
    const isCard = view === 'cards';

    const CollisionLink = React.forwardRef((props, ref) => (
      <NavLink innerRef={ref} to={`/classes/${id}`} {...props} />
    ));

    return (
      <>
        {view === 'cards' ? (
          <Grid
            item
            className={
              edit
                ? 'edit class-list-item'
                : view === 'list'
                ? 'list-view class-list-item'
                : 'class-list-item'
            }
            sm={isCard ? 6 : 12}
            md={isCard ? 4 : 12}
            lg={isCard ? 3 : 12}
          >
            <Card className='position-relative'>
              <div className='card-header'>
                <ul className='list-inline mb-0'>
                  <li className='list-inline-item'>
                    <i className='fas fa-users' /> 18
                  </li>
                  <li className='list-inline-item'>
                    <i className='fas fa-notes-medical' /> 2
                  </li>
                  <li className='list-inline-item'>
                    <i className='fas fa-exclamation-triangle' /> 0
                  </li>
                  <li className='list-inline-item'>
                    <i className='fas fa-globe' /> 1
                  </li>
                </ul>
              </div>
              <CardContent>
                <Typography variant='h5'>{name}</Typography>
                <Typography variant='button'>{id}</Typography>
                {this.state.edit ? (
                  <>
                    <TextField
                      id='standard-multiline-flexible'
                      label='Notes'
                      multiline
                      fullWidth
                      rows='4'
                      rowsMax='5'
                      margin='normal'
                    />
                    <div className='d-flex justify-content-end'>
                      <Button onClick={this.editMode} size='small'>
                        Cancel
                      </Button>
                      <Button
                        onClick={this.editMode}
                        size='small'
                        color='primary'
                      >
                        Save
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusantium numquam deleniti voluptate quam vitae debitis
                      molestias doloribus exercitationem.
                    </p>
                    <Button
                      onClick={this.editMode}
                      size='small'
                      className='position-absolute'
                      style={{ top: 10, right: 10 }}
                      variant='outlined'
                    >
                      <EditIcon style={{ fontSize: 20, marginRight: '3px' }} />{' '}
                      Edit
                    </Button>
                  </>
                )}
              </CardContent>
              {this.state.edit ? null : (
                <div className='card-footer'>
                  <Button
                    color='primary'
                    size='small'
                    component={CollisionLink}
                  >
                    See Class <KeyboardArrowRight />
                  </Button>
                </div>
              )}
            </Card>
          </Grid>
        ) : (
          <ExpansionPanel defaultChecked>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h6' className='align-self-center mr-2'>
                {id}
              </Typography>
              <Typography className='align-self-center mr-3'>{name}</Typography>
            </ExpansionPanelSummary>
            <ul
              className='list-inline mb-0 px-4'
              style={{ marginTop: '-20px' }}
            >
              <li className='list-inline-item'>
                <i className='fas fa-users' /> 18
              </li>
              <li className='list-inline-item'>
                <i className='fas fa-notes-medical' /> 2
              </li>
              <li className='list-inline-item'>
                <i className='fas fa-exclamation-triangle' /> 0
              </li>
              <li className='list-inline-item'>
                <i className='fas fa-globe' /> 1
              </li>
            </ul>
            <ExpansionPanelDetails>
              <Grid container spacing={4}>
                <Grid item md={8}>
                  <Typography variant='button'>Notes</Typography>
                  <TextTruncate
                    line={3}
                    element='p'
                    truncateText='…'
                    text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium numquam deleniti voluptate quam vitae debitis
                    molestias doloribus exercitationem.'
                    textTruncateChild={<a href='!#'>See more</a>}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button onClick={this.editMode} size='small'>
                Cancel
              </Button>
              <Button onClick={this.editMode} size='small' color='primary'>
                Save
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        )}
      </>
    );
  }
}
