/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */

import { GitHubCalendar } from 'react-github-calendar';
const GithubCalendar = () => {
  return (
    <div className='h-fit w-full max-w-3xl mx-auto flex justify-center items-center border-x bdr-box p-2'>
      <GitHubCalendar
    username="codewithavra"
    year={2026}
    blockSize={12}
    blockMargin={2}
    fontSize={12}
  />
    </div>
  );
};

export default GithubCalendar;
