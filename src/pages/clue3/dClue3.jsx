import audio from "../../assets/audio.mp3"
import Blocker from "../../components/blocker/Blocker"
const Clue3 = () => {
    const downloadImage = () => {
        saveAs(audio, 'clue3.mp3')
      }
  return (
    <div className="clue">
      <Blocker password={"1234"}/>
        <div className="clueHeading">Clue 1</div>
        <audio className="clueAudio" src={audio} controls type="audio/mpeg"></audio>
        <div className="clueButton" onClick={downloadImage}>Download Audio</div>
    </div>
  )
}

export default Clue3