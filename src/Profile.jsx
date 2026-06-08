import { useState, useEffect, useRef, useCallback } from "react";
import { db } from "./firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

function Profile() {
  const [activeButton, setActiveButton] = useState("tech");
  const [techSkillClicked, setTechSkillClicked] = useState(true);
  const [myPhotosClicked, setMyPhotosClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    localStorage.getItem("portfolio-liked") === "true",
  );
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    loadLikes();
  }, []);

  const loadLikes = async () => {
    const docRef = doc(db, "portfolio", "profile");

    const snap = await getDoc(docRef);

    if (snap.exists()) {
      setTotalLikes(snap.data().likes);
    }
  };

  const getBackGroundColor = (id) => {
    setActiveButton(id); // Set the clicked button as active
  };

  const handleLikeBtn = async () => {
    const docRef = doc(db, "portfolio", "profile");

    if (likeCount) {
      setLikeCount(false);

      localStorage.removeItem("portfolio-liked");

      await updateDoc(docRef, {
        likes: increment(-1),
      });

      setTotalLikes((prev) => prev - 1);
    } else {
      setLikeCount(true);

      localStorage.setItem("portfolio-liked", "true");

      await updateDoc(docRef, {
        likes: increment(1),
      });

      setTotalLikes((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="cover-photo"></div>
      <div className="profile-body">
        <div className="profile-header-container">
          <div className="profile-picture"></div>
          <div className="profile-name">
            <p>Abhishek Kabi</p>
          </div>
        </div>

        <div className="profile-button">
          <button className="profile-action-button blue">
            <i class="fa-solid fa-user-plus white"></i> Add friend
          </button>
          <button className="profile-action-button">
            <i class="fa-brands fa-facebook-messenger"></i> Message
          </button>
        </div>

        <div className="info-buttons">
          <button
            className="info-btns"
            id="tech"
            style={{
              backgroundColor: activeButton === "tech" ? "#DEEFFC" : "",
            }}
            onClick={() => {
              getBackGroundColor("tech");
              setTechSkillClicked(true);
              setMyPhotosClicked(false);
            }}
          >
            Technical Skills
          </button>
          <button
            className="info-btns"
            id="photo"
            style={{
              backgroundColor: activeButton === "photo" ? "#DEEFFC" : "",
            }}
            onClick={() => {
              getBackGroundColor("photo");
              setTechSkillClicked(false);
              setMyPhotosClicked(true);
            }}
          >
            Photos
          </button>
        </div>

        <div className="personal-dtls">
          <h2>Personal details</h2>
          <div className="kontainer">
            <div className="details-holder-icons">
              <div>
                <i class="fa-regular fa-map"></i>
              </div>
              <div>
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            <div className="details-holder-dtls">
              <p>Bangalore, Karnataka, India.</p>
              <p>VIT Vellore - B.Tech - IT.</p>
            </div>
          </div>
        </div>
        <div className="plastic-wrapper">
          {techSkillClicked && (
            <div className="facebook-post">
              <div className="post-header">
                <div className="post-info">
                  <div className="profile-picture-small-wrapper">
                    <div className="profile-picture-small"></div>
                  </div>
                  <div className="post-dtls">
                    <div>
                      <div>
                        <p>
                          <strong>Abhishek kabi</strong>{" "}
                          <span style={{ color: "gray" }}>posted</span>
                        </p>
                      </div>
                    </div>

                    <p>
                      <span
                        style={{
                          color: "gray",
                          fontSize: "12px",
                          marginLeft: "-75px",
                        }}
                      >
                        8 Jun 2026
                      </span>{" "}
                      <i
                        class="fa-solid fa-earth-americas"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-text">
                <p>All my tech skills...📱💻</p>
              </div>
              <div className="tech-skills">
                <div>
                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>1. JavaScript (Core):</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Fundamentals:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Objects:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Arrays:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Control Flow:</strong>
                    </span>
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
                      <strong>Asynchronous Programming:</strong>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Data Handling:</strong>
                    </span>
                    <br />
                    ● JSON structures
                    <br />
                    ● Data transformation
                    <br />
                    ● State synchronization
                    <br />● List manipulation
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>2. React Core:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Components:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Props:</strong>
                    </span>
                    <br />
                    ● Passing props
                    <br />
                    ● Prop drilling
                    <br />
                    ● Data flow between components
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>State Management:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Hooks:</strong>
                    </span>
                    <br />
                    ● useState
                    <br />
                    ● useEffect
                    <br />
                    ● Custom logic patterns
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Rendering:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>React Architecture:</strong>
                    </span>
                    <br />
                    ● Screen separation
                    <br />
                    ● Feature organization
                    <br />
                    ● Reusable components
                    <br />● Project structuring
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>3. React Native Core:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>UI Components:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Mobile UI Development:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Styling:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Navigation Concepts:</strong>
                    </span>
                    <br />
                    ● Screen transitions
                    <br />
                    ● Navigation flow
                    <br />
                    ● User experience planning
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Mobile State Management:</strong>
                    </span>
                    <br />
                    ● Screen-level state
                    <br />
                    ● Form state
                    <br />
                    ● Editor state
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Debugging:</strong>
                    </span>
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
                    <em>
                      Example: Tracked and fixed the Notes editor font bug
                      caused by:
                    </em>
                    <br />
                    ● Notes storing font
                    <br />
                    ● Logic reading fontSize
                    <br />● Migration and fallback handling
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>4. Expo:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Expo Ecosystem:</strong>
                    </span>
                    <br />
                    ● Expo project setup
                    <br />
                    ● Expo app configuration
                    <br />
                    ● Asset management
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>App Configuration:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Build & Deployment:</strong>
                    </span>
                    <br />
                    ● Android builds
                    <br />
                    ● APK generation
                    <br />
                    ● Deployment preparation
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Expo Debugging:</strong>
                    </span>
                    <br />
                    ● Adaptive icon troubleshooting
                    <br />
                    ● Asset configuration debugging
                    <br />● Build issue investigation
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>5. Firebase:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Authentication:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Firestore Database:</strong>
                    </span>
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
                      <strong>Cloud Data Synchronization:</strong>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Data Modeling:</strong>
                    </span>
                    <br />
                    ● User collections
                    <br />
                    ● Note structures
                    <br />
                    ● List structures
                    <br />● Firestore document organization
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>6. Backend Concepts:</strong>
                    </span>
                    <br />
                    <br />
                    <em>
                      Although Firebase handles much of the backend
                      infrastructure, I've already worked with:
                    </em>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Backend Logic:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Database Concepts:</strong>
                    </span>
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
                      <strong>Authentication Concepts:</strong>
                    </span>
                    <br />
                    ● Session management
                    <br />
                    ● User identity
                    <br />● Protected user data
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>7. Git & GitHub:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Version Control:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>GitHub:</strong>
                    </span>
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
                      <strong>Open Source Familiarity:</strong>
                    </span>
                    <br />
                    ● Reading issues
                    <br />
                    ● Debugging community-reported problems
                    <br />● Comparing repository behavior
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>8. Deployment & Hosting:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Railway:</strong>
                    </span>
                    <br />
                    ● Deployment concepts
                    <br />
                    ● Application hosting
                    <br />
                    ● Backend service deployment awareness
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>General Deployment Knowledge:</strong>
                    </span>
                    <br />
                    ● Production builds
                    <br />
                    ● Environment management
                    <br />
                    ● Hosting workflows
                    <br />● Release preparation
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>9. Scheduling & Automation:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Cron Jobs:</strong>
                    </span>
                    <br />
                    ● Understanding scheduled tasks
                    <br />
                    ● Background execution concepts
                    <br />
                    ● Automation workflows
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>General Automation Concepts:</strong>
                    </span>
                    <br />
                    ● Timed operations
                    <br />
                    ● Periodic updates
                    <br />● Backend task scheduling
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>10. Application Architecture:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Large Project Organization:</strong>
                    </span>
                    <br />
                    <em>
                      Your Space App includes multiple interconnected systems:
                    </em>
                    <br />
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Architectural Skills:</strong>
                    </span>
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>11. UI/UX Development:</strong>
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Productivity App Design:</strong>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>UX Thinking:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Animation Planning:</strong>
                    </span>
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>12. Debugging & Problem Solving:</strong>
                    </span>
                    <br />
                    <br />
                    <em>One of your strongest demonstrated skills.</em>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Debugging Areas:</strong>
                    </span>
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
                    <span style={{ color: "#1877f2" }}>
                      <strong>Debugging Approach:</strong>
                    </span>
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>13. Current Growth Areas:</strong>
                    </span>
                    <br />
                    <br />
                    <em>These are areas I'm interested in moving toward:</em>
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Near-Term:</strong>
                    </span>
                    <br />
                    ● Advanced React Native
                    <br />
                    ● TypeScript
                    <br />
                    ● Better application architecture
                    <br />
                    ● Performance optimization
                    <br />
                    ● Technical interview preparation
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Mid-Term:</strong>
                    </span>
                    <br />
                    ● Android Development
                    <br />
                    ● Kotlin
                    <br />
                    ● Native Android APIs
                    <br />
                    <br />
                    <span style={{ color: "#1877f2" }}>
                      <strong>Long-Term:</strong>
                    </span>
                    <br />
                    ● AOSP
                    <br />
                    ● Linux kernels
                    <br />
                    ● Embedded systems
                    <br />
                    ● Raspberry Pi
                    <br />
                    ● Hardware programming
                    <br />
                    ● Electronics
                    <br />● Device/phone development
                  </p>
                  <br />

                  <p>
                    <span style={{ color: "#95b22c" }}>
                      <strong>Current Skill Stack Summary:</strong>
                    </span>
                    <br />
                    <br />
                    <strong>Frontend:</strong> JavaScript • React • React Native
                    • Expo
                    <br />
                    <br />
                    <strong>Backend:</strong> Firebase • Authentication •
                    Firestore
                    <br />
                    <br />
                    <strong>Development Tools:</strong> Git • GitHub
                    <br />
                    <br />
                    <strong>Deployment:</strong> Railway • Mobile app deployment
                    <br />
                    <br />
                    <strong>Architecture:</strong> Multi-feature application
                    design • Cloud synchronization • State management
                    <br />
                    <br />
                    <strong>Strengths:</strong>
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
                </div>
              </div>
              <div className="placeholder"></div>
              <div className="reaction-buttons-div">
                <div className="reaction-button">
                  <button
                    className="react-button"
                    onClick={() => handleLikeBtn()}
                  >
                    <i
                      class="fa-regular fa-thumbs-up"
                      style={{ color: likeCount ? "blue" : "gray" }}
                    ></i>
                  </button>
                  <button className="react-button">
                    <i
                      class="fa-regular fa-comment"
                      style={{ color: "gray" }}
                    ></i>
                  </button>
                  <button className="react-button">
                    <i
                      class="fa-regular fa-share-from-square"
                      style={{ color: "gray" }}
                    ></i>
                  </button>
                </div>
                <div className="like-count-div">
                  <div style={{ marginRight: "10px" }} className="xxx">
                    <i class="fa-regular fa-thumbs-up"></i>
                  </div>
                  <div>
                    <p style={{ color: "#95b22c" }}>{totalLikes}</p>
                  </div>
                </div>
              </div>
              <div className="post-divider">
                <div className="noposttext">
                  <p
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    End of posts
                  </p>
                </div>
              </div>
            </div>
          )}
          {myPhotosClicked && <div className="my-photos">my-photos</div>}
        </div>
      </div>
    </>
  );
}

export default Profile;
