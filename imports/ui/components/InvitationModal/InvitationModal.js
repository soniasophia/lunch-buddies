import React from 'react';
import Dialog from 'material-ui/Dialog';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import NewLunchSelectors from '../../containers/NewLunchSelectors/';

import './styles.css';

const InvitationModal = ({handleLunchFlip, handleLunchCreation, handleInvitation, inviteeName}) => {

  return (
    <Dialog open={true}>
      <ul>
        <li>
          <p>You are about to invite <b>{inviteeName}</b></p>
          <div>
            <NewLunchSelectors />
          </div>
          <p>Invite sent: 5 mins ago</p>
          <div>
            <RaisedButton
              label="Invite"
              primary
              className="invitationButton"
              icon={<i className="fa fa-check" aria-hidden="true"></i>}
              onTouchTap={()=>{handleInvitation()}}
            />
            <RaisedButton
              label="Create Lunch"
              primary
              className="invitationButton"
              icon={<i className="fa fa-check" aria-hidden="true"></i>}
              onTouchTap={()=>{handleLunchCreation()}}
            />
            <RaisedButton
              label="Cancel"
              secondary
              className="invitationButton"
              icon={<i className="fa fa-times" aria-hidden="true"></i>}
              onTouchTap={()=>{handleLunchFlip()}}
            />
          </div>
        </li>
      </ul>
    </Dialog>
  );
}

export default InvitationModal;