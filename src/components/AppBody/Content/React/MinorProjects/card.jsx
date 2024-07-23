import { Link } from 'react-router-dom';

const Card = ({ project }) => {
    const { id, taskName, combinedName } = project;
    return (
        <Link to={`${combinedName}/${id}`} className="flex justify-center items-center w-[287px] h-[270px] bg-gradient-to-tl from-[#3333331a] to-[#4d4d4d23] rounded-[18px] p-[2px]">
            <div className="w-[197px] h-[180px] bg-gradient-to-tl from-[#3333331a] to-[#4d4d4d23] py-2 px-6 flex items-center justify-center rounded-[16px]">
                <span className='text-lg'>{taskName}</span>
            </div>
        </Link>
    )
}

export default Card;