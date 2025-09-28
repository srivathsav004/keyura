import { apiRequest } from './api';

export type Contract = {
  contractid: number;
  userid: number;
  contract_address: string;
};

export async function getUserContract(userid: number) {
  // Returns Contract or null
  return apiRequest<Contract | null>(`/api/contracts/${userid}`);
}

export async function createContract(userid: number, contract_address: string) {
  return apiRequest<Contract>(`/api/contracts/`, {
    method: 'POST',
    body: JSON.stringify({ userid, contract_address }),
  });
}
