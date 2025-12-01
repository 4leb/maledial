"use client";
import { useEffect, useState } from "react";
import EndTurnModal from "@/components/EndTurnModal";
import ClearModal from "@/components/ClearModal";
import Settings from "@/components/Settings";
import Initiative from "@/components/Initiative";
import Turn from "@/components/Turn";
import Dial from "@/components/Dial";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils";

export default function Home() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [hasSetup, setHasSetup] = useState<boolean>(false);
  const [isOpenEndTurnModal, setIsOpenEndTurnModal] = useState<boolean>(false);
  const [isOpenClearModal, setIsOpenClearModal] = useState<boolean>(false);
  const [echo, setEcho] = useState<number>(0);
  const [mastery, setMastery] = useState<number>(0);
  const [turn, setTurn] = useState<number>(1);
  const [hasInitiative, setHasInitiative] = useState<boolean>(false);

  const openEndTurnModal = () => setIsOpenEndTurnModal(true);
  const closeEndTurnModal = () => setIsOpenEndTurnModal(false);

  const openClearModal = () => setIsOpenClearModal(true);
  const closeClearModal = () => setIsOpenClearModal(false);

  const incrementEcho = () => {
    setLocalStorageItem("echo", `${echo + 1}`);
    setEcho(echo+1);
  };
  const decrementEcho = () => {
    const nextEcho = echo - 1 < 0 ? 0 : echo - 1;
    setLocalStorageItem("echo", `${nextEcho}`);
    setEcho(nextEcho);
  };

  const incrementMastery = () => {
    setLocalStorageItem("mastery", `${mastery + 1}`);
    setMastery(mastery + 1);
  };
  const decrementMastery = () => {
    const nextMastery = mastery - 1 < 0 ? 0 : mastery - 1;
    setLocalStorageItem("mastery", `${nextMastery}`);
    setMastery(nextMastery);
  };

  const toggleInitiative = () => {
    setLocalStorageItem("initiative", !hasInitiative ? "true" : "");
    setHasInitiative(!hasInitiative);
  };

  const endTurn = () => {
    const nextTurn = turn + 1;
    setLocalStorageItem("turn", `${nextTurn}`);
    setTurn(nextTurn);

    if (nextTurn > 4) {
      setLocalStorageItem("echo", `${echo + 10}`);
      setEcho(echo + 10);
    }
    else {
      setLocalStorageItem("echo", `${echo + (nextTurn * 2)}`);
      setEcho(echo + (nextTurn * 2));
    }

    closeEndTurnModal();
  };

  const clear = (startingEcho: string) => {
    setLocalStorageItem("turn", "1");
    setLocalStorageItem("echo", startingEcho);
    setLocalStorageItem("mastery", "0");
    setLocalStorageItem("initiative", "");
    setLocalStorageItem("setup", "true");

    setTurn(1);
    setEcho(Number(startingEcho));
    setMastery(0);
    setHasInitiative(false);
    setHasSetup(true);

    closeClearModal();
  };

  useEffect(() => {
    if (Boolean(getLocalStorageItem("setup", ""))) {
      setHasSetup(true);
      setTurn(Number(getLocalStorageItem("turn", "1")));
      setEcho(Number(getLocalStorageItem("echo", "0")));
      setMastery(Number(getLocalStorageItem("mastery", "0")));
      setHasInitiative(Boolean(getLocalStorageItem("initiative", "")));
    } else {
      openClearModal();
    }
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <>
        <div className="main">
          <div className="main_section">
            <Dial
              color="#B8344E"
              label="echo"
              value={echo}
              onIncrement={incrementEcho}
              onDecrement={decrementEcho}
            />
            <Dial
              color="#F5F5F5"
              label="mastery"
              value={mastery}
              onIncrement={incrementMastery}
              onDecrement={decrementMastery}
            />
          </div>
          <div className="main_section">
            <Initiative onClick={toggleInitiative} hasInitiative={hasInitiative} />
            <Turn turnNumber={turn} onClick={openEndTurnModal} />
          </div>
        </div>
        <div className="main-landscape">
          <Dial
            color="#B8344E"
            label="echo"
            value={echo}
            onIncrement={incrementEcho}
            onDecrement={decrementEcho}
          />
          <Initiative onClick={toggleInitiative} hasInitiative={hasInitiative} />
          <Turn turnNumber={turn} onClick={openEndTurnModal} />
          <Dial
            color="#F5F5F5"
            label="mastery"
            value={mastery}
            onIncrement={incrementMastery}
            onDecrement={decrementMastery}
          />
        </div>
        <Settings onClick={openClearModal} />
      </>}
      {isOpenEndTurnModal && <EndTurnModal onConfirm={endTurn} onCancel={closeEndTurnModal} />}
      {isOpenClearModal && <ClearModal onConfirm={clear} onCancel={hasSetup ? closeClearModal : undefined} />}
    </>
  );
}
