from fastapi import FastAPI
import mysql.connector

from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mydb = mysql.connector.connect(
host="127.0.0.1",
user="balthazar",
password="chillflex",
database="data_base"
)



class people(BaseModel):
    firstName: str
    lastName: str
    statu: str
    tel: str
    email: str
    mdp: str

class advertisement(BaseModel):
    title: str
    shortDescription: str
    detailDescription: str


@app.get("/")
async def main():
    return {"message" : "hello"}

# get line from table by id 
@app.get("/tableLine")
async def get_table(table : str, id : int):
    cursor = mydb.cursor()
    cursor.execute(f"SELECT * FROM {table} WHERE id = {id}")
    result = cursor.fetchone()
    return {result}

# # Delete an line from table by ID
@app.delete("/tableLine")
async def delete_people(table :str, id: int):
    cursor = mydb.cursor()
    cursor.execute(f"DELETE FROM {table} WHERE id = {id}")
    mydb.commit()
    return {"message": "table deleted successfully"}


 # Add a new employee
@app.post("/people")
async def add_people(people : people):
   
    cursor = mydb.cursor()
    sql = "INSERT INTO peoples (firstName, lastName, statu, tel, email, mdp) VALUES (%s,%s,%s,%s,%s,%s)"
    val = (people.firstName, people.lastName, people.statu, people.tel, people.email, people.mdp)
    error = cursor.execute(sql, val)
    mydb.commit()
    print(val)
    print(error)
    return True


# # Add a new advertisement
@app.post("/advertisement")
async def add_advertisement(ad: advertisement):
    cursor = mydb.cursor()
    sql = "INSERT INTO advertisement (title, shortDescription, detailDescription) VALUES (%s,%s,%s)"
    val =  (ad.title, ad.shortDescription, ad.detailDescription)
    try:
        cursor.execute(sql, val)
        mydb.commit()
        return True
    except Exception as e:
        return str(e)  # Retourne l'erreur comme réponse pour le débogage

