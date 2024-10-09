

const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt=require('bcrypt')
const app = express();
const cors = require('cors');

const jwt=require("jsonwebtoken")
const {v4}=require("uuid")
const uuidv4=v4


/*const allowedOrigins = [
  'https://ushasree-mangi-shopper-ftqsv9u84-ushasree-mangis-projects.vercel.app',
  'https://ushasree-mangi-shopper-app.vercel.app',
  'https://ushasree-mangi-shopper-app-git-main-ushasree-mangis-projects.vercel.app'
  
];*/



/*const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies and credentials
}; 



;*/

const corsOptions={
  origin:['http://localhost:3000', 'https://job-finder-app-delta.vercel.app'], // Use your frontend URL(s)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies and credentials
  }

app.use(cors(corsOptions))
app.options('*', cors(corsOptions));

app.use(express.json())

const PORT =  process.env.PORT || 4000

const dbPath = path.join(__dirname, "jobbyAppDatabase.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(PORT, () => {
      console.log("Server Running at http://localhost:4000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);

  }
};
initializeDBAndServer();

//middleware Api 

const authenticateToken = (request, response, next) => {
  let jwtToken;
  const authHeader = request.headers["authorization"];
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];
  }
  if (jwtToken === undefined) {
    
    response.status(401).json({error_msg:"Invalid JWT Token"});
  } else {
    jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
      if (error) {
        response.status(400).json({error_msg:"Invalid JWT Token"});
      } else {
       
        request.payload=payload
        next();

      }
    });
  }
};

//Register Api
app.post("/register/", async (request, response) => {
    
  const {username,password}=request.body
  const id=uuidv4()
 
  const hashedPassword = await bcrypt.hash(password, 10);
  const selectUserQuery = `SELECT * FROM user WHERE username = ?`;
  const dbUser = await db.get(selectUserQuery, [username]);

  if (dbUser === undefined) {
    const createUserQuery = `
      INSERT INTO user (id, username, password) 
      VALUES (?, ?, ?)`;
    const dbResponse = await db.run(createUserQuery, [id, username, hashedPassword]);

    const newUserId = dbResponse.lastID;
   
    response.status(201).json({ message: `Created new user with ${newUserId}` });

   
  } else {
    response.status(400).json({ error_msg: "User already exists" });
  }
}); 

//Login Api
app.post("/login", async (request, response) => {
const { username, password } = request.body;
const selectUserQuery = `SELECT * FROM user WHERE username = ?`;
  const dbUser = await db.get(selectUserQuery, [username]);

if (dbUser === undefined) {
  response.status(400).json({ error_msg: "invalid user" });
} else {
  const {id}=dbUser 

  const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
  if (isPasswordMatched === true) {
    const payload = {
      username:username,
      userId:id,
     };
    
    const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
    response.status(201).json({ jwt_token:jwtToken });
  } else {
    
    response.status(400).json({error_msg:"Invalid Password"});
  }
}
});

//filtering jobs

app.get("/jobs", authenticateToken, async (request, response) => {
  const { search_input, employment_type, minimum_package } = request.query;
  
  // If employment_type is undefined or empty, handle it as an empty array
  const employment_type_list = employment_type ? employment_type.split(',') : [];

  try {
    // Dynamically create placeholders for the IN clause only if employment_type_list is not empty
    let dbQuery = `
      SELECT * FROM jobs 
      WHERE title LIKE ? 
      AND package_per_annum >= ?`;

    const queryParams = [`%${search_input}%`, minimum_package];

    // If employment_type_list has values, add the IN clause
    if (employment_type_list.length > 0) {
      const placeholders = employment_type_list.map(() => '?').join(',');
      dbQuery += ` AND employment_type IN (${placeholders})`;
      queryParams.push(...employment_type_list);
    }

    // Execute the query with dynamic queryParams
    const result = await db.all(dbQuery, queryParams);

    response.status(200).json({ jobs: result });

  } catch (e) {
    console.log(e);
    response.status(400).json({ error_msg: "An Error occurred!" });
  }
});


//getting particular job details

app.get("/job/:jobId",authenticateToken,async(request,response)=>{
  const {jobId}=request.params 
  try{

    const dbQuery=`
    SELECT * FROM jobs where id = ?`
    const result=await db.all(dbQuery ,[jobId ])

    response.status(201).json({job_details:result})

  }catch(e){
    response.status(400).json({error_msg:"An Error occurred !"})
  }


})

