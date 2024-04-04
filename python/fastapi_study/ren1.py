from fastapi import FastAPI

app = FastAPI()

@app.get("/{message}")
def read_root(message: str):
    return {"message": message}
