import React, { useEffect, useState } from "react";

function UserApi({ name, location, avatar }) {
  return (
    <>
      <div>
        <h2 style={{paddingBottom:"10px"}}>{name}</h2>
        <p style={{fontStyle:"italic", fontWeight:
        -"bold"}}>{location}</p>
        <article
        style={{height: "30px", padding:"10px"}}>
        <img  style={{height: "100px", borderRadius:"45px", display:"flex"}} src={avatar} alt="" />
        </article>
      </div>
    </>
  );
}

export default UserApi;
