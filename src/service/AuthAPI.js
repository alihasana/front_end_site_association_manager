import axios from "axios";
import jwtDecode from "jwt-decode";


/**s
 * Requête HTTP d'authentification et stockage du token dans le storage et sur Axios
 * @param username string
 * @param password string
 */
function authenticate(username, password) {
    return axios
        .post("https://127.0.0.1:8000/api/login_check", {username, password})
        .then(response => response.data.token)
        .then(token => {

            // Je stocké le token dans mon localStorage
            window.localStorage.setItem("authToken", token);
            // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
            setAxiosToken(token);
        });
}

/**
 * Positionne le token JWT sur Axios
 * @param {string} token Le token JWT
 */
function setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

/**
 * Mise en place lors du chargement de l'application
 */
function setup() {
    // 1. Voir si on a un token ?
    const token = window.localStorage.getItem("authToken");
    // 2. Si le token est encore valide
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
        }
    }
}

function isAuthenticated() {
    // 1. Voir si on a un token ?
    const token = window.localStorage.getItem("authToken");
    // 2. Si le token est encore valide
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            return true;
        }
        return false;
    }
    return false;

}

function logout () {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}
export default {
    authenticate,
    setup,
    isAuthenticated,
    logout,
};
