import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
      <NewPostForm onCancel={cancelHandler} submitting={isSubmitting} />
    </>
  );
}

export default NewPostPage;

export const action = () => {};
