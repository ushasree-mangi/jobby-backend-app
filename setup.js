const sqlite3 = require('sqlite3').verbose();

// Sample JSON data (you can also load it from a file if needed)
const data = {
    
        "jobs": [
            {
                "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
                "title": "Devops Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Delhi",
                "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
                "employment_type": "Internship",
                "package_per_annum": "10 LPA"
            },
            {
                "id": "d6019453-f864-4a2f-8230-6a9642a59466",
                "title": "Backend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Bangalore",
                "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
                "employment_type": "Full Time",
                "package_per_annum": "21 LPA"
            },
            {
                "id": "1e47d355-4000-4c27-a17a-ae55dd6df27d",
                "title": "Fullstack Developer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Hyderabad",
                "job_description": "Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on millions, if not billions, of users. Google engineers are changing the world one technological achievement after another.",
                "employment_type": "Internship",
                "package_per_annum": "10 LPA"
            },
            {
                "id": "10c539a8-97f3-4277-90c1-b83a32c11ba1",
                "title": "Data Scientist",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Chennai",
                "job_description": "Facebooks’s Data Science team leverages big data to empower business decisions. The Data Science team at Facebook works in close partnership with the trusted engineering, content moderator, and product teams to identify opportunities to develop and enhance Facebook user experiences. ",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "ad104b3b-e2a4-42f0-b78b-2b4b4699cffb",
                "title": "Data Scientist",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Hyderabad",
                "job_description": "As a Data Scientist, you will evaluate and improve Google's products. You'll collaborate with a multi-disciplinary team of Engineers and Analysts on a wide range of problems, bringing analytical rigor and statistical methods to the challenges of measuring quality, improving consumer products, and understanding the behavior of end-users.",
                "employment_type": "Internship",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "7a17c601-9ecf-4a4f-b289-afa808ab1710",
                "title": "Devops Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Mumbai",
                "job_description": "As a DevOps Engineer, you will play a key role in bringing important software to market and into widespread use. In this role, you will integrate a variety of leading-edge technology stacks securely, and ensure the availability and safety of the production systems at scale.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "54462d29-6d8c-4b27-9a59-e0fbdbd4de0f",
                "title": "Devops Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png",
                "location": "Mumbai",
                "job_description": "As DevOps Developer, you are responsible for implementing next-generation CI/CD systems and automation solutions. If you thrive in a dynamic, collaborative workplace, we provide an environment where you will be challenged and inspired every single day. And if you relish the freedom to bring creative, thoughtful solutions to the table, there's no limit to what you can do.",
                "employment_type": "Full Time",
                "package_per_annum": "17 LPA"
            },
            {
                "id": "5ecd5a9b-4805-4924-8f26-551302326b27",
                "title": "ML Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Bangalore",
                "job_description": "We’re looking for a scientist who can define the next generation of FMA ML-based ranking, pricing, and econometric models to further improve customer experience and customer trust on Amazon. This scientist will work with tech and business teams within and outside of FMA to think outside the box and design innovative solutions.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Delhi",
                "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
                "employment_type": "Freelance",
                "package_per_annum": "19 LPA"
            },
            {
                "id": "62b19914-67fc-49aa-b10e-35b2e69fbedd",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Mumbai",
                "job_description": "Are you interested in building products used by more than a billion people? Do you like shipping codes at a rapid pace? Facebook is seeking an experienced Front End Engineer that is passionate about building mobile and desktop web applications. Together, we can help people build stronger communities.",
                "employment_type": "Freelance",
                "package_per_annum": "28 LPA"
            },
            {
                "id": "5a75b254-a812-4c2d-ae26-ec9e04234bf7",
                "title": "Devops Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Bangalore",
                "job_description": "The Security Operations team is seeking a new team member to assist with a large-scale Data Center Migration and application integration. This team supports customer service and several corporate functions (HR/Legal/Compliance), primarily with PayPal’s global partners that use Citrix and third-party platforms. ",
                "employment_type": "Part Time",
                "package_per_annum": "38 LPA"
            },
            {
                "id": "19090757-3dee-4b2c-a1f0-f17f13993328",
                "title": "Devops Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Chennai",
                "job_description": "As a DevOps Engineer, you will play a key role in bringing important software to market and into widespread use. In this role, you will integrate a variety of leading-edge technology stacks securely, and ensure the availability and safety of the production systems at scale.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "00903187-11e2-4e2e-bbda-7154debce688",
                "title": "Fullstack Developer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Chennai",
                "job_description": "We are building a NEW carrier facing product to replace a multitude of manual processes and tools. Our mission is to hide the technical complexity behind simple user experiences that delight our customers. Our journey has just started and the possibilities are immense.",
                "employment_type": "Full Time",
                "package_per_annum": "19 LPA"
            },
            {
                "id": "0f080434-4287-4f49-9107-88227e0ddd75",
                "title": "ML Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Chennai",
                "job_description": "As an ML Engineer, you will be evaluating existing machine learning (ML) processes, performing statistical analysis to resolve data set problems, and enhancing the accuracy of our AI software's predictive automation capabilities. To ensure success as a machine learning engineer, you should demonstrate solid data science knowledge and experience in a related ML role, transforming data science prototypes and applying appropriate ML algorithms and tools.",
                "employment_type": "Full Time",
                "package_per_annum": "25 LPA"
            },
            {
                "id": "811c3f5e-4688-4781-90be-87c4b98b39a4",
                "title": "ML Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Chennai",
                "job_description": "As an ML Engineer, you will get a chance to choose from a myriad of projects: building signals and models for detecting bad users and rejecting fraudulent and abusive contributions, building tools that allow Google operators to efficiently provide labels for model training and the infrastructure on which all of these run. ",
                "employment_type": "Internship",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "f7577c47-643d-41d0-8e59-e6129bb9ff21",
                "title": "Backend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Mumbai",
                "job_description": "We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning. Knowledge of Machine Learning and other Predictive Modeling techniques will be added strength.",
                "employment_type": "Freelance",
                "package_per_annum": "45 LPA"
            },
            {
                "id": "8d86313e-3240-4521-b078-8600edcaf05c",
                "title": "Fullstack Developer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png",
                "location": "Chennai",
                "job_description": "Swiggy's StoreFront Engineering team helps customers enjoy personalized discovery and purchase experiences across multiple product lines. We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning.",
                "employment_type": "Full Time",
                "package_per_annum": "44 LPA"
            },
            {
                "id": "8e035e74-eed0-4df5-a075-be9e5e752a3f",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Delhi",
                "job_description": "Are you interested in building products used by more than a billion people? Do you like shipping codes at a rapid pace? Facebook is seeking an experienced Front End Engineer that is passionate about building mobile and desktop web applications. Together, we can help people build stronger communities.",
                "employment_type": "Part Time",
                "package_per_annum": "43 LPA"
            },
            {
                "id": "833ecdf5-769c-4756-98fa-c7ee08e5aef1",
                "title": "Frontend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Chennai",
                "job_description": "As a Frontend Engineer, you will be directly responsible for helping the evolution of enterprise design systems at Google. You will engineer solutions that create shareable web components to be used in enterprise products within the organization. You’ll support multiple different product areas.",
                "employment_type": "Part Time",
                "package_per_annum": "44 LPA"
            },
            {
                "id": "50c993aa-16ca-4947-8c11-5b9446b10591",
                "title": "Fullstack Developer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Bangalore",
                "job_description": "Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on millions, if not billions, of users. Google engineers are changing the world one technological achievement after another.",
                "employment_type": "Internship",
                "package_per_annum": "14 LPA"
            },
            {
                "id": "ad567c55-5f75-4764-af7c-eec0ff23eb7a",
                "title": "Data Scientist",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Chennai",
                "job_description": "Drive research and development in the areas of Customer Experience, Selection, Product Quality, Competitive Intelligence, etc. keeping business goals and product planning at the front. Deliver production-ready advanced statistical or machine learning-based solutions for high-impact complex problems.",
                "employment_type": "Full Time",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "6fc5663c-8302-481d-8887-75e519cfec16",
                "title": "Data Scientist",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Mumbai",
                "job_description": "Drive research and development in the areas of Customer Experience, Selection, Product Quality, Competitive Intelligence, etc. keeping business goals and product planning at the front. Deliver production-ready advanced statistical or machine learning-based solutions for high-impact complex problems.",
                "employment_type": "Freelance",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "def72c65-360f-493b-a2da-8734fa26c33d",
                "title": "Data Scientist",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Chennai",
                "job_description": "As a Data Scientist, you will evaluate and improve Google's products. You'll collaborate with a multi-disciplinary team of Engineers and Analysts on a wide range of problems, bringing analytical rigor and statistical methods to the challenges of measuring quality, improving consumer products, and understanding the behavior of end-users.",
                "employment_type": "Freelance",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "c5490daf-9274-4b1e-bce6-0dbda7b20c24",
                "title": "Data Scientist",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png",
                "location": "Delhi",
                "job_description": "The Marketplace Fulfilment Team is responsible for the entire post-order experience at Swiggy. The technology solutions built by the Marketplace Fulfilment Platform (MFP) Team are at the heart of Swiggy’s ability to deliver food to Customers. These systems power and affect the entire journey of a customer’s order.",
                "employment_type": "Part Time",
                "package_per_annum": "17 LPA"
            },
            {
                "id": "6410d250-2604-49d4-b5d3-917608aa1c89",
                "title": "Devops Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Chennai",
                "job_description": "As a DevOps Engineer, you will play a key role in bringing important software to market and into widespread use. In this role, you will integrate a variety of leading-edge technology stacks securely, and ensure the availability and safety of the production systems at scale.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "ca054446-09b0-4b8d-85ef-fd8565554ef0",
                "title": "Backend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Chennai",
                "job_description": "We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning. Knowledge of Machine Learning and other Predictive Modeling techniques will be added strength.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "a35adfc3-59c0-4608-b3b4-1834812387b8",
                "title": "Frontend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Hyderabad",
                "job_description": "You will be part of a new team building a large-scale tier-1 rendering platform that supports as the skeleton for all the payment pages to depend, host, and render on, in Amazon Pay. This new system will be utilized by thousands of customers every day. ",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "5d57689e-cb8f-47f5-8e18-9ce3bb6a894d",
                "title": "Devops Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Hyderabad",
                "job_description": "The Security Operations team is seeking a new team member to assist with a large-scale Data Center Migration and application integration. This team supports customer service and several corporate functions (HR/Legal/Compliance), primarily with PayPal’s global partners that use Citrix and third-party platforms.",
                "employment_type": "Part Time",
                "package_per_annum": "25 LPA"
            },
            {
                "id": "0ac78d8a-e323-48ed-ab2a-c77f3737c3dc",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Hyderabad",
                "job_description": "You will be part of a new team building a large-scale tier-1 rendering platform that supports as the skeleton for all the payment pages to depend, host, and render on, in Amazon Pay. This new system will be utilized by thousands of customers every day.",
                "employment_type": "Internship",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "1ad9b836-bfe6-4fe9-8ec5-7b3caeea9922",
                "title": "Data Scientist",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Bangalore",
                "job_description": "We are looking for a Data Scientist who will guide our businesses by pushing the boundaries of data science, machine learning, and modeling to solve complex problems in a fast-moving environment. Upon joining the team, our ideal candidate will build quantitative systems, path-breaking experiments, and models that will guide strategic decisions.",
                "employment_type": "Internship",
                "package_per_annum": "14 LPA"
            },
            {
                "id": "0bd0157c-a755-49ec-b2ea-575fee26ce3a",
                "title": "Devops Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Hyderabad",
                "job_description": "Amazon IN FBA, part of the Seller Fulfilment Technology (SFT) team, located in Bangalore, is looking for a strong automation/DevOps engineer. The vision and purpose of the FBA DevOps is to automate manual processes/tasks utilized by the FBA business & operations team. We strive to eliminate manual efforts and help scale programs to support business requirements.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "a838aa29-3420-434c-ab37-f7fceaf89221",
                "title": "Data Scientist",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Hyderabad",
                "job_description": "Drive research and development in the areas of Customer Experience, Selection, Product Quality, Competitive Intelligence, etc. keeping business goals and product planning at the front. Deliver production-ready advanced statistical or machine learning-based solutions for high-impact complex problems.",
                "employment_type": "Freelance",
                "package_per_annum": "25 LPA"
            },
            {
                "id": "bfc0d56f-15be-466e-b602-6fa28b4c158f",
                "title": "Backend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png",
                "location": "Bangalore",
                "job_description": "The Developer platform team enables Swiggy's engineers to build and run services in the cloud in a safe, simple, and reliable manner. We are a team of systems and software engineers who thrive to develop Platforms and services that make it easier for product teams to build and operate their services.",
                "employment_type": "Internship",
                "package_per_annum": "11 LPA"
            },
            {
                "id": "9dad7a98-8857-4f3e-9bce-e338b6e06258",
                "title": "Devops Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Delhi",
                "job_description": "Amazon IN FBA, part of the Seller Fulfilment Technology (SFT) team, located in Bangalore, is looking for a strong automation/DevOps engineer. The vision and purpose of the FBA DevOps is to automate manual processes/tasks utilized by the FBA business & operations team. We strive to eliminate manual efforts and help scale programs to support business requirements.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "32f85617-1f00-47c9-80a7-b20c04aadcf6",
                "title": "ML Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Mumbai",
                "job_description": "As a Machine Learning engineer at Zomato, you will be working on a number of interesting problems across a wide range of use cases, like restaurant recommendations, identifying and controlling spam/biased reviews, mining useful insights from reviews, classifying user photos, and even restaurant search ranking – things aimed at improving the customer experience and the product overall. As a key member of our engineering team, you will contribute to all aspects of the software life cycle design, implementation, testing, experimentation, and fixing any bugs you create. We’re looking for someone who is willing to dive deep, experiment and iterate rapidly, and get things done.",
                "employment_type": "Part Time",
                "package_per_annum": "24 LPA"
            },
            {
                "id": "3cc666e5-23a5-4981-ade2-61115f95ac0b",
                "title": "Frontend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Mumbai",
                "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
                "employment_type": "Part Time",
                "package_per_annum": "14 LPA"
            },
            {
                "id": "cbaa92a4-6d38-4e02-901d-12b62e9ca161",
                "title": "Backend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Chennai",
                "job_description": "At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.",
                "employment_type": "Full Time",
                "package_per_annum": "34 LPA"
            },
            {
                "id": "fd985d0b-0f0b-40a5-81c9-5c8989180a1e",
                "title": "ML Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Bangalore",
                "job_description": "As a Machine Learning engineer at Zomato, you will be working on a number of interesting problems across a wide range of use cases, like restaurant recommendations, identifying and controlling spam/biased reviews, mining useful insights from reviews, classifying user photos, and even restaurant search ranking – things aimed at improving the customer experience and the product overall. As a key member of our engineering team, you will contribute to all aspects of the software life cycle design, implementation, testing, experimentation, and fixing any bugs you create. We’re looking for someone who is willing to dive deep, experiment and iterate rapidly, and get things done.",
                "employment_type": "Part Time",
                "package_per_annum": "18 LPA"
            },
            {
                "id": "63e8b54a-2025-4272-b45e-54a39170dd03",
                "title": "Data Scientist",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Delhi",
                "job_description": "We are looking for a Data Scientist who will guide our businesses by pushing the boundaries of data science, machine learning, and modeling to solve complex problems in a fast-moving environment. Upon joining the team, our ideal candidate will build quantitative systems, path-breaking experiments, and models that will guide strategic decisions.",
                "employment_type": "Part Time",
                "package_per_annum": "22 LPA"
            },
            {
                "id": "96e1ddb6-930c-4ca4-a80e-998ce410c6cf",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Bangalore",
                "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
                "employment_type": "Freelance",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "9f877dc5-ba63-4230-81a3-895fcc7fb36f",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Chennai",
                "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
                "employment_type": "Internship",
                "package_per_annum": "11 LPA"
            },
            {
                "id": "d59175ab-21d9-4532-9ddb-15b3fb19d85a",
                "title": "Frontend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Delhi",
                "job_description": "You will be part of a new team building a large-scale tier-1 rendering platform that supports as the skeleton for all the payment pages to depend, host, and render on, in Amazon Pay. This new system will be utilized by thousands of customers every day.",
                "employment_type": "Internship",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "729c08c1-109d-4622-946b-a84762c0aad8",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Chennai",
                "job_description": "We are looking for a passionate, hands-on engineer to join the Engineering team. Work closely with designers to implement versatile front-end solutions while embracing emerging standards and pushing the limits of what a browser can do. You will be responsible for building next-generation web applications which are efficient and reusable.",
                "employment_type": "Internship",
                "package_per_annum": "14 LPA"
            },
            {
                "id": "96845adc-45dd-4235-bdaf-2b8345392ea6",
                "title": "Data Scientist",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Delhi",
                "job_description": "Data Scientists at Netflix are consultants who partner with our Content, Marketing, and Product teams. We help them tell incredible stories, develop world-class campaigns, and optimize the experience of using Netflix. You will work closely with the teams to understand their insights needs; then build and deliver best-in-class research to address them.",
                "employment_type": "Full Time",
                "package_per_annum": "12 LPA"
            },
            {
                "id": "7d8a81df-fcaa-4cca-916d-75968b599e42",
                "title": "Data Scientist",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Mumbai",
                "job_description": "Data Scientists at Netflix are consultants who partner with our Content, Marketing, and Product teams. We help them tell incredible stories, develop world-class campaigns, and optimize the experience of using Netflix. You will work closely with the teams to understand their insights needs; then build and deliver best-in-class research to address them.",
                "employment_type": "Internship",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "e5c175d7-9710-4971-b207-24b9967fc374",
                "title": "ML Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Chennai",
                "job_description": "As a Machine Learning engineer at Zomato, you will be working on a number of interesting problems across a wide range of use cases, like restaurant recommendations, identifying and controlling spam/biased reviews, mining useful insights from reviews, classifying user photos, and even restaurant search ranking – things aimed at improving the customer experience and the product overall. As a key member of our engineering team, you will contribute to all aspects of the software life cycle design, implementation, testing, experimentation, and fixing any bugs you create. We’re looking for someone who is willing to dive deep, experiment and iterate rapidly, and get things done.",
                "employment_type": "Internship",
                "package_per_annum": "14 LPA"
            },
            {
                "id": "ededc9c4-f0b6-4044-b1a2-7a1c6f830064",
                "title": "ML Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Hyderabad",
                "job_description": "As an ML Engineer, you have to develop highly scalable classifiers and tools leveraging machine learning, data regression, and rules-based models  and you have to suggest, collect and synthesize requirements and create an effective feature roadmap and adapt standard machine learning methods to best exploit modern parallel environments (e.g. distributed clusters, multicore SMP, and GPU)",
                "employment_type": "Full Time",
                "package_per_annum": "25 LPA"
            },
            {
                "id": "01ff7185-fef9-4e87-8f15-9d6b6a9b4dcd",
                "title": "ML Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png",
                "location": "Bangalore",
                "job_description": "As an ML Engineer, you serve as the bridge between the data scientists and software engineers in product and platform teams. Build, enhance and maintain tooling, capabilities, and processes to speed up and streamline the data science lifecycle. Enable efficient deployment, monitoring, and debugging of production ML models. Work with the data science team to enable robust decision-making in terms of thinking about scale, latency, throughput, and compute cost requirements and contribute to the development of data products and services.",
                "employment_type": "Full Time",
                "package_per_annum": "27 LPA"
            },
            {
                "id": "dd9b8fba-39ae-4000-ad3f-b276e5c6818c",
                "title": "Backend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Chennai",
                "job_description": "Amazon.com Retail Systems team is looking for passionate, talented, and innovative software engineers for a new team focused on strengthening and inventing to build business insights, real-time processing and machine learning technologies to learn competitive data to aid in shopping decisions.",
                "employment_type": "Freelance",
                "package_per_annum": "48 LPA"
            },
            {
                "id": "df04eede-e579-4c8a-a21f-6131933037f2",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Bangalore",
                "job_description": "As a Frontend Engineer, you will be directly responsible for helping the evolution of enterprise design systems at Google. You will engineer solutions that create shareable web components to be used in enterprise products within the organization. You’ll support multiple different product areas.",
                "employment_type": "Internship",
                "package_per_annum": "10 LPA"
            },
            {
                "id": "96a6fa3f-1351-4a84-9bb3-b07ed53628d3",
                "title": "Backend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Hyderabad",
                "job_description": "Amazon.com Retail Systems team is looking for passionate, talented, and innovative software engineers for a new team focused on strengthening and inventing to build business insights, real-time processing and machine learning technologies to learn competitive data to aid in shopping decisions.",
                "employment_type": "Part Time",
                "package_per_annum": "48 LPA"
            },
            {
                "id": "dd8faa3b-1793-4409-bb93-78e7ae320a00",
                "title": "ML Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png",
                "location": "Chennai",
                "job_description": "As an ML Engineer, you will be evaluating existing machine learning (ML) processes, performing statistical analysis to resolve data set problems, and enhancing the accuracy of our AI software's predictive automation capabilities. To ensure success as a machine learning engineer, you should demonstrate solid data science knowledge and experience in a related ML role, transforming data science prototypes and applying appropriate ML algorithms and tools.",
                "employment_type": "Internship",
                "package_per_annum": "13 LPA"
            },
            {
                "id": "bb8c5910-279d-4c0a-aa80-7de1fc955bf6",
                "title": "Backend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
                "location": "Mumbai",
                "job_description": "Amazon.com Retail Systems team is looking for passionate, talented, and innovative software engineers for a new team focused on strengthening and inventing to build business insights, real-time processing and machine learning technologies to learn competitive data to aid in shopping decisions.",
                "employment_type": "Full Time",
                "package_per_annum": "47 LPA"
            },
            {
                "id": "4a10e138-de09-4dbd-b5f8-fc3063e4fbaa",
                "title": "Frontend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Mumbai",
                "job_description": "As a Frontend Engineer, you will be directly responsible for helping the evolution of enterprise design systems at Google. You will engineer solutions that create shareable web components to be used in enterprise products within the organization. You’ll support multiple different product areas.",
                "employment_type": "Internship",
                "package_per_annum": "14 LPA"
            },
            {
                "id": "30004a4f-0cc3-4ec9-9283-047fc4e60f24",
                "title": "Fullstack Developer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Chennai",
                "job_description": "We are looking for full-stack engineers who can help us reach our mission of empowering the next generation. Your duties will include development, writing code, and documenting functionality. You should be able to build high-quality, innovative, and fully performing software in compliance with coding standards and technical design. ",
                "employment_type": "Internship",
                "package_per_annum": "11 LPA"
            },
            {
                "id": "6bd26015-6df2-44c4-9e91-444bfbacdfd2",
                "title": "ML Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Delhi",
                "job_description": "As an ML Engineer, you will help define and execute the strategy and vision for enabling standard and novel experimentation practices at Netflix, including model training, ensembling and pipeline componentization, hyperparameter optimization, feature selection, and engineering, model reuse, model evaluation/validation, performance profiling, and optimization. You will build systems, infrastructure, and libraries to provide a robust and transparent platform for experimentation at scale, aiming to consistently deliver “member joy” to our platform customers. You will work within the larger Machine Learning Platform org and the applied ML research community at Netflix to set the forward-looking direction for nascent platform areas of investment like AutoML and ML Performance.",
                "employment_type": "Part Time",
                "package_per_annum": "26 LPA"
            },
            {
                "id": "df664d45-8b40-4504-897c-ed3fdb6b5b02",
                "title": "Backend Engineer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
                "location": "Mumbai",
                "job_description": "At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.",
                "employment_type": "Part Time",
                "package_per_annum": "29 LPA"
            },
            {
                "id": "bcaf3272-6ee7-46b8-9d1a-828d1a6ed085",
                "title": "Backend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/zomato-img.png",
                "location": "Hyderabad",
                "job_description": "We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning. Knowledge of Machine Learning and other Predictive Modeling techniques will be added strength.",
                "employment_type": "Full Time",
                "package_per_annum": "44 LPA"
            },
            {
                "id": "9060e3b1-05d2-4940-9bf8-54c0423eb490",
                "title": "Backend Engineer",
                "rating": 4,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
                "location": "Mumbai",
                "job_description": "As an engineer in the Personalisation team, you will build platforms and tools that deliver personalized recommendations to 500+ million users. You will work on building storage solutions and microservices that serve recommendations at a rate of few 100K requests per second. You will build tools that serve recommendations to our users in real-time.",
                "employment_type": "Freelance",
                "package_per_annum": "46 LPA"
            },
            {
                "id": "775924df-fb9a-4d0b-beef-7f8c17e78ee8",
                "title": "Fullstack Developer",
                "rating": 5,
                "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
                "location": "Bangalore",
                "job_description": "We are looking for full-stack engineers who can help us reach our mission of empowering the next generation. Your duties will include development, writing code, and documenting functionality. You should be able to build high-quality, innovative, and fully performing software in compliance with coding standards and technical design. ",
                "employment_type": "Part Time",
                "package_per_annum": "49 LPA"
            }
        ]
    
};

