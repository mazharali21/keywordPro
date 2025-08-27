import { Search } from "lucide-react";

const EmptyResult = ({ active }) => {
  return (
    <div className="text-center p-12 bg-gray-100 max-w-2xl rounded-md">
      <div>
        <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <div className="mb-2">Start Your Keyword Research</div>
        <div>
          Enter a seed keyword above to generate relevant keyword suggestions
          for <span className=" capitalize text-blue-800 font-semibold">{active}</span>
        </div>
      </div>
    </div>
  );
};

export default EmptyResult;
