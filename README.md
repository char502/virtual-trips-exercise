# virtual-trips-exercise

Coding exercise using React, Node, Express, Sqlite3

1. To install the express backend for this app (for api calls) - 'npm install'
2. To install the frontend for this app - 'cd client' - 'npm install'
3. Then to run the app - 'yarn dev'

Virtual Trips App

- Enter a UK location and the app will access the sqlite database and return all those locations with latitude and logitude info
- The name field requires a capital letter in order for searches to be returned but if you type the first letter in lowercase it will automatically be converted to uppercase so if searches exist they will still be returned
- A wildcard (%) has been added at the end of the query so if 'Has' is typed you will get all results starting with 'has' (i.e. Hasbury, Hascombe etc) and then anything else after that so a search for 'Hastings' will return, not just hastings but 'Hastings Ballygally Castle Hotel', 'Hastings Castle', 'Hastings Railway Station' etc
- The locations will be ordered alphabetically by the closest matches as you type
- Results will only start returning when the query contains two or more characters
- A green loader bar has been added at the top of the app to show the progress of the loading results
