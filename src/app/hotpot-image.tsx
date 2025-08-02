"use client";
import React from "react";
import { useQuizContext } from "@/app/quiz-context";
import { brothByMBTI, calculateMBTI } from "@/app/mbti";
import ButtonRed from "@/app/button/button-red";
import Footer from "@/app/footer";
import SwirlGrid from "@/app/swirl-grid";

const HotpotImage: React.FC = () => {
  const { answers } = useQuizContext();

  const mbti = React.useMemo(() => calculateMBTI(answers), [answers]);
  const broth = brothByMBTI[mbti];

  return (
    <div id="resultsImage">
      <div className="overflow-hidden relative p-6 text-white rounded-md flex flex-col items-center gap-4 w-full max-w-[400px]">
        <SwirlGrid x={-40} y={-40} rows={4} cols={4} gap={-15} />
        <SwirlGrid x={-60} y={160} rows={4} cols={4} gap={-15} />
        <SwirlGrid x={260} y={160} rows={4} cols={4} gap={-15} />
        <SwirlGrid x={200} y={440} rows={4} cols={4} gap={-15} />

        <ButtonRed id={"resultsBroth"} label={`${mbti} ${broth.broth}`} onClick={() => {}} />
        <img
          src={broth.img}
          alt={`${mbti} hotpot`}
          className="w-full max-w-[300px] object-contain rounded"
          crossOrigin="anonymous"
        />

        <div className="w-full text-left">
          <h2 className="text-[#F19C24] mb-1 font-bold text-xl">Description</h2>
          <p className="text-white text-base">{broth.description}</p>
        </div>

        <div className="w-full text-left">
          <h2 className="text-[#F19C24] mb-1 font-bold text-xl">Personality Traits</h2>
          <div className="grid grid-cols-3 gap-2 text-sm">
            {broth.traits.map((trait, idx) => (
              <span key={idx} className="text-white">{trait}</span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotpotImage;
