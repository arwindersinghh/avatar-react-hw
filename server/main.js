const server = require('/index')
const { db } = require('/db')

const init = async() => {
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        server.listen(port, () => {
            console.log(`listening on port ${port}`)
        });
    }
    catch(ex){
        console.log(ex);
    }
}

init();