import { useState, useEffect } from "react";

function useVote({ categoryCount }) {
  const [votes, setVotes] = useState([]);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isVoteSuccess, setVoteSuccess] = useState(false);

  const confirmVote = () => {
    const currentVoteCount = votes.length;
    //CHECK IF A VOTE IS MISSING IN ONE OF THE CATEORY
    if (currentVoteCount < categoryCount) {
      return {
        isValid: false,
        message: "You Have to pick one nominee for each category",
      };
    } else if (votes.length === categoryCount) {
      //CHECK IF USER ALREADY VOTED
      const isVoted = checkUserVoteCompletion();
      if (isVoted) {
        let votedNames = getNomineeNames();
        return {
          isValid: false,
          message: `You already voted for: ${votedNames}`,
        };
        // IF NOT, SAVE AND SUBMIT VOTES
      } else {
        return {
          isValid: true,
          message: `"Thank You For Your Votes"`,
        };
      }
    } else {
    }
  };

  const checkUserVoteCompletion = () => {
    const rawStoredVote = window.localStorage.getItem("astra-votes");
    const storedVote = JSON.parse(rawStoredVote);
    if (storedVote) {
      return true;
    } else {
      return false;
    }
  };

  const getNomineeNames = () => {
    const rawStoredVote = window.localStorage.getItem("astra-votes");
    const storedVote = JSON.parse(rawStoredVote);
    const arrayedName = storedVote.map((item) => item.name);
    const strName = arrayedName.toString();
    return strName;
  };

  const addVote = (categoryID, nomineeID, name) => {
    if (votes.length >= 1) {
      const isVoteExist = votes.find((item) => item.categoryID === categoryID);
      if (isVoteExist) {
        const newVote = votes.map((item) =>
          item.categoryID === categoryID
            ? { ...item, nomineeID: nomineeID, name: name }
            : { ...item }
        );
        setVotes(newVote);
      } else {
        const newVote = {
          categoryID: categoryID,
          nomineeID: nomineeID,
          name: name,
        };
        setVotes((votes) => [...votes, newVote]);
      }
    } else {
      const newVote = {
        categoryID: categoryID,
        nomineeID: nomineeID,
        name: name,
      };
      console.log(newVote);
      setVotes((current) => [...current, newVote]);
    }
  };

  const onVote = (categoryID, nomineeID, name) => {
    addVote(categoryID, nomineeID, name);
  };

  const submitVote = () => {
    const { isValid, message } = confirmVote();
    if (isValid) {
      // SUBMIT VOTES IF VALID AND COMPLETE
      window.localStorage.setItem("astra-votes", JSON.stringify(votes));
      setVoteSuccess(true);
    } else {
      // TELL USER TO CHECK VOTES
    }
    setSubmitMessage(message);
  };

  const clearSubmitMessage = () => {
    setSubmitMessage("");
  };

  //   useEffect(() => {
  //     console.log(isVoteSuccess);
  //       return () => {
  //         setSubmitResult("");
  //       };
  //   }, [isVoteSuccess]);

  return {
    submitVote,
    onVote,
    submitMessage,
    clearSubmitMessage,
    isVoteSuccess,
  };
}

export default useVote;
