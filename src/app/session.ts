

//  STATE MODEL

export interface state {
  state_id: number,
  state_name: string
}
export interface stateDetails {
  states: state[],
  ttl?: any
}


//  DISTRICT MODEL 

export interface district {
  district_id: number,
  district_name: string
}
export interface districtDetails {
  districts: district[],
  ttl?: any
}


// CENTER MODEL

export interface centerDetails {
  centers: center[],
  ttl?: any
}

export interface center {
  center_id: number,
  name: string,
  name_l?: string,
  address: string,
  address_l?: string,
  state_name: string,
  state_name_l?: string,
  district_name: string,
  district_name_l?: string,
  block_name: string,
  block_name_l?: string,
  pincode: string,
  lat: number,
  long: number,
  from: string,
  to: string,
  fee_type: string,
  fee: number,
  sessions: sessionDetails[],
}

export interface sessionDetails {
  session_id: string,
  date: string,
  available_capacity: number,
  available_capacity_dose1: number,
  available_capacity_dose2: number,
  min_age_limit: number,
  vaccine: string,
  slots: slotDetails[]
}


export interface slotDetails {
  slots: [
    string,
    string,
    string,
    string
  ]
}

