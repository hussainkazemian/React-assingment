import { MediaItem } from '../types/DBtypes';

const SingleView = (props: {
  item: MediaItem | null;
  setSelectedItem: (item: MediaItem | null) => void;
}) => {
  const { item, setSelectedItem } = props;
    // Handle Close button click to hide the SingleView

  const handleClose = () => {
    setSelectedItem(null);
  };

  // Render media content based on media type
  const renderMediaContent = () => {
    if (!item) {
      return <p>No media item selected.</p>; // Handle null item scenario
    }

    if (item.media_type.startsWith('image')) {
      // Render image if media_type is an image
      return <img src={item.filename || 'fallback-image.jpg'} alt={item.title} style={imageStyle} />;
    }

    if (item.media_type.startsWith('video')) {
      // Render video if media_type is a video
      return (
        <video controls style={videoStyle}>
          <source src={item.filename} type={item.media_type} />
          Your browser does not support the video tag.
        </video>
      );
    }

    // Handle unsupported media types
    return <p>Sorry, this media type is not supported.</p>;
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={handleClose} style={closeButtonStyle}>
          Close
        </button>
        <h3>{item?.title || 'No title available'}</h3>
        <p>{item?.description || 'No description available'}</p>

        {/* Render media content based on type */}
        {renderMediaContent()}
      </div>
    </div>
  );
};

// Modal styling for a nice popup effect
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '800px', // Increased width for better media display
  width: '90%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  position: 'relative', // To position close button properly
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'contain', // Ensures the image fits nicely within its container
  marginTop: '20px',
};

const videoStyle: React.CSSProperties = {
  width: '100%',
  maxHeight: '400px',
  marginTop: '20px',
};

export default SingleView;
