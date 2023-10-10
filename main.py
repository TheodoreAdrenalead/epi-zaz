from fastapi import FastAPI
import mysql.connector

app = FastAPI()

mydb = mysql.connector.connect(
host="127.0.0.1",
user="balthazar",
password="chillflex",
database="data_base"
)

# get line from table by id 
@app.get("/tableLine")
def get_table(table : str, id : int):
    cursor = mydb.cursor()
    cursor.execute(f"SELECT * FROM {table} WHERE id = {id}")
    result = cursor.fetchone()
    return {result}

# # Delete an line from table by ID
@app.delete("/tableLine")
def delete_people(table :str, id: int):
    cursor = mydb.cursor()
    cursor.execute(f"DELETE FROM {table} WHERE id = {id}")
    mydb.commit()
    return {"message": "Employee deleted successfully"}


 # Add a new employee
@app.post("/people")
def add_people(firstName : str, lastName: str, status : str, tel : str, email : str ,mdp : str):
    cursor = mydb.cursor()
    sql = "INSERT INTO employees (firstName, lastName, status, tel, email, mdp) VALUES (%s, %s,%s,%s,%s)"
    val = (firstName, lastName, status, tel, email, mdp)
    cursor.execute(sql, val)
    mydb.commit()
    return True


# # Add a new advertisement
@app.post("/advertisement")
def add_people(title : str, shortDescription: str, detailDescription: str):
   cursor = mydb.cursor()
   sql = "INSERT INTO employees (title, shortDescription, detailDescription) VALUES (%s, %s, %s)"
   val = (title, shortDescription, detailDescription)
   cursor.execute(sql, val)
   mydb.commit()
   return True
