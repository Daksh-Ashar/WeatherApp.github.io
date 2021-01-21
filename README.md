**Desktop Output:**

![Weather App Documentation 001](https://user-images.githubusercontent.com/44469751/105385657-99e8e380-5c39-11eb-95b1-4f86cb413a7f.png)



**Mobile Output:**

![Weather App Documentation 002](https://user-images.githubusercontent.com/44469751/105385725-aa995980-5c39-11eb-8bed-1e8065640f1c.png)





**Learnings From the Project:**

**Fetch Api**

**CORS**

**DOM Manipulation:**

It can be said that it is similar to a scoreboard that shows some score of the team and throughout the game keeps on updating and showing the score.  For showing the updated score we have already fixed the field of the section defined. In which we display it.

Now let’s see how the above example relates to our project. As we said we have already defined a section to show the score of the player or team. Similarly with the help of HTML we create the sections where we display our data. Which in the case of Project are : City Name, Temperature, Icon, Description of weather. 

Once the user enters the city name in the Input Field with the help of JS we capture the value of the city entered by the user. 

There are various ways to get the value:

1] We need to give some id or class to our input field in HTML.

2] Using that same id or class we get the value that user has submitted.

For example : let’s consider we created html input tag with id “CityName”

So Now how will we get it?

Html Element

<input type=”text” placeholder=”Enter City Name..” />

Js  code to get that element:

` `let   User\_ City\_Name = document.getElementById(“CityName”);

Similarly there are various ways to get element by Class,Tag name,querySelector,etc








