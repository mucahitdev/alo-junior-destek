import React, { useEffect, useState } from "react";

export const CardDual = ({ data: { github, linkedin } }) => {
  const [gitData, setGitData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api.github.com/users/${github}`);
      let response = await data.json();
      setGitData(response);
    };
    fetchData();
  }, [github]);

  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    location,
    blog,
    company,
    login,
    twitter_username,
  } = gitData;

  const blogControl = () => {
    if (blog?.includes("http")) {
      if (blog.includes("linkedin")) {
        return false;
      }
      return true;
    }
    return false;
  };

  if (gitData.length === 0) {
    return <div></div>;
  }

  const userBio = (str) => {
    if (str) {
      const strLen = str.split("").length;
      if (strLen > 80) {
        return str.substring(0, 80) + "...";
      } else {
        return str;
      }
    }
  };

  return (
    <div className="p-1 w-full px-10 sm:px-1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="my-2 bg-blue-300 rounded-2xl space-y-4 min-h-[300px] flex flex-col justify-between">
        <div className="bg-red-300 rounded-2xl drop-shadow-md flex justify-center items-center p-2">
          <img src={avatar_url} alt={name} className="w-14 h-14 rounded-full" />
          <div className="">
            <b className="ml-3">{name ? name : login}</b>
          </div>
        </div>
        <div className="">
          <p className="text-xs px-2">
            <b>{userBio(bio)}</b>
          </p>
          <p>
            Takipçi: <b>{followers}</b>
          </p>
          <p>
            Takip edilen: <b>{following}</b>
          </p>
          {location && (
            <p>
              Konum: <b>{location}</b>
            </p>
          )}
          {company && (
            <p>
              Şirket: <b>{company}</b>
            </p>
          )}
          {blogControl() && (
            <p>
              Blog:
              <a href={blog} target="_blank" rel="noreferrer">
                <b>Go Site</b>
              </a>
            </p>
          )}
        </div>
        <div
          className="inline-flex rounded-lg shadow-sm mx-auto pb-4"
          role="group"
        >
          <a href={`https://www.linkedin.com/in/${linkedin}`}>
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium rounded-l-lg border focus:z-10  bg-gray-700 border-gray-600 text-white hover:bg-gray-600  hover:text-white"
            >
              Linkedin
            </button>
          </a>
          {twitter_username && (
            <a href={`https://twitter.com/${twitter_username}`}>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium border-t border-b  focus:z-10 bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              >
                Twitter
              </button>
            </a>
          )}
          <a href={`https://github.com/${github}`}>
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium rounded-r-md border bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
            >
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
