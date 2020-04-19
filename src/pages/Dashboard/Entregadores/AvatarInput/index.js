import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPicture } from 'react-icons/ai';

import { sendAvatarId } from '../../../../store/modules/courier/actions';
import api from '../../../../services/api';

import { Container, Icon, Avatar } from './styles';

export default function AvatarInput({ edit, settings }) {
  const [file, setFile] = useState(null);
  const avatar_url = useSelector((state) => state.courier.avatar_url);
  const [preview, setPreview] = useState(avatar_url);

  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (avatar_url) setPreview(avatar_url);

    console.tron.log(settings);
  }, [avatar_url, settings]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    dispatch(sendAvatarId(id));
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {!preview && (
          <Icon>
            {!edit ? (
              <>
                <AiFillPicture color="#DDDDDD" size={50} />
                <span>Adicionar foto</span>
              </>
            ) : (
              settings.initials && (
                <>
                  <Avatar color={settings.color}>
                    {settings.initials
                      .reduce((total, value) => total + value, '')
                      .substring(0, 2)}
                  </Avatar>
                </>
              )
            )}
          </Icon>
        )}
        {preview && <img src={preview} alt="" />}

        <input
          type="file"
          name=""
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
