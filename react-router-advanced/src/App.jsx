// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import Login from "./components/Login";
// import ProtectedRoute from "./components/ProtectedRoute";
// const App = () => {
//   const isAuthenticated = false;
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/profile/*"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/blog/:postId" element={<BlogPost />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import BlogPost from "./components/BlogPost";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile/*" element={<Profile />} />
//         <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
