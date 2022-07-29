---
layout: post
title: "cPortfolio"
tag: ['project', 'highlight']
excerpt: "Final Year Capstone Project (Learning how to develop a web application)"
skills: ["React", "Node.js", "Javascript", "MongoDB", "Redux", "Git", "SASS", "CSS", "HTML"]
github: "https://github.com/The-C-s/C-Portfolio"
website: "https://cportfolio.herokuapp.com/"
image: "/images/cportfolio-card.png/"
card_blurb: "
    <p>
        A web application developed as part of my final year capstone project. 
        As a team of 5 students, we created an e-Portfolio application based on our assigned client's requirements. 
    </p>
    <p>
        This was built using React, Node.js, MongoDB and Heroku. 
        This application allows users to showcase their work, and create customised pages that can be sent to an employer based on their requirements. 
        For example, a user may have different and overlapping content for a hospitality and office resume. 
        Using our application, they can select which content they want displayed, and send a unique link to different employers. 
    </p>
"
---  
*A web application developed for my final year capstone project at the University of Melbourne. This project involved working in a team of 5 students to develop an e-Portfolio application based off our assigned client's requirements. The intent of this application was to provide a customised platform for users to showcase their work, and allowed them to send a personalized page to prospective employers.* 

### Full Technology Stack 

**Database**: MongoDB   
**Backend Framework**: Express.js, Node.js      
**Frontend Framework**: React, Redux    

**Deployment**: Heroku   
**Web Design**: Figma     
**Project Documentation**: Confluence   
**File Storage**: Cloudinary    
**Collaboration**: Trello     
**API Documentation**: Stoplight   
**API Testing**: Postman   
**Deployment Pipeline**: Github Actions     
**Testing**: Jest    

### Process 
For this project, our team used an 'Agile' process. We had a weekly standup with our project supervisor, in addition to a weekly workshop. While most Agile teams would usually have a daily standup, due to university commitments and other constraints that wasn't possible, though we did have semi-frequent meetings twice a week just to check up on progress, work together and help each other out. We also had meetings with our clients (also students) every 3 weeks after our sprints, which helped to clarify their requirements and get feedback on the project. 

### Front End 
Our team was very lucky to have a member who had some experience with React, and helped set up the fundamentals of the project for us. In retrospect, I feel that React is useful for a web development framework, but also has a high learning curve. Over the period of time I spent learning React/Redux, I don't think I was fully able to grasp the concept of reducers and app states, and had to look over the existing code quite often to help. 

The main things I learnt from working on the frontend was React and managing frontend logic using Javascript. As I wrote some of the APIs, I learnt how to actually access them via the frontend, by passing in variables for `POST` requests, and how to retrieve information using `GET` requests. From there I learnt how to manipulate the data returned (in `JSON` format), and then used `HTML` and `javascript` to display them on the page. At first it was very difficult to get page elements where I wanted to on the page, but learning how to use `CSS` and the best practices really helped to improve the look of the website. 

### Back End 
The process of writing custom APIs was very tedious. Using a Mongo Database, Mongoose was used to help set it up and connect it to our backend. While that Mongoose did provide some basic framework to help save our data, a lot of custom functions had to be written to save 'objects' such as a post. For every object, we had to write which fields to save it to, clean the data ourselves and pass it through various forms of middleware to ensure that the user has the permissions to modify an object. While it was certainly good to learn how it works, using a Content Management System (CMS) or a framework which already has a semi-functioning save could have saved us a lot of time in development. Debugging via Postman was also helpful, though sometime we got very vague errors like CORS which were hard to solve as beginners. 

Additionally, we also had to set up image and file storage, as it could not be stored via Heroku (which rebuilds everytime the website needs to be up). We used Cloudinary to store images and PDFs, but again had to set up where it would be stored, relevant metadata or naming conventions, and how to serve a file. As the post function also doesn't encompass both files and data, we also had to incorporate new APIs to save various fields, such as a profile image, then ensure that it runs atomically. While it did take a lot of dedicated work to set up, once we managed to get everything working, it was relatively stable and didn't require high maintenance unlike the Frontend. 

### Design 
I only previously had very traditional art experience, and very little knowledge of web design and the capabilities of CSS, so while I was excited to design a website for the first time, I would definitely make a lot of changes with better knowledge of UI/UX concepts, and with the capabilities of CSS and HTML in mind. While CSS can theoretically create anything, some designs such as layering multiple `<div>` elements on top of each other are very impractical, and I would also need to consider how the user interacts with elements, and how different browsers may display content. The CSS in this project was not great, and used a lot of 'absolute' elements or pixels, which meant that different zooms, browsers and environment variables impacted the final look of the site. Another shortfall was that I used a lot of different colours for this project, whereas keeping it more simple may have improved the professional look of it.

There was also a cool sidebar that a member of my team created [here](https://cportfolio.herokuapp.com/shared/FEDWdPSG) that I really liked. On this page though, you can see some of the dodgy CSS coming into play. I would like to create a similar but larger scale page with a timeline for my projects or CV in the future. 

|![](/images/cportfolio/cportfolio.jpg){:class="img-responsive" width="95%"} |
| *The dashboard with posts* |  

<br> 

|![](/images/cportfolio/content.PNG){:class="img-responsive" width="95%"} |
| *Adding new content* | 

<br>

|![](/images/cportfolio/profile.PNG){:class="img-responsive" width="95%"} |
| *Profile page* | 

<br>

### Other 
Overall, this project was my first taste of web development, and actually one of the reasons I developed an interest in it. It opened up my eyes to how versatile technology is, and appealed to my sense of creativity. I really think its amazing how I can just design a website and be able to have it on the internet.

The project was also really fun to work on, though stressful at times. I had an amazing team, supervisor and coordinator for this subject, and aside from the practical skills of developing a web application, we also emulated what the process of developing software would be like in the industry. Looking back on this time, it really help set me up with skills for the future, and was the stepping stone in getting me involved in hackathons and an internship. I also really enjoyed all the time I dedicated to this subject, and how much fun I had with my team while developing this, especially the chaos at the end where we had to make sure everything was ready for a demo. The lectures were unconventional in the sense that we didn't officially learn any languages or frameworks, but had a lot of interesting speakers talking about industry life and discussing topics such as ethics (which I really love).
