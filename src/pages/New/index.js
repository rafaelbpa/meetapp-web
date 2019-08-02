import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

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

export default function New() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const newData = {
        ...data,
        date: format(data.date, "yyyy-MM-dd'T'HH:mm"),
      };
      const response = await api.post('meetups', newData);

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
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <div className="div_with_btn">
          <button className="save_btn" type="submit" disabled={loading}>
            <div>
              <MdAddCircleOutline size={20} color="#fff" />
              <span>Salvar meetup</span>
            </div>
          </button>
        </div>
      </Form>
    </Container>
  );
}
