/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Constants
 */
import { CERTIFICATES } from '../constants';

/**
 * Icons
 */
import { MdOutlineArrowOutward } from 'react-icons/md';

const Certifications = () => {
  return (
    <div className='bdr-box mx-auto h-fit w-full max-w-3xl border-x'>
      {CERTIFICATES.map((item) => {
        return (
          <div className='bdr-box flex h-20 w-full border-b hover:bg-foreground/10 cursor-pointer' key={item.id}>
            <div className='bdr-box flex aspect-square h-full items-center justify-center border-r p-2'>
              <img src={item.imageSrc} alt={item.label} />
            </div>
            <div className='flex h-full w-full flex-col p-2 justify-start items-center gap-1'>
                <h3 className="w-full textStyle-h font-bold ">{item.label}</h3>
                <div className="flex gap-2 w-full h-fit  textStyle-subHeading tracking-tight">
                    <p className=" pr-2 border-r bdr-box">@{item.institute}</p>
                    <p>{item.issuedOn}</p>
                </div>
            </div>
            <a
              href={item.credentialLink}
              className='flex h-full w-fit items-center justify-center px-3 text-xl'
            >
              <MdOutlineArrowOutward />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Certifications;
