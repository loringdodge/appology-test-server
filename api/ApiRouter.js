var express = require('express');
var ApiController = require('./ApiController');

var ApiRouter = express.Router();

ApiRouter.use('*', function (res, req, next) {
  console.log('ApiRouter ---!');
  next();
});

////////// GET //////////
ApiRouter.get('/agents', ApiController.getAgents);
ApiRouter.get('/agent/:agentId', ApiController.getAgent);
ApiRouter.get('/proposals/:userId', ApiController.getProposals);
ApiRouter.get('/proposal/:proposalId', ApiController.getProposal);
ApiRouter.get('/checklist/:user', ApiController.getChecklist);
ApiRouter.get('/bell', ApiController.getBell);

////////// POST //////////
ApiRouter.post('/request', ApiController.postRequest);
ApiRouter.post('/interview', ApiController.postInterview);
ApiRouter.post('/proposal/decline/:proposalId', ApiController.postDeclineProposal);

module.exports = ApiRouter;