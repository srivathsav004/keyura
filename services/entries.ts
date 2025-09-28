import { apiRequest } from './api';

export type StatsResponse = {
  total_entries: number;
  text_entries: number;
  file_entries: number;
};

export type TextEntry = {
  entryid: number;
  userid: number;
  contractid: number;
  entry_name: string;
  encrypted_data: string;
  transaction_hash?: string | null;
};

export type FileEntry = {
  entryid: number;
  userid: number;
  contractid: number;
  entry_name: string;
  original_filename: string;
  file_type: string;
  file_size: number;
  encrypted_cid: string;
  ipfs_cid?: string | null;
  transaction_hash?: string | null;
};

export async function getStats(userid: number) {
  return apiRequest<StatsResponse>(`/api/entries/stats/${userid}`);
}

export async function listEntries(userid: number, type?: 'text' | 'file') {
  const suffix = type ? `?type=${type}` : '';
  return apiRequest<(TextEntry | FileEntry)[]>(`/api/entries/${userid}${suffix}`);
}

export async function createTextEntry(payload: {
  userid: number;
  contractid: number;
  entry_name: string;
  encrypted_data: string;
  transaction_hash?: string;
}) {
  return apiRequest<TextEntry>(`/api/entries/text`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function createFileEntry(payload: {
  userid: number;
  contractid: number;
  entry_name: string;
  original_filename: string;
  file_type: string;
  file_size: number;
  encrypted_cid: string;
  ipfs_cid?: string;
  transaction_hash?: string;
}) {
  return apiRequest<FileEntry>(`/api/entries/file`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
