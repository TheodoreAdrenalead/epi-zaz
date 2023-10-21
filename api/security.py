from main import *
import jwt 
import hashlib


async def encode(playloadData):
    secretKey = "yak"
    token = jwt.encode(
        payload=playloadData,
        key=secretKey
    )
    # token = hashlib.sha256(token.encode()).hexdigest()

    # token = token[:50]
    return token




async def decode(token):
    secretKey = "yak"
    playload = jwt.decode(
        jwt=token[0],
        algorithms=["HS256"],
        key=secretKey
    )
    return playload


