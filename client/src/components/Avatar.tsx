import React, { useRef } from "react";
// Utils
import { useAppDispatch } from "../store/hooks";
import { DeleteAvatar, UploadAvatar } from "../store/usersSlice/actions";
import config from "../config.json";

interface AvatarProps {
  currentUser: any;
}

const Avatar: React.FC<AvatarProps> = ({ currentUser }) => {
  const avatar = currentUser?.avatar
    ? `${config.avatarEndPoint}/${currentUser.avatar}`
    : "";
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const triggerInput = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    dispatch(UploadAvatar(file));
  };

  const handleDelete = () => {
    dispatch(DeleteAvatar());
  };

  return (
    <div className="change__avatar avatar">
      <img
        src={currentUser?.avatar ? avatar : currentUser.image}
        alt="avatar"
        className="avatar__image"
      />

      <input
        ref={inputRef}
        className="avatar__input"
        accept="image/*"
        onChange={(e) => changeHandler(e)}
        type="file"
        placeholder="Upload image"
      />
      <div className="avatar__btns">
        <button
          type="button"
          onClick={() => triggerInput()}
          className="avatar__btns-item"
        >
          Upload
        </button>
        {currentUser?.avatar && (
          <button
            type="button"
            onClick={handleDelete}
            className="avatar__btns-item delete"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Avatar;
