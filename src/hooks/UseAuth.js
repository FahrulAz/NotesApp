import { useState, useEffect } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import PropTypes from "prop-types";

function useAuth() {
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    }

    fetchUser();
  }, []);

  const login = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const logout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  return { authedUser, login, logout };
}

useAuth.propTypes = {
  authedUser: PropTypes.object,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default useAuth;
