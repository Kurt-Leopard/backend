import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const clientId =process.env.CLIENT_ID;
const clientSecret =process.env.CLIENT_SECRET;

async function getToken() {
  const response = await axios.post('https://accounts.spotify.com/api/token', {
    grant_type: 'client_credentials',
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  });
    return response.data.access_token;
}

async function getTracks(req, res){
    const title=req.params.title;
    const accessToken = await getToken(); 
    axios.get(`https://api.spotify.com/v1/search?q=${title}&type=track&limit=10`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }).then((response) => {
        res.json({ success:true, tracks: response.data.tracks.items});
    });
}
async function getSpotify(req, res){
    const title=req.params.title;
    const accessToken = await getToken(); 
    axios.get(`https://api.spotify.com/v1/search?q=${title}&type=track&limit=10`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }).then((response) => {
        res.json({ success:true, tracks: response.data.tracks.items});
    });
}

async function getArtists(req, res){
    const accessToken = await getToken(); 
    axios.get(`https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }).then((response) => {
        res.json({ success:true, tracks: response.data.artists});
    });
}
export {getTracks, getArtists,getSpotify};
