import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30,
    bio: "Software developer with a passion for web development.",
  };
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />

      <Footer />
      <UserContext.Provider value={userData}>
        <ProfilePage />
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}

export default App;
