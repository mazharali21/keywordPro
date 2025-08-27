import React, { useState } from "react";
import Header from "../components/header";
import Platform_Tab from "../components/tab";
import KeywordInput from "../components/keywordInput";
import EmptyResult from "../components/emptyResult";
import axios from "axios";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [active, setActive] = useState("google");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedKeywords, setGeneratedKeywords] = useState("");

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = async () => {
    if (!keyword) {
      alert("Please Enter a seed Keyword");
      return;
    }
    setIsLoading(true);

    try {
      const res = await axios.post("https://keyword-pro-backend.vercel.app/generatekeyword", {
        keyword,
        active,
      });
      setGeneratedKeywords(res.data.keywords);
    } catch (error) {
      console.error("Error : ", error);
    }
    finally{
      setIsLoading(false)
    }

    console.log("clicked");
  };

  return (
    <div className=" bg-linear-to-r from-[#2563EB] to-[#60A5FA] min-h-screen overflow-x-hidden">
      <Header />

      <div className="w-screen flex justify-center items-center flex-col text-white mt-16 ">
        <h1 className="text-4xl md:text-5xl font-bold font-raleway text-center">
          Keyword Research Tool
        </h1>
        <p className="text-2xl font-raleway my-2 text-wrap text-center">
          Get hundreds of keyword suggestions across multiple platforms for
          FREE!
        </p>
      </div>

      <div className="flex justify-center my-4">
        <Platform_Tab active={active} setActive={setActive} />
      </div>

      <div className="flex justify-center my-4">
        <KeywordInput
          keyword={keyword}
          handleKeyword={handleKeyword}
          handleSearch={handleSearch}
        />
      </div>

      <div className="flex justify-center mb-4">
        {isLoading ? (
          <div className="text-white text-xl font-semibold font-raleway">
            Loading...
          </div>
        ) : generatedKeywords && generatedKeywords.length > 0 ? (
          <div>
            <div className="mb-2 text-xl font-raleway font-semibold text-white">
              List of keywords
            </div>
            <div className="text-center px-12 py-4 bg-gray-100 max-w-2xl rounded-md">
              <div className="text-gray-900 text-lg whitespace-pre-line text-left">
                {Array.isArray(generatedKeywords)
                  ? generatedKeywords.map((keyword, index) => (
                      <div className="py-1" key={index}>
                        {keyword}
                      </div>
                    ))
                  : generatedKeywords}
              </div>
            </div>
          </div>
        ) : (
          <EmptyResult active={active} />
        )}
      </div>
    </div>
  );
};

export default Home;
