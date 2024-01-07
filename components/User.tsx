import React from "react";

import { MdLocationPin } from "react-icons/md";

import { UserProps } from "../types/user";

import { Link } from "react-router-dom";

import classes from "../components/User.module.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div>
        <p className={classes.number}>Seguidores:</p>
        <p>{followers}</p>
      </div>
      <div>
        <p className={classes.number}>Seguindo:</p>
        <p>{following}</p>
      </div>
      <Link to={`/repos/${login}`}>Ver Melhores Projetos</Link>
    </div>
  );
};

export default User;
