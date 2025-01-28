import {MediaItem} from '../types/DBtypes';
import MediaRow from '../components/MediaRow';
import {useEffect, useState} from 'react';
import SingleView from '../components/SignleView';
import { fetchData } from '../lib/functions';


const Home = () => {
  const [mediaArray, setMediaArray] = useState<MediaItem[]>([]);

  const [selectedItem, setSelectedItem] = useState<MediaItem | undefined>(
    undefined,
  );
  const getMedia = async () => {
    const json = await fetchData<MediaItem[]>('test.json');
    setMediaArray(json);
 };
  useEffect(() => {
    getMedia();
  }, []);


 console.log(mediaArray);

  return (
    <>
      {selectedItem && (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              item={item}
              key={item.media_id}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
