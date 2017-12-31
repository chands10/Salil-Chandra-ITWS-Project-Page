All SQL code can be found in iit-lab10start.sql

Attached is also iit.sql, the exported SQL schema. While testing my code, there were times when I deleted the contents of a table and reinserted the values due to incorrect formatting (as seen in iit.sql). Therefore, the iit-lab10start.sql contains the SQL code that I would use had I not deleted the contents of the table.

To get index.php, actor-delete.php, movies.php, and combinations.php to work, need to change
@ $db = new mysqli('localhost', 'root', 'MrChandraxam', 'iit');
to correct values.