
export interface City {
    city_id: string,
    city_match_id: string,
    city_name: string,
    city_code: string,
    city_slug: string
}

export interface CityCreate {
    city_name: string,
    city_code: string,
    city_is_region: boolean
}

// ??
export interface CityPosted {
    city_id: string,
    city_name: string,
    city_code: string,
    city_statistic_hours_from: Date,
    city_statistic_hours_to: Date,
    city_is_region: boolean,
}

// ??
export type CityDeleted = Omit<CityPosted, 'city_id'> & {
    city_is_deleted: boolean
}