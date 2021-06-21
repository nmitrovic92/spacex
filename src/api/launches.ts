import { gql } from '@apollo/client';

export const GET_SPACE_X_LAUNCHES = gql`
  query GetLaunches($offset: Int, $missionName: String) {
    launches(limit: 10, offset: $offset, find: { mission_name: $missionName }) {
      id
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
`;

export const GET_SPACE_X_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      details
      mission_name
      rocket {
        rocket_type
        rocket_name
        rocket {
          success_rate_pct
          country
          description
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
`;
