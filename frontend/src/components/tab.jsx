import React from "react";

const Platform_Tab = ({active, setActive}) => {

  return (
    <div class="flex flex-wrap gap-2 sm:gap-4">
      <button
        onClick={() => setActive("google")}
        class={`tab-buttons ${
          active == "google" ? "bg-blue-600 text-white" : "bg-white"
        } `}
      >
        <span>Google</span>
      </button>

       <button
        onClick={() => setActive("youtube")}
        class={`tab-buttons ${
          active == "youtube" ? "bg-blue-600 text-white" : "bg-white"
        } `}
      >
        <span>Youtube</span>
      </button>


         <button
        onClick={() => setActive("amazon")}
        class={`tab-buttons ${
          active == "amazon" ? "bg-blue-600 text-white " : "bg-white"
        } `}
      >
        <span>Amazon</span>
      </button>

       <button
        onClick={() => setActive("fiverr")}
        class={`tab-buttons ${
          active == "fiverr" ? "bg-blue-600 text-white " : "bg-white"
        } `}
      >
        <span>Fiverr</span>
      </button>

      
    </div>
  );
};

export default Platform_Tab;
