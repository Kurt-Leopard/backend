import express from 'express';
import { getTracks,getArtists,getSpotify} from '../controller/spotifyController.mjs';
const router=express.Router();

router.get("/spotify-tracks/:title", getTracks);
router.get("/spotify-artist", getArtists);
router.get("/spotify/:title", getSpotify);




export {router};