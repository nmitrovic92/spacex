import { LaunchType } from '../types/LaunchType';

export const useLaunchImage = (launch: LaunchType) => {
  const launchImages = launch?.links.flickr_images;
  const { length: launchImagesCount } = launchImages;
  const [firstLaunchImage] = launchImages;

  return { launchImagesCount, firstLaunchImage };
};
