export interface LoanAppRequest {
    id?:   number;
    id_user?: number;
    id_book?: number;
    status?: string;
    date?: Date;
    update_date?: Date;
}