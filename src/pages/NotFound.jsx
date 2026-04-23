import { Link } from "react-router-dom";

function NotFound(){

  return(

    <div className="text-center mt-32">

      <h1 className="text-5xl font-bold text-red-500">
        404
      </h1>

      <p className="mt-4 text-gray-600">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded"
      >
        Back To Home
      </Link>

    </div>

  )

}

export default NotFound