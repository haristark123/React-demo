import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetups() {
  const history=useHistory();
  function addMeetupHandler(meetupData){
    
    fetch('https://react-getting-started-7d715-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'POST',
        body:JSON.stringify(meetupData),
        header:{
          'Content-Type':'application/json'
        }
      }
    ).then(()=>{
      return history.replace('/')
    });
  }
  return <section>
    <h1>New Meetups</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>
}

export default NewMeetups;
