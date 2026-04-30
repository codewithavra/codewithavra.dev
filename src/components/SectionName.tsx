/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

import React from 'react'

const SectionName = ({ name } : { name : string}) => {
  return (
    <div className="h-fit  text-xl font-bold text-foreground sm:text-2xl border-b bdr-box">
        <div className="max-w-3xl border-x bdr-box mx-auto p-2 sm:p-3 h-fit">{name}</div>
    </div>
  )
}

export default SectionName