module.exports = {
    user : process.env.NODE_ORACLEDB_USER || "abhinavtiwari2303@gmail.com",
    
    password : process.env.NODE_ORACLEDB_PASSWORD || "Abhi9avTiwari",
    
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:3000/",
    
    externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
    };