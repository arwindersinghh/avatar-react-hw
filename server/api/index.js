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