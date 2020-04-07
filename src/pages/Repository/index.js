/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssueList,
  FormControl,
  FormLabel,
  RadioGroup,
  Pagination,
} from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    status: 'all',
    repositoryError: false,
    page: 1,
    pages: 30,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const { status, page, pages } = this.state;

    try {
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: status,
            page,
            per_page: pages,
          },
        }),
      ]);

      this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false, repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
    // faz as chamadas a api 2x e retorna um array
  }

  handleChangePage = async (acao) => {
    const { page, status } = this.state;

    await this.setState({ page: acao === 'nextPage' ? page + 1 : page - 1 });

    this.handleChange(status);
  };

  handleChange = async (filtro) => {
    this.setState({ loading: true });

    const { repository, pages, page } = this.state;

    try {
      const issues = await api.get(
        `/repos/${repository.full_name}/issues?state=${filtro}`,
        {
          params: {
            per_page: pages,
            page,
          },
        }
      );

      this.setState({ issues: issues.data, status: filtro });
    } catch (error) {
      this.setState({ loading: false, repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repository,
      issues,
      loading,
      status,
      repositoryError,
      page,
    } = this.state;

    if (loading) {
      return <Loading>Carregando..</Loading>;
    }
    if (repositoryError) {
      return <Loading>Erro ao carregar repositório..</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositorios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <FormControl component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup>
            <input
              type="radio"
              name="status"
              checked={status === 'all'}
              value="all"
              onChange={() => this.handleChange('all')}
            />
            Todos
            <input
              type="radio"
              name="status"
              checked={status === 'open'}
              value="open"
              onChange={() => this.handleChange('open')}
            />
            Abertos
            <input
              type="radio"
              name="status"
              checked={status === 'closed'}
              value="closed"
              onChange={() => this.handleChange('closed')}
            />
            Fechados
          </RadioGroup>
        </FormControl>
        <IssueList>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>
                      {label.name} - {issue.state}
                    </span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Pagination>
          {page > 1 ? (
            <button
              type="button"
              value={page}
              id="prevPage"
              onClick={() => this.handleChangePage('prevPage')}
            >
              anterior {page - 1}
            </button>
          ) : (
            <span>anterior</span>
          )}
          <span>{page}</span>
          <button
            type="button"
            value={page}
            id="nextPage"
            onClick={() => this.handleChangePage('nextPage')}
          >
            próxima {page + 1}
          </button>
        </Pagination>
      </Container>
    );
  }
}
