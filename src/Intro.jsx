import { useState, useEffect, useRef, useCallback } from "react";

function Intro({ toggleSidebar, setShouldRender, setProjectsClicked }) {
  const [currentID, setCurrentID] = useState("");

  const handleSkillToggle = (id) => {
    setCurrentID((prev) => (prev === id ? "" : id));
  };
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
              setShouldRender(true);
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
      <div className="tech-skills-wrapper">
        <div className="tech-heading">
          <p>Tech</p>
        </div>
        <div className="divdr"></div>
        <div className="tech-skills">
          <div className="tech-skills-div">
            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("jscore")}
                >
                  {currentID === "jscore" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="jscore" onClick={() => handleSkillToggle("jscore")}>
                <span>JavaScript (Core)</span>
              </p>{" "}
            </div>
            {currentID === "jscore" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Fundamentals:</span>
                <br />
                ● Variables (let, const)
                <br />
                ● Functions
                <br />
                ● Arrow functions
                <br />
                ● Scope
                <br />
                ● Template literals
                <br />
                ● Destructuring
                <br />
                ● Default parameters
                <br />
                ● Optional chaining (?.)
                <br />
                ● Nullish coalescing (??)
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Objects:</span>
                <br />
                ● Object creation and manipulation
                <br />
                ● Nested objects
                <br />
                ● Object spread operator
                <br />
                ● Updating immutable state
                <br />
                ● Property access and modification
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Arrays:</span>
                <br />
                ● map()
                <br />
                ● filter()
                <br />
                ● find()
                <br />
                ● some()
                <br />
                ● forEach()
                <br />
                ● Array spreading
                <br />
                ● Immutable array updates
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Control Flow:</span>
                <br />
                ● if/else
                <br />
                ● Conditional rendering logic
                <br />
                ● Ternary operators
                <br />
                ● Logical operators
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  Asynchronous Programming:
                </span>
                <br />
                ● Promises
                <br />
                ● async/await
                <br />
                ● Handling API/database calls
                <br />
                ● Firebase async operations
                <br />
                ● Loading states
                <br />
                ● Error handling with try/catch
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Data Handling:</span>
                <br />
                ● JSON structures
                <br />
                ● Data transformation
                <br />
                ● State synchronization
                <br />● List manipulation
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("reactcore")}
                >
                  {currentID === "reactcore" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="reactcore" onClick={() => handleSkillToggle("reactcore")}>
                <span>React Core</span>
              </p>
            </div>
            {currentID === "reactcore" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Components:</span>
                <br />
                ● Functional components
                <br />
                ● Component composition
                <br />
                ● Reusable UI structures
                <br />
                ● Component organization
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Props:</span>
                <br />
                ● Passing props
                <br />
                ● Prop drilling
                <br />
                ● Data flow between components
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>State Management:</span>
                <br />
                ● useState
                <br />
                ● State updates
                <br />
                ● Complex state objects
                <br />
                ● Array state management
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Hooks:</span>
                <br />
                ● useState
                <br />
                ● useEffect
                <br />
                ● Custom logic patterns
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Rendering:</span>
                <br />
                ● Conditional rendering
                <br />
                ● Dynamic lists
                <br />
                ● Key management
                <br />
                ● UI updates from state changes
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>React Architecture:</span>
                <br />
                ● Screen separation
                <br />
                ● Feature organization
                <br />
                ● Reusable components
                <br />● Project structuring
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("rncore")}
                >
                  {currentID === "rncore" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="rncore" onClick={() => handleSkillToggle("rncore")}>
                <span>React Native Core</span>
              </p>
            </div>
            {currentID === "rncore" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>UI Components:</span>
                <br />
                ● View
                <br />
                ● Text
                <br />
                ● TextInput
                <br />
                ● ScrollView
                <br />
                ● FlatList
                <br />
                ● Touchable components
                <br />
                ● Modal
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Mobile UI Development:</span>
                <br />
                ● Responsive layouts
                <br />
                ● Mobile-first design
                <br />
                ● Form handling
                <br />
                ● User input management
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Styling:</span>
                <br />
                ● StyleSheet
                <br />
                ● Flexbox
                <br />
                ● Layout design
                <br />
                ● Dynamic styling
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Navigation Concepts:</span>
                <br />
                ● Screen transitions
                <br />
                ● Navigation flow
                <br />
                ● User experience planning
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  Mobile State Management:
                </span>
                <br />
                ● Screen-level state
                <br />
                ● Form state
                <br />
                ● Editor state
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Debugging:</span>
                <br />
                ● State bugs
                <br />
                ● UI rendering issues
                <br />
                ● Data synchronization issues
                <br />
                ● Property mismatch debugging
                <br />
                <br />
                <br />
                ● Notes storing font
                <br />
                ● Logic reading fontSize
                <br />● Migration and fallback handling
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading "
                  onClick={() => handleSkillToggle("expo")}
                >
                  {currentID === "expo" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="expo" onClick={() => handleSkillToggle("expo")}>
                <span>Expo</span>
              </p>
            </div>
            {currentID === "expo" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Expo Ecosystem:</span>
                <br />
                ● Expo project setup
                <br />
                ● Expo app configuration
                <br />
                ● Asset management
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>App Configuration:</span>
                <br />
                ● app.json
                <br />
                ● Icons
                <br />
                ● Splash screens
                <br />
                ● Adaptive icons
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Build & Deployment:</span>
                <br />
                ● Android builds
                <br />
                ● APK generation
                <br />
                ● Deployment preparation
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Expo Debugging:</span>
                <br />
                ● Adaptive icon troubleshooting
                <br />
                ● Asset configuration debugging
                <br />● Build issue investigation
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("firebase")}
                >
                  {currentID === "firebase" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="firebase" onClick={() => handleSkillToggle("firebase")}>
                <span>Firebase</span>
              </p>
            </div>
            {currentID === "firebase" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Authentication:</span>
                <br />
                ● Firebase Auth
                <br />
                ● User registration
                <br />
                ● Login flow
                <br />
                ● Authentication state handling
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Firestore Database:</span>
                <br />
                ● Reading documents
                <br />
                ● Writing documents
                <br />
                ● Updating documents
                <br />
                ● Deleting documents
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  Cloud Data Synchronization:
                </span>
                <br />
                ● User-specific data
                <br />
                ● Notes synchronization
                <br />
                ● Lists synchronization
                <br />
                ● Real-time-ish app data flow
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Data Modeling:</span>
                <br />
                ● User collections
                <br />
                ● Note structures
                <br />
                ● List structures
                <br />● Firestore document organization
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("backend")}
                >
                  {currentID === "backend" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="backend" onClick={() => handleSkillToggle("backend")}>
                <span>Backend Concepts</span>
              </p>
            </div>
            {currentID === "backend" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Backend Logic:</span>
                <br />
                ● CRUD operations
                <br />
                ● User-based data access
                <br />
                ● Data persistence
                <br />
                ● State synchronization
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Database Concepts:</span>
                <br />
                ● Collections
                <br />
                ● Documents
                <br />
                ● Querying data
                <br />
                ● Data relationships
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  Authentication Concepts:
                </span>
                <br />
                ● Session management
                <br />
                ● User identity
                <br />● Protected user data
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("git")}
                >
                  {currentID === "git" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="git" onClick={() => handleSkillToggle("git")}>
                <span>Git & GitHub</span>
              </p>
            </div>
            {currentID === "git" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Version Control:</span>
                <br />
                ● Commits
                <br />
                ● Repository management
                <br />
                ● Branch awareness
                <br />
                ● Change tracking
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>GitHub:</span>
                <br />
                ● Project hosting
                <br />
                ● Repository maintenance
                <br />
                ● Issue investigation
                <br />
                ● Deployment workflows
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  Open Source Familiarity:
                </span>
                <br />
                ● Reading issues
                <br />
                ● Debugging community-reported problems
                <br />● Comparing repository behavior
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("deploy")}
                >
                  {currentID === "deploy" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="deploy" onClick={() => handleSkillToggle("deploy")}>
                <span>Deployment & Hosting</span>
              </p>
            </div>
            {currentID === "deploy" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Railway:</span>
                <br />
                ● Deployment concepts
                <br />
                ● Application hosting
                <br />
                ● Backend service deployment awareness
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  General Deployment Knowledge:
                </span>
                <br />
                ● Production builds
                <br />
                ● Environment management
                <br />
                ● Hosting workflows
                <br />● Release preparation
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("scheduling")}
                >
                  {currentID === "scheduling" ? "-" : "+"}
                </span>{" "}
              </p>
              <p
                id="scheduling"
                onClick={() => handleSkillToggle("scheduling")}
              >
                <span>Scheduling & Automation</span>
              </p>
            </div>
            {currentID === "scheduling" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Cron Jobs:</span>
                <br />
                ● Understanding scheduled tasks
                <br />
                ● Background execution concepts
                <br />
                ● Automation workflows
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>
                  General Automation Concepts:
                </span>
                <br />
                ● Timed operations
                <br />
                ● Periodic updates
                <br />● Backend task scheduling
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("application")}
                >
                  {currentID === "application" ? "-" : "+"}
                </span>{" "}
              </p>
              <p
                id="application"
                onClick={() => handleSkillToggle("application")}
              >
                <span>Application Architecture</span>
              </p>
            </div>
            {currentID === "application" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>
                  Large Project Organization:
                </span>
                ● Notes
                <br />
                ● Lists
                <br />
                ● Calendar
                <br />
                ● Mindmap
                <br />
                ● Archive
                <br />
                ● Bin/Trash
                <br />
                ● Authentication
                <br />
                ● Cloud Sync
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Architectural Skills:</span>
                <br />
                ● Feature separation
                <br />
                ● Shared data models
                <br />
                ● Screen organization
                <br />
                ● State flow planning
                <br />● Cross-feature integration
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("uiux")}
                >
                  {currentID === "uiux" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="uiux" onClick={() => handleSkillToggle("uiux")}>
                <span>UI/UX Development</span>
              </p>
            </div>
            {currentID === "uiux" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>
                  Productivity App Design:
                </span>
                <br />
                ● Note-taking interfaces
                <br />
                ● List management interfaces
                <br />
                ● Calendar interfaces
                <br />
                ● Mindmap interfaces
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>UX Thinking:</span>
                <br />
                ● User workflows
                <br />
                ● Editor experiences
                <br />
                ● Data organization
                <br />
                ● Feature discoverability
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Animation Planning:</span>
                <br />
                <em>You've specifically discussed:</em>
                <br />
                ● Google Keep-style interactions
                <br />
                ● Note expansion animations
                <br />
                ● Scale transitions
                <br />
                ● Fade animations
                <br />
                ● Shared-element style experiences
                <br />● Smooth editor transitions
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("debugging")}
                >
                  {currentID === "debugging" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="debugging" onClick={() => handleSkillToggle("debugging")}>
                <span>Debugging & Problem Solving</span>
              </p>
            </div>
            {currentID === "debugging" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                <span style={{ color: "#1877f2" }}>Debugging Areas:</span>
                <br />
                ● State bugs
                <br />
                ● Rendering bugs
                <br />
                ● Data-model mismatches
                <br />
                ● Firebase synchronization issues
                <br />
                ● Expo configuration issues
                <br />
                ● UI behavior issues
                <br />
                <br />
                <span style={{ color: "#1877f2" }}>Debugging Approach:</span>
                <br />
                ● Trace data flow
                <br />
                ● Inspect object structures
                <br />
                ● Verify property names
                <br />
                ● Compare expected vs actual state
                <br />● Test assumptions systematically
              </p>
            )}

            <div className="flex-row">
              <p>
                <span
                  className="circle accordion-heading"
                  onClick={() => handleSkillToggle("summary")}
                >
                  {currentID === "summary" ? "-" : "+"}
                </span>{" "}
              </p>
              <p id="summary" onClick={() => handleSkillToggle("summary")}>
                <span>Current Skill Stack Summary</span>
              </p>
            </div>
            {currentID === "summary" && (
              <p
                style={{
                  marginBottom: "15px",
                  marginLeft: "12px",
                  textAlign: "left",
                }}
              >
                Frontend: JavaScript • React • React Native • Expo
                <br />
                <br />
                Backend: Firebase • Authentication • Firestore
                <br />
                <br />
                Development Tools: Git • GitHub
                <br />
                <br />
                Deployment: Railway • Mobile app deployment
                <br />
                <br />
                Strengths:
                <br />
                ● Building real projects
                <br />
                ● Debugging
                <br />
                ● UI/UX thinking
                <br />
                ● Feature integration
                <br />
                ● Persistence on complex problems
                <br />
              </p>
            )}
          </div>
        </div>
      </div>

      {/*------------------------------------------------------------------- */}
      <div className="divider">
        <div className="the-dot"></div>
        <div className="the-line"></div>
        <div className="the-dot"></div>
      </div>
      {/*------------------------------------------------------------------- */}

      {/*------------------------------------------------------------------- */}

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
    </div>
  );
}

export default Intro;
