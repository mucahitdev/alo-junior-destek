import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

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
  if (gitData.length === 0) {
    return (
      <ReactLoading
        type="spinningBubbles"
        color="#ffffff"
        height={50}
        width={50}
      />
    );
  }
  return (
    <div className="p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="my-2 bg-blue-300 rounded-2xl space-y-4 min-h-[300px] flex flex-col justify-between">
        <div className="bg-red-300 rounded-2xl drop-shadow-md flex justify-center items-center p-2">
          <img src={avatar_url} alt={name} className="w-14 h-14 rounded-full" />
          <div className="">
            <b className="ml-3">{name ? name : login}</b>
          </div>
        </div>
        <div className="">
          <p className="text-sm">
            {" "}
            <b>{bio}</b>{" "}
          </p>
          <p>
            Takipçi: <b>{followers}</b>
          </p>
          <p>
            Takip edilen: <b>{following}</b>
          </p>
          {location && <p>Konum: <b>{location}</b></p>}
          {company && <p>Şirket: <b>{company}</b></p>}
          {blog && (
            <p>
              Blog:
              <a href={blog} target="_blank" rel="noreferrer">
                <b>Go Site</b>
              </a>
            </p>
          )}
        </div>
        <div className="inline-flex rounded-lg shadow-sm mx-auto pb-4" role="group">
          <a href={`https://www.linkedin.com/in/${linkedin}`}>
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Linkedin
            </button>
          </a>
          {twitter_username && (
            <a href={`https://twitter.com/${twitter_username}`}>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Twitter
              </button>
            </a>
          )}
          <a href={`https://github.com/${github}`}>
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
