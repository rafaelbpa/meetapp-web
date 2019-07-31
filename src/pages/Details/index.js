import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';
import history from '~/services/history';

import { Container, MeetupDetails } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);

      setMeetup({
        ...response.data,
        formattedDate: format(
          parseISO(response.data.date),
          `dd 'de' MMMM 'às' HH'h'`,
          { locale: pt }
        ),
        banner: `http://localhost:3333/files/${response.data.File.path}`,
      });
    }

    loadMeetup();
  }, [id]);

  async function deleteMeetup(meetup_id) {
    await api.delete(`meetups/${meetup_id}`);
    history.push('/');
  }

  return (
    <Container>
      <head>
        <strong>{meetup.title}</strong>
        <div>
          <Link to="/new">
            <button className="edit" type="button">
              <div>
                <MdEdit color="#fff" size={20} />
                <span>Editar</span>
              </div>
            </button>
          </Link>
          <button
            className="cancel"
            type="button"
            onClick={() => deleteMeetup(meetup.id)}
          >
            <div>
              <MdDeleteForever color="#fff" size={20} />
              <span>Cancelar</span>
            </div>
          </button>
        </div>
      </head>

      <img src={meetup.banner} alt="Banner" />
      <p>{meetup.description}</p>
      <MeetupDetails>
        <div>
          <MdEvent size={20} color="#fff" />
          <span className="date">{meetup.formattedDate}</span>
        </div>
        <div>
          <MdPlace size={20} color="#fff" />
          <span className="address">{meetup.location}</span>
        </div>
      </MeetupDetails>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