// Connect to SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('jobbyAppDatabase.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the SQLite database.');
});

// Create the jobs table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    rating INTEGER,
    company_logo_url TEXT,
    location TEXT,
    job_description TEXT,
    employment_type TEXT,
    package_per_annum TEXT
  )`,
  (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
      return;
    }

    // Begin transaction to insert data efficiently
    db.run('BEGIN TRANSACTION;', (err) => {
      if (err) {
        console.error('Error beginning transaction:', err.message);
        return;
      }

      // Prepare SQL statement for inserting data
      const insertStmt = db.prepare(
        `INSERT INTO jobs (id, title, rating, company_logo_url, location, job_description, employment_type, package_per_annum)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      );

      // Insert each job from the JSON data
      data.jobs.forEach((job) => {
        insertStmt.run(
          job.id,
          job.title,
          job.rating,
          job.company_logo_url,
          job.location,
          job.job_description,
          job.employment_type,
          job.package_per_annum,
          (err) => {
            if (err) {
              console.error('Error inserting job:', err.message);
            }
          }
        );
      });

      // Finalize statement and commit transaction
      insertStmt.finalize((err) => {
        if (err) {
          console.error('Error finalizing statement:', err.message);
          return;
        }

        db.run('COMMIT;', (err) => {
          if (err) {
            console.error('Error committing transaction:', err.message);
          } else {
            console.log('Jobs data inserted successfully!');
          }

          // Close the database connection
          db.close((err) => {
            if (err) {
              console.error('Error closing the database:', err.message);
            } else {
              console.log('Database connection closed.');
            }
          });
        });
      });
    });
  }
);
