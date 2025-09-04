const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~9AAShDoL#EYWxE1lXCVoM9v67bAY_gNs9Svkczqg3_z7x7uaoluc'
};
