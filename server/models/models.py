from datetime import date
import os
from sqlmodel import SQLModel, Field, create_engine, Session

# --- Database configuration ---
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://<username>:<password>@<host>:<port>/<dbname>"
)
engine = create_engine(DATABASE_URL, echo=True)

# --- SQLModel table definitions for PostgreSQL ---
class Movie(SQLModel, table=True):
    """
    Represents a movie fetched from TMDB and stored in Postgres.
    """
    id: int = Field(primary_key=True, description="TMDB movie ID")
    title: str = Field(..., description="Movie title")
    release_date: date = Field(..., description="Release date")

class Person(SQLModel, table=True):
    """
    Represents a person (actor/director) fetched from TMDB and stored in Postgres.
    """
    id: int = Field(primary_key=True, description="TMDB person ID")
    name: str = Field(..., description="Full name of the person")

# --- Utility functions ---
def init_db():
    """
    Create all tables in the database. Call this at FastAPI startup.
    """
    SQLModel.metadata.create_all(engine)


def get_session():
    """
    Dependency for FastAPI routes to get a DB session.
    """
    with Session(engine) as session:
        yield session