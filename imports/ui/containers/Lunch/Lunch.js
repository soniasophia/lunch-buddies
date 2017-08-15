import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, withRouter } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import './styles.css';


const styles = {
  button: {
    margin: 12,
  }
}

const Lunch = ({ filteredLunch, leaveCurrentLunch }) => {
  user = Meteor.user();
  user_id = Meteor.userId();

  const lunchBuds = filteredLunch.names.map((name, index) => {
    return (
      <li key={index}>
        <Link to={`/profile/${name[0]._id}`}>
          <Gravatar email={name[0].emails[0].address} className="gravatarImage" size={150} />
        </Link>
        <p className="lunchBudName">{name[0].profile.fullName}</p>
        <p className="interests">Interests:</p>
        <p>{name[0].profile.interests.join(', ')}</p>
        <p className="phoneNumber">Phone Number:</p>
        <p>{name[0].profile.phoneNumber}</p>
      </li>
    )
  });

  return (
    <div className="lunchWrapper">
      <Paper zDepth={3}>
        <div className="myLunchContainer">
          <div className="lunchBuddies">
            <h1 className="lunchInfo">Lunch Buddies</h1>
            <ul>
              {lunchBuds}
            </ul>
          </div>
          <div className="lunchDetails">
            <h1 className="lunchInfo">Lunch Details</h1>
            <div className="lunchDetailsInner">
              <div className="lunchBudget">
                <h2>Budget:</h2>
                <ul>
                  {filteredLunch.filteredLunch[0].budget[0].map((budget, index) => (
                    <li key={index}>{budget}</li>
                  ))}
                </ul>
              </div>
              <div className="lunchCuisines">
                <h2>Cuisines:</h2>
                <ul>
                  {filteredLunch.filteredLunch[0].cuisines[0].map((cuisine, index) => (
                    <li key={index}>{cuisine}</li>
                  ))}
                </ul>
              </div>
              <div className="lunchCreationDate">
                <h2>Lunch Creation Date:</h2>
                <p>{Moment(filteredLunch.filteredLunch[0].createdOn).fromNow()}</p>
              </div>
            </div>
          </div>
          <div className="leaveLunch">
            <RaisedButton
              href=""
              target="_blank"
              label="Leave this lunch"
              primary={true}
              style={styles.button}
              onTouchTap={() => { leaveCurrentLunch() }}
            />
          </div>
        </div>
      </Paper>
    </div>
  )
};

Lunch.propTypes = {
  filteredLunch: PropTypes.func.isRequired,
  leaveCurrentLunch: PropTypes.func.isRequired
};

export default withRouter(Lunch);