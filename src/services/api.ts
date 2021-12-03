import axios from 'axios';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useApiImage = () => useSWRInfinite(i => `/api/image`, fetcher);
