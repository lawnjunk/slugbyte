'use strict';

// hello world 

require('dotenv').config();
const PORT = process.env.PORT;

require('./server').listen(PORT, () => console.log('server up', PORT));
