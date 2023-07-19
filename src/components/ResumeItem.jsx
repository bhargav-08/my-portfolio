import { education } from '../data'
import parse from "html-react-parser"

const ResumeItem = () => {
    return (
    <>
        {
            education.map((val) => {
                return (
                    <div className="resume__item" key={val.id}>
                        <div className="resume__icon">{val.icon}</div>
                        <span className="resume__date">{val.year}</span>
                        <h3 className="resume__subtitle">{parse(val.title)}</h3>
                        <p className="resume__description">{parse(val.desc) }</p>
                </div>
                )
            })} 
    </>
  )
}

export default ResumeItem