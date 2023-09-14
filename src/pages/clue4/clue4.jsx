import img from "../../assets/beach.jpeg"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"

function clue4() {
    const downloadImage = () => {
        saveAs(img, 'clue4.jpeg') 
      }
  return (
    <div className="clue">
        <Blocker password={"r4hy3r2t"}/>
        <div className="clueHeading">Hack It and Jack It</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default clue4
