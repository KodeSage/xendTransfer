import React, { useState, useEffect, useContext } from 'react'
import { Table } from "semantic-ui-react";

import { createBankContract } from "../utilis/bank";

import { DappContext } from '../contexts/DappContexts';


export default function ConfirmedCustormers ()
{
  const { currentAccount } = useContext( DappContext );
  const [ customers, setCustomers ] = useState( [] );

  const bank = createBankContract();

  useEffect( () =>
  {
    getCustomers();
    // getAcct();
  } );

  async function getCustomers ()
  {
    try
    {
      const customers = [];
      await currentAccount;
      const accountsCount = await bank
        .getCustomers()
        
      for ( let i = 1; i <= accountsCount; i++ )
      {
        const account = await bank.customers( i );
        if ( account.created )
        {
          customers.push( {
            key: i,
            userAcct: account.acctAddress,
            created: account.created,
            userAddress: account.userAddress,
            username: account.username,
          } );
        }
      }
      setCustomers( customers );
    } catch {

    }

  }
  // async function getAcct ()
  function renderCustomers ()
  {
    if ( customers.length === 0 )
    {
      return (
        <Table.Row>
          <Table.Cell>No User to Show</Table.Cell>
        </Table.Row>
      );
    }
    return (
      customers &&
      customers.map( ( cus, i ) => (
        <Table.Row key={ i }>
          <Table.Cell>{ ++i }</Table.Cell>
          <Table.Cell>{ cus.username }</Table.Cell>
          <Table.Cell>{ cus.userAddress }</Table.Cell>
          <Table.Cell>{ cus.userAcct }</Table.Cell>
        </Table.Row>
      ) )
    );
  }
  return (
    <Table color="blue" fixed singleLine selectable size="large">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S/N</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Account Address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{ renderCustomers() }</Table.Body>
    </Table>
  );

}
