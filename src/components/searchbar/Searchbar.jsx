import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";
import {
  SelectComponent,
  Loading,
  StyledButton,
  TextFieldInput,
  fetchGenres,
} from "./import";

export default function Searchbar(props) {
  const { handleFetch } = props;

  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const [genre, setGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("1950-01-01");
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [limit, setLimit] = useState(10);
  const [minRating, setMinRating] = useState("7");
  const [minLength, setMinLength] = useState("30");
  const [maxLength, setMaxLength] = useState("300");
  const [minVotes, setMinVotes] = useState("10000");

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
        <TextFieldInput
          value={searchQuery}
          setValue={setSearchQuery}
          type={"text"}
          label={"Type something"}
          width={220}
        />{" "}
        <TextFieldInput
          value={startDate}
          setValue={setStartDate}
          type={"date"}
          label={"Start date"}
          width={220}
        />
        <TextFieldInput
          value={endDate}
          setValue={setEndDate}
          type={"date"}
          label={"End date"}
          width={220}
        />
        <TextFieldInput
          value={minRating}
          setValue={setMinRating}
          type={"number"}
          label={"Rating <"}
          width={120}
        />
        <TextFieldInput
          value={minVotes}
          setValue={setMinVotes}
          type={"number"}
          label={"Vote count <"}
          width={120}
        />{" "}
        <TextFieldInput
          value={minLength}
          setValue={setMinLength}
          type={"number"}
          label={"Length <"}
          width={80}
        />{" "}
        <TextFieldInput
          value={maxLength}
          setValue={setMaxLength}
          type={"number"}
          label={"Length >"}
          width={80}
        />{" "}
        <TextFieldInput
          value={limit}
          setValue={setLimit}
          type={"number"}
          label={"Limit"}
          width={80}
        />{" "}
        <div id="genreList">
          {loading ? (
            <Loading />
          ) : (
            <SelectComponent
              label={"Genres"}
              value={genre}
              setValue={setGenre}
              values={genres}
            />
          )}
        </div>
      </div>
      <div className="buttonContainer">
        {" "}
        <StyledButton
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
            );
            navigate("/");
          }}
          text={"Search"}
        />
      </div>
    </>
  );
}
