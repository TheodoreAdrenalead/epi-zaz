# Fonctions pour CRUD : 

from main import *


import mysql.connector

mydb = mysql.connector.connect(
host="127.0.0.1",
user="balthazar",
password="chillflex",
database="data_base"
)

#Fonction pour exécuter une des commandes CRUD
def executeCursor(sql,val):
     cursor = mydb.cursor()
     error = cursor.execute(sql, val)#Renvoie true si valider sinon renvoie l'erreur
     mydb.commit()
     return error

