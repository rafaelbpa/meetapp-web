import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import * as Yup from 'yup';

import { MdAddCircleOutline, MdEdit } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from './BannerInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number()
    .required('O banner é obrigatório')
    .transform(value => (!value ? undefined : value)),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date: Yup.date().required('Data obrigatória'),
  location: Yup.string().required('Localização é obrigatória'),
});

export default function Meetup() {
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup(id) {
      const response = await api.get(`meetups/${id}`);

      setMeetup({
        ...response.data,
        formattedDate: format(
          parseISO(response.data.date),
          `dd 'de' MMMM 'às' HH'h'`,
          { locale: pt }
        ),
        avatar: `http://localhost:3333/files/${response.data.File.path}`,
      });
    }

    loadMeetup(4);
  }, [meetup]);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const response = await api.post('meetups', data);

      toast.success('Meetup criado com sucesso!');
      setLoading(false);

      history.push(`/meetups/${response.data.id}`);
    } catch (error) {
      toast.error('Erro ao criar meetup, tente novamente.');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="avatar_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <div>
          {true ? (
            <button type="submit" disabled={loading}>
              <div>
                <MdAddCircleOutline size={20} color="#fff" />
                <span>Salvar meetup</span>
              </div>
            </button>
          ) : (
            <button type="submit" disabled={loading}>
              <div>
                <MdEdit size={20} color="#fff" />
                <span>Editar meetup</span>
              </div>
            </button>
          )}
        </div>
      </Form>
    </Container>
  );
}
