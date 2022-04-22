const clientId = process.env.REACT_APP_SPOTIFY_ID_CLIENT as string
const redirectUri = 'http://localhost:3000'
const scope = 'playlist-modify-private'
let url = 'https://accounts.spotify.com/authorize'
url += '?client_id=' + encodeURIComponent(clientId)
url += '&scope=' + encodeURIComponent(scope)
url += '&redirect_uri=' + encodeURIComponent(redirectUri)
url += '&response_type=token'
url += '&show_dialog=' + encodeURIComponent(true)

export const endpoint = url
export const redirect = redirectUri
