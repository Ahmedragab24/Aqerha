import { House } from "lucide-react";

const Loading = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-24 h-24">
          <div className="absolute w-full h-full border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>

          <House className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>

        <p className="mt-6 text-gray-600 text-lg font-medium">
          جاري التحميل...
        </p>
      </div>
    </main>
  );
};

export default Loading;
