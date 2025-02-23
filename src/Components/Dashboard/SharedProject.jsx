import React from 'react';

const SharedProject = ({project}) => {
    return (
        <div class="card lg:max-w-lg bg-blue-300 border-l-8 border-blue-600 text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
        <div>
          <div class="card-body">
            <div className='flex justify-between gap-4 mb-3'>
              <div>
               
                <h2 class="text-center text-2xl uppercase font-bold">{project.data?.projectTitle}</h2>
              </div>
  
            </div>
            <div>
              <h2 className='font-bold text-header mb-2'>Owner Name: <small className="uppercase text-paragraph">{project.data?.owner}</small></h2>
              <div className="flex justify-between gap-4 font-semibold mb-2">
                <p className='font-bold text-header'>Start date:<small className="uppercase text-paragraph"> {project.data?.startDate}</small></p>
                <p className='font-bold text-header'>End date:<small className="uppercase text-paragraph"> {project.data?.endDate}</small></p>
              </div>
              <h2 className='font-bold text-header'>Description : <span className='text-paragraph'>{project.data?.about}</span></h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SharedProject;