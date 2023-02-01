# UFOs: The Truth is Out There
This webpage is a result of building a table using data stored in a JavaScript array, creating filters to make this table fully dynamic, reacting to user input, and then placing the table into an HTML file for easy viewing. The webpage is customized using Bootstrap, and the table is equipped with several fully functional filters that will allow users to interact with visualizations.

## Overview of Project: 
UFO sighting data is collected across the country. This data is currently stored in a JavaScript array, which looks like a very long Python dictionary, except for being encased in square brackets. Each event of a UFO sighting has several key:value pairs containing information about the sighting date, location, shape and any description. In order to study this data, it will be converted into a table that is filterable by customers wanting to search the UFO sighting information. This dynamic and user-friendly table is accessible by a custom webpage built for this project.

We begin with a data file holding a JavaScript array. Each record has seven key:value pairs.
![image of JavaScript array]()

## Results: 

The user of the UFO Sighting webpage will open the page and see a table with 7 columns across the top and approximately 100 rows of data.

On the left-hand side of the page, the user will see a Filter Search section with fields for five searchable criteria. 

The user will enter their search criteria, for example, 'light' sightings in California. They will enter "ca" in the field under "Enter A State", and "light" in the field under "Enter a Shape".

Then, the user will click the "Filter Table" button and the table will return eleven records where a light shaped sighting was observed in California.

![image of table being filtered by state and shape](https://github.com/EBolinVA/UFOs/blob/main/static/images/filter_table.png)

## Summary: 
In a summary statement, describe one drawback of this new design and two recommendations for further development.