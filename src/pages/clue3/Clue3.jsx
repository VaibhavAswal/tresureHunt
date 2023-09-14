import audio from "../../assets/audio.mp3"
import { saveAs } from 'file-saver'
import Blocker from "../../components/blocker/Blocker"
const Clue3 = () => {
    const downloadImage = () => {
        saveAs(audio, 'clue3.mp3')
      }
  return (
    <div className="clue">
      <Blocker password={"b3ru87dt"}/>
        <div className="clueHeading">Hack It and Jack It</div>
        <audio className="clueAudio" src={audio} controls type="audio/mpeg"></audio>
        <div className="clueButton" onClick={downloadImage}>Download Audio</div>
    </div>
  )
}

export default Clue3