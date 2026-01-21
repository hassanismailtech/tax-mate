import profilePic from "../../shared/assets/images/profile-pic.svg";
import { History, Settings } from "lucide-react";

export default function ChatAi() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={profilePic} alt="Ai profile pic" />
        <div className="flex gap-6">
          <div className="flex gap-1">
            <History />
            <p>History</p>
          </div>
          <Settings />
        </div>
      </div>
    </div>
  );
}
