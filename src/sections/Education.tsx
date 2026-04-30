/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Icons
 */
import { IoBook, IoSchool } from 'react-icons/io5';

/**
 * Constants
 */
import { EDUCATION } from '../constants';

const Education = () => {
  return (
    <div className='bdr-box mx-auto flex h-fit w-full max-w-3xl flex-col items-center justify-center border-x'>
      {EDUCATION.map((item, idx) => {
        return (
          <div
            key={idx}
            className='text-foreground bdr-box flex h-30 w-full border-b'
          >
            <div className='bdr-box flex h-full w-fit  items-center justify-center border-r p-4 text-xl sm:text-2xl sm:p-6'>
              {item.gradeType === 'CGPA' ? <IoSchool /> : <IoBook />}
            </div>
            {/* main */}
            <div className='bdr-box flex h-full w-full flex-col items-start justify-between gap-2 border-r p-2 tracking-tighter leading-tight sm:tracking-normal md:leading-normal'>
              <h3 className='text-xl sm:text-2xl  font-bold '>
                {item.institution}, {item.location} 
              </h3>
              <p className='text-sm sm:text-md text-foreground/70'>
                {item.degree},  {item.period}
              </p>
              <p className='text-sm sm:text-md text-foreground/70'>
                {item.gradeType} : {item.grade}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
