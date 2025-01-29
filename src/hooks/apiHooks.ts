import {useState, useEffect} from 'react';
import {MediaItemWithOwner} from '../types';
import {fetchData} from '../lib/functions';
import {UserWithNoPassword} from '../types/DBtypes';
import {MediaItem} from '../types/DBtypes';


const useMedia = () => {
  const [mediaArray, setMediaArray] = useState<MediaItemWithOwner[]>([]);

   useEffect(() => {
    const getMedia = async () => {
      try {
        // kaikki mediat ilman omistajan tietoja
        const media = await fetchData<MediaItem[]>(
          import.meta.env.VITE_MEDIA_API + '/media',
        );
        // haetaan omistajat id:n perusteella
        const mediaWithOwner: MediaItemWithOwner[] = await Promise.all(
          media.map(async (item) => {
            const owner = await fetchData<UserWithNoPassword>(
              import.meta.env.VITE_AUTH_API + '/users/' + item.media_id,
            );

            const mediaItem: MediaItemWithOwner = {
              ...item,
              username: owner.username,
            };

            /* tän voi poistaa, koska sain bäkin korjattua, nyt sieltä tulee string[] eikä string, päivitä tyypit npm:llä
            if (
              mediaItem.screenshots &&
              typeof mediaItem.screenshots === 'string'
            ) {
              mediaItem.screenshots = JSON.parse(mediaItem.screenshots);
            }
            */

            return mediaItem;
          }),
        );

        console.log(mediaWithOwner);

        setMediaArray(mediaWithOwner);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getMedia();
  }, []);
  return {mediaArray};
  };

  const useUser=()=>{
    //Todo implement auth server
  };
  const useComments=()=>{
    //Todo implement media/comments resources API connectino
  };

  export {useMedia, useUser, useComments};
