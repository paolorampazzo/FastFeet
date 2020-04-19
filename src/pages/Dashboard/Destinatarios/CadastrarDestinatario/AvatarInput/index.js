import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillPicture } from 'react-icons/ai';

import { sendAvatarId } from '../../../../../store/modules/courier/actions';
import api from '../../../../../services/api';

import { Container, Icon } from './styles';

export default function AvatarInput() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();

  const ref = useRef();
  const dispatch = useDispatch();

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
            <AiFillPicture color="#DDDDDD" size={50} />
            <span>Adicionar foto</span>
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
