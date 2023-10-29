import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailTitle">
        <h1>Save time, save money!</h1>
        <h2 className="mailDesc">
          Sign up and we'll send the best deals to you
        </h2>
      </div>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
