import { MediaItem } from './../types/DBtypes';
// src/components/MediaRow.tsx
const MediaRow = (props: {item: MediaItem}) => {
  const {item} = props;
  return (
    // TODO: move <tr> element  for each item property from Home.tsx here
    <tr>
    <td>
      <img src={item.thumbnail} alt={item.title} style={{ maxWidth: '100px' }} />
    </td>
    <td>{item.title}</td>
    <td>{item.description || 'No description available'}</td>
    <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
    <td>{item.filesize.toLocaleString()} bytes</td>
    <td>{item.media_type}</td>
  </tr>
);
};
export default MediaRow;
