import React from 'react'
import { redirect } from 'next/navigation';
import BogoLayout from '../components/BogoLayout';
import { BogoStoreResponse, BogoStores } from '@/app/types';

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const params = await searchParams
  const address: string = params.address

  //Redirect back to home if address is not set
  if (!address) {
    redirect("/");
  }

  const stores: BogoStores[] = await getBogoStores(params.address);

  return (
    <>
      <BogoLayout stores={stores} />
    </>
  );
}


async function getBogoStores(address: string) {
  //"http://54.90.201.128:8000/bogo-stores"
  const response = await fetch("http://54.90.201.128:8000/bogo-stores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address
    })
  })
  if (!response.ok) {
    const errorData = await response.json();
    errorData.status = response.status;
    throw new Error(JSON.stringify(errorData));
  }

  const json: BogoStoreResponse = await response.json()
  return json.bogoStores
}
