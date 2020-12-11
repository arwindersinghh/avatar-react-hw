const { app, conn } = require('./index')



const init = async() => {
    try{
        await conn.sync();
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        });
    }
    catch(ex){
        console.log(ex);
    }
}

init();