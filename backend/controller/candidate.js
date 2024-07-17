const Candidate = require('../model/Candidate');
const User = require('../model/User')


exports.AddCandidate = async (req, res) => {
    try {


        const { name } = req.body;

        console.log(name)
        // Create the new user
        const newCandidate = new Candidate({
            name: name,
            totalVotes: 0,
            votes: [],
        });




        const createCandidate = await newCandidate.save();

        res.status(201).json({
            success: true,
            data: createCandidate
        });
    } catch (error) {

        console.log(error)
        res.status(500).json({
            success: false,
            error: 'unsuccessfull ',
            serverError: error
        });
    }
};
exports.getCandidates = async (req, res) => {
    try {



        // Create the new user
        const candidates = await Candidate.find();


        res.status(201).json({
            success: true,
            data: candidates
        });
    } catch (error) {


        res.status(500).json({
            success: false,
            error: 'unsuccessfull ',
            serverError: error
        });
    }
};
exports.getUserCandidates = async (req, res) => {
    try {


        // Create the new user
        const candidates = await Candidate.find();

        const responseData = candidates.map((can) => {
            return {
                _id: can._id,
                name: can.name
            } 
        })

        res.status(201).json({
            success: true,
            data: responseData
        });
    } catch (error) {


        res.status(500).json({
            success: false,
            error: 'unsuccessfull ',
            serverError: error
        });
    }
};


exports.addVote = async (req, res) => { 
    try {
        const { candidateId, userId } = req.body;

       
        const candidate = await Candidate.findById(candidateId);
        if (!candidate) {
            return res.status(400).json({
                success: false,
                error: 'Candidate does not exist'
            });
        }

       
        const user = await User.findById(userId); 
        if (!user) {
            return res.status(400).json({
                success: false,
                error: 'User does not exist'
            });
        }

        user.hasVoted=true;
        
        const userObject = user.toObject(); 
        delete userObject.password;

       
        candidate.totalVotes += 1; 
        candidate.votes.push(userObject); 

       
        const userUpdated = await user.save(); 
        const updatedCandidate = await candidate.save(); 

        delete userUpdated.password 

       
        res.status(201).json({ 
            success: true, 
            data: {
                user:userUpdated, 
                msg:"Vote Added"
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false, 
            error: 'Unsuccessful', 
            serverError: error.message 
        });
    }
};
