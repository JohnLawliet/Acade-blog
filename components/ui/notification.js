import { ErrorMsg, SuccessMsg, PendingMsg } from './notification.styles';

const SwitchBoard = (status) => {  
  switch(status){
    case 'success': return SuccessMsg
    case 'error' : return ErrorMsg
    default : return PendingMsg
  }
}

function Notification(props) {
  const { title, message, status } = props;
  const NotificationDiv = SwitchBoard(status)

  return (
    <NotificationDiv>
      <h2>{title}</h2>
      <p>{message}</p>
    </NotificationDiv>
  );
}

export default Notification;
