import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { useParams, Link } from 'react-router-dom';

import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import api from '../../../../services/api';

import Header from '../../../../components/Header';

import timeToast from '../../../../config/timeToast';

import Select from '../../../../components/Select';
import history from '../../../../services/history';

import {
  Content,
  Wrapper,
  Title,
  Save,
  Inputs,
  Text,
  FormWrapper,
  GoBack,
} from './styles';

export default function CadastrarEncomendas() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [defaultEstado, setDefaultEstado] = useState(''); // If changes, crashes materialize
  const [allow, setAllow] = useState(true); // Nao quis usar redux neste form, com isso precisei disso para nao cadastrar multiplos

  const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  useEffect(() => {
    async function checkRecipient() {
      try {
        const request = `recipients/${id}`;
        const response = await api.get(request);

        setName(response.data.name);
        setRua(response.data.rua);
        setNumero(response.data.numero);
        setComplemento(response.data.complemento);
        setEstado(response.data.estado);
        setDefaultEstado(response.data.estado);
        setCidade(response.data.cidade);
        setCep(response.data.cep);
      } catch (err) {
        toast.error('O usuario nao existe!');
        setTimeout(() => history.push('/couriers'), timeToast);
      }
    }

    checkRecipient();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      rua,
      numero,
      complemento,
      cidade,
      estado,
      cep,
    };

    if (allow) {
      setAllow(false);
      const response = await api.put(`recipients/${id}`, data);

      if (response.status !== 200) {
        toast.error('Erro');
        setAllow(true);
      } else {
        toast.success('Destinatário editado com sucesso');
        setTimeout(() => history.push('/recipients'), timeToast);
      }
    }
    return 0;
  }

  function handleStateChange(value) {
    setEstado(value);
  }

  return (
    <Wrapper>
      <Header destinatarios />

      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <header>
            <Title>Cadastro de destinatários</Title>

            <section className="buttons">
              <Link to="/recipients">
                <GoBack>
                  <MdNavigateBefore size={20} color="#FFFFFF" />
                  <Text>VOLTAR</Text>
                </GoBack>
              </Link>
              <Save type="submit">
                <MdCheck size={20} color="#FFFFFF" />
                <Text>SALVAR</Text>
              </Save>
            </section>
          </header>
          <FormWrapper>
            <section className="first-line">
              <span>Nome</span>
              <Inputs
                name="name"
                type="text"
                placeholder="Ludwig van Beethoven"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section className="second-line">
              <section className="rua">
                <span>Rua</span>
                <Inputs
                  name="rua"
                  type="text"
                  placeholder="Rua Beethoven"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </section>
              <section className="numero">
                <span>Número</span>
                <Inputs
                  name="numero"
                  type="text"
                  placeholder="1729"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </section>
              <section className="complemento">
                <span>Complemento</span>
                <Inputs
                  name="complemento"
                  type="text"
                  placeholder=""
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </section>
            </section>
            <section className="third-line">
              <section className="cidade">
                <span>Cidade</span>
                <Inputs
                  name="cidade"
                  type="text"
                  placeholder="Diadema"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </section>
              <section className="estado">
                <span>Estado</span>

                <Select
                  width="100%"
                  placeholder=""
                  label={defaultEstado}
                  data={estados}
                  height={48.5} // Difference sizing for material ui
                  inputValue={estado}
                  onChange={(event, value) => handleStateChange(value)}
                />
              </section>
              <section className="cep">
                <span>CEP</span>
                <InputMask
                  mask="99999-999"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                >
                  {() => (
                    <Inputs name="ceps" type="text" placeholder="09960-580" />
                  )}
                </InputMask>
              </section>
            </section>
          </FormWrapper>
        </form>
      </Content>
    </Wrapper>
  );
}
