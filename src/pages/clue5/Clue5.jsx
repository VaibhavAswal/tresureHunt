import img from "../../assets/blood.jpeg"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"

function Clue5() {
    const downloadImage = () => {
        saveAs(img, 'clue5.jpeg') 
      }
  return (
    <div className="clue">
        <Blocker password={"c5s23tc4"}/>
        <div className="clueHeading">Hack It and Jack It</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default Clue5
