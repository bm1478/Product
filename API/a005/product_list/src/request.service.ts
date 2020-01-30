import request from 'request-promise';
import { APIsite } from '../../option';

export const requestService = async (q: string, page: number) => {
    const option = {
        uri: APIsite,
        qs: {
            q,
            page,
        },
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        },
    };
    const res = await request(option);
    return res;
};
