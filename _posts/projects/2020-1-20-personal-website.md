---
layout: post
title: "Personal Website"
tag: project
image: "/images/matsuda.jpg"
excerpt: "Fixing all the bad CSS I wrote in cPortfolio before attempting to build another website"
---

# Personal Website 

[**Github**](https://github.com/vyxnn/vyxnn.github.io)  

My goals for this was mainly to improve my CSS skills from the [cPortfolio](/2020/10/30/cportfolio.html) Project. Also had the added bonus of being able to design something new, learning more html, markdown and how to create a static website in preparation for my next project. This post is mainly for recording my own progress.

### Zooming 

The main issue with the CSS in cPortfolio *(the first time I ever used CSS)* was not having a div containing all the elements I wanted, and using absolute positioning for each element. As a result, whenever I zoomed out all the elements would go to the left and it resulted in a very strange looking website. Using Facebook as a reference, I decided that for this website, when zooming out I wanted all the contents of the page to still be centered. This was done by creating a containing ```<div> ``` with a max width and containing every other element inside that. It was a very simple fix that stopped unwanted behaviour such as expanding navigation/side bars. The main takeaway for this was that ```<div> ``` solves everything. 

### Stacking variable height ```<div> ``` in columns

This was a problem that I came across while designing the [Project](/projects) page. As I like having pictures in my posts, I had a lot of different sized ```<div> ``` elements. When stacking them using ```float:left```, I ended up with a lot of empty space depending on the elements as though you can have different sized elements, the new row will start based on the max height of the previous row. I had a few responses to this issue, the first being looking it up on stack exchange. Unfortunately for me a lot of the responses involved jQuery or some form of javascript, while others suggested to use ```float:left``` and ```float:right``` for a two columns. Another suggestion that came up was to use a [flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) container, so that ```align-items:flex-start``` could be used. Unfortunately after rearranging all my containers, it just gave me the same result as previously using ```float:left```. Eventually I gave up on finding a pure CSS solution and decided to use [Masonry](https://masonry.desandro.com/), which required very little set-up and ended up being a very simple solution to my problem. All I had to do was define the post containers and adjust the size values until I got the design I wanted. It was a bit unfortunate that my hours of trying to improve my CSS skills ended up being solved with a ```<html>``` package, but I guess that knowing the limitations of CSS could be considered an improvement. 

|![](/images/emptyspacediv.png){:class="img-responsive" width="425px"} ||![emptyspace](/images/goodspacediv.png){:class="img-responsive" width="425px"} | 
|*Default behaviour*||*Intended behaviour*|

### Learning how to use Masonry and imagesLoaded

Although the above problem was solved easily using ```<html>```, I had an issue with the Masonry grid being loaded before the pictures were completeley loaded, resulting in overlapping elements. The only CSS solution I could find was to set the minimum height of a post ```<div>``` however it still resulted in overlapping issues for the longer posts, as well as adding a lot of white space around smaller posts. The solution was to use the 'imagesLoaded' package which would wait for the images to load before creating a Masonry grid. Overall it was simple to use, however it did require learning jQuery and adding javascript to my website, which was not something I intended to use for a static website. The most helpful knowledge in jQuery would be knowing that ```$``` retrieves an element and the ```$(document).ready(function(){})``` waits for the entire page to load before running a function. 

### Learning how to use Markdown
*ft. A lot of help from this [source](https://www.markdownguide.org/basic-syntax/).* 

Initially I wanted to go with ```<html>``` posts instead of markdown, as I don't really like the concept of having the same design for each page, and ```<html>``` would give me the freedom to design every page as I want it. Unfortunately that is incredibly time consuming, and Jekyll makes markdown very easy to use regardless so I may as well use it. Admittedly after the pain of using latex to write all my notes last year, markdown is comparatively much easier to use, and I realised I could still incoporate ```<html>``` elements if necessary. 

Aside from all the syntax of markdown, there are a few unusual points and workarounds I noticed when using it. 
- **Layout of pictures**   
    Markdown doesn't really have a way to caption images, and ```<html>``` is limited in the placement of the picture. When you want to place and caption multiple pictures in a row, using a markdown table is a very easy way to display it. CSS can also be used to adjust the default table in markdown. 

- **Nesting markdown**  
    Most of the time the order of the syntax doesn't matter if it is applicable to the whole word, but the combination of Lists and Text Emphasis only works when list syntax (\-) is before the text emphasis (\*)

 - **Requires Spacing**  
    - Headings (\#)
    - Lists (\-)
    - New lines (require two empty spaces after a line)