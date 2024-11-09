import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ProfilePage from "./ProfilePage";
import { UserContext } from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <Counter />
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      {/* <UserProfile name="Alice" age={25} bio="Loves hiking and photography" /> */}
    </>
  );
}

export default App;
