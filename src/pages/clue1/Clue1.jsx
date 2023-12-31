import img from "../../assets/compass.jpeg"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"
const Clue1 = () => {
    const downloadImage = () => {
        saveAs(img, 'clue1.jpeg') 
      }
  return (
    <div className="clue">
        <Blocker password={"x1jp34td"}/>
        <div className="clueHeading">Hack It and Jack It</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default Clue1