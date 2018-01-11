'use strict'

const { createReadStream } = require('fs');
const { join, resolve } = require('path');

module.exports = {
    before(app) {
        app.get('/api/getOrganizationInfo', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/organizationInfo.json'), { encoding: 'utf-8' }).pipe(res);
        });
        
        app.get('/api/getStartPageContent', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/startPageContent.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getNewsList', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/newsList.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getManagementList', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/management.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getUnderServiceHouseList', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/underServiceHouses.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getStopServiceHouseList', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/stopedServiceHouses.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getHouseInfo', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/houseInfo.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getDocumentsList', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/documentsList.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getResponsibility', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/responsibility.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getDebtors', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/debtors.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getUsefull', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/usefull.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getEventsList', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/eventsList.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getServices', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/services.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/getMeetings', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/meetings.json'), { encoding: 'utf-8' }).pipe(res);
        });

        app.get('/api/login', function(req, res)  {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            createReadStream(join(process.cwd(), 'api/login.json'), { encoding: 'utf-8' }).pipe(res);
        });
    }   
}