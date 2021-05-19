const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// module.exports can be used as a function instead of object
// when the program is run, the below code gets executed and phase param is passed into it
// phase represents dev or production
// it is recommended to make different sets of env variables for prod and dev
module.exports = (phase) => {
    if (phase===PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                username: 'blogAdmin',
                password: 'blogAdmin',
                clusterName: 'cluster0',
                dbName: 'blogDatabase'
            }
        }
    }

    return {
        env: {
            username: 'blogAdmin',
            password: 'blogAdmin',
            clusterName: 'cluster0',
            dbName: 'blogDatabase-prod'
        }
    }
}