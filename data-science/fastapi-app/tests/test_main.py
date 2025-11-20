from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_home_route():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello from FastAPI!"}

def test_user_route():
    response = client.get("/users/")
    assert response.status_code == 200
    assert response.json() == [{"id": 1, "name": "Rahul"}]
