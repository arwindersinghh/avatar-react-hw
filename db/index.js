const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const { STRING } = sequelize;


const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/avatar_db');

const Character = conn.define('character', {
    name : {
        type: STRING,
        allowNull: false,      
    },
    element : {
        type: STRING
    },
    imgURL : {
        type : STRING,
    }
});

const Nation = conn.define('nation', {
    name : STRING
});

Character.belongsTo(Nation);
Nation.hasMany(Character);

const syncAndSeed = async() => {
    await conn.sync({ force: true })
    // const characters = [
    //     { name: 'Aang', element: 'All' },
    //     { name: 'Katara', element: 'Water' },
    //     { name: 'Zuko', element: 'Fire' },
    //     { name: 'Uncle Iroh', element: 'Fire' },
    //     { name: 'Toph', element: 'Earth' },
    //     { name: 'Appa', element: 'None' }
    // ];
    // const [ aang, katara, zuko, uncleIroh, toph, appa ] = await Promise.all(characters.map(character => {
    //     Character.create({
    //         name: character.name,
    //         element: character.element
    //     })
    // }));

    const aang = await Character.create({ name: 'Aang', element: 'All' });
    const katara = await Character.create({ name: 'Katara', element: 'Water' });
    const zuko = await Character.create({ name: 'Zuko', element: 'Fire' });
    const uncleIroh = await Character.create({ name: 'Uncle Iroh', element: 'Fire' });
    const toph = await Character.create({ name: 'Toph', element: 'Earth' });
    const appa = await Character.create({ name: 'Appa', element: 'None' });

    // const nations = [
    //     { name : 'Fire Nation' },
    //     { name : 'Water Tribe' },
    //     { name : 'Air Nomads' },
    //     { name : 'Earth Kingdom' }
    // ];

    // const [ fireNation, waterNation, airNation, earthNation ] = await Promise.all(nations.map(nation => {
    //     Nation.create({ name : nation.name })
    // }));  

    const fireNation = await Nation.create({ name: 'Fire Nation' });
    const waterNation = await Nation.create({ name: 'Water Tribe' });
    const earthNation = await Nation.create({ name: 'Earth Kingdom' });
    const airNation = await Nation.create({ name: 'Air Nomads' });

    aang.nationId = airNation.id;
    katara.nationId = waterNation.id;
    zuko.nationId = fireNation.id;
    uncleIroh.nationId = fireNation.id;
    toph.nationId = earthNation.id;
    appa.nationId = airNation.id;
    
    await Promise.all([ aang.save(), katara.save(), zuko.save(), uncleIroh.save(), toph.save(), appa.save() ])
}


module.exports = {
    syncAndSeed,
    conn,
    Character,
    Nation
}