export interface LoanHistory {
    id?:   number;
    id_user?: number;
    id_book?: number;
    status?: string;
    loan_date?: Date;
    update_date?: Date;
    user?: string;
    book?: string;
}