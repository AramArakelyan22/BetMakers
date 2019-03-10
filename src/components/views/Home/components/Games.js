import React, { Fragment } from 'react';
import styled from 'styled-components';

import Spinner from '../../../common/Spinner';

const Table = styled.table`
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
`;

const Th = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  font-weight: 800
`;

const Tr = styled.tr`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
`;

export const Games = ({games, fetchingGames}) => {
  return (
    <Fragment>
      { fetchingGames ?
        <Spinner/>
        : null
      }
      {games && games.length !== 0 ?
        <Table>
          <thead>
          <tr>
            <Th>Game Id</Th>
            <Th>Game Name</Th>
            <Th>Game Country</Th>
            <Th>Game Status</Th>
            <Th>Game Provider Name</Th>
          </tr>
          </thead>
          <tbody>
          {games && games.length !== 0 && games.map(game => (
            <Tr key={game.id}>
              <Td>{game.id}</Td>
              <Td>{game.game_name}</Td>
              <Td>{game.game_ip_country}</Td>
              <Td>{game.game_status_id}</Td>
              <Td>{game.game_provider_name}</Td>
            </Tr>
          ))}
          </tbody>
        </Table>: null
      }
    </Fragment>
  )
}