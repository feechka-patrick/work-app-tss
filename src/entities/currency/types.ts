

export interface Currency {
    currency_id: string,
    currency_match_id: string,
    currency_name: string,
    currency_code: string,
    currency_type_name: string
}

export interface CurrencyCreate {
    currency_name: string,
    currency_code: string,
    currency_type: string,
    currency_exnode_id: number,
    currency_bestchange_id: number
    currency_bestchange_url: string
}