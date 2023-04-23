const { MongoClient, ObjectId } = require("mongodb");
const Express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = Express();
app.use(cors());
app.use(Express.json());

const client = new MongoClient(process.env.MONGODB_API_KEY,
    {
        useUnifiedTopology: true
    }
);

var collection;
app.listen(8000, async () => {
    try {
        await client.connect();
        db = client.db("LAHacks");
        collection = db.collection("StudySpace");
        console.log("Connected to MongoDB database");
    } catch(e) {
        console.error(e)
    }
})



app.post("/create-study-space", async (req, res, next) => {
    // var currentDate = new Date();
    try {
        db.collection("StudySpace").insertMany( [
            {
                subject: 
                    {"Math": 
                        [
                            {"Algebra-1":
                                [
                                    {
                                        name: "Study Space 1",
                                        numOfUsers: 3,
                                        lastMessageTime: new Date()
                                    },
                                    {
                                        name: "Study Space 2",
                                        numOfUsers: 5,
                                        lastMessageTime: new Date()
                                    },
                                    {
                                        name: "Study Space 3",
                                        numOfUsers: 10,
                                        lastMessageTime: new Date()
                                    }
                                ]
                            },
                        
                            {"Algebra-2":
                                [
                                    {
                                        numOfUsers: 5,
                                        lastMessageTime: new Date()
                                    }    
                                ]
                            },
                        ]
                    },
            },

            {
                subject: 
                    {"Computer-Science": 
                        [
                            {"Fundamentals of Computer Science":
                                [
                                    {
                                        numOfUsers: 10,
                                        lastMessageTime: new Date()
                                    }    
                                ],
                            },
                        
                            {"Data Structures and Algorithms":
                                [
                                    {
                                        numOfUsers: 20,
                                        // lastMessageTime: new Date().toISOString()
                                        lastMessageTime: new Date()
                                    }    
                                ]
                            },
                        ]
                    },
                }
                

            
        ]);
        res.status(200).send("Successfully added to study spaces to database");
        console.log("Inserted study spaces inside database");

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
        console.log("Error inserting study space information")
    }
});


app.post("/create-study-space-for-single", async (req, res, next) => {
    const formData = req.body;
    console.log(formData)

    try {
        db.collection("StudySpace").insertMany( [
            {
                subject: 
                    {"Math": 
                        [
                            {"Algebra-1":
                                [
                                    {
                                        name: req.body.name,
                                        numOfUsers: 0,
                                        lastMessageTime: new Date()
                                    },
                                ]
                            },
                        
                        ]
                    },
            },

            
        ]);
        res.status(200).send("Successfully added to study spaces to database");
        console.log("Inserted study spaces inside database");

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
        console.log("Error inserting study space information")
    }
});

// Query and return specific subjects (like Algebra 1, Algebra 2...)
app.get("/find-specific-subject", async (req, res, next) => {
    let generalSubject = "Math"
    let specificSubject = `Algebra-1`

    genQuery = `subject.${generalSubject}`
    projectQuery = `subject.${generalSubject}.${specificSubject}`

    let isTimeAscend = true;
    let isNumUserAscend = false;


    try {
        db.collection("StudySpace").find({ [genQuery]: { $elemMatch: { [specificSubject]: { $exists: true } } } })
            .project({ [projectQuery]: 1 })
            .toArray(function (err, results) {
                if (err) {
                    res.status(500).json(err);
                    console.log(err);
                    console.log("Error getting study space information");
                    return;
                }
    
                var specificSubArray = results.map(result => result.subject.Math.filter(subject => subject[specificSubject])[0][specificSubject]);
                var specificSubArr = specificSubArray[0];


                // Note: Only one filter (lastMessage, number of users) can be applied at a time

                // Time sorting
                if (isTimeAscend) {
                    // SORTED ASCENDING
                    specificSubArr = specificSubArr.sort((a, b) => {
                        return new Date(a.lastMessageTime) - new Date(b.lastMessageTime);
                    });
                } else {
                    // SORTED DESCENDING
                    specificSubArr = specificSubArr.sort((b, a) => {
                        return new Date(a.lastMessageTime) - new Date(b.lastMessageTime);
                    });
                }

                // Number of users sorting
                if (isNumUserAscend) {
                    specificSubArr = specificSubArr.sort((a, b) => {
                        return new Date(a.numOfUsers) - new Date(b.numOfUsers);
                    });
                } else {
                    specificSubArr = specificSubArr.sort((b, a) => {
                        return new Date(a.numOfUsers) - new Date(b.numOfUsers);
                    });
                }


                // // SORTED DESCENDING
                // const sortedTimeDesc = specificSubArr.sort((b, a) => {
                //     return new Date(a.lastMessageTime) - new Date(b.lastMessageTime);
                // });
                console.log(specificSubArr)
                res.status(200).send(specificSubArray);
                console.log("Successfully sent response");
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
        console.log("Error getting user information")
    }

    
});