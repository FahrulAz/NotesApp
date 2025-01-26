import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404page";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import useAuth from "./hooks/useAuth";
import useLoading from "./hooks/useLoading";
import PropTypes from "prop-types";

// function App() {
//   const { authedUser, login, logout } = useAuth();
//   const initializing = useLoading();

//   if (initializing) {
//     return (
//       <div className="loading">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <ThemeProvider>
//       <LanguageProvider>
//         <div>
//           <header>
//             <Header userName={authedUser?.name} onButtonClick={logout} />
//           </header>

//           <main className="container">
//             <Routes>
//               {authedUser === null && (
//                 <>
//                   <Route
//                     path="/*"
//                     element={<LoginPage loginSuccess={login} />}
//                   />
//                   <Route path="/register" element={<RegisterPage />} />
//                 </>
//               )}

//               {authedUser !== null && (
//                 <>
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/new" element={<AddPage />} />
//                   <Route path="/archive" element={<ArchivePage />} />
//                   <Route path="/notes/:id" element={<DetailPage />} />
//                 </>
//               )}

//               <Route path="*" element={<ErrorPage />} />
//             </Routes>
//           </main>
//         </div>
//       </LanguageProvider>
//     </ThemeProvider>
//   );
// }

function App() {
  const { authedUser, login, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <header>
            <Header userName={authedUser?.name} onButtonClick={logout} />
          </header>

          <main className="container">
            <Routes>
              {authedUser === null && (
                <>
                  <Route
                    path="/*"
                    element={<LoginPage loginSuccess={login} />}
                  />
                  <Route path="/register" element={<RegisterPage />} />
                </>
              )}

              {authedUser !== null && (
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/new" element={<AddPage />} />
                  <Route path="/archive" element={<ArchivePage />} />
                  <Route path="/notes/:id" element={<DetailPage />} />
                </>
              )}

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}


App.propTypes = {
  authedUser: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
  initializing: PropTypes.bool,
};

export default App;
