# README
![alt text](https://github.com/DGFF-Harmonyhack/Frontend-React-Native/blob/master/logo.png "Record Me")

# Demo
<a href="https://www.youtube.com/watch?v=mZlK-NMBzeE&feature=youtu.be" target="_blank"><img src="https://i3.ytimg.com/vi/mZlK-NMBzeE/hqdefault.jpg" alt="Demo Video" width="560" height="315" border="10" /></a>

# RECORD ME 
** To get it started** 
1. Get [the backend](https://github.com/DGFF-Harmonyhack/backend-ruby-rails "the backend").
2. Npm install.   
    - You may need [expo](https://expo.io/ "expo")
3. Npm start. 
4. You can open a emulated OS in the browser. Otherwise you can either download an Android/iOS emulator or the Expo app in the appStore/playStore and scan the QR code shown in the broswer popup. 

## Inspiration
The story of our group starts in **Brooklyn**, where the four of us met each other for the first time just before the quarantine. As time passed we saw a movement of fighting injustice and our neighborhood took to the streets. We kept in touch and decided to tackle a project based on our personal and local experience. 

As programmers, we saw a lot of new innovation in the space of recording evidence. Siri commands and panic buttons became a hot commodity. Even the ACLU created an evidence recording app that sends the footage to their offices. But a lot of the new solutions focus on making the things we would normally want to do more _convenient_ or simply just a bit _faster_. 

We believe modern technology can do better than that! Our lives revolve around gathering data at a greater scale than at the personal scale. The future is about leveraging _more_ data and _more_ access to make _more_ progress as a society. We believe in the goodness of people, and their willingness to help others. So our app was focused on giving would-be good Samaritans the access to data they need in order to help them help others. 

## What it does
Our application is a sort of panic button. When encountering a situation that may require evidence, it's hardly the best time for you, the person in need, to take out your camera and start recording. In recent times we've seen how footage from altercations can change the outcome of cases and help get justice for those who need it the most. 

1. **The panic button** is the main feature. Using GPS data, it will notify people in the area with the app that you need help gathering evidence. If someone nearby sees the push notification and is nearby they can be of help just by recording what happens. 
2. **Following up** if you pressed the panic button, it will take you to a follow up screen so that you can let the people who obtained evidence for you know whether you need it or you are fine. 
3. **Communicating** for those who were nearby, they might have something to say or evidence to offer and they can respond to your request and follow up after the event. 
4. **Access** to all the data about the incidents and how they were resolved is also available through the app and you can see events that happened in your vicinity. 

## How we built it
For the backend, we used Ruby on Rails to serve as an API for our data models. Following RESTful practices we have created a relational database and an API that responds to all of our requests. 
For the frontend, we used React-Native with the Expo platform. We used expo-notifications, react-native-maps, react-navigation, redux, thunk, react-native-community's picker and async-storage to supplement the basic Expo package. 

## Challenges we ran into
We had to think about what could go wrong. Legal issues are real, police harassment is also real so we had to make our app without usernames or logins. It is anonymous so that people can feel protected while they try to help others. 

## Accomplishments that we're proud of
Our group has an age range of over a decade and we all had different family and living circumstances during the quarantine. Despite all the challenges of scheduling and struggling with our own situations we got together and kept communicating to finish our project. 

## What we learned
The more we talked about our project with our peers, the more interest we heard and we got a lot of advice as far as making the project grow in the future. We learned most of all that people wanted to get involved in the movement, that change needs to happen and people want to help,. 

## What's next for Record Me 
Integration with other apps, public cctv access and simply links to legal resources were areas that can help our app. Other features we would like to expand on is Google/Siri/Bixby command integration as well. 

