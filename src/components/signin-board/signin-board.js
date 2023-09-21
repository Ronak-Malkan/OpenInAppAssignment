import "./signin-board.css";
import { ReactComponent as TwitterLogo } from "../../assets/twitter_logo.svg";
import { ReactComponent as GitHubLogo } from "../../assets/github_logo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin_logo.svg";
import { ReactComponent as DiscordLogo } from "../../assets/discord_logo.svg";

const SignInBoard = () => {
   return (
      <div className="sign-in-board-container">
         <h3 className="logo-text">LOGO</h3>
         <h1>Board.</h1>
         <div className="logo-container">
            <GitHubLogo className="logos" />
            <TwitterLogo className="logos" />
            <LinkedInLogo className="logos" />
            <DiscordLogo className="logos" />
         </div>
      </div>
   );
};

export default SignInBoard;
