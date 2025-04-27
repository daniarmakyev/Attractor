import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getPrivateRepos, getPublicRepos } from "../store/repos/repos.action";
import RepoCard from "../components/RepoCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Repositorys = () => {
  const dispatch = useAppDispatch();
  const {
    public: publicRepos,
    private: privateRepos,
    loading,
  } = useAppSelector((state) => state.repos);
  const [activeTab, setActiveTab] = useState<"public" | "private">("public");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getPublicRepos({ page: currentPage, per_page: itemsPerPage }));
    dispatch(getPrivateRepos({ page: currentPage, per_page: itemsPerPage }));
  }, [dispatch, currentPage]);

  const handleTabChange = (tab: "public" | "private") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const currentRepos = activeTab === "public" ? publicRepos : privateRepos;

  return (
    <div className="relative container h-full flex items-center justify-center z-[1]">
      <div className="container-blur p-5">
        <div className="flex flex-col gap-4">
          <div className="gap-3 flex">
            <button
              className={`border border-white rounded-md p-2 transition-all duration-300 ${
                activeTab === "public" ? "bg-white text-black" : ""
              }`}
              onClick={() => handleTabChange("public")}
            >
              Открытые
            </button>
            <button
              className={`border border-white rounded-md p-2 transition-all duration-300 ${
                activeTab === "private" ? "bg-white text-black" : ""
              }`}
              onClick={() => handleTabChange("private")}
            >
              Приватные
            </button>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {currentRepos.map((repo: any) => (
                  <div key={repo.id} className="animate-fade-in">
                    <RepoCard
                      name={repo.name}
                      html_url={repo.html_url}
                      owner={repo.owner}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-black transition-colors"
                >
                  Назад
                </button>
                <span className="flex items-center px-4">
                  Страница {currentPage}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentRepos.length < itemsPerPage}
                  className="px-4 py-2 border border-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-black transition-colors"
                >
                  Вперед
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repositorys;
