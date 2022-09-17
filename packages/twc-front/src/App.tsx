import { useState } from 'react';
import './style/App.css';
import './style/index.css';
import { User, ActivityLog, AttendaceInformation } from '@twc/twc-models';
import Layout from './components/Layout/Layout';


function App() {
  const [user, setUser] = useState<User>();
  const [activityLog, setActivityLog] = useState<ActivityLog>();
  const [attendanceInformation, setAttendanceInformation] = useState<AttendaceInformation>();

  return (
    <div className="App">
      <Layout />
    </div>
  );
}


export default App;
