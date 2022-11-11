import React, { useState } from "react";
import "./users.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { getUsersByPage } from "../../../api/user-service";
import { useNavigate } from "react-router-dom";

const UserSearch = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (text) => {
    setLoading(true);
    try {
      const resp = await getUsersByPage(text);
      setUsers(resp.data.content);
      console.log(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePage = () => {
    navigate("/budak/user-new-page");
  };
  return (
    <div className="p-search text-end">
      <input
        type="search"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="icon"
        type="submit"
        onClick={() => {
          handleSearch(text);
          setText("");
        }}
      >
        <AiOutlineSearch />
      </Button>
      <Button className="btn-new" type="submit" onClick={handlePage}>
        New User
      </Button>
    </div>
  );
};

export default UserSearch;
