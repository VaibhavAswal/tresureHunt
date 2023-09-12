import img from "../../assets/beach.png"
import audio from "../../assets/audio.mp3"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"
const All = () => {
    const downloadImage = () => {
        saveAs(img, 'clue.jpg')
      }
  return (
    <div className="clue">
       <Blocker password={"1234"}/>
        <div className="clueHeading">All</div>
        <img src={img} className="clueImage" alt="clueImage" />
        <p className="clueText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quasi aliquam corrupti enim minus sapiente?</p>
        <audio className="clueAudio" src={audio} controls type="audio/mpeg"></audio>
        <div className="clueButton" onClick={downloadImage}>Download Image</div>
    </div>
  )
}

export default All