const router = require('express').Router();
const { Character, Nation } = require('../../db/index');


router.get('/characters', async(req, res, next) => {
    try{
        res.send(await Character.findAll())
    }
    catch(ex){
        next(ex)
    }
})

router.delete('/characters/:id', async(req, res, next) => {
    try{
        const character = await Character.findByPk(req.params.id);
        await character.destroy();
        res.sendStatus(204);
    }
    catch(ex){
        next(ex)
    }
})
router.post('/characters', async(req, res, next) => {
    try{
        const newChar = await Character.create(req.body);
        if(newChar.element.toLowerCase() === 'fire'){
            newChar.nationId = 1;
          }
          else if(newChar.element.toLowerCase() === 'water'){
            newChar.nationId = 2;
          }
          else if(newChar.element.toLowerCase() === 'air'){
            newChar.nationId = 4;
          }
          else if(newChar.element.toLowerCase() === 'earth'){
            newChar.nationId = 3;
          }
          await newChar.save()
          
          res.send(newChar)
    }
    catch(ex){
        next(ex)
    }
})

router.get('/nations', async(req, res, next) => {
    try{
        res.send(await Nation.findAll({
            include: Character
        }))
    }
    catch(ex){
        next(ex)
    }
})


module.exports = router;