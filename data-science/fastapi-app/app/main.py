from fastapi import FastAPI
from app.routers import users

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello from FastAPI!"}

app.include_router(users.router, prefix="/users", tags=["Users"])
