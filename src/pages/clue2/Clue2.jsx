import img from "../../assets/helm.jpeg"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"
const Clue2 = () => {
  const downloadImage = () => {
    saveAs(img, 'clue2.jpeg') 
  }
  return (
    <div className="clue">
      <Blocker password={"v64zn3i9"}/>
        <div className="clueHeading">Hack It and Jack It</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default Clue2