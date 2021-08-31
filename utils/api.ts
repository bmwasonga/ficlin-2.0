import { gql } from '@apollo/client';

export const GET_USER_DATA = gql`
  query getUserData($id: uuid!) {
    users_by_pk(id: $id) {
      display_name
      id
      avatar_url
      account {
        email
      }
    }
  }
`;

export const ADD_COMPANY_ID = gql`
  mutation addCompanyId($id: uuid!, $company_id: uuid) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { company_id: $company_id }) {
      id
      company_id
    }
  }
`;

export const ADD_COMPANY_DETAILS = gql`
  mutation addCompanyDEtails(
    $created_by: uuid!
    $company_email: String
    $company_name: String
    $company_id: uuid!
  ) {
    insert_travel_companies_one(
      object: {
        company_email: $company_email
        company_name: $company_name
        company_id: $company_id
        created_by: $created_by
      }
    ) {
      company_email
      company_id
      company_name
    }
  }
`;

export const ADD_TOUR_DETAILS = gql`
  mutation MyMutation2(
    $tour_title: String!
    $tour_description: String!
    $tour_destination: String!
    $start_date: String!
    $end_date: String!
    $no_of_days: Number!
    $no_of_nights: Number
    $allow_children: Boolean!
    $child_cost: Number!
    $adult_cost: Number!
    $reservation_cost: String!
    $company_id: uuid
    $seats_available: Number
    $fully_booked: Boolean!
  ) {
    insert_tours_published_one(
      object: {
        tour_title: $tour_title
        tour_description: $tour_description
        tour_destination: $tour_destination
        start_date: $tour_destination
        end_date: $end_date
        no_of_days: $no_of_days
        no_of_nights: $no_of_nights
        allow_children: $allow_children
        child_cost: $child_cost
        adult_cost: $adult_cost
        reservation_cost: $reservation_cost
        company_id: $company_id
        seats_available: $seats_available
        fully_booked: $fully_booked
      }
    ) {
      id
    }
  }
`;

export const VIEW_USERS = gql`
  query getUsers {
    users {
      avatar_url
      company_id
      created_at
      display_name
      id
      account {
        active
        email
      }
    }
  }
`;

export const VIEW_TRIPS = gql`
  query getTrips {
    tours_published {
      adult_cost
      allow_children
      child_cost
      company_id
      created_at
      end_date
      fully_booked
      id
      no_of_days
      no_of_nights
      reservation_cost
      seats_available
      start_date
      tour_description
      tour_destination
      tour_title
      travel_company {
        company_name
        created_at
      }
    }
  }
`;
