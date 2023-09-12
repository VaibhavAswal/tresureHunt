import img from "../../assets/beach.png"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"
const Clue1 = () => {
    const downloadImage = () => {
        saveAs(img, 'clue1.png') 
      }
  return (
    <div className="clue">
        <Blocker password={1234}/>
        <div className="clueHeading">Clue 1</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default Clue1