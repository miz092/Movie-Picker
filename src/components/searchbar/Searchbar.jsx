import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  TextField,
} from "@mui/material";

import "./Searchbar.css";
import { fetchGenres } from "../../api.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

export default function Searchbar(props) {
  const { handleFetch } = props;
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("1900-01-01");
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [limit, setLimit] = useState(10);
  const [minRating, setMinRating] = useState("5");
  const [minLength, setMinLength] = useState("30");
  const [maxLength, setMaxLength] = useState("90");
  const [minVotes, setMinVotes] = useState("1000");

  const navigate = useNavigate();
  useEffect(() => {
    const handleGenres = async () => {
      setLoading(true);
      const response = await fetchGenres();
      setGenres(response.genres);
      setLoading(false);
    };
    handleGenres();
  }, []);

  return (
    <>
      <div id="inputWrapper">
        {" "}
        <TextField
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          className="input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          label="Type something"
          variant="outlined"
          sx={{ width: 220, m: 1.5 }}
        />{" "}
        <TextField
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          className="input"
          label="Start"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          sx={{ width: 220, m: 1.5 }}
        />{" "}
        <TextField
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          className="input"
          label="End"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          sx={{ width: 220, m: 1.5 }}
        />{" "}
        <TextField
          className="input"
          label="Min. rating"
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          sx={{ width: 130, m: 1.5 }}
        />{" "}
        <TextField
          className="input"
          label="Min. votes"
          type="number"
          value={minVotes}
          onChange={(e) => setMinVotes(e.target.value)}
          sx={{ width: 130, m: 1.5 }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />{" "}
        <TextField
          className="input"
          label="Min. length"
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(e.target.value)}
          sx={{ width: 130, m: 1.5 }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />{" "}
        <TextField
          className="input"
          label="Max. length"
          type="number"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
          sx={{ width: 130, m: 1.5 }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />{" "}
        <TextField
          className="input"
          label="Limit"
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          sx={{ width: 130, m: 1.5 }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <div id="genreList">
          {loading ? (
            <p>Loading genres...</p>
          ) : (
            <div className="inputContainer">
              {" "}
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel sx={{ color: "white" }}>Genre</InputLabel>
                <Select
                  sx={{ color: "white" }}
                  className="input"
                  value={genre}
                  label="Genre"
                  onChange={(e) => setGenre(e.target.value.toLowerCase())}
                >
                  {genres.map((genre) => (
                    <MenuItem
                      key={genre.description}
                      value={genre.description.toLowerCase()}
                    >
                      {genre.description}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
        </div>
      </div>
      <div className="buttonContainer">
        {" "}
        <div id="submitButton" className="container">
          <div className="center">
            <button
              onClick={() => {
                handleFetch(
                  searchQuery,
                  genre,
                  startDate,
                  endDate,
                  limit,
                  minLength,
                  maxLength,
                  minRating,
                  minVotes
                ),
                  navigate("/");
              }}
              className="btn"
            >
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
