import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { Calendar, Chats, Lightbulb, UserCircle } from "phosphor-react";
import {
  AnalyzeBtn,
  CalendarBtn,
  CommunicationBtn,
  PageMainContent,
} from "../../styles/Routes/Dashboard.styles";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <PageMainContent>
      <div className="loggedUser">
        <UserCircle size={100} />
        <h1>Welcome, {user?.username}</h1>
      </div>
      <div className="sections">
        <div>
          <AnalyzeBtn>
            <Lightbulb size={40} />
          </AnalyzeBtn>
          <span>Analyze</span>
        </div>
        <div>
          <CalendarBtn>
            <Calendar size={40} />
          </CalendarBtn>
          <span>Calendar</span>
        </div>
        <div>
          <CommunicationBtn>
            <Chats size={40} />
          </CommunicationBtn>
          <span>Communication</span>
        </div>
      </div>
    </PageMainContent>
  );
}
