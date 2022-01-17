---
layout: post
title: "Unimelb Love Letters"
tag: project
image: "/images/umll.png"
excerpt: "A progression of how I got bored of copying and pasting posts, so I decided to write scripts to do my job for me"
skills: ["Google Scripts", "Javascript", "Google Sheets", "Facebook API", "Google API"]
---

[**Unimelb Love Letters Page**](https://www.facebook.com/UoMLoveLetters)  
The automation of tedious processes, going from copy and paste to scripts that handle all the formatting, spam filtering, posting and scheduling every night. 

### About 
While I do have many interesting stories of being a admin of this page, writing code for the everyday functioning of the page was one of the reasons I was really interested in computing and other technological issues such as ethics, particularly regarding the impact on social media on our lives.   
<br>
From a technological point of view, I used this page to test out a lot of the skills I developed over my studies at university. Essentially I started with only knowledge of excel formulas, which gave the submission and posting statistics for the page (due to personal curiousity). As I progress through uni, I learnt more programming concepts, from for loops and if statements that brought me a spam filter, reading documenation and object oriented concepts which brought a formatter, and finally the knowledge of APIs which finalised the scheduler. 
<br>

### Scheduler
In my final semester (after [cPortfolio](/2020/10/30/cportfolio.html)) I learnt about how to use APIs, which was the final piece of knowledge in ensuring the process was completely automated. It mainly involved finding the URL which allowed for scheduling posts, and then working backwards to find all the necessary tokens and information to submit the information to Facebook via that API. <br><br>

The API used can be found in the [documentation](https://developers.facebook.com/docs/pages/publishing/) created by Facebook. The only modification I had to make was sending the `message` as `POST` data instead of a query parameter, as most of our submissions exceeded the character limit. Submitting it as `POST` data instead, allowed for long submissions to be posted consistently. The other parameters required are `ACCESS_TOKENS` which are also explainted in the documentation. Previously, I had to update the token every 3 months as it would expire, however I later found that using a long-term User token with page access permissions does not expire. As a result, I use that token in my script to get a page access token everytime it is run, which ensures that I do not need to constantly update this script unless permissions are revoked. <br><br>

For the posting side of the API, we already had the formatted post from using our Formatter. The only other parameter required was the posting time. This I created by using the previous data taken over two years to get a rough estimate of the ideal posting interval when we receive X submissions. For example, if we recived 100 submission a day, and an approval rate of 50%, then we would post every 15 minutes, which would have around 50 posts per day. This ensures that our delay in posting is not too long (usually a few days is ideal) and we have some buffer time to be able to check our submissions. Using these numbers, the script checks the number of submissions we received over previous days, determines an interval, then schedules after the next queued post, or at 8am if there are no posts in the queue.    

### Formatter
In my third year (after switching to a computing major), the class that contributed the knowledge I needed was my object orientated course. The key concepts I needed was basically the knowledge that documentation exists and how to read it, as well as learning to use the relevant methods that Google sheets provided. Additionally, as I had only programmed using `C` before, Java was a lot closer to Javascript and provided a lot of help in learning the language beyond the equivalent `if`, `for` statements. 
<br><br>
The main purpose of the formatter was to format (surprise!) submissions. Our usual submissions come in the format of a Google form with various fields, such as 'course' and 'body'. The posts that get published have a number '#12345' that increments, include the course and body and occasionally have messages such as 'Content Warning' that appears before the post or 'Admin Message' which appears after. The way the formatter works, is that it runs every day on the new submissions we receive, checks if it has been approved and if it has, it will add a number, combined the course and body fields with new lines, then checks various commands for additional formats. It will then mark the submission as formatted, then output the formatted version onto a clean spreadsheet. This was initially copied and pasted to Facebook manually, but later automated when joined with the Scheduler script. 

### Spam Filter    
In the beginning of my second year, I took an introductory course into programming, albiet from an engineers perspective. This course taught me the basics of coding, mainly focusing on basic concepts, such as a variable, loops, logic statements. While these fundamentals were basic, they provided me enough knowledge and curiosity to test out my skills and write a very simplistic spam filter. The function of this was basically you write 'spam' or a similar keyword next to a submission, and it would move it into a spam inbox. As you can guess, it was very simple, but borne out of necessity as we had a few spammers who liked submitting to the page. With a bit more knowledge of Google sheets in later years, I was also able to automate this process so that repeated posts or keywords can be automatically marked as spam, however for the quality of submission on the page, the main spam detection is still manual. As I am currently undertaking an masters in AI, I would like to explore the concept of automatically being able to remove spam posts using natural language processing.

### Statistics 
The first year of my undergraduate degree, I had 0 technical knowledge. All I had was excel, which allowed me to set up some simple formulas which counted how many submissions we received per day, and how many submissions we posted. The fundamental set up of the formulas have not changed, however most changes that have been made over the years is display (colour coding and graphical) and efficiency. 
<br><br>
For example: 
<br><br>
```ArrayFormula(COUNTIF(query(split('Form Responses 1'!A:A," "),"Select Col1"), CONCAT(D3, " December 2021")))```
<br><br>

The current formula only requires one formula to be created for each month as it can be dragged, and the month and year parameters to be updated when necessary. Previously, I would have to copy and paste the formula for each day, as it was not draggable and I needed to update the days manually.
<br><br>

#### Graphs 

|![](/images/umll/submissions.png){:class="img-responsive" width="400px"} ||![emptyspace](/images/umll/posting.png){:class="img-responsive" width="400px"} | 
|*Total Submissions*||*Average Posts per Day*|

### Final 

The final result is that all of the components are combined to schedule posts for the page, at variable intervals dependent on how many submissions we received recently. It has been really helpful in reducing the amount of work that the team has, and allowing us to redirect our time into engaging with our community, such as creating a club. While I do have a interest in developing an AI to filter submissions in the future, it would require a lot more nuance in how it is used, to ensure that it is not unfairly approving or rejecting posts from user biases. 
<br><br>
Posts on our page:<br><br>
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUoMLoveLetters&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="800px" height="300px" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
