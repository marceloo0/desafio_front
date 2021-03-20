import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Header, RepositoryInfo, Repos } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  login: string;
  full_name: string;
  bio: string;
  public_repos: number;
  avatar_url: string;
  email: string;
}

interface Repositories {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`users/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`users/${params.repository}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, [params.repository]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.avatar_url}
              alt={repository.login}
            />
            <div>
              <strong>{repository.login}</strong>
              <p>{repository.bio}</p>
              <p>{repository.email}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.public_repos}</strong>
              <span>Qtd Repos</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Repos>
        {repositories.map(repository => (
          <a key={repository.id} href={repository.html_url}>
            <div>
              <h2>{repository.name}</h2>
              <p>{repository.description}</p>
              <h3>{repository.language}</h3>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repos>
    </Container>
  );
};

export default Dashboard;
