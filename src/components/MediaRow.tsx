// import { MediaItem } from '../types/DBtypes';
// interface MediaRowProps {
//   item: MediaItem;
//   onSelect: (item: MediaItem) => void; // Add the onSelect prop here
//   selectedItem: MediaItem | null;
//   setSelectedItem: (item: MediaItem | undefined) => void;
// }



// const MediaRow = (props: {
//   item: MediaItem;
//   setSelectedItem: (item: MediaItem | undefined) => void;
//   selectedItem: MediaItem | null;
// }) => {
//   const { item, setSelectedItem} = props;

//   // Handle row click to select an item
//   const handleClick = () => {
//     setSelectedItem(item); // Select this item
//   };

//   // Handle button click to select the item
//   const handleButtonClick = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent row click from being triggered when clicking the button
//     setSelectedItem(item); // Set selected item on button click
//   };

//   // Fallback for missing thumbnail
//   const thumbnail = item.thumbnail || 'path/to/fallback-image.jpg';

//   return (
//     <tr onClick={handleClick} style={{ cursor: 'pointer' }}>
//       <td>
//         <img src={thumbnail || undefined} alt={item.title} style={{ maxWidth: '100px' }} />
//       </td>
//       <td>{item.title}</td>
//       <td>{item.description || 'No description available'}</td>
//       <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
//       <td>{item.filesize.toLocaleString()} bytes</td>
//       <td>{item.media_type}</td>
//       <td>
//         {/* Button to select the media item */}
//         <button onClick={handleButtonClick}>View</button>
//       </td>
//     </tr>
//   );
// };

// export default MediaRow;
import {MediaItem} from '../types/DBtypes';
import {Link} from 'react-router';

type MediaItemProps = {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
};

const MediaRow = (props: MediaItemProps) => {
  const {item} = props;
  return (
    <tr>
      <td>
        <img src={item.thumbnail || undefined} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to="/single" state={{item}}>Show</Link>
      </td>
    </tr>
  );
};

export default MediaRow;
