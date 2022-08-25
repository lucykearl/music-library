const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.createArtist);

router.get('/', artistController.readArtist);

router.get('/:artistId', artistController.readArtistById);

router.patch('/:artistId', artistController.updateArtist);

router.delete('/artist/:artistId', artistController.deleteArtist);

module.exports = router;