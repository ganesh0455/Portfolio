import ReactConcepts from './ReactConcepts'
import conceptsList from './Concepts';
import Card from './Card'; 

function ReactSkills() {
    return (
        <div className='bg-gray-900 w-[100%] h-[100%] pt-5 pb-5 flex flex-col items-center justify-center'>
            <Card className='bg-gray-800 w-[60%] h-[70%] p-7'>
                <div className='text-center text-white'>
                <h1 className='font-bold text-3xl mb-3'>Key React Concepts</h1>
                <p className='mb-3'>Selected Key React Concepts you should know about</p>
                </div>
                <div className='flex'>
                    <ReactConcepts
                        concept={conceptsList[0].concept}
                        conceptDescription={conceptsList[0].conceptDescription}
                    />
                    <ReactConcepts
                        concept={conceptsList[1].concept}
                        conceptDescription={conceptsList[1].conceptDescription}
                    />
                    <ReactConcepts
                        concept={conceptsList[2].concept}
                        conceptDescription={conceptsList[2].conceptDescription}
                    />
                </div>
            </Card>
        </div>
    )
}

export default ReactSkills;