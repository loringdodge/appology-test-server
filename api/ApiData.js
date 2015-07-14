var ApiData = {

  ////////// GET //////////
  agentsData: [{
      "agent_id": "1337642153",
      "name": "David Healey",
      "brokerage": "Re/max Gold",
      "years_of_exp": 10,
      "yelp_reviews": null,
      "yelp_rating": null,
      "zillow_reviews": 4,
      "zillow_rating": 5.0,
      "past_sales": 184,
      "active_listings": 1,
      "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
    },
    {
      "agent_id": "881",
      "name": "Patrice Petersen Sandstrom",
      "brokerage": "J. Rockcliff Realtors",
      "years_of_exp": "8",
      "yelp_reviews": 4,
      "yelp_rating": 4.5,
      "zillow_reviews": 14,
      "zillow_rating": 4.8,
      "past_sales": 87,
      "active_listings": 2,
      "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
  }],

  agentData: {
    "1337642153" : {
      "agent_id":  "1337642153",
      "name":  "David Healey",
      "brokerage":  "Re/max Gold",
      "years_of_exp":  "10",
      "yelp_reviews":  "null",
      "yelp_rating":  "null",
      "zillow_reviews":  4,
      "zillow_rating":  5.0,
      "past_sales":  184,
      "active_listings":  1,
      "photo":  "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg",
      "area": ["Lincoln", "Rocklin","Roseville", "Sacramento", "San Francisco"],
      "email":  "davidmhealey@gmail.com",
      "phone":  "4156293439",
      "about":  "PROFESSIONAL OBJECTIVE: to became a trusted advisor to the people of our great city for their real estate needs",
      "education": ["Business : California State University-Fullerton","Certified Public Accountant","Real Estate Broker"],
      "speciality": {
        "Large Brokerage": "3",
        "Great Stats" : "1"
      },
      "languages": ["English", "Russian"],
      "reviews": [{
        "id" : 459120,
        "link" : "http://www.yelp.com/biz/tim-gullicksen-san-francisco-2#hrid:ik0eH4X1IO3B48lRfKo2bw",
        "name" : "ramya r.",
        "photo_url" :"http://s3-media3.fl.yelpcdn.com/photo/VP0Vu7yzv3j_SYLwgkzsfQ/ms.jpg",
        "rating" : 5,
        "reviewDate" : "2014-12-06T00:00:00",
        "summary" : "After working with Tim, it's easy to see why he has so many positive reviews. My husband and I were first-time homebuyers and started looking in February of…",
        "title" :  "",
        "type" : 2
      }, {
        "id" : 106,
        "link" : "http://www.zillow.com/profile/commstar1/",
        "name" : "commstar1",
        "photo_url" : "",
        "rating" : 5,
        "reviewDate" : "2014-12-02T00:00:00",
        "summary" : "With all sincerity and honesty, I would recommend ak real estate, Marco Wong was my realtor, he is a very patient, proactive, smart and intelligent realtor to work with, always ready to schedule n follow …",
        "title" : "Bought a Condo home in 2014 for approximately $250K in Upper Marlboro, MD.",
        "type" : 1
      }]
    }
  },

  proposalsData: {
    "1": [{
        "proposal_id": "1",
        "agent_id": "1337642153",
        "name": "David Healey",
        "brokerage": "Re/max Gold",
        "years_of_exp": 10,
        "yelp_reviews": null,
        "yelp_rating": null,
        "zillow_reviews": 4,
        "zillow_rating": 5.0,
        "past_sales": 184,
        "active_listings": 1,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "2",
        "agent_id": "881",
        "name": "Kristen",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "3",
        "agent_id": "881",
        "name": "Danny",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }, {
        "proposal_id": "4",
        "agent_id": "881",
        "name": "Phillip",
        "brokerage": "J. Rockcliff Realtors",
        "years_of_exp": "8",
        "yelp_reviews": 4,
        "yelp_rating": 4.5,
        "zillow_reviews": 14,
        "zillow_rating": 4.8,
        "past_sales": 87,
        "active_listings": 2,
        "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
      }]
  },

  proposalData: {
    "1": {
      "proposal_id": "1",
      "agent_id": "1337642153",
      "name": "David Healey",
      "brokerage": "Re/max Gold",
      "years_of_exp": 10,
      "yelp_reviews": null,
      "yelp_rating": null,
      "zillow_reviews": 4,
      "zillow_rating": 5.0,
      "past_sales": 184,
      "active_listings": 1,
      "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg",
      "fees": '',
      "services": '',
      "questions": [{
          q: 'What is the reason for you to hire me?',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },{
          q: 'Why am I the best agent for you?',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
        },{
          q: 'What are my insights into local market trends?',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },{
          q: 'How will I market your home?',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
        },{
          q: 'How will I communicate with you?',
          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }]
    },
    "2": {
      "proposal_id": "2",
      "agent_id": "1337642153",
      "name": "David Healey",
      "brokerage": "Re/max Gold",
      "years_of_exp": 10,
      "yelp_reviews": null,
      "yelp_rating": null,
      "zillow_reviews": 4,
      "zillow_rating": 5.0,
      "past_sales": 184,
      "active_listings": 1,
      "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
    },
    "3": {
      "proposal_id": "3",
      "agent_id": "1337642153",
      "name": "David Healey",
      "brokerage": "Re/max Gold",
      "years_of_exp": 10,
      "yelp_reviews": null,
      "yelp_rating": null,
      "zillow_reviews": 4,
      "zillow_rating": 5.0,
      "past_sales": 184,
      "active_listings": 1,
      "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
    },
    "4": {
      "proposal_id": "4",
      "agent_id": "1337642153",
      "name": "David Healey",
      "brokerage": "Re/max Gold",
      "years_of_exp": 10,
      "yelp_reviews": null,
      "yelp_rating": null,
      "zillow_reviews": 4,
      "zillow_rating": 5.0,
      "past_sales": 184,
      "active_listings": 1,
      "photo": "http://m.c.lnkd.licdn.com/mpr/pub/image-4MS9vkWJO0EPNZkQrjUkerg0r3C6TnRF4cmPVp7MrgS5W21I4MSP5ZJJrW99Wns9NIeX/david-healey.jpg"
    }
  },

  checklistData: {

  },

  bellData: {
    "nationalAverage": 5.7,
    "upnestAverage": 5.4,
    "url": "http://4.bp.blogspot.com/_RRd2yluW41A/TLYV9D67X0I/AAAAAAAAAEA/ejG1SgSD1H8/s1600/Bell+Curve.jpg"
  },

  ////////// POST //////////
  requestStatus: { "status": "success" },

  interviewStatus: { "status": "success" },

  proposalDeclineStatus: { "status": "success" }

};

module.exports = ApiData;