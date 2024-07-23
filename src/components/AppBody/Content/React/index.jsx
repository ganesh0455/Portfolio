import { Link } from "react-router-dom";

const ReactdashBoard = () => {
    return (
        <div className="w-full h-full flex justify-center bg-gray-900">
            <div className="w-[80%] h-full flex flex-col justify-center items-center text-white gap-16">
                <Link to="minorProjects" className="w-[30%] rounded-[15px] py-10 bg-gray-800 border hover:border-green-600 flex justify-center items-center">
                    <span className="text-2xl">Minor Projects</span>
                </Link>
                <Link to="majorProjects" className="w-[30%] rounded-[15px] py-10 bg-gray-800 border hover:border-green-600 flex justify-center items-center">
                    <span className="text-2xl">Major Projects</span>
                </Link>
            </div>
        </div>
    )
}

export default ReactdashBoard;