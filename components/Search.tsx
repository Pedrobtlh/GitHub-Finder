type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import classes from "./Search.module.css";

import { BsSearch } from "react-icons/bs";

import { useState, KeyboardEvent } from "react";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque Por um Usuário</h2>
      <p>Conheça seus Melhores Repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o Nome do Usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
