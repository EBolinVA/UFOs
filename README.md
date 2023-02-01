# UFOs: The Truth is Out There
This webpage is a result of building a table using data stored in a JavaScript array, creating filters to make this table fully dynamic, reacting to user input, and then placing the table into an HTML file for easy viewing. The webpage is customized using Bootstrap, and the table is equipped with several fully functional filters that will allow users to interact with visualizations.

## Overview of Project: 
UFO sighting data is collected across the country. This data is currently stored in a JavaScript array, which looks like a very long Python dictionary, except for being encased in square brackets. Each event of a UFO sighting has several key:value pairs containing information about the sighting date, location, shape and any description. In order to study this data, it will be converted into a table that is filterable by customers wanting to search the UFO sighting information. This dynamic and user-friendly table is accessible by a custom webpage built for this project.

We begin with a data file holding a JavaScript array. Each record has seven key:value pairs.
![image of JavaScript array](https://github.com/EBolinVA/UFOs/blob/main/static/images/data_file.png)

## Results: 

The user of the UFO Sighting webpage will open the page and see a table with 7 columns across the top and approximately 100 rows of data.

On the left-hand side of the page, the user will see a Filter Search section with fields for five searchable criteria. 

The user will enter their search criteria, for example, 'light' sightings in California. They will enter "ca" in the field under "Enter A State", and "light" in the field under "Enter a Shape".

Then, the user will click the "Filter Table" button and the table will return eleven records where a light shaped sighting was observed in California.

![image of table being filtered by state and shape](https://github.com/EBolinVA/UFOs/blob/main/static/images/filter_table.png)

## Summary: 
This dynamic JavaScript table which filters UFO sightings based on user criteria is a good start to providing useful information to UFO enthusiasts across the country. 

### One Drawback and Two Recommended Improvements
+ Currently, the table filter input fields only accept exact values. No results will be returned in the following examples:
    - Input a date outside the range of our data
    - Input "El Cajon" instead of "el cajon" in the "Enter a City" field
    - Input "CA" instead of "ca" in the "Enter a State" field
    - Input "US" instead of "us" in the "Enter a Country" field
    - Input "Circle" or "CIRCLE" in the "Enter a Shape" field

+ The first recommended improvement is to make the user input case insensitive by using the .toLowerCase() function
+ As an alternative, the second improvement would be to add a drop-down box for user input so that they are choosing only  the available values in the table. For example, a drop-down in the "Enter a Shape" field would display only choices found in the table and would prevent a user from entering a shape not found in the original dataset.
