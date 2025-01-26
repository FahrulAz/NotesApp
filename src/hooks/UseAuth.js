// import { useState, useEffect } from "react";
// import { getUserLogged, putAccessToken } from "../utils/network-data";
// import PropTypes from "prop-types";

// function useAuth() {
//   const [authedUser, setAuthedUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       const { data } = await getUserLogged();
//       setAuthedUser(data);
//     }

//     fetchUser();
//   }, []);

//   const login = async ({ accessToken }) => {
//     putAccessToken(accessToken);
//     const { data } = await getUserLogged();
//     setAuthedUser(data);
//   };

//   const logout = () => {
//     setAuthedUser(null);
//     putAccessToken("");
//   };

//   return { authedUser, login, logout };
// }

// useAuth.propTypes = {
//   authedUser: PropTypes.object,
//   login: PropTypes.func.isRequired,
//   logout: PropTypes.func.isRequired,
// };

// export default useAuth;

import { useState, useEffect } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";

function useAuth() {
  const [authedUser, setAuthedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        putAccessToken("");
        localStorage.removeItem("accessToken");
        setAuthedUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  const login = async ({ accessToken }) => {
    putAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch (error) {
      console.error("Login failed:", error);
      setAuthedUser(null);
    }
  };

  const logout = () => {
    setAuthedUser(null);
    putAccessToken("");
    localStorage.removeItem("accessToken");
  };

  return { authedUser, login, logout, isLoading };
}

export default useAuth;
