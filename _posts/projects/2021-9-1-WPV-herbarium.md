---
layout: post
title: "Wilsons Promontory Virtual Herbarium"
tag: ['project', 'highlight']
image: "/images/wpvh.jpg"
excerpt: "The first website created during my internship at Science IT (The University of Melbourne)"
skills: ["Django", "MySQL", "Python"]
website: "https://wpvherbarium.science.unimelb.edu.au/"
image: "/images/herbarium-card.png"
card_blurb: "<p>A website that I developed as part of my student internship (Science IT, University of Melbourne). 
                    It allows researchers to update a database of plant species found in Wilson's Promontory, and provides a visual representation of this information for the public to access. 
                  </p>
                    <p>
                        It was developed using Django and MySQL, and based on client requirements from the School of Biosciences, 
                        and the recreation of functionality from the preceding Drupal application.  
                    </p>
"
---
*A website I built with another intern and my supervisor for the School of Biosciences at the University of Melbourne. It was my first time using Django and Python, as well as my first experience in being a software developer in a professional setting.*

### Learning Django
Learning Django turned out to be easier than learning React. While I haven't had much prior experience in python, it was relatively easy to pick up. The main benefit of using Django however, was all the features that came with it. Compared to React, where you had to write your own APIs, manage payloads between the client and database, and have complex methods of passing information through routes, Django had a lot of these in built into the framework. Additionally, it comes inbuilt with its own authentication system and ORM, which is very beginner friendly as it handles a lot of security issues. 

### Django Models 
Django models is what we used to manage a database. While usually it is used to create new tables in an SQL database, we had to use an existing database structure. Django provides a command that can read the existing structure and convert it into model code. This does however need to be checked, as sometimes they may read a field differently (eg. `char` instead of `int`), but these tend to be easy fixes. The setup of these models are very easy, and are in a class based format, where you define the name of the model class, and all the fields. The following example defines a table `Flora` with fields `name` and `genus`. Django automatically handles the creation of this table in an SQL database, as well as ids and foreign key connections. 

```
class Flora(models.Model): 
    name = models.CharField(max_length=30)
    genus = models.ForeignKey(Genus, on_delete=models.CASCADE)
```

### Django Queries 
Django queries utilises the model structure to perform what SQL query language does. Rather than writing out explicit `SELECT` statements, which may contain nested queries or complex joins, Django simplifies this. While the following examples are simple, it makes querying a database a lot easier. We can also access the fields as attributes in objects, or convert it to a list for easier handling. There may be some limitations in what Django filters can provide, so raw SQL may be required sometimes, but is not usually encouraged. 

```
flora_starts_with_b = Flora.objects.filter(name__startswith="B").order_by('name')
daisy = Flora.objects.get(name="Daisy")
```

### Django Forms 
Django forms also utilise the model structure to automatically create a form. If we want to add a new object to a database or update it, we can use very generic code to set up a form and save that data. Django also performs it's own form validation and cleaning as well, for example it will know if a required field is empty and provide a warning or error on submit. Things like email or password validation is also in-built into Django. Usually the example code is enough to get a working form, but we can add further customisation such as additional fields, custom form validation logic or widget displays. 

```
class FloraForm(ModelForm):
    class Meta: 
    model = Flora
    fields = ['name', 'genus']
```

### Django Views
Django views is where most of the client/server logic is made. We can map a url to a view (using `urls.py`) and then perform the logic that we want. For example if we want to display all `Flora`, we can use the view to perform filtering logic. We then pass all the information into a Django Template, which does the displaying for us via html. Django views is also where we may handle form saving, and changes to a database.  

### Django Template 
Django templates take information that is passed in from a view, and displays it. This was the most familiar section to me, as it uses `html` and `css`. There is a specific template tag language that Django uses, that I wasn't particularly familiar with, but was also pretty easy to pick up. It provides a lot of in built functionality like converting a date into a format, or capitalising strings. This would be very similar among most front ends of a website, as most of the logic is centered around display, and anything more complex than that is usually done in a view. 

### Other 
Throughout my internship, I learnt a lot about web development and how to build a Django Application. Additionally I also picked up a lot of skills such as using a linux OS, and a virtual machine to deploy the site. There was also a lot of liasing between our client and project, where we often had to confirm features or requirements.

The internship program also had a lot of interesting events and training workshops, to help our integration into the workforce and meet other interns in different areas. While not everyone was in an IT or Software development stream, it was definitely interesting learning about other people and what they do. Some workshops were also centered around marketing ourselves and how to make the most of an internship. Unfortunately due to COVID lockdowns, I did have limited time in the office, but it was great to work with my team and I definitely value everything that I have learnt from working here. 