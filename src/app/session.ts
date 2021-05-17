export interface state
{
  state_id:number,
  state_name:string
}
export interface stateDetails
{
  states:state[],
  ttl:any
}

export interface district
{
  district_id:number,
  district_name:string
}
export interface districtDetails
{
  districts:district[],
  ttl:any
}


export interface session
{
    center_id: number,
      name: string,
      name_l: string,
      address: string,
      address_l: string,
      state_name: string,
      state_name_l: string,
      district_name: string,
      district_name_l:string,
      block_name: string,
      block_name_l:string,
      pincode: string,
      lat:number,
      long: number,
      from: string,
      to: string,
      fee_type: string,
      fee: number,
      session_id: string,
      date: string,
      available_capacity:number,
      available_capacity_dose1:number,
      available_capacity_dose2:number,
      min_age_limit:number,
      vaccine: string,
      slots: [
        string,
        string
      ]
    
    
}
export interface sessionDetails
{
  centers:session[],
  ttl:any
}