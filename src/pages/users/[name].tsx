import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function UserPage() {
  const router = useRouter();
  const { data: user, error } = useSWR('https://api.github.com/users/', fetcher);
  return <></>;
}
