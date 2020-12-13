from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import schemas
from data import data

app = FastAPI(title="Notes")

origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/notes", response_model=List[schemas.Note])
def get_all_notes():
    # replace with real data fetching
    response = data
    return response


@app.get("/notes/{note_id}", response_model=schemas.Note)
def get_one_note(note_id: int):
    # replace with real data fetching
    for note in data:
        if note.id == note_id:
            return note
    
    raise HTTPException(status_code=404, detail=f"Cannot find note with id {note_id}.")


@app.post("/notes", response_model=schemas.Note, status_code=201)
def post_note(note_create: schemas.NoteCreate):
    print(note_create)

    # do some data handling here
    response = schemas.Note(
        id=5,
        title=note_create.title,
        text=note_create.text,
        tags=note_create.tags if note_create.tags else [],
    )
    return response
