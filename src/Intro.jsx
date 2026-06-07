function Intro({ toggleSidebar, setProjectsClicked }) {
  return (
    <div className="intro-container">
      <p className="hii">👋 Hi, I am Abhishek.</p>
      {/*------------------------------------------------------------------- */}
      <div className="placeholder-div">
        <p className="desc">
          I am a passionate{" "}
          <span className="bold">Full-Stack React (web / native)</span> product
          engineer.
        </p>
        {/*------------------------------------------------------------------- */}
        <div className="divider">
          <div className="the-dot"></div>
          <div className="the-line"></div>
          <div className="the-dot"></div>
        </div>
        {/*------------------------------------------------------------------- */}
      </div>
      <div className="placeholder-div">
        <p className="desc">
          <span style={{ color: "red" }}>Click</span> on the image below to see
          my <span style={{ color: "gold" }}>MVP Products.</span>
        </p>
        <p style={{ textAlign: "center" }}>👇</p>
        <img
          src="/abhishek.kabi.26/mvp.png"
          alt="mvp"
          className="mvpimg"
          onClick={() => {
            toggleSidebar();

            setTimeout(() => {
              setProjectsClicked(true);
            }, 800);
          }}
        />
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="divider">
        <div className="the-dot"></div>
        <div className="the-line"></div>
        <div className="the-dot"></div>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="placeholder-div">
        <p className="work">
          Over the last 9 years I have worked on multiple domains in{" "}
          <span className="bold">Bangalore</span>, Such as{" "}
          <span className="bold">"Mainframe Developer"</span>,{" "}
          <span className="bold">"Software Development Engineer"</span>,
          <span className="bold">"IT Analyst"</span>,{" "}
          <span className="bold">"Technical Support Engineer L2"</span>, and few
          more.
        </p>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="divider">
        <div className="the-dot"></div>
        <div className="the-line"></div>
        <div className="the-dot"></div>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="placeholder-div">
        <p className="purpose">
          I have found my <span className="bold">purpose</span> in the
          intersection of beauty, <span className="bold">UI design</span> and{" "}
          <span className="bold">Product Building.</span>
        </p>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="divider">
        <div className="the-dot"></div>
        <div className="the-line"></div>
        <div className="the-dot"></div>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="placeholder-div">
        <p className="pow">
          I have hands on experience with 50+ react (web / native) projects
          (github repos) and I have{" "}
          <span className="bold-green">
            3 MVP Production Ready Products Shipped and Deployed.
          </span>{" "}
          Completely built by me.
        </p>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="divider">
        <div className="the-dot"></div>
        <div className="the-line"></div>
        <div className="the-dot"></div>
      </div>
      {/*------------------------------------------------------------------- */}
      <div className="placeholder-div">
        <p className="learn-more">
          Try my projects and get to know me better by accessing the Sidebar
          menu. Thank you for visiting 😊.
        </p>
      </div>
      {/*------------------------------------------------------------------- */}
    </div>
  );
}

export default Intro;
