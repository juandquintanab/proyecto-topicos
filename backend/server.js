require('dotenv').config();
const express= require('express');
const cancionesRoutes = require('./routes/canciones');
const usuariosRoutes = require('./routes/usuarios');
const interaccionesRoutes = require('./routes/interacciones');
const mongoose = require('mongoose');

//express app
const app = express();


//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path,req.method);
    next()
})

//routes
app.use('/api/canciones',cancionesRoutes);
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/interacciones',interaccionesRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('conected to db and server running on port ', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
 