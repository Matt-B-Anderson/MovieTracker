from fastapi import APIRouter, HTTPException
import httpx

from config import TMDB_API_KEY as API_KEY

router = APIRouter(prefix="/api")

@router.get("/person/{person_id}/movies")
async def get_person_movies(person_id: int):
    url = f"https://api.themoviedb.org/3/person/{person_id}/movie_credits"
    params = {"language": "en-US", "api_key": API_KEY}
    async with httpx.AsyncClient() as client:
        resp = await client.get(url, params=params)
    if resp.status_code != 200:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    return resp.json()