const express = require('express');
const bodyParser = require('body-parser');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRouter = require('./routes/randomRecipe.routes');
const app = express();
const db = require('./db');
const userRouter = require('./routes/users.routes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


app.use(express.json());
app.use(bodyParser.json());

app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/fullRecipes', fullRecipesRouter);
app.use('/random', randomRouter);

db.connect((error) => {
    if(error){
        console.log('Connection failed.');
    } else {
        console.log('Connection initiated.');
    }
});

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on Port 3000.');
});
