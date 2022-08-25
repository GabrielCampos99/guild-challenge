import axios, { AxiosInstance } from 'axios';
import ApiFactory from '../../../shared/factories/ApiFactory';
import { IQuizzData } from '../interfaces/IQuizzData';

export class GetQuizzDataService {
    private api: AxiosInstance;

    constructor() {
        this.api = ApiFactory.create();
    }

    public async execute(): Promise<IQuizzData[] | false> {
        try {
            const res = await this.api.get(`api.php?amount=10&difficulty=hard&type=boolean`);
            return res.data.results;
        } catch (error: any) {
            if (axios.isCancel(error)) {
                return false;
            } else {
                console.error(`Error: ${error}`);
                return false;
            }
        }
    }
}
