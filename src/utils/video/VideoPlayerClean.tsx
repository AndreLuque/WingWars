import React from "react"
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md"

const VideoPlayerClean = ({
  playing,
  setPlaying
}: {
  playing: boolean
  setPlaying: any
}) => {
  return (
    <>
      <button
        name="Play"
        onClick={() => setPlaying(!playing)}
        className="absolute left-0 bottom-0 z-20 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100"
      >
        <div className="relative h-[62px] w-[62px] rounded-full bg-white shadow-md">
          {playing ? (
            <MdPauseCircleFilled className="text-green-light absolute -top-14 -left-14 text-[90px]" />
          ) : (
            <MdPlayCircleFilled className="text-green-light absolute -top-14 -left-14 text-[90px]" />
          )}
        </div>
      </button>
    </>
  )
}

export default VideoPlayerClean
