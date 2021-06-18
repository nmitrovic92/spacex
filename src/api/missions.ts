import { gql } from '@apollo/client';

export const SPACE_X_MISSIONS = gql`
  query GetMissions {
    missions(limit: 1) {
      manufacturers
      name
      twitter
      website
      wikipedia
      payloads {
        id
        orbit
        orbit_params {
          apoapsis_km
          epoch
          lifespan_years
          period_min
        }
      }
    }
  }
`;
