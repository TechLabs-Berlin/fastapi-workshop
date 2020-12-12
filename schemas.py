from typing import List, Optional

from pydantic import BaseModel


class NoteCreate(BaseModel):
    title: Optional[str]
    text: str
    tags: Optional[List[str]]

    class Config:
        schema_extra = {
            "example": {
                "title": "Some Note",
                "text": "some slightly longer description",
                "tags": [
                    "TAG1",
                    "TAG2",
                    "TAG3",
                ],
            },
        }


class Note(BaseModel):
    id: int
    title: Optional[str]
    text: str
    tags: List[str]

    class Config:
        schema_extra = {
            "example": {
                "id": 123,
                **NoteCreate.Config.schema_extra["example"],
            },
        }
