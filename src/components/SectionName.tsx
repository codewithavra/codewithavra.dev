/**
 * @license Apache-2.0
 * @copyright codewithavra
 */


const SectionName = ({ name,id } : { name : string, id?:string}) => {
  return (
    <div className="h-fit  text-xl font-bold text-foreground sm:text-2xl border-b bdr-box" id={id}>
        <div className="max-w-3xl border-x bdr-box mx-auto p-2 sm:p-3 h-fit">{name}</div>
    </div>
  )
}

export default SectionName