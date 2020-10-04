insert into students values( 101, 'Aman', 'cse', 99.99,'42442424',CURRENT_DATE() ) 
select * from students insert into students(rollno,name,branch,dob) values (103,'Raman','ece',CURRENT_DATE()) 
update students set per=79, mobile='44343434' where rollno=103 
delete from students where rollno=103 
delete from students (to delete all records) 
drop table students 
create database delit use delit select * from students order by per desc limit 2 
select name as 'student name',per as 'marks' from students order by per desc limit 2 
