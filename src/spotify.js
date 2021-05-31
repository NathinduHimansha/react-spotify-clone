export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "b101325046144a0aa6013bf1cdfb0e24";
//const clientId = "5858c350e12a4358968ec2b1d7773ebc";

//permisons to access - got from documentation
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//this takes the response-token(user is) from the spotify response
//http://localhost:3000/<{takes from here}>#access_token=BQDkUR4Ud8RfgHcRpNnKvmPGw5FvP9FIpm58-wC1OgGsQoQGYsSmSuMVqZ7o1ucgDYzXSA9J_YtEBha1YTAADvVHUhrMo05aDhFe3OAaaasxGkbotMBLJ0LsB0ZGOoA0hughYThTv4h6PfLTrDxlN_JSYbRoCLXPb6-ECUeFJvykW-mS&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
