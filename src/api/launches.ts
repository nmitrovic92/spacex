import { gql } from '@apollo/client';

export const SPACE_X_LAUNCHES = gql`
  query GetLaunches {
    {
      launches(limit: 10) {
        details
        mission_name
        rocket {
          rocket_type
          rocket_name
          rocket {
            success_rate_pct
            country
          }
        }
        links {
          flickr_images
          mission_patch
          video_link
          article_link
        }
        launch_site {
          site_name
          site_name_long
        }
        launch_year
        launch_success
        launch_date_utc
      }
    }    
  }
`;
