const { fs } = require("fs");



const createTeam = function() {
    const createManager = function(manager) {
        return `
            <div class="card m-2" style="min-width: 19rem;">
                <div class="card-header text-white bg-info">
                <h4 class="card-title">${manager.name}</h4>
                <h5 class="card-subtitle mb-3">Manager</h5>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush p-2 my-2 bg-white">
                    <li class="list-group-item">ID: ${manager.id()}</li>
                    <li class="list-group-item flex-wrap">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item flex-wrap">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
    };
    
    const createEnineer = function(engineer) {
        return `
        <div class="card m-2" style="min-width: 19rem;">
            <div class="card-header text-white bg-info">
            <h4 class="card-title">${engineer.name}</h4>
            <h5 class="card-subtitle mb-3">${engineer.role}</h5>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush p-2 my-2 bg-white">
                <li class="list-group-item">ID: ${engineer.id()}</li>
                <li class="list-group-item flex-wrap">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item flex-wrap">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    `; 
    }
    
    const createIntern = function(intern) {
        return`
        <div class="card m-2" style="min-width: 19rem;">
            <div class="card-header text-white bg-info">
            <h4 class="card-title">${intern.name}</h4>
            <h5 class="card-subtitle mb-3">Intern</h5>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush p-2 my-2 bg-white">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item flex-wrap">Email: <a href="mailto:${intern.email}">${inter}
                <li class="list-group-item flex-wrap">School:${intern.getSchool()}">${intern.getSchool()}</a></li>
                </ul>
            </div>
        </div>
        `; 
    }
    
    generateTheTeam = function(team) {
        let theTeam = [];
    
        for(let i = 0; i < team.length; i++) {
            const employees = team[i];
            const role = employees.getRole();
    
            if (role === "Manager") {
                const managerInfo = createManager(employees);
    
                theTeam.push(managerInfo);
            }
            if (role === "engineer") {
                const engineerInfo = createEnineer(employees);
    
                theTeam.push(engineerInfo);
            }
            if (role === "intern") {
                const internInfo = createIntern(employees);
    
                theTeam.push(internInfo);
            }
        }
        const teamCards = theTeam.join('');
    
        const generateMyTeam = function(viewTeam);
        return generateMyTeam;
        
    }
    
    const viewTeam = function(teamCards) {
        return `
        <!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profle</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        </head>
    
        <body>
            <header class="title col-12 bg-secondary py-2 text-center text-white">
                <h1 class="content mx-auto">The Team</h1>
            </header>
            <section id="the-team" class="section container mt-4">
                <div class="card-deck d-flex justify-content-start flex-wrap">
                    ${generateTheTeam(viewTeam)}
                </div>
            </section>
        </body>
        </html
        `;
    };


}



const teamHTML = (createTeam) => {
    fs.writeFile('./dis/index.html', createTeam(),function(err,results) {
        (err) ? console.log('error', err): console.log('successfully added!');
    });
};

module.exports = teamHTML;