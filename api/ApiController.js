var ApiData = require('./ApiData');

var ApiController = {

  ////////// GET //////////
  getAgents: function(req, res){
    console.log("[INFO] Server: getAgents() - > Successful");
    res.status(200).json(ApiData.agentsData);
  },

  getAgent: function(req, res){
    console.log("[INFO] Server: getAgent() - > Successful");
    var agentId = req.params.agentId;
    res.status(200).json(ApiData.agentData[agentId]);
  },

  getProposals: function(req, res){
    console.log("[INFO] Server: getProposals() - > Successful");
    var userId = req.params.userId;
    res.status(200).json(ApiData.proposalsData[userId]);
  },

  getProposal: function(req, res){
    console.log("[INFO] Server: getProposal() - > Successful");
    var proposalId = req.params.proposalId;
    res.status(200).json(ApiData.proposalData[proposalId]);
  },

  getChecklist: function(req, res){
    var user = req.params.user;
    res.status(200).json(ApiData.checklistData[user]);
  },

  getBell: function(req, res){
    console.log("[INFO] Server: getBell() - > Successful");
    res.status(200).json(ApiData.bellData);
  },

  ////////// POST //////////
  postRequest: function(req, res){
    var request = req.body;
    console.log("[INFO] Server: postRequest() - > Successful", request);
    res.status(200).json(ApiData.requestStatus);
  },

  postInterview: function(req, res){
    var request = req.body;
    console.log("[INFO] Server: postInterview() - > Successful", request);
    res.status(200).json(ApiData.interviewStatus);
  },

  postDeclineProposal: function(req, res){
    var request = req.body;
    console.log("[INFO] Server: postDeclineProposal() - > Successful", request);
    res.status(200).json(ApiData.declineProposalStatus);
  }

};

module.exports = ApiController;