import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../../Firebase";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useUserContext } from "../../hooks/UserProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 0.25rem;
`;

function SignOut() {
  const { signOut } = useUserContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);
      signOut();
      console.log("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <StyledButton variant="danger" onClick={handleLogout}>
        Log Out
      </StyledButton>
  );
}

export default SignOut;
