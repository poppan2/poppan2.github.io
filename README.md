# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description/Create README file/ Wireframes / Priority Matrix / Timeline  | Complete
|Day 2| MVP & Bug Fixes | Complete
|Day 3| MVP & Bug Fixes  | Complete
|Day 4| Post MVP & Bug Fixes| Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

The purpose of this project is to build my own personal portfolio website to showcase my understanding of HTML/CSS/JavaScript/JQuery.


## Wireframes


The Following are the Mobile and Desktop wireframes generated using the "[Figma](https://www.figma.com/)" wireframing. 
- [Mobile](https://imgur.com/KhGG0Lu)
- [Desktop](https://imgur.com/ZilJfjm)


## Time/Priority Matrix 

[Link](https://res.cloudinary.com/dt5sp9nsn/image/upload/v1633729974/Project1-portfolio/Time_Priority_Matrix_gvlwax.jpg)


#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | M | 0.5hr | 0.5hr |
| HTML/CSS Page Layout | H | 3hr | 3hr |
| Regular Nav | H | 1hr | 1.5hr |  
| Nav Bar Fixes | H | 2hr | 3hr |
| Other sections and flex| M | 3hr | 4hr|
| Animation | H | 3hrs|  3hr | 
| Responsive | H | 3hr | 3hr | 
| Social Media Icons/Images | M | 1hr | 1 hr |
| Total | H | 16hrs| 19hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Add Animation/Video in Background | L | 3hr | 1hr |
| Total | H | 3hrs| 1hrs |

## Additional Libraries
Water Ripple Effect (CDN below)
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js" integrity="sha512-zuZ5wVszlsRbRF/vwXD0QS/tHzBYHFzCD/BT0lI3yrWhNZFWDkkF3KPEY//WTanqxwPdZkskQ+xZo0rnfHBc5A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

Font Awesome CSS library
https://use.fontawesome.com/releases/v5.7.0/css/all.css

## Code Snippet

Nothing ATM

```
.project-photo:hover{
        box-shadow: 12px 12px 2px 1px rgba(41, 47, 57, 0.2);
        animation-duration: 1.5s;
        animation-name: popping;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes popping {
        from {
            margin-bottom: 0%;
            margin-left: 0%;
            width: 250px;
            height: 125px;
        }
        
        to{
            margin-bottom: 10%;
            margin-left: 10%;
            width: 300px;
            height: 175px;
        }
    }
```

## Issues and Resolutions
 Nothing ATM

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
