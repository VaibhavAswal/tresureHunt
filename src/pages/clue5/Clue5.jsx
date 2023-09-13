import img from "../../assets/blood.jpeg"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"

function Clue5() {
    const downloadImage = () => {
        saveAs(img, 'clue5.png') 
      }
  return (
    <div className="clue">
        <Blocker password={"c5s23tc4"}/>
        <div className="clueHeading">Clue 1</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default Clue5
