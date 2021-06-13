import React from 'react'


export default function List({data}) {
  return (
    <>
      {data.map((people) =>{
        const { id,name,dob,image } = people;
        return(
          <article key={id} className="p-4 max-w-sm mx-auto flex items-center space-x-4">
            <div className="flex-shrink-0 rounded-xl">
              <img src={image} className="h-14 w-14 rounded-full" alt={name} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-indigo-400 cursor-pointer">{name}</h3>
              <p className="text-gray-500">{dob}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
