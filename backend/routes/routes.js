const express = require('express')
const router = express.Router()

// import all controller files   for better understanding

const myauth = require('../controller/auth') // login and register

const candidateCont=require('../controller/candidate')
// all routing 

router.post('/register', myauth.register)
router.post('/login', myauth.login)
// router.post('/vote',votes.dovote)
router.post('/addCandidate',candidateCont.AddCandidate)
router.get('/getUserCandidates',candidateCont.getUserCandidates)
router.get('/candidates',candidateCont.getCandidates)
router.post('/addVote',candidateCont.addVote)

module.exports = router