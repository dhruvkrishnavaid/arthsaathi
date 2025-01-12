import {
  IconPlayerPause,
  IconPlayerPlay,
  IconVolume3,
} from "@tabler/icons-react";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

const TextToSpeech = (props: { children: string; className: string }) => {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null,
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(props.children as string);
    setUtterance(u);
    return () => {
      synth.cancel();
    };
  }, [props.children]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    if (isPaused) {
      synth.resume();
    }
    synth.speak(utterance!);
    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPaused(true);
  };

  return (
    <div className={props.className}>
      <div className="flex gap-4">
        <button
          onClick={isPaused ? handlePlay : handlePause}
          className="p-4 text-white border rounded-full cursor-pointer w-min bg-neutral-900 hover:bg-white hover:text-neutral-900 border-neutral-900 transition-colors duration-300"
        >
          {isPaused ? <IconPlayerPlay /> : <IconPlayerPause />}
        </button>
        <button
          onClick={handleStop}
          className="p-4 text-white border rounded-full cursor-pointer w-min bg-neutral-900 hover:bg-white hover:text-neutral-900 border-neutral-900 transition-colors duration-300"
        >
          <IconVolume3 />
        </button>
      </div>
      <Markdown>{props.children}</Markdown>
    </div>
  );
};

export default TextToSpeech;
