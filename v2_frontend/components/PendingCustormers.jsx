import React, { useState, useEffect, useContext } from 'react'
import { Table, Button } from "semantic-ui-react";
import { ethers } from "ethers";
import { createBankContract } from "../utilis/bank";

import { DappContext } from '../contexts/DappContexts';

export default function PendingCustormers ()
{
  const [ pendingCustomers, SetPendingCustomers ] = useState( [] );
 
  const [ loading, setLoading ] = useState( false );
  const [ error, setError ] = useState( false );
  const bank = createBankContract();
  const { currentAccount } = useContext( DappContext );

  useEffect( () =>
  {
    getAcct();

  }, [] );

  async function getAcct ()
  {
    try
    {
      
      const pendingCustomers = [];
      await currentAccount;
      const accountsCount = await bank.getCustomers()
      
      for ( let i = 1; i <= accountsCount; i++ )
      {
        const customer = await bank
          .customers( i )
        if ( !customer.created )
        {
          pendingCustomers.push( {
            key: i,
            created: customer.created,
            userAcct: customer.acctAddress,
            userAddress: customer.userAddress,
            username: customer.username,
          } );
        }
      }
      SetPendingCustomers( pendingCustomers );
    } catch ( error )
    {
      error.message;
    }
  }

  async function createWallet ( userAddress )
  {
    try
    {
      await bank.createAccount( userAddress )
    } catch { }
  }

  function renderPendingCustomers ()
  {
    if ( pendingCustomers.length === 0 )
    {
      return (
        <Table.Row>
          <Table.Cell>No User to Create Wallet For</Table.Cell>
        </Table.Row>
      );
    }
    return (
      pendingCustomers &&
      pendingCustomers.map( ( cus, i ) =>
      {
        let s = i;
        return (
          <Table.Row key={ i }>
            <Table.Cell>{ ++s }</Table.Cell>
            <Table.Cell>{ cus.username }</Table.Cell>
            <Table.Cell>{ cus.userAddress }</Table.Cell>
            <Table.Cell>
              <Button
                onClick={ () =>
                  createWallet( cus.userAddress )
                }
                color="purple">
                Create Wallet
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      } )
    );
  }


  return (
    <>
      <Table>
        <Table.Header>
          <h2>PendingCutomersTable</h2>
          <Table.Row>
            <Table.HeaderCell>S/N</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{ renderPendingCustomers() }</Table.Body>
      </Table>
      
    </>
   
  );
}
