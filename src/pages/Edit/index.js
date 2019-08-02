import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';

import * as Yup from 'yup';

import { MdEdit } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DatePicker from '../../components/DatePicker';

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

export default function Edit({ match }) {
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState({});

  const { id } = match.params;
  useEffect(() => {
    async function loadMeetup(meetup_id) {
      try {
        const response = await api.get(`meetups/${meetup_id}`);

        setMeetup({
          ...response.data,
          date: parseISO(response.data.date),
          avatar: response.data.File,
        });
      } catch (err) {
        toast.error('Meetup não encontrado');
        history.push('/');
      }
    }
    loadMeetup(id);
    // eslint-disable-next-line
  }, [id]);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      const response = await api.put(`meetups/${id}`, data);

      toast.success('Meetup atualizado com sucesso!');
      setLoading(false);

      history.push(`/meetups/${response.data.id}`);
    } catch (error) {
      toast.error('Erro ao atualizar meetup, tente novamente.');
      setLoading(false);
    }
  }
  if (!meetup.title) return null;
  console.tron.error(meetup);
  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <div className="div_with_btn">
          <button className="edit_btn" type="submit" disabled={loading}>
            <div>
              <MdEdit size={20} color="#fff" />
              <span>Editar meetup</span>
            </div>
          </button>
        </div>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
