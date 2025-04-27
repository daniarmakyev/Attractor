import React from 'react';

interface RepoCardProps {
  name: string;
  html_url: string;
  owner: {
    login: string;
    html_url: string;
  };
}

const RepoCard = ({ name, html_url, owner }: RepoCardProps) => {
  return (
    <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex flex-col gap-2">
        <a 
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Ссылка на репозиторий
        </a>
        <a 
          href={owner.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          Владелец: {owner.login}
        </a>
      </div>
    </div>
  );
};

export default RepoCard;