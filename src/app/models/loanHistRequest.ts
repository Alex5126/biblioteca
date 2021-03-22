export interface LoanHistRequest {
    id?:   number;
    id_user?: number;
    id_book?: number;
    status?: string;
    loan_date?: Date;
    update_date?: Date;

}