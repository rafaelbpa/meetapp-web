import React, { useState, useEffect } from 'react';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import api from '~/services/api';

import { Container, MeetupList } from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            `dd 'de' MMMM 'às' HH'h'`,
            { locale: pt }
          ),
        };
      });

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <span>Meus meetups</span>
        <Link to="/new">
          <button className="new_btn" type="button">
            <div className="div_with_btn">
              <MdAddCircleOutline size={20} color="#fff" />
              <span>Novo meetup</span>
            </div>
          </button>
        </Link>
      </header>

      <ul>
        {loading ? (
          <div className="loading">
            <Loader type="TailSpin" color="#f94d6a" width={32} height={32} />
          </div>
        ) : (
          meetups.map(meetup => (
            <Link key={meetup.id} to={`details/${meetup.id}`}>
              <MeetupList key={meetup.id}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.formattedDate}</span>
                  <MdChevronRight color="#fff" size={24} />
                </div>
              </MeetupList>
            </Link>
          ))
        )}
      </ul>
    </Container>
  );
}
